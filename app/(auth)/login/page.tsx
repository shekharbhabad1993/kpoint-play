"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Shield, Users } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedRole, setSelectedRole] = useState<"admin" | "partner" | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin() {
    if (!name.trim() || !selectedRole) {
      setError("Please enter your name and select a role.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          role: selectedRole,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }

      router.push(
        selectedRole === "admin" ? "/admin/dashboard" : "/partner/dashboard"
      );
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-4">
            <Image
              src="https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/logos/v1771662240000/logo.jpg"
              alt="KPOINT Logo"
              width={120}
              height={120}
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">KPOINT Play</h1>
          <p className="text-gray-500 mt-1">
            Video Platform Management Console
          </p>
        </div>

        {/* Login Card */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Sign In</h2>

          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email (optional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Role
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedRole("admin")}
                  className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-150 ${
                    selectedRole === "admin"
                      ? "border-kpoint-600 bg-kpoint-50 text-kpoint-700"
                      : "border-gray-200 hover:border-gray-300 text-gray-600"
                  }`}
                >
                  <Shield className="w-8 h-8 mb-2" />
                  <span className="font-medium text-sm">Admin</span>
                  <span className="text-xs mt-1 text-gray-500">
                    Manage videos
                  </span>
                </button>

                <button
                  onClick={() => setSelectedRole("partner")}
                  className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-150 ${
                    selectedRole === "partner"
                      ? "border-kpoint-600 bg-kpoint-50 text-kpoint-700"
                      : "border-gray-200 hover:border-gray-300 text-gray-600"
                  }`}
                >
                  <Users className="w-8 h-8 mb-2" />
                  <span className="font-medium text-sm">Partner</span>
                  <span className="text-xs mt-1 text-gray-500">
                    Personalize & share
                  </span>
                </button>
              </div>
            </div>

            <button
              onClick={handleLogin}
              disabled={loading || !name.trim() || !selectedRole}
              className="btn-primary w-full mt-2"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          This is a mock login for development. In production, integrate with
          your SSO provider.
        </p>
      </div>
    </div>
  );
}
