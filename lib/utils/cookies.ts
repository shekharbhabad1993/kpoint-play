export type UserRole = "admin" | "partner";

export interface SessionUser {
  id: string;
  name: string;
  role: UserRole;
  email?: string;
  partnerId?: string;
}

const SESSION_COOKIE_NAME = "kpoint_session";

// Client-side cookie utility
export function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}

export function setCookie(name: string, value: string, days: number = 1): void {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

// Get session from client-side
export function getClientSession(): SessionUser | null {
  const sessionCookie = getCookie(SESSION_COOKIE_NAME);
  if (!sessionCookie) return null;

  try {
    return JSON.parse(decodeURIComponent(sessionCookie)) as SessionUser;
  } catch {
    return null;
  }
}
