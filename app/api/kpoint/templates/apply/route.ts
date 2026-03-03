import { NextRequest, NextResponse } from "next/server";
import {
  validateTemplateId,
  generateEmbedCodeFromTemplate,
  applyTemplateToVideo,
} from "@/lib/kpoint/shoppable";
import { getVideo } from "@/lib/kpoint/videos";
import { config } from "@/lib/config";
import {
  addMockShoppableTemplate,
  simulateDelay,
  getMockVideoById,
} from "@/lib/kpoint/mock-data";

interface ApplyTemplateRequest {
  video_id: string;
  template_id: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ApplyTemplateRequest;
    const { video_id, template_id } = body;

    // Validate inputs
    if (!video_id) {
      return NextResponse.json(
        { error: "video_id is required" },
        { status: 400 }
      );
    }

    const templateValidation = validateTemplateId(template_id);
    if (!templateValidation.valid) {
      return NextResponse.json(
        { error: templateValidation.error },
        { status: 400 }
      );
    }

    // Fetch video to get full video object
    // Try mock data first, then fall back to real API
    let video;
    const mockVideo = getMockVideoById(video_id);
    if (mockVideo) {
      console.log(`📦 Using mock video data for ${video_id}`);
      video = mockVideo;
    } else {
      console.log(`🌐 Fetching video ${video_id} from real API`);
      video = await getVideo(video_id);
    }

    // Process in mock mode or real mode
    if (config.kpoint.mockMode) {
      console.log("🎭 Mock mode: Applying template to video");
      await simulateDelay(500);

      // Generate embed code
      const embedCode = generateEmbedCodeFromTemplate(template_id, video as any);

      // Store in mock storage
      addMockShoppableTemplate(video_id, template_id, embedCode);

      // Return with mock packages
      const mockPackages = [
        ...((video as any).interactivity_packages || []),
        {
          id: template_id,
          name: "Shoppable Template",
          state: "PUBLISHED",
          time_created: new Date().toISOString(),
          time_last_published: new Date().toISOString(),
        }
      ];

      return NextResponse.json({
        success: true,
        video_id,
        template_id,
        updated_packages: mockPackages,
      });
    }

    // Real API mode
    try {
      console.log(`📤 Applying template ${template_id} to video ${video_id}`);

      // Generate embed code
      const embedCode = generateEmbedCodeFromTemplate(template_id, video as any);
      console.log(`✅ Generated embed code (${embedCode.length} chars, base64)`);

      // Apply to video via KPOINT API
      console.log(`🚀 Calling KPOINT API: POST /api/v3/videos/${video_id}/interactivity/${template_id}`);
      console.log(`📦 Body:`, {
        embed_code_length: embedCode.length,
        state: "PUBLISHED"
      });

      await applyTemplateToVideo(video_id, template_id, embedCode);

      console.log(`✅ Successfully applied template to video`);

      // If using mock video data, also update the mock video's interactivity_packages
      if (mockVideo) {
        console.log(`📝 Updating mock video data with new template...`);
        addMockShoppableTemplate(video_id, template_id, embedCode);
      }

      // Wait a moment for KPOINT API to update, then fetch updated video data
      console.log(`⏳ Waiting 1s for KPOINT API to update video data...`);
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Fetch updated video to get the new interactivity package
      console.log(`🔄 Fetching updated video data...`);
      let updatedVideo;
      const mockVideoAfterUpdate = getMockVideoById(video_id);
      if (mockVideoAfterUpdate) {
        console.log(`📦 Using mock video for updated data`);
        updatedVideo = mockVideoAfterUpdate;
      } else {
        updatedVideo = await getVideo(video_id);
      }
      console.log(`📦 Updated video has ${(updatedVideo as any).interactivity_packages?.length || 0} packages`);

      return NextResponse.json({
        success: true,
        video_id,
        template_id,
        updated_packages: (updatedVideo as any).interactivity_packages || [],
      });
    } catch (error: any) {
      console.error(`❌ Failed to apply template to video ${video_id}:`, error);
      return NextResponse.json(
        {
          success: false,
          error: error?.message || "Unknown error occurred",
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("Error in apply template API:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
