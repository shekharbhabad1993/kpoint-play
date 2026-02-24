import { NextRequest, NextResponse } from "next/server";
import { listVideos, KPointVideo } from "@/lib/kpoint/videos";
import { config } from "@/lib/config";
import {
  getMockShoppableTemplates,
  simulateDelay,
} from "@/lib/kpoint/mock-data";

interface ShoppableVideoInfo extends KPointVideo {
  shoppable_template?: {
    package_id: string;
    applied_at: string;
    embed_code_preview: string;
    state: string;
  };
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const packageIdFilter = searchParams.get("package_id");

    // Fetch all videos
    const videoListResponse = await listVideos();
    const videos = videoListResponse.videos;

    if (config.kpoint.mockMode) {
      console.log("🎭 Mock mode: Listing shoppable templates");
      await simulateDelay(300);

      // Get mock shoppable templates
      const mockTemplates = getMockShoppableTemplates(
        packageIdFilter || undefined
      );

      // Enrich videos with template info
      const videosWithTemplates: ShoppableVideoInfo[] = [];

      for (const template of mockTemplates) {
        const video = videos.find((v) => v.id === template.videoId);
        if (!video) continue;

        // Decode embed code to show preview (first 100 chars)
        let embedCodePreview = template.embedCode.substring(0, 100) + "...";
        try {
          const decoded = Buffer.from(template.embedCode, "base64").toString(
            "utf-8"
          );
          embedCodePreview = decoded.substring(0, 150) + "...";
        } catch {
          // Keep base64 preview if decode fails
        }

        videosWithTemplates.push({
          ...video,
          shoppable_template: {
            package_id: template.packageId,
            applied_at: template.appliedAt,
            embed_code_preview: embedCodePreview,
            state: template.state,
          },
        });
      }

      return NextResponse.json({
        videos: videosWithTemplates,
        total: videosWithTemplates.length,
      });
    }

    // Real API mode: filter videos that have interactivity_packages matching the criteria
    const videosWithTemplates: ShoppableVideoInfo[] = [];

    for (const video of videos) {
      if (!video.interactivity_packages || video.interactivity_packages.length === 0) {
        continue;
      }

      // Find matching package
      const matchingPackage = video.interactivity_packages.find((pkg) =>
        packageIdFilter ? pkg.id === packageIdFilter : true
      );

      if (matchingPackage) {
        videosWithTemplates.push({
          ...video,
          shoppable_template: {
            package_id: matchingPackage.id,
            applied_at:
              (matchingPackage as any).time_last_published ||
              (matchingPackage as any).time_created ||
              new Date().toISOString(),
            embed_code_preview: "[Embed code from KPOINT API]",
            state: (matchingPackage as any).state || "PUBLISHED",
          },
        });
      }
    }

    return NextResponse.json({
      videos: videosWithTemplates,
      total: videosWithTemplates.length,
    });
  } catch (error: any) {
    console.error("Error in list shoppable templates API:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
