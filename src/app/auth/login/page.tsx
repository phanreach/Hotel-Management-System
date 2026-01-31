"use client";

import React, { useState } from "react";
import { Mail, Lock, EyeOff, Eye, Loader2, House } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import useLogin from "@/hooks/use-login";

export default function LoginPageContent() {
  const router = useRouter();

  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [showPassword, setShowPassword] = useState(false);

  const loginMutation = useLogin();
  const loading = loginMutation.isPending;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
  }>({});

  const [backendError, setBackendError] = useState<string | null>(null);

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBackendError(null);

    if (!validate()) return;

    try {
      await loginMutation.mutateAsync({ email, password });

      router.push("/admin/dashboard");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setBackendError(
          error.response?.data?.message ||
            error.response?.data?.errors ||
            "Login failed",
        );
      } else {
        setBackendError("Unexpected error occurred");
      }
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-row font-display bg-[#f6f7f8]">
      <div
        className="hidden lg:flex w-1/2 relative flex-col justify-end p-12 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="relative z-10 text-white max-w-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
              <House className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">HMS</h2>
          </div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight mb-4">
            Experience luxury like never before.
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            Join our exclusive community to manage your bookings, discover
            hidden gems, and unlock members-only rates at over 500 destinations
            worldwide.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 md:p-16 bg-white relative">
        <div className="w-full max-w-[440px] flex flex-col gap-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black">
              {mode === "signin" ? "Welcome back" : "Create Account"}
            </h1>
            <p className="text-[#617589]">
              Manage your bookings and explore exclusive offers
            </p>
          </div>

          <div className="flex p-1 bg-[#f0f2f4] rounded-xl">
            <button
              onClick={() => setMode("signin")}
              className={`flex-1 py-2.5 rounded-lg ${
                mode === "signin" ? "bg-white shadow" : "text-[#617589]"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setMode("signup")}
              className={`flex-1 py-2.5 rounded-lg ${
                mode === "signup" ? "bg-white shadow" : "text-[#617589]"
              }`}
            >
              Create Account
            </button>
          </div>

          {backendError && (
            <div className="text-red-500 text-sm">{backendError}</div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 rounded-xl border px-4 pl-11"
                  placeholder="name@example.com"
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 rounded-xl border px-4 pl-11"
                  placeholder="Enter your password"
                />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <Eye /> : <EyeOff />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="h-12 rounded-xl bg-[#137fec] text-white font-bold"
            >
              {loading ? (
                <Loader2 className="animate-spin mx-auto" />
              ) : mode === "signin" ? (
                "Sign In"
              ) : (
                "Create Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
