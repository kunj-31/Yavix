import { cookies } from "next/headers";

const COOKIE_NAME = "yavix_admin_session";
const SESSION_VALUE = "authenticated";

export function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || "yavix-admin-2026";
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const jar = await cookies();
  return jar.get(COOKIE_NAME)?.value === SESSION_VALUE;
}

export async function setAdminSession() {
  const jar = await cookies();
  jar.set(COOKIE_NAME, SESSION_VALUE, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export async function clearAdminSession() {
  const jar = await cookies();
  jar.delete(COOKIE_NAME);
}

export function requireAdminJson() {
  return Response.json({ error: "Unauthorized" }, { status: 401 });
}
