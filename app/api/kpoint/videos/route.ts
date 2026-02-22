import { NextRequest, NextResponse } from "next/server";
import { listVideos } from "@/lib/kpoint/videos";
import { KPointApiError } from "@/lib/kpoint/client";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const scope = searchParams.get("scope") || undefined;

    const data = await listVideos(scope);
    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof KPointApiError) {
      return NextResponse.json(
        { error: error.message, details: error.body },
        { status: error.status }
      );
    }
    const message =
      error instanceof Error ? error.message : "Failed to fetch videos";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
