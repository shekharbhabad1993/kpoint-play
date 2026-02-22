import { NextResponse } from "next/server";
import { config } from "@/lib/config";
import { getCurrentMockUser } from "@/lib/kpoint/users-mock-data";

export async function GET() {
  try {
    if (config.kpoint.mockMode) {
      const user = getCurrentMockUser();

      if (!user) {
        return NextResponse.json(
          { error: "No user logged in" },
          { status: 404 }
        );
      }

      return NextResponse.json({ user });
    }

    // Real API call would go here
    return NextResponse.json({ error: "Not implemented" }, { status: 501 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch current user";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
