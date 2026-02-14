"use client";

import { useState } from "react";
import { Mail, Lock, EyeOff, Eye, Loader2, House } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import useLogin from "@/hooks/use-login";
import { LoginSchema, loginSchema } from "@/lib/schema/login-schema";

export default function LoginPageContent() {
  const router = useRouter();
  const loginMutation = useLogin();

  const [showPassword, setShowPassword] = useState(false);
  const [backendError, setBackendError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const loading = loginMutation.isPending;

  const onSubmit = async (data: LoginSchema) => {
    setBackendError(null);

    try {
      await loginMutation.mutateAsync(data);
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
    <div className="flex min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Left Side - Hero Section */}
      <div
        className="hidden lg:flex w-1/2 relative flex-col justify-end p-12 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

        <div className="relative z-10 text-white max-w-lg space-y-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push("/home")}
              className="p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
            >
              <House className="w-8 h-8" />
            </button>

            <h2 className="text-2xl font-bold tracking-tight">HMS</h2>
          </div>
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-sm font-medium">✨ Premium Experience</span>
          </div>
          <h1 className="text-5xl font-bold leading-tight">
            Experience luxury like never before
          </h1>
          <p className="text-lg text-white/90 leading-relaxed">
            Join our exclusive community to manage your bookings, discover
            hidden gems, and unlock members-only rates at over 500 destinations
            worldwide
          </p>
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-[460px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 lg:p-10 space-y-6"
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-slate-900">
                Welcome back
              </h1>
              <p className="text-slate-600">
                Manage your bookings and explore exclusive offers
              </p>
            </div>

            {/* Backend Error */}
            {backendError && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{backendError}</p>
              </div>
            )}

            <div className="space-y-4">
              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="you@example.com"
                    className="w-full h-12 px-4 pl-11 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 text-slate-900 placeholder:text-slate-400"
                  />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full h-12 px-4 pl-11 pr-11 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 text-slate-900 placeholder:text-slate-400"
                  />
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? (
                      <Eye className="w-5 h-5" />
                    ) : (
                      <EyeOff className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                "Sign In"
              )}
            </button>

            <div className="pt-4 border-t border-slate-200">
              <p className="text-center text-slate-600">
                Don't have an account?{" "}
                <a
                  href="/auth/signup"
                  className="text-blue-600 font-semibold hover:text-blue-700 hover:underline transition-colors"
                >
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
