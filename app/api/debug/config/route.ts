import { NextResponse } from "next/server";
import { config } from "@/lib/config";

export async function GET() {
  return NextResponse.json({
    mockMode: config.kpoint.mockMode,
    env_KPOINT_MOCK_MODE: process.env.KPOINT_MOCK_MODE,
    nodeEnv: process.env.NODE_ENV,
  });
}
