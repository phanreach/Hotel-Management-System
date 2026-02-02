"use client";

import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import useSignUp from "@/hooks/use-signup";

export default function Signup() {
  const router = useRouter();
  const signup = useSignUp();

  const isLoading = signup.isPending;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    signup.mutate(
      {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      },
      {
        onSuccess: () => {
          router.push("/auth/login");
        },
      },
    );
  };

  return (
    <div className="flex min-h-screen w-full bg-[#f6f7f8]">
      <div
        className="hidden lg:flex w-1/2 relative flex-col justify-end p-12 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative z-10 text-white max-w-lg">
          <h1 className="text-4xl font-extrabold mb-4">
            Experience luxury like never before
          </h1>
          <p className="text-lg text-white/80">
            Create an account to manage your bookings
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-white dark:bg-slate-900">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[440px] flex flex-col gap-5"
        >
          <h1 className="text-3xl font-black dark:text-white">
            Create Account
          </h1>

          <input
            type="text"
            placeholder="First Name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

          <input
            type="text"
            placeholder="Last Name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
