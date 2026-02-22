import { NextRequest, NextResponse } from "next/server";
import { config } from "@/lib/config";
import {
  assignTemplate,
  simulateDelay,
} from "@/lib/kpoint/users-mock-data";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const templateId = params.id;
    const body = await request.json();
    const { user_ids = [], group_ids = [] } = body;

    if (config.kpoint.mockMode) {
      console.log(`🎭 Admin: Publishing template ${templateId}`);
      console.log(`   Users: ${user_ids.join(", ")}`);
      console.log(`   Groups: ${group_ids.join(", ")}`);

      await simulateDelay(300);

      const assignment = assignTemplate({
        templateId,
        userIds: user_ids,
        groupIds: group_ids,
        publishedBy: "admin-001",
      });

      return NextResponse.json({
        success: true,
        assignment,
        message: "Template published successfully",
      });
    }

    // Real API call would go here
    return NextResponse.json({ error: "Not implemented" }, { status: 501 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to publish template";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
