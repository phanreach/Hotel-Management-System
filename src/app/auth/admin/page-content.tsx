"use client";

import React, { useState } from 'react';
import { 
  Mail, 
  Lock, 
  EyeOff, 
  Eye, 
  Loader2, 
  ShieldCheck, 
  ArrowRight,
  Hotel
} from 'lucide-react'; 
import { useLogin } from '@/hooks/useLogin';

export default function AdminLoginPageContent() {
  const [showPassword, setShowPassword] = useState(false);
  
  // Hook usage for API logic abstraction
  const { login, isLoading } = useLogin();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    // Logic encapsulated in hook
    login({ ...data, role: 'admin' });
  };

  return (
    <div className="flex min-h-screen w-full overflow-hidden font-display bg-[#f6f7f8]">
      {/* Left Side: Corporate Visual */}
      <div 
        className="hidden lg:flex w-1/2 relative bg-cover bg-center overflow-hidden" 
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-12 w-full text-white z-10">
          <div className="mb-6">
            <Hotel className="w-12 h-12 mb-4" />
          </div>
          <h2 className="text-4xl font-bold leading-tight mb-4">Excellence in Hospitality Management</h2>
          <p className="text-lg text-white/80 max-w-md leading-relaxed">
            Secure access for authorized personnel only. Manage bookings, staff, and operations from a central dashboard.
          </p>
          <div className="mt-8 flex items-center gap-2 text-sm text-white/60">
            <ShieldCheck size={16} />
            <span>256-bit SSL Encrypted Connection</span>
          </div>
        </div>
      </div>

      {/* Right Side: Admin Login Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-12 relative bg-white">
        {/* Mobile Header Image Fallback */}
        <div className="lg:hidden w-full h-40 absolute top-0 left-0 bg-cover bg-center z-0" 
             style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069")' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
        </div>

        <div className="w-full max-w-[440px] flex flex-col gap-6 z-10">
          {/* Staff Badge */}
          <div className="flex gap-3 flex-wrap">
            <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-[#137fec]/10 border border-[#137fec]/20 px-4">
              <ShieldCheck className="text-[#137fec] w-4 h-4" />
              <p className="text-[#137fec] text-[10px] font-bold uppercase tracking-wider">Staff Only - Admin Portal</p>
            </div>
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-2">
            <h1 className="text-[#111418] tracking-tight text-[32px] font-bold leading-tight">Hotel Management System</h1>
            <p className="text-[#617589] text-base font-normal">Please enter your credentials to access the admin dashboard.</p>
          </div>

          <form onSubmit={handleFormSubmit} className="flex flex-col gap-5 mt-2">
            {/* Admin ID Field */}
            <div className="flex flex-col w-full gap-2">
              <span className="text-[#111418] text-sm font-medium">Admin ID / Corporate Email</span>
              <div className="relative">
                <input 
                  name="email"
                  type="email" 
                  required
                  placeholder="admin@hotelname.com" 
                  className="w-full h-14 px-4 pl-11 rounded-lg border border-[#dbe0e6] bg-white text-[#111418] focus:ring-2 focus:ring-[#137fec]/50 focus:border-[#137fec] outline-none transition-all"
                />
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#617589] w-5 h-5" />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col w-full gap-2">
              <div className="flex justify-between items-center">
                <span className="text-[#111418] text-sm font-medium">Password</span>
                <a className="text-[#137fec] text-sm font-semibold hover:underline" href="#">Forgot Password?</a>
              </div>
              <div className="relative">
                <input 
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••••" 
                  className="w-full h-14 px-4 pl-11 pr-12 rounded-lg border border-[#dbe0e6] bg-white text-[#111418] focus:ring-2 focus:ring-[#137fec]/50 focus:border-[#137fec] outline-none transition-all"
                />
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#617589] w-5 h-5" />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#617589] hover:text-[#137fec] transition-colors"
                >
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>
            </div>

            {/* Access Button */}
            <button 
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center rounded-lg h-12 bg-[#137fec] text-white hover:bg-blue-600 transition-all shadow-md hover:shadow-lg disabled:opacity-70 mt-2"
            >
              <span className="text-base font-bold tracking-wide">
                {isLoading ? 'Verifying...' : 'Access Dashboard'}
              </span>
              {!isLoading && <ArrowRight className="ml-2 w-4 h-4" />}
              {isLoading && <Loader2 className="ml-2 w-4 h-4 animate-spin" />}
            </button>
          </form>

          {/* Secondary Links */}
          <div className="flex flex-col items-center gap-4 mt-2">
            <div className="w-full h-px bg-[#e5e7eb]"></div>
            <p className="text-[#617589] text-sm font-normal">
              Not an Admin? 
              <a className="text-[#137fec] font-medium hover:underline ml-1" href="/login">Go to Customer Booking</a>
            </p>
            <p className="text-[#9ca3af] text-xs mt-4">© 2025 Hotel Chain Inc. Restricted Access.</p>
          </div>
        </div>
      </div>
    </div>
  );
}