"use client";

import React from 'react';
import { Search, Bell, HelpCircle, Menu } from 'lucide-react';

export const AdminHeader = () => {
  return (
    <header className="flex items-center justify-between h-16 border-b border-slate-200 bg-white px-6 shrink-0 sticky top-0 z-20">
      <div className="flex items-center gap-4 lg:gap-8">
        <button className="md:hidden p-2 text-slate-600">
          <Menu size={24} />
        </button>
        <h2 className="text-slate-900 text-lg font-bold hidden sm:block">Dashboard</h2>
        
        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-slate-100 rounded-lg px-3 py-2 w-64 lg:w-96">
          <Search size={18} className="text-slate-400" />
          <input 
            className="bg-transparent border-none focus:ring-0 text-sm w-full ml-2" 
            placeholder="Search reservations..." 
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-lg relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </button>
          <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-lg">
            <HelpCircle size={20} />
          </button>
        </div>
        
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <div className="hidden lg:flex flex-col items-end">
            <span className="text-sm font-bold text-slate-900 leading-none">Admin User</span>
            <span className="text-xs text-slate-500">Manager</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white" />
        </div>
      </div>
    </header>
  );
};