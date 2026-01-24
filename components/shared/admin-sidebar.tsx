"use client";

import React from 'react';
import { 
  LayoutDashboard, Bed, BookOpen, Group, BadgeCheck, Settings, LogOut 
} from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard', active: true },
  { label: 'Rooms', icon: Bed, href: '/dashboard-room' },
  { label: 'Bookings', icon: BookOpen, href: '/bookings' },
  { label: 'Guests', icon: Group, href: '/dashboard-user' },
  { label: 'Staff', icon: BadgeCheck, href: '/staff' },
  { label: 'Settings', icon: Settings, href: '/settings' },
];

export const AdminSidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-slate-200 bg-white h-screen shrink-0 overflow-y-auto">
      <div className="flex flex-col h-full justify-between p-4">
        <div className="flex flex-col gap-6">
          {/* Brand */}
          <div className="flex gap-3 items-center px-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
              <span className="font-bold text-xl">H</span>
            </div>
            <div className="flex flex-col overflow-hidden">
              <h1 className="text-base font-bold leading-none">HMS Admin</h1>
              <p className="text-slate-500 text-xs">Hotel Management</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  item.active 
                    ? 'bg-primary/10 text-primary font-bold' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
                }`}
              >
                <item.icon size={22} />
                <span className="text-sm">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Logout */}
        <div className="border-t border-slate-100 pt-4">
          <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors">
            <LogOut size={22} />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};