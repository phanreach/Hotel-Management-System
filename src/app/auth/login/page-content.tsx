"use client";

import React, { useState } from 'react';
import { 
  Mail, 
  Lock, 
  EyeOff, 
  Eye, 
  Loader2,
  House, 
} from 'lucide-react'; 
import { useLogin } from '@/hooks/useLogin';

export default function LoginPageContent() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [showPassword, setShowPassword] = useState(false);
  
  const { login, isLoading } = useLogin();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    login(data);
  };

  return (
    <div className="flex min-h-screen w-full flex-row font-display bg-[#f6f7f8]">
      {/* Left Panel: Hero Image (Hidden on mobile) */}
      <div 
        className="hidden lg:flex w-1/2 relative flex-col justify-end p-12 overflow-hidden bg-cover bg-center" 
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070")' }}
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
            Join our exclusive community to manage your bookings, discover hidden gems, and unlock members-only rates at over 500 destinations worldwide.
          </p>
          <div className="mt-8 flex gap-2">
            <div className="h-1.5 w-8 bg-[#137fec] rounded-full" />
            <div className="h-1.5 w-2 bg-white/30 rounded-full" />
            <div className="h-1.5 w-2 bg-white/30 rounded-full" />
          </div>
        </div>
      </div>

      {/* Right Panel: Login/Registration Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 md:p-16 bg-white relative">
        {/* Mobile Logo */}
        <div className="lg:hidden absolute top-6 left-6 flex items-center gap-2">
          <div className="text-[#137fec]">
            <House className="w-8 h-8" />
          </div>
          <h2 className="text-[#111418] text-xl font-bold">HMS</h2>
        </div>

        <div className="w-full max-w-[440px] flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <h1 className="text-[#111418] text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">
              {mode === 'signin' ? 'Welcome back' : 'Create Account'}
            </h1>
            <p className="text-[#617589] text-base font-normal">
              Manage your bookings and explore exclusive offers
            </p>
          </div>

          {/* Segmented Buttons (Tabs) */}
          <div className="flex p-1 bg-[#f0f2f4] rounded-xl">
            <button
              onClick={() => setMode('signin')}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                mode === 'signin' 
                  ? 'bg-white text-[#111418] shadow-[0_0_4px_rgba(0,0,0,0.1)]' 
                  : 'text-[#617589]'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setMode('signup')}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                mode === 'signup' 
                  ? 'bg-white text-[#111418] shadow-[0_0_4px_rgba(0,0,0,0.1)]' 
                  : 'text-[#617589]'
              }`}
            >
              Create Account
            </button>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
            {/* Email Field */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[#111418] text-sm font-medium leading-normal">Email Address</span>
              <div className="relative">
                <input 
                  name="email"
                  type="email" 
                  required
                  className="flex w-full rounded-xl text-[#111418] focus:outline-0 focus:ring-2 focus:ring-[#137fec]/20 border border-[#dbe0e6] bg-white focus:border-[#137fec] h-12 placeholder:text-[#9aa2ac] px-4 pl-11 text-base font-normal transition-colors" 
                  placeholder="name@example.com" 
                />
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9aa2ac]">
                  <Mail size={20} />
                </div>
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <span className="text-[#111418] text-sm font-medium leading-normal">Password</span>
                <a className="text-[#137fec] text-sm font-semibold hover:underline" href="#">Forgot password?</a>
              </div>
              <div className="relative">
                <input 
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="flex w-full rounded-xl text-[#111418] focus:outline-0 focus:ring-2 focus:ring-[#137fec]/20 border border-[#dbe0e6] bg-white focus:border-[#137fec] h-12 placeholder:text-[#9aa2ac] px-4 pl-11 text-base font-normal transition-colors" 
                  placeholder="Enter your password" 
                />
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9aa2ac]">
                  <Lock size={20} />
                </div>
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9aa2ac] hover:text-[#111418] transition-colors"
                >
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center rounded-xl bg-[#137fec] hover:bg-blue-600 active:scale-[0.98] h-12 px-5 text-white text-base font-bold transition-all duration-200 shadow-md shadow-blue-500/20 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                mode === 'signin' ? 'Sign In' : 'Create Account'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-[#e5e7eb]"></div>
            <span className="flex-shrink-0 mx-4 text-[#617589] text-sm font-medium">Or continue with</span>
            <div className="flex-grow border-t border-[#e5e7eb]"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button type="button" className="flex items-center justify-center gap-2 h-12 rounded-xl border border-[#dbe0e6] bg-white hover:bg-[#f8f9fa] text-[#111418] text-sm font-medium transition-colors">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
              Google
            </button>
            <button type="button" className="flex items-center justify-center gap-2 h-12 rounded-xl border border-[#dbe0e6] bg-white hover:bg-[#f8f9fa] text-[#111418] text-sm font-medium transition-colors">
              <img src="https://www.svgrepo.com/show/511330/apple-173.svg" className="w-5 h-5" alt="Apple" />
              Apple
            </button>
          </div>

          {/* Bottom Helper Text */}
          <div className="mt-4 text-center">
            <p className="text-[#617589] text-sm">
              {mode === 'signin' ? "Don't have an account? " : "Already have an account? "}
              <button 
                type="button"
                onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
                className="text-[#137fec] font-bold hover:underline"
              >
                {mode === 'signin' ? 'Sign up for free' : 'Sign in here'}
              </button>
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="absolute bottom-6 flex gap-6 text-xs text-[#9aa2ac]">
          <a className="hover:text-[#137fec] transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-[#137fec] transition-colors" href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  );
}