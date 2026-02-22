import { NextRequest, NextResponse } from "next/server";
import { getPackage, listPackagesForVideo } from "@/lib/kpoint/packages";
import { KPointApiError } from "@/lib/kpoint/client";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const packageId = searchParams.get("packageId");
    const videoId = searchParams.get("videoId");

    if (packageId) {
      const data = await getPackage(packageId);
      return NextResponse.json(data);
    }

    if (videoId) {
      const data = await listPackagesForVideo(videoId);
      return NextResponse.json({ packages: data });
    }

    return NextResponse.json(
      { error: "Either packageId or videoId is required" },
      { status: 400 }
    );
  } catch (error) {
    if (error instanceof KPointApiError) {
      return NextResponse.json(
        { error: error.message, details: error.body },
        { status: error.status }
      );
    }
    const message =
      error instanceof Error ? error.message : "Failed to fetch packages";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
