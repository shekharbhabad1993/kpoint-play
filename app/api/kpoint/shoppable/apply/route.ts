import { NextRequest, NextResponse } from "next/server";
import {
  validateTemplateId,
  generateEmbedCodeFromTemplate,
  applyTemplateToSingleVideo,
  ApplyTemplateResult,
} from "@/lib/kpoint/shoppable";
import { listVideos } from "@/lib/kpoint/videos";
import { config } from "@/lib/config";
import {
  addMockShoppableTemplate,
  simulateDelay,
} from "@/lib/kpoint/mock-data";

interface ApplyShoppableTemplateRequest {
  video_ids: string[];
  template_html: string;
  package_id: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ApplyShoppableTemplateRequest;
    const { video_ids, template_html, package_id } = body;

    // Validate inputs
    if (!video_ids || !Array.isArray(video_ids) || video_ids.length === 0) {
      return NextResponse.json(
        { error: "video_ids array is required and must not be empty" },
        { status: 400 }
      );
    }

    // Basic validation
    if (!package_id || package_id.trim() === "") {
      return NextResponse.json(
        { error: "Invalid package_id" },
        { status: 400 }
      );
    }

    const templateValidation = validateTemplateId(package_id);
    if (!templateValidation.valid) {
      return NextResponse.json(
        { error: templateValidation.error },
        { status: 400 }
      );
    }

    // Fetch all videos to have full video objects
    const videoListResponse = await listVideos();
    const videos = videoListResponse.videos;

    // Process in mock mode or real mode
    if (config.kpoint.mockMode) {
      console.log("🎭 Mock mode: Applying shoppable templates to videos");
      await simulateDelay(500); // Simulate processing time

      const results: ApplyTemplateResult[] = [];

      for (const videoId of video_ids) {
        // Find video
        const video = videos.find((v) => v.id === videoId);
        if (!video) {
          results.push({
            video_id: videoId,
            success: false,
            error: "Video not found",
          });
          continue;
        }

        // Generate embed code
        const embedCode = generateEmbedCodeFromTemplate(package_id, video);

        // Store in mock storage
        addMockShoppableTemplate(videoId, package_id, embedCode);

        results.push({
          video_id: videoId,
          success: true,
        });

        // Simulate delay between videos
        await simulateDelay(200);
      }

      const successful = results.filter((r) => r.success).length;
      const failed = results.filter((r) => !r.success).length;

      return NextResponse.json({
        results,
        summary: {
          total: results.length,
          successful,
          failed,
        },
      });
    }

    // Real API mode: process each video sequentially
    const results: ApplyTemplateResult[] = [];

    for (const videoId of video_ids) {
      try {
        // Find video
        const video = videos.find((v) => v.id === videoId);
        if (!video) {
          results.push({
            video_id: videoId,
            success: false,
            error: "Video not found",
          });
          continue;
        }

        // Generate embed code
        const embedCode = generateEmbedCodeFromTemplate(package_id, video);

        // Apply to video via KPOINT API
        await applyTemplateToSingleVideo(videoId, package_id, video);

        results.push({
          video_id: videoId,
          success: true,
        });

        // Add delay to avoid rate limiting
        await new Promise((resolve) => setTimeout(resolve, 200));
      } catch (error: any) {
        console.error(`Failed to apply template to video ${videoId}:`, error);
        results.push({
          video_id: videoId,
          success: false,
          error: error?.message || "Unknown error occurred",
        });
      }
    }

    const successful = results.filter((r) => r.success).length;
    const failed = results.filter((r) => !r.success).length;

    return NextResponse.json({
      results,
      summary: {
        total: results.length,
        successful,
        failed,
      },
    });
  } catch (error: any) {
    console.error("Error in apply shoppable template API:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
