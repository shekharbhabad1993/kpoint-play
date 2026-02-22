import { kpointClient } from "./client";
import { config } from "../config";
import {
  getMockPackages,
  getMockPackageById,
  getMockPackagesByVideoId,
  simulateDelay,
  type MockPackage,
} from "./mock-data";

export interface PackageDetail {
  id: string;
  name: string;
  description?: string;
  video_id?: string;
  fields?: PersonalizationField[];
  configuration?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface PersonalizationField {
  key: string;
  label: string;
  type: string;
  required?: boolean;
  default_value?: string;
  [key: string]: unknown;
}

/**
 * Convert mock package to PackageDetail format
 */
function convertMockToPackageDetail(mockPackage: MockPackage): PackageDetail {
  return {
    id: mockPackage.id,
    name: mockPackage.name,
    description: mockPackage.description,
    video_id: mockPackage.video_id,
    fields: mockPackage.fields,
    configuration: mockPackage.configuration,
    ...mockPackage,
  };
}

export async function getPackage(packageId: string): Promise<PackageDetail> {
  // Use mock data if in mock mode
  if (config.kpoint.mockMode) {
    console.log(`🎭 Mock mode enabled - returning mock package: ${packageId}`);
    await simulateDelay(200);

    const mockPackage = getMockPackageById(packageId);
    if (!mockPackage) {
      throw new Error(`Package not found: ${packageId}`);
    }

    return convertMockToPackageDetail(mockPackage);
  }

  // Real API call
  const data = await kpointClient.get(`/packages/${packageId}`);
  return data as PackageDetail;
}

export async function listPackagesForVideo(
  videoId: string
): Promise<PackageDetail[]> {
  // Use mock data if in mock mode
  if (config.kpoint.mockMode) {
    console.log(
      `🎭 Mock mode enabled - returning mock packages for video: ${videoId}`
    );
    await simulateDelay(200);

    const mockPackages = getMockPackagesByVideoId(videoId);
    return mockPackages.map(convertMockToPackageDetail);
  }

  // Real API call
  const data = await kpointClient.get(`/videos/${videoId}/packages`);
  return (
    (data as { packages: PackageDetail[] }).packages ||
    (data as PackageDetail[])
  );
}
