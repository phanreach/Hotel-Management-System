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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const NAV_ITEMS = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/admin/dashboard" },
  { label: "Rooms", icon: Bed, href: "/admin/room" },
  { label: "Bookings", icon: BookOpen, href: "/admin/booking" },
  { label: "Guests", icon: Group, href: "/dashboard-user" },
  { label: "Staff", icon: BadgeCheck, href: "/staff" },
  { label: "Settings", icon: Settings, href: "/settings" },
];

interface AdminSidebarProps {
  activePath?: string;
  collapsed: boolean;
  onToggle: () => void;
}

export default function AdminSidebar({
  activePath,
  collapsed,
  onToggle,
}: AdminSidebarProps) {
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
    <aside
      className={`fixed top-0 left-0 z-50 flex flex-col h-screen border-r border-slate-200 bg-white transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-5 border-b border-slate-200">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
            H
          </div>

          {!collapsed && (
            <div className="flex flex-col">
              <h1 className="text-base font-bold">HMS Admin</h1>
            </div>
          )}
        </div>

        <button
          onClick={onToggle}
          className="text-slate-500 hover:text-primary cursor-pointer transition-colors hover:bg-gray-100 p-2 rounded-lg"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="flex-1 flex flex-col p-3 gap-1 overflow-y-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = activePath === item.href;

          return (
            <a
              key={item.label}
              href={item.href}
              title={collapsed ? item.label : undefined}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                isActive
                  ? "bg-gray-100 font-bold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-primary"
              }`}
            >
              <item.icon size={22} />
              {!collapsed && <span className="text-sm">{item.label}</span>}
            </a>
          );
        })}
      </nav>

      <div className="px-3 py-4 border-t border-slate-200">
        <button
          onClick={handleLogout}
          title={collapsed ? "Logout" : undefined}
          className="flex items-center w-full justify-start px-3 py-3 rounded-xl text-sm font-medium hover:bg-gray-900 hover:text-white transition-all duration-200"
        >
          <LogOut size={20} />
          {!collapsed && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </aside>
  );
}
