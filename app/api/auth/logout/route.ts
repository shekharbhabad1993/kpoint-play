import { NextResponse } from "next/server";
import { SESSION_COOKIE_OPTIONS } from "@/lib/utils/cookies";

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set({
    ...SESSION_COOKIE_OPTIONS,
    value: "",
    maxAge: 0,
  });
  return response;
}
