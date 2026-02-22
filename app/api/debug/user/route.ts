import { NextResponse } from "next/server";
import {
  getCurrentMockUser,
  getTemplatesForUser,
} from "@/lib/kpoint/users-mock-data";

export async function GET() {
  try {
    const currentUser = getCurrentMockUser();

    if (!currentUser) {
      return NextResponse.json({
        user: null,
        message: "No current user set",
      });
    }

    const templateIds = getTemplatesForUser(currentUser.id);

    return NextResponse.json({
      user: currentUser,
      accessible_template_ids: templateIds,
      template_count: templateIds.length,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
