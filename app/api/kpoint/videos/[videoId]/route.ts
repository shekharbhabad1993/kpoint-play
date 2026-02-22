import { NextRequest, NextResponse } from "next/server";
import { getVideo } from "@/lib/kpoint/videos";
import { KPointApiError } from "@/lib/kpoint/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { videoId: string } }
) {
  try {
    const data = await getVideo(params.videoId);
    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof KPointApiError) {
      return NextResponse.json(
        { error: error.message, details: error.body },
        { status: error.status }
      );
    }
    const message =
      error instanceof Error ? error.message : "Failed to fetch video";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
