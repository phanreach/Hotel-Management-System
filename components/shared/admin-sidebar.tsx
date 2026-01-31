"use client";

import React from "react";
import {
  LayoutDashboard,
  Bed,
  BookOpen,
  Group,
  BadgeCheck,
  Settings,
  LogOut,
} from "lucide-react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const NAV_ITEMS = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Rooms", icon: Bed, href: "/dashboard-room" },
  { label: "Bookings", icon: BookOpen, href: "/bookings" },
  { label: "Guests", icon: Group, href: "/dashboard-user" },
  { label: "Staff", icon: BadgeCheck, href: "/staff" },
  { label: "Settings", icon: Settings, href: "/settings" },
];

interface AdminSidebarProps {
  activePath?: string; // current page path
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ activePath }) => {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    Cookies.remove("expiration");
    Cookies.remove("role");
    Cookies.remove("email");
    Cookies.remove("user_id");

    router.push("/auth/login");
  };

  return (
    <aside className="fixed top-0 left-0 z-50 flex flex-col w-64 h-screen border-r border-slate-200 bg-white">
      {/* Brand */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-slate-200">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
          H
        </div>
        <div className="flex flex-col">
          <h1 className="text-base font-bold">HMS Admin</h1>
          <p className="text-xs text-slate-500">Hotel Management</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col p-4 gap-1 overflow-y-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = activePath === item.href;
          return (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary font-bold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-primary"
              }`}
            >
              <item.icon size={22} />
              <span className="text-sm">{item.label}</span>
            </a>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="px-4 py-4 border-t border-slate-200">
        <button
          onClick={handleLogout}
          className="flex items-center w-full justify-start px-4 py-3 rounded-xl text-sm font-medium text-black hover:bg-gray-900 hover:text-white transition-all duration-200"
        >
          <LogOut size={20} />
          <span className="ml-3">Logout</span>
        </button>
      </div>
    </aside>
  );
};
