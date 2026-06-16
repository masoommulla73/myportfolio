import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { db } from "@/lib/db";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  // Strict RBAC: Verify on backend via Prisma
  const user = await db.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user || user.role !== "ADMIN") {
    // Prevent unauthorized access entirely. 
    // Return a 403 Forbidden style response or redirect.
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar Placeholder */}
      <aside className="w-64 border-r border-white/10 p-6">
        <div className="font-bold text-xl mb-8 tracking-wider">{`{ M }`} Admin</div>
        <nav className="space-y-4 text-white/70 text-sm">
          <div className="hover:text-white cursor-pointer transition-colors">Dashboard</div>
          <div className="hover:text-white cursor-pointer transition-colors">Projects</div>
          <div className="hover:text-white cursor-pointer transition-colors">Messages</div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
