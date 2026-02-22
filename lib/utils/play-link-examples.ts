/**
 * Examples of generating play links with personalized data
 * Using the mock data from lib/kpoint/mock-data.ts
 */

import { generatePlayLink } from "./play-link";

/**
 * Example 1: IL Hindi video with customer personalization
 */
export function generateILHindiPlayLink(data: {
  customer_name: string;
  policy_number: string;
  support_language?: string;
}) {
  return generatePlayLink({
    videoId: "gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7",
    packageId: "52eutbewxdcu",
    fields: {
      customer_name: data.customer_name,
      policy_number: data.policy_number,
      support_language: data.support_language || "English",
    },
  });
}

/**
 * Example 2: Product Dashboard Tutorial with employee info
 */
export function generateProductDashboardPlayLink(data: {
  employee_name: string;
  department?: string;
  training_date?: string;
}) {
  return generatePlayLink({
    videoId: "gcc-a7b3c940-f41d-5294-cf4f-bg48db23e1e8",
    packageId: "quiz123abc",
    fields: {
      employee_name: data.employee_name,
      ...(data.department && { department: data.department }),
      ...(data.training_date && { training_date: data.training_date }),
    },
  });
}

/**
 * Example 3: Sales Strategy with team member info
 */
export function generateSalesStrategyPlayLink(data: {
  team_member: string;
  region: string;
  target_quarter?: string;
}) {
  return generatePlayLink({
    videoId: "gcc-c8d4e051-g52e-6405-dg5g-ch59ec34f2f9",
    packageId: "poll456def",
    fields: {
      team_member: data.team_member,
      region: data.region,
      target_quarter: data.target_quarter || "Q1 2026",
    },
  });
}

/**
 * Example 4: Using real video IDs from mock data
 */
export function generateRRVideoPlayLink(data: Record<string, string>) {
  return generatePlayLink({
    videoId: "gcc-a0935947-c987-4ef4-b171-10392afef509",
    packageId: "custom-package-id", // Replace with actual package ID
    fields: data,
  });
}

/**
 * Example 5: KLI Dinesh Pillai video
 */
export function generateKLIPlayLink(data: Record<string, string>) {
  return generatePlayLink({
    videoId: "gcc-d941d952-1097-4588-832d-c3585963d33e",
    packageId: "custom-package-id", // Replace with actual package ID
    fields: data,
  });
}

/**
 * Example 6: Tata AIA video
 */
export function generateTataAIAPlayLink(data: Record<string, string>) {
  return generatePlayLink({
    videoId: "gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886",
    packageId: "custom-package-id", // Replace with actual package ID
    fields: data,
  });
}

/**
 * Generic function to generate play link for any video/package combination
 */
export function generateCustomPlayLink(params: {
  videoId: string;
  packageId: string;
  personalizedData: Record<string, string>;
  state?: "DRAFT" | "PUBLISHED";
}) {
  const { videoId, packageId, personalizedData, state } = params;

  return generatePlayLink({
    videoId,
    packageId,
    fields: personalizedData,
    state,
  });
}

/**
 * Example usage in code:
 *
 * const playLink = generateCustomPlayLink({
 *   videoId: "gcc-a0935947-c987-4ef4-b171-10392afef509",
 *   packageId: "pkg-12345",
 *   personalizedData: {
 *     customer_name: "John Doe",
 *     email: "john@example.com",
 *     product: "Premium Plan"
 *   }
 * });
 *
 * Result:
 * https://ktpl.kpoint.com/web/videos/gcc-a0935947-c987-4ef4-b171-10392afef509/play?id=pkg-12345&data=Y3VzdG9tZXJfbmFtZTpKb2huIERvZTtlbWFpbDpqb2huQGV4YW1wbGUuY29tO3Byb2R1Y3Q6UHJlbWl1bSBQbGFuOw==
 */
