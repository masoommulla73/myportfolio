import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Missing credentials" }, { status: 400 });
    }

    // 1. Find the admin user
    const admin = await db.user.findFirst({
      where: { email, role: "ADMIN" }
    });

    if (!admin || !admin.password) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // 2. Verify password
    const isValidPassword = await bcrypt.compare(password, admin.password);

    if (!isValidPassword) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // 3. Return success (In a real app, you would set an HTTP-only JWT cookie here)
    // For this architecture, we return a success token that the client can use to access the dashboard
    return NextResponse.json({ 
      success: true, 
      token: "admin_authorized_" + Date.now(), // Simplified auth token for the requested flow
      message: "Login successful" 
    });

  } catch (error) {
    console.error("Auth login error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
