import { NextRequest, NextResponse } from "next/server";
import { config } from "@/lib/config";
import {
  getAssignedUsersAndGroups,
  simulateDelay,
} from "@/lib/kpoint/users-mock-data";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const templateId = params.id;

    if (config.kpoint.mockMode) {
      console.log(`🎭 Admin: Fetching assignments for template ${templateId}`);
      await simulateDelay(200);

      const { users, groups } = getAssignedUsersAndGroups(templateId);

      return NextResponse.json({
        users,
        groups,
      });
    }

    // Real API call would go here
    return NextResponse.json({ error: "Not implemented" }, { status: 501 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch assignments";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
