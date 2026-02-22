import { NextRequest, NextResponse } from "next/server";
import { getPartnerTemplates, getPartnerTemplate } from "@/lib/kpoint/partner";
import { KPointApiError } from "@/lib/kpoint/client";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const templateId = searchParams.get("templateId");
    const partnerId = searchParams.get("partnerId") || undefined;

    if (templateId) {
      const data = await getPartnerTemplate(templateId);
      return NextResponse.json(data);
    }

    const data = await getPartnerTemplates(partnerId);
    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof KPointApiError) {
      return NextResponse.json(
        { error: error.message, details: error.body },
        { status: error.status }
      );
    }
    const message =
      error instanceof Error ? error.message : "Failed to fetch partner data";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
