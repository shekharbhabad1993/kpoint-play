import { kpointClient } from "./client";
import { PackageDetail } from "./packages";
import { config } from "../config";
import {
  extractTemplatesFromVideos,
  simulateDelay,
  type MockPartnerTemplate,
} from "./mock-data";
import {
  getCurrentMockUser,
  getTemplatesForUser,
} from "./users-mock-data";

export interface PartnerTemplate {
  id: string;
  package_id: string;
  package_name: string;
  video_id: string;
  video_title?: string;
  fields?: PersonalizationField[];
  [key: string]: unknown;
}

export interface PersonalizationField {
  key: string;
  label: string;
  type: string;
  required?: boolean;
  default_value?: string;
}

export interface PartnerTemplateListResponse {
  templates: PartnerTemplate[];
  total?: number;
  [key: string]: unknown;
}

/**
 * Convert mock partner template to PartnerTemplate format
 */
function convertMockToPartnerTemplate(
  mockTemplate: MockPartnerTemplate
): PartnerTemplate {
  return {
    ...mockTemplate,
  } as PartnerTemplate;
}

export async function getPartnerTemplates(
  partnerId?: string
): Promise<PartnerTemplateListResponse> {
  // Use mock data if in mock mode
  if (config.kpoint.mockMode) {
    console.log("🎭 Mock mode enabled - returning mock partner templates");
    await simulateDelay(300);

    const allTemplates = extractTemplatesFromVideos();

    // Get current user and filter templates based on assignments
    const currentUser = getCurrentMockUser();

    let filteredTemplates = allTemplates;

    if (currentUser) {
      const userTemplateIds = getTemplatesForUser(currentUser.id);
      console.log(
        `🔐 Filtering templates for user: ${currentUser.name} (${currentUser.id})`
      );
      console.log(`📋 Accessible template IDs:`, userTemplateIds);

      filteredTemplates = allTemplates.filter((template) =>
        userTemplateIds.includes(template.id)
      );
    }

    const convertedTemplates = filteredTemplates.map(
      convertMockToPartnerTemplate
    );

    return {
      templates: convertedTemplates,
      total: convertedTemplates.length,
    };
  }

  // Real API call
  const params: Record<string, string> = {};
  if (partnerId) params.partner_id = partnerId;

  const data = await kpointClient.get("/partner/templates", params);
  return data as PartnerTemplateListResponse;
}

export async function getPartnerTemplate(
  templateId: string
): Promise<PartnerTemplate> {
  // Use mock data if in mock mode
  if (config.kpoint.mockMode) {
    console.log(
      `🎭 Mock mode enabled - returning mock partner template: ${templateId}`
    );
    await simulateDelay(200);

    const allTemplates = extractTemplatesFromVideos();
    const mockTemplate = allTemplates.find((t) => t.id === templateId);
    if (!mockTemplate) {
      throw new Error(`Template not found: ${templateId}`);
    }

    return convertMockToPartnerTemplate(mockTemplate);
  }

  // Real API call
  const data = await kpointClient.get(`/partner/templates/${templateId}`);
  return data as PartnerTemplate;
}

export async function getPackageForPartner(
  packageId: string
): Promise<PackageDetail> {
  // Import getPackage from packages.ts which now supports mock mode
  const { getPackage } = await import("./packages");
  return getPackage(packageId);
}
