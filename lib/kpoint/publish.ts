import { kpointClient } from "./client";

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
