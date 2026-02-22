import { NextRequest, NextResponse } from "next/server";
import { getAccessToken } from "@/lib/kpoint/auth";

export async function POST() {
  try {
    const token = await getAccessToken();
    return NextResponse.json({ success: true, token_acquired: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Authentication failed";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}

// Health check for auth status
export async function GET() {
  try {
    await getAccessToken();
    return NextResponse.json({ status: "authenticated" });
  } catch {
    return NextResponse.json(
      { status: "unauthenticated" },
      { status: 401 }
    );
  }
}
