import { NextResponse } from "next/server";
import { config } from "@/lib/config";
import {
  extractTemplatesFromVideos,
  simulateDelay,
} from "@/lib/kpoint/mock-data";

export async function GET() {
  try {
    // In mock mode, return all templates (no filtering)
    if (config.kpoint.mockMode) {
      console.log("🎭 Admin: Fetching all templates (no filtering)");
      await simulateDelay(200);

      const templates = extractTemplatesFromVideos();

      return NextResponse.json({
        templates,
        total: templates.length,
      });
    }

    // Real API call would go here
    return NextResponse.json({ error: "Not implemented" }, { status: 501 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch templates";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
