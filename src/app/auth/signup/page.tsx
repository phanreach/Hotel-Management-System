"use client";

import React, { useState } from "react";
import { Loader2, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import useRegister from "@/hooks/use-register";
import { Lock, EyeOff, Eye } from "lucide-react";

export default function Signup() {
  const router = useRouter();
  const signup = useRegister();

  const [showPassword, setShowPassword] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const isLoading = signup.isPending;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signup.mutateAsync({
        firstName,
        lastName,
        email,
        password,
        phone,
      });

      router.push("/auth/login");
    } catch (error) {
      console.error("Signup error:", error);
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
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-sm font-medium">✨ Premium Experience</span>
          </div>
          <h1 className="text-5xl font-bold leading-tight">
            Experience luxury like never before
          </h1>
          <p className="text-lg text-white/90 leading-relaxed">
            Create an account to manage your bookings and unlock exclusive
            benefits
          </p>
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-[460px]">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-xl border border-slate-200 p-8 lg:p-10 space-y-6"
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-slate-900">
                Create Account
              </h1>
              <p className="text-slate-600">
                Join us today and start your journey
              </p>
            </div>

            <div className="space-y-4">
              {/* First Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 text-slate-900 placeholder:text-slate-400"
                />
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 text-slate-900 placeholder:text-slate-400"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 px-4 pl-11 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 text-slate-900 placeholder:text-slate-400"
                  />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Phone Number
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-slate-600">+855</span>
                  <input
                    type="tel"
                    placeholder="123 456 789"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-12 pl-14 pr-4 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 text-slate-900 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                "Create Account"
              )}
            </button>

            {/* Sign In Link */}
            <div className="pt-4 border-t border-slate-200">
              <p className="text-center text-slate-600">
                Already have an account?{" "}
                <a
                  href="/auth/login"
                  className="text-blue-600 font-semibold hover:text-blue-700 hover:underline transition-colors"
                >
                  Sign in
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
