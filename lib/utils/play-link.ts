import { config } from "@/lib/config";

/**
 * Generates a KPOINT play link with personalization data encoded as base64.
 *
 * Reference format from KPOINT:
 * https://ktpl.kpoint.com/web/videos/{videoId}/play?id={packageId}&data={base64EncodedFields}&state=DRAFT
 *
 * The `data` param is base64-encoded key:value pairs separated by semicolons.
 * Example: "first_name:shekhar;" → base64 → "Zmlyc3RfbmFtZTpzaGVraGFyOw=="
 */
export function generatePlayLink(params: {
  videoId: string;
  packageId: string;
  fields?: Record<string, string>;
  state?: string;
}): string {
  const { videoId, packageId, fields, state } = params;
  const baseUrl = config.kpoint.playerBaseUrl;

  // Build URL manually to avoid URL-encoding the base64 data parameter
  // KPOINT player expects raw base64 with = padding, not %3D
  let url = `${baseUrl}/${videoId}/play?id=${packageId}`;

  if (fields && Object.keys(fields).length > 0) {
    const fieldString = Object.entries(fields)
      .map(([key, value]) => `${key}:${value};`)
      .join("");

    console.log("🔤 Field String:", fieldString);
    console.log("📊 Field String chars:", fieldString.split('').join(' '));

    const encoded = Buffer.from(fieldString).toString("base64");
    console.log("🔐 Base64 Encoded (raw):", encoded);

    // Verify by decoding
    const decoded = Buffer.from(encoded, "base64").toString("utf-8");
    console.log("✅ Decoded Verification:", decoded);
    console.log("🔍 Match:", fieldString === decoded);

    // Append data parameter WITHOUT URL encoding the base64 string
    url += `&data=${encoded}`;
  }

  if (state) {
    url += `&state=${state}`;
  }

  console.log("🔗 Final URL:", url);

  return url;
}

export function generateWhatsAppShareLink(playUrl: string, message?: string): string {
  const text = message
    ? `${message}\n${playUrl}`
    : `Check out this personalized video: ${playUrl}`;
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}

export function generateEmailShareLink(params: {
  playUrl: string;
  subject?: string;
  body?: string;
}): string {
  const { playUrl, subject, body } = params;
  const emailSubject = subject || "Personalized Video for You";
  const emailBody = body
    ? `${body}\n\n${playUrl}`
    : `Hi,\n\nI've created a personalized video for you. Click the link below to watch:\n\n${playUrl}`;

  return `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
}
