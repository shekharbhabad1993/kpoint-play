import { cookies } from "next/headers";

export type UserRole = "admin" | "partner";

export interface SessionUser {
  id: string;
  name: string;
  role: UserRole;
  email?: string;
  partnerId?: string;
}

const SESSION_COOKIE_NAME = "kpoint_session";

export function getSession(): SessionUser | null {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);

  if (!sessionCookie?.value) return null;

  try {
    return JSON.parse(sessionCookie.value) as SessionUser;
  } catch {
    return null;
  }
}

export function createSessionCookieValue(user: SessionUser): string {
  return JSON.stringify(user);
}

export const SESSION_COOKIE_OPTIONS = {
  name: SESSION_COOKIE_NAME,
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: 60 * 60 * 24, // 24 hours
};
