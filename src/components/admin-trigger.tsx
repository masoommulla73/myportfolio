"use client";

import { useRouter } from "next/navigation";

export default function AdminTrigger() {
  const router = useRouter();

  return (
    <div 
      className="flex items-center gap-2 text-xl font-bold tracking-wider text-[#0f172a] cursor-pointer select-none"
      onDoubleClick={() => router.push("/admin")}
      title="Double click for Admin Access"
    >
      <span className="text-emerald-600">{`< />`}</span>
      <span className="hidden sm:inline">PORTFOLIO</span>
    </div>
  );
}
