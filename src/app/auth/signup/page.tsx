"use client";

import React, { useState } from "react";
import { Mail, Lock, EyeOff, Loader2 } from "lucide-react";
import { useLogin } from "@/hooks/useLogin";

export default function Signup() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const { login, isLoading } = useLogin();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    login(data);
  };

  return (
    <div className="flex min-h-screen w-full flex-row">
      <div
        className="hidden lg:flex w-1/2 relative flex-col justify-end p-12 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative z-10 text-white max-w-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
              <span className="text-3xl">apartment</span>
            </div>
            <h2 className="text-2xl font-bold">HMS</h2>
          </div>
          <h1 className="text-4xl font-extrabold mb-4">
            Experience luxury like never before.
          </h1>
          <p className="text-lg text-white/80">
            Join our exclusive community to manage bookings and unlock member
            rates.
          </p>
        </div>
      </div>

      {/* Right Panel: Logic & Interaction */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900">
        <div className="w-full max-w-[440px] flex flex-col gap-8">
          <header>
            <h1 className="text-3xl font-black dark:text-white">
              {mode === "signin" ? "Welcome back" : "Create Account"}
            </h1>
            <p className="text-slate-500">
              Manage your bookings and explore exclusive offers
            </p>
          </header>

          {/* Tab Switcher */}
          <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
            {["signin", "signup"].map((tab) => (
              <button
                key={tab}
                onClick={() => setMode(tab as any)}
                className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  mode === tab
                    ? "bg-white dark:bg-slate-700 shadow-sm text-black dark:text-white"
                    : "text-slate-500"
                }`}
              >
                {tab === "signin" ? "Sign In" : "Create Account"}
              </button>
            ))}
          </div>

          <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium dark:text-white">
                Email Address
              </label>
              <div className="relative">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white outline-none focus:border-blue-500"
                />
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  @
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center text-sm font-medium">
                <label className="dark:text-white">Password</label>
                <a href="#" className="text-blue-600">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  name="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white outline-none focus:border-blue-500"
                />
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  #
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <Loader2 className="animate-spin w-5 h-5" />
              ) : mode === "signin" ? (
                "Sign In"
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
