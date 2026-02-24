import { NextRequest, NextResponse } from "next/server";
import { kpointClient } from "@/lib/kpoint/client";
import { config } from "@/lib/config";
import { simulateDelay } from "@/lib/kpoint/mock-data";

interface ShareVideoRequest {
  users: string[];
  groups: string[];
  sendEmail?: boolean;
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { videoId: string } }
) {
  try {
    const videoId = params.videoId;
    const body = (await request.json()) as ShareVideoRequest;
    const { users = [], groups = [], sendEmail = false } = body;

    if (!videoId) {
      return NextResponse.json(
        { error: "videoId is required" },
        { status: 400 }
      );
    }

    if (users.length === 0 && groups.length === 0) {
      return NextResponse.json(
        { error: "At least one user or group must be specified" },
        { status: 400 }
      );
    }

    if (config.kpoint.mockMode) {
      console.log(`🎭 Mock mode: Sharing video ${videoId}`);
      console.log(`👥 Users: ${users.join(", ")}`);
      console.log(`👥 Groups: ${groups.join(", ")}`);
      await simulateDelay(500);

      return NextResponse.json({
        success: true,
        video_id: videoId,
        shared_with: {
          users,
          groups,
        },
      });
    }

    // Real API mode - Update video with membership data
    console.log(`📤 Sharing video ${videoId}`);
    console.log(`👥 Users: ${users.join(", ")}`);
    console.log(`👥 Groups: ${groups.join(", ")}`);

    const path = `/videos/${videoId}`;
    const payload = {
      visibility: "MEMBERS",
      isLiveEvent: false,
      mail_flag: false, // Ensure it's explicitly boolean
      membershipData: {
        mail_flag: false,
        users,
        groups,
      },
      published_flag: true,
    };

    console.log(`🚀 Calling KPOINT API: PUT /api/v3/videos/${videoId}`);
    console.log(`📦 Payload:`, JSON.stringify(payload, null, 2));

    await kpointClient.put(path, payload);

    console.log(`✅ Successfully shared video ${videoId}`);

    return NextResponse.json({
      success: true,
      video_id: videoId,
      shared_with: {
        users,
        groups,
      },
    });
  } catch (error: any) {
    console.error(`❌ Failed to share video:`, error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}
