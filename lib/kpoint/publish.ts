import { kpointClient } from "./client";
import { config } from "../config";
import { simulateDelay } from "./mock-data";

export interface PublishRequest {
  package_id: string;
  users?: string[];
  groups?: string[];
}

export interface PublishResponse {
  success: boolean;
  message?: string;
  [key: string]: unknown;
}

export async function publishPackage(
  request: PublishRequest
): Promise<PublishResponse> {
  // Use mock response if in mock mode
  if (config.kpoint.mockMode) {
    console.log("🎭 Mock mode enabled - simulating publish request");
    await simulateDelay(300);

    return {
      success: true,
      message: `Mock: Package ${request.package_id} published successfully`,
    };
  }

  // Real API call
  const data = await kpointClient.post("/publish", request);
  return data as PublishResponse;
}

export async function publishToUser(
  packageId: string,
  userId: string
): Promise<PublishResponse> {
  return publishPackage({
    package_id: packageId,
    users: [userId],
  });
}

export async function publishToGroup(
  packageId: string,
  groupId: string
): Promise<PublishResponse> {
  return publishPackage({
    package_id: packageId,
    groups: [groupId],
  });
}
