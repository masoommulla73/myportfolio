"use client";

import { useState, useEffect } from "react";

export default function AdminGatekeeper({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<"loading" | "uninitialized" | "initialized" | "authenticated">("loading");
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if we already have an auth token
    if (localStorage.getItem("admin_token")) {
      setStatus("authenticated");
      return;
    }

    fetch("/api/auth/status")
      .then(res => res.json())
      .then(data => {
        setStatus(data.status);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to check auth status.");
        setStatus("initialized"); // Default to initialized to prevent accidental setup
      });
  }, []);

  const handleSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/setup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      
      const data = await res.json();
      if (res.ok) {
        setStatus("initialized");
        setEmail("");
        setPassword("");
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Setup failed.");
    }
    setLoading(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      
      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem("admin_token", data.token);
        setStatus("authenticated");
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Login failed.");
    }
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setStatus("initialized");
  };

  if (status === "loading") {
    return <div className="h-screen w-full flex items-center justify-center bg-[#0f172a] text-white">Verifying security status...</div>;
  }

  if (status === "authenticated") {
    return (
      <div className="min-h-screen bg-[#0f172a] text-white w-full">
        <header className="w-full p-6 border-b border-white/10 flex justify-between items-center bg-[#151e32]">
          <h2 className="text-xl font-bold uppercase tracking-widest text-emerald-400">Secure Admin Portal</h2>
          <button onClick={handleLogout} className="px-4 py-2 border border-red-500/50 text-red-400 hover:bg-red-500/10 text-xs font-bold uppercase tracking-widest transition-colors rounded-md">Lock Portal</button>
        </header>
        <main className="p-8">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#0f172a] text-white p-6">
      <div className="w-full max-w-md bg-[#151e32] p-10 rounded-2xl border border-white/10 shadow-2xl">
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-2 text-emerald-400">
          {status === "uninitialized" ? "Admin Setup" : "Admin Login"}
        </h2>
        <p className="text-white/50 text-sm mb-8 font-medium">
          {status === "uninitialized" ? "Configure your master credentials for the first and only time." : "Enter your master credentials to access the secure portal."}
        </p>

        {error && <div className="p-3 mb-6 bg-red-500/20 border border-red-500/50 text-red-400 text-sm rounded-md">{error}</div>}

        <form onSubmit={status === "uninitialized" ? handleSetup : handleLogin} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-widest text-white/70">Master Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full bg-[#0f172a] border border-white/20 p-3 rounded-md focus:border-emerald-400 focus:outline-none transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-widest text-white/70">Master Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full bg-[#0f172a] border border-white/20 p-3 rounded-md focus:border-emerald-400 focus:outline-none transition-colors"
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-emerald-500 text-[#0f172a] font-black uppercase tracking-widest p-4 rounded-md hover:bg-emerald-400 transition-colors mt-4 disabled:opacity-50"
          >
            {loading ? "Authenticating..." : (status === "uninitialized" ? "Lock Credentials" : "Enter Portal")}
          </button>
        </form>
      </div>
    </div>
  );
}
