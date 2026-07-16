import { NextRequest, NextResponse } from "next/server";
import {
  getAdminPassword,
  isAdminAuthenticated,
  setAdminSession,
  clearAdminSession,
} from "@/lib/admin-auth";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const password = String(body.password || "");

  if (password !== getAdminPassword()) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  await setAdminSession();
  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  await clearAdminSession();
  return NextResponse.json({ ok: true });
}

export async function GET() {
  const ok = await isAdminAuthenticated();
  return NextResponse.json({ authenticated: ok });
}
