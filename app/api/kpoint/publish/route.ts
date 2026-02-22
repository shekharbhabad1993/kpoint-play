import { NextRequest, NextResponse } from "next/server";
import { publishPackage, PublishRequest } from "@/lib/kpoint/publish";
import { KPointApiError } from "@/lib/kpoint/client";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as PublishRequest;

    if (!body.package_id) {
      return NextResponse.json(
        { error: "package_id is required" },
        { status: 400 }
      );
    }

    if (!body.users?.length && !body.groups?.length) {
      return NextResponse.json(
        { error: "At least one user or group is required" },
        { status: 400 }
      );
    }

    const data = await publishPackage(body);
    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof KPointApiError) {
      return NextResponse.json(
        { error: error.message, details: error.body },
        { status: error.status }
      );
    }
    const message =
      error instanceof Error ? error.message : "Failed to publish package";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
