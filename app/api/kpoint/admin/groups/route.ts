import { NextResponse } from "next/server";
import { config } from "@/lib/config";
import { getMockGroups, simulateDelay } from "@/lib/kpoint/users-mock-data";

export async function GET() {
  try {
    if (config.kpoint.mockMode) {
      console.log("🎭 Admin: Fetching all groups");
      await simulateDelay(200);

      const groups = getMockGroups();

      return NextResponse.json({
        groups,
        total: groups.length,
      });
    }

    // Real API call would go here
    return NextResponse.json({ error: "Not implemented" }, { status: 501 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch groups";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
