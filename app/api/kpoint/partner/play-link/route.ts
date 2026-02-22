import { NextRequest, NextResponse } from "next/server";
import {
  generatePlayLink,
  generateWhatsAppShareLink,
  generateEmailShareLink,
} from "@/lib/utils/play-link";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { videoId, packageId, fields, state } = body;

    if (!videoId || !packageId) {
      return NextResponse.json(
        { error: "videoId and packageId are required" },
        { status: 400 }
      );
    }

    console.log("🔗 Generating play link:", { videoId, packageId, fields });

    // Generate the play link
    const playLink = generatePlayLink({
      videoId,
      packageId,
      fields: fields || {},
      state,
    });

    // Generate share links
    const whatsappLink = generateWhatsAppShareLink(
      playLink,
      "Check out this personalized video created just for you!"
    );

    const emailLink = generateEmailShareLink({
      playUrl: playLink,
      subject: "Your Personalized Video",
      body: "I've created a personalized video for you. Click the link below to watch:",
    });

    console.log("✅ Play link generated:", playLink);

    return NextResponse.json({
      playLink,
      whatsappLink,
      emailLink,
      success: true,
    });
  } catch (error) {
    console.error("❌ Failed to generate play link:", error);
    const message =
      error instanceof Error ? error.message : "Failed to generate play link";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
