import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    // 1. Check if an admin already exists. If yes, reject setup.
    const adminCount = await db.user.count({
      where: { role: "ADMIN" }
    });

    if (adminCount > 0) {
      return NextResponse.json({ error: "Admin already configured. Setup locked." }, { status: 403 });
    }

    // 2. Read credentials
    const { email, password } = await req.json();

    if (!email || !password || password.length < 8) {
      return NextResponse.json({ error: "Invalid email or password (min 8 chars)" }, { status: 400 });
    }

    // 3. Hash password securely
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. Create the Admin user
    const admin = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        name: "Admin",
        role: "ADMIN"
      }
    });

    return NextResponse.json({ success: true, message: "Admin configured successfully." });
  } catch (error) {
    console.error("Auth setup error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
