import { NextRequest, NextResponse } from "next/server";
import {
  createSessionCookieValue,
  SESSION_COOKIE_OPTIONS,
  SessionUser,
  UserRole,
} from "@/lib/utils/cookies";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, role, email, partnerId } = body;

    if (!name || !role) {
      return NextResponse.json(
        { error: "name and role are required" },
        { status: 400 }
      );
    }

    if (!["admin", "partner"].includes(role)) {
      return NextResponse.json(
        { error: "role must be admin or partner" },
        { status: 400 }
      );
    }

    const user: SessionUser = {
      id: `user_${Date.now()}`,
      name,
      role: role as UserRole,
      email,
      partnerId: role === "partner" ? partnerId || `partner_${Date.now()}` : undefined,
    };

    const response = NextResponse.json({ success: true, user });

    response.cookies.set({
      ...SESSION_COOKIE_OPTIONS,
      value: createSessionCookieValue(user),
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Login failed" },
      { status: 500 }
    );
  }
}
