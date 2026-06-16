import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const adminCount = await db.user.count({
      where: {
        role: "ADMIN"
      }
    });

    if (adminCount === 0) {
      return NextResponse.json({ status: "uninitialized" });
    }

    return NextResponse.json({ status: "initialized" });
  } catch (error) {
    console.error("Auth status error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
