export const config = {
  kpoint: {
    baseUrl: process.env.KPOINT_BASE_URL || "https://ktpl.kpoint.com",
    clientId: process.env.KPOINT_CLIENT_ID || "",
    clientSecret: process.env.KPOINT_CLIENT_SECRET || "",
    playerBaseUrl:
      process.env.KPOINT_PLAYER_BASE_URL ||
      "https://ktpl.kpoint.com/web/videos",
    apiVersion: "v3",
    mockMode: process.env.KPOINT_MOCK_MODE === "true" || false,
  },
  app: {
    url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  },
} as const;

export function getApiUrl(path: string): string {
  return `${config.kpoint.baseUrl}/api/${config.kpoint.apiVersion}${path}`;
}
