import { getAccessToken, refreshToken } from "./auth";
import { getApiUrl } from "@/lib/config";

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
  options: RequestOptions = {},
  isRetry = false
): Promise<unknown> {
  const { method = "GET", body, params, headers: extraHeaders } = options;

  const token = await getAccessToken();

  let url = getApiUrl(path);
  if (params) {
    const searchParams = new URLSearchParams(params);
    url += `?${searchParams.toString()}`;
  }

  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
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

  // Retry once on 401 (token expired)
  if (response.status === 401 && !isRetry) {
    await refreshToken();
    return makeRequest(path, options, true);
  }

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
