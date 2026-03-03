import { NextRequest, NextResponse } from "next/server";
import { getVideo } from "@/lib/kpoint/videos";
import { config } from "@/lib/config";
import {
  getMockShoppableTemplates,
  simulateDelay,
  getMockVideoById,
} from "@/lib/kpoint/mock-data";

interface TemplateInfo {
  template_id: string;
  template_name: string;
  applied_at: string;
  state: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: { videoId: string } }
) {
  try {
    const videoId = params.videoId;

    if (!videoId) {
      return NextResponse.json(
        { error: "videoId is required" },
        { status: 400 }
      );
    }

    // Fetch video from REAL KPOINT API (always fresh - no caching)
    console.log(`🌐 Fetching video ${videoId} from real KPOINT API...`);
    const video = await getVideo(videoId);
    console.log(`📋 Fetched video response for ${videoId}`);

    if (config.kpoint.mockMode) {
      console.log(`🎭 Mock mode: Listing templates for video ${videoId}`);
      await simulateDelay(300);

      // Get mock templates for this video
      const mockTemplates = getMockShoppableTemplates();
      const videoTemplates = mockTemplates
        .filter((t) => t.videoId === videoId)
        .map((t) => ({
          template_id: t.packageId, // packageId is template_id in this context
          template_name: getTemplateName(t.packageId),
          applied_at: t.appliedAt,
          state: t.state,
        }));

      return NextResponse.json({
        video_id: videoId,
        video_title: video.title,
        templates: videoTemplates,
      });
    }

    // Real API mode: extract interactivity_packages from properties key
    const templates: TemplateInfo[] = [];

    // Check if interactivity_packages exists in properties as a JSON string
    const packagesJson = (video as any).properties?.interactivity_packages;

    if (packagesJson) {
      try {
        console.log(`📦 Parsing interactivity_packages from properties...`);
        const packages = JSON.parse(packagesJson);

        if (Array.isArray(packages)) {
          for (const pkg of packages) {
            templates.push({
              template_id: pkg.id,
              template_name: pkg.displayname || pkg.name || pkg.id,
              applied_at: pkg.time_last_published || pkg.time_created || new Date().toISOString(),
              state: pkg.state || "PUBLISHED",
            });
          }
          console.log(`✅ Found ${templates.length} templates in interactivity_packages`);
        }
      } catch (err) {
        console.error(`❌ Failed to parse interactivity_packages for video ${videoId}:`, err);
      }
    } else {
      console.log(`ℹ️ No interactivity_packages found in properties for video ${videoId}`);
    }

    return NextResponse.json({
      video_id: videoId,
      video_title: video.title,
      templates,
    });
  } catch (error: any) {
    console.error("Error in list templates API:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}

function getTemplateName(templateId: string): string {
  // Map template IDs to display names
  // Note: Different videos may have different package IDs for the same template type
  const nameMap: Record<string, string> = {
    "52yovfxjvcdm": "Greetings", // Diwali video greetings package
    "52iayhhljerh": "Greetings", // Holi video greetings package
  };
  return nameMap[templateId] || templateId;
}
