import { NextResponse } from "next/server";
import { extractTemplatesFromVideos } from "@/lib/kpoint/mock-data";

export async function GET() {
  try {
    const templates = extractTemplatesFromVideos();

    return NextResponse.json({
      count: templates.length,
      templates: templates.map((t) => ({
        id: t.id,
        package_id: t.package_id,
        package_name: t.package_name,
        video_id: t.video_id,
        video_title: t.video_title,
      })),
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
