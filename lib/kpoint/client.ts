import { getApiUrl, config } from "@/lib/config";
import { getKPointAuthParams } from "./jwt";

export class KPointApiError extends Error {
  status: number;
  body: unknown;

  constructor(message: string, status: number, body?: unknown) {
    super(message);
    this.name = "KPointApiError";
    this.status = status;
    this.body = body;
  }
}

interface RequestOptions {
  method?: string;
  body?: unknown;
  params?: Record<string, string>;
  headers?: Record<string, string>;
}

async function makeRequest(
  path: string,
  options: RequestOptions = {}
): Promise<unknown> {
  const { method = "GET", body, params, headers: extraHeaders } = options;

  // Check if mock mode is enabled
  if (config.kpoint.mockMode) {
    throw new Error(
      "Mock mode is enabled. Real API calls are disabled. Set KPOINT_MOCK_MODE=false to use real API."
    );
  }

  // Generate JWT auth parameters
  const authParams = getKPointAuthParams();

  // Build URL with auth parameters
  let url = getApiUrl(path);
  const urlParams = new URLSearchParams({
    token: authParams.token,
    kcid: authParams.kcid,
    ...params,
  });
  url += `?${urlParams.toString()}`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...extraHeaders,
  };

  const fetchOptions: RequestInit = {
    method,
    headers,
  };

  if (body && method !== "GET") {
    fetchOptions.body = JSON.stringify(body);
  }

  const response = await fetch(url, fetchOptions);

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    throw new KPointApiError(
      `KPOINT API error: ${response.status} ${response.statusText}`,
      response.status,
      errorBody
    );
  }

  const contentType = response.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    return response.json();
  }

  return response.text();
}

export const kpointClient = {
  get(path: string, params?: Record<string, string>) {
    return makeRequest(path, { params });
  },

  post(path: string, body?: unknown) {
    return makeRequest(path, { method: "POST", body });
  },

  put(path: string, body?: unknown) {
    return makeRequest(path, { method: "PUT", body });
  },

  delete(path: string) {
    return makeRequest(path, { method: "DELETE" });
  },
};
