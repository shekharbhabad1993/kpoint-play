import { config } from "@/lib/config";

interface TokenCache {
  accessToken: string;
  expiresAt: number;
}

// In-memory singleton token cache
let tokenCache: TokenCache | null = null;

const TOKEN_REFRESH_BUFFER_MS = 60 * 1000; // Refresh 60s before expiry

export async function getAccessToken(): Promise<string> {
  if (tokenCache && tokenCache.expiresAt > Date.now() + TOKEN_REFRESH_BUFFER_MS) {
    return tokenCache.accessToken;
  }

  return refreshToken();
}

export async function refreshToken(): Promise<string> {
  const { clientId, clientSecret, baseUrl } = config.kpoint;

  if (!clientId || !clientSecret) {
    throw new KPointAuthError(
      "KPOINT_CLIENT_ID and KPOINT_CLIENT_SECRET must be set in environment variables"
    );
  }

  const response = await fetch(`${baseUrl}/api/${config.kpoint.apiVersion}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "client_credentials",
    }),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "Unknown error");
    throw new KPointAuthError(
      `Failed to obtain KPOINT access token: ${response.status} - ${errorText}`
    );
  }

  const data = await response.json();

  tokenCache = {
    accessToken: data.access_token,
    expiresAt: Date.now() + (data.expires_in || 3600) * 1000,
  };

  return tokenCache.accessToken;
}

export function clearTokenCache(): void {
  tokenCache = null;
}

export class KPointAuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "KPointAuthError";
  }
}
