import { kpointClient } from "./client";
import { config } from "../config";
import { KPointVideo } from "./videos";
import { getTemplateDefinition } from "./template-definitions";

export interface TemplateValidationResult {
  valid: boolean;
  error?: string;
}

/**
 * Extract video host/domain from a video's embed code
 * Priority order:
 * 1. standard_embed_code
 * 2. embed_markup.advanced
 * 3. thumbnail_url hostname
 * 4. config.kpoint.baseUrl
 */
export function extractVideoHost(video: KPointVideo): string {
  // Priority 1: Extract from standard_embed_code
  if ((video as any).standard_embed_code) {
    const match = (video as any).standard_embed_code.match(
      /data-video-host\s*=\s*['"]([^'"]+)['"]/i
    );
    if (match) return match[1];
  }

  // Priority 2: Extract from embed_markup.advanced
  if ((video as any).embed_markup?.advanced) {
    const match = (video as any).embed_markup.advanced.match(
      /data-video-host\s*=\s*['"]([^'"]+)['"]/i
    );
    if (match) return match[1];
  }

  // Priority 3: Extract domain from thumbnail URL
  if (video.thumbnail_url) {
    try {
      const url = new URL(video.thumbnail_url);
      return url.hostname;
    } catch {
      // Invalid URL, continue to fallback
    }
  }

  // Fallback: Use config base URL
  try {
    const url = new URL(config.kpoint.baseUrl);
    return url.hostname;
  } catch {
    // Last resort fallback
    return "ktpl.kpoint.com";
  }
}


/**
 * Validate template ID format
 */
export function validateTemplateId(templateId: string): TemplateValidationResult {
  if (!templateId || templateId.trim().length === 0) {
    return {
      valid: false,
      error: "Template ID is required",
    };
  }

  // Check if template exists in definitions
  const templateDef = getTemplateDefinition(templateId);
  if (!templateDef) {
    return {
      valid: false,
      error: `Template '${templateId}' not found`,
    };
  }

  return { valid: true };
}

/**
 * Generate embed code from template definition for a specific video
 * Replaces {video_host} and {video_id} placeholders with actual values
 * and returns base64-encoded result
 */
export function generateEmbedCodeFromTemplate(
  templateId: string,
  video: KPointVideo
): string {
  const templateDef = getTemplateDefinition(templateId);
  if (!templateDef) {
    throw new Error(`Template '${templateId}' not found`);
  }

  const videoHost = extractVideoHost(video);
  const videoId = video.id; // Already in gcc-{uuid} format

  // Replace {video_host} and {video_id} placeholders
  let modifiedHtml = templateDef.htmlTemplate
    .replace(/\{video_host\}/g, videoHost)
    .replace(/\{video_id\}/g, videoId);

  // Base64 encode
  return Buffer.from(modifiedHtml, "utf-8").toString("base64");
}

/**
 * Apply template to a video via KPOINT API
 * Makes POST request to /api/v3/videos/{videoId}/interactivity/{templateId}
 */
export async function applyTemplateToVideo(
  videoId: string,
  templateId: string,
  embedCode: string
): Promise<void> {
  const path = `/videos/${videoId}/interactivity/${templateId}`;
  const body = {
    embed_code: embedCode,
    state: "PUBLISHED",
  };

  console.log(`🌐 KPOINT API Request:`, {
    url: `${config.kpoint.baseUrl}/api/v3${path}`,
    method: "POST",
    body: {
      embed_code: `${embedCode.substring(0, 50)}... (${embedCode.length} chars total)`,
      state: "PUBLISHED",
    },
  });

  await kpointClient.post(path, body);

  console.log(`✅ KPOINT API Response: Success`);
}

/**
 * Result of applying template to a single video
 */
export interface ApplyTemplateResult {
  video_id: string;
  success: boolean;
  error?: string;
}

/**
 * Apply template to a single video
 * Generates embed code from template definition and applies via API
 */
export async function applyTemplateToSingleVideo(
  videoId: string,
  templateId: string,
  video: KPointVideo
): Promise<ApplyTemplateResult> {
  try {
    // Generate embed code from template definition
    const embedCode = generateEmbedCodeFromTemplate(templateId, video);

    // Apply to video
    await applyTemplateToVideo(videoId, templateId, embedCode);

    return {
      video_id: videoId,
      success: true,
    };
  } catch (error: any) {
    return {
      video_id: videoId,
      success: false,
      error: error?.message || "Unknown error occurred",
    };
  }
}
