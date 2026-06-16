import AdminGatekeeper from "@/components/admin-gatekeeper";

export default function AdminDashboard() {
  return (
    <AdminGatekeeper>
      <div>
        <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>
        <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
          <p className="text-white/70">Welcome to the strictly secured admin panel.</p>
        </div>
      </div>
    </AdminGatekeeper>
  );
}
