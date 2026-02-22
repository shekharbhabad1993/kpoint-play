import { NextRequest, NextResponse } from "next/server";
import { config } from "@/lib/config";
import {
  setCurrentMockUser,
  getMockUserById,
} from "@/lib/kpoint/users-mock-data";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { user_id } = body;

    if (config.kpoint.mockMode) {
      console.log(`🎭 Switching to user: ${user_id}`);

      setCurrentMockUser(user_id);
      const user = getMockUserById(user_id);

      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      return NextResponse.json({
        success: true,
        user,
        message: `Switched to ${user.name}`,
      });
    }

    // Real API call would go here
    return NextResponse.json({ error: "Not implemented" }, { status: 501 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to switch user";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
