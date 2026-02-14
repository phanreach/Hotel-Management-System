"use client";

import React, { useState } from "react";
import { useDashboardData } from "@/hooks/useDashboard";
import AdminSidebar from "@/components/shared/admin-sidebar";
import ProtectedRoute from "@/components/protected-route";
import { Loader2, Plus } from "lucide-react";
import { RevenueTrends } from "@/components/dashboard/revenue-trends";
import { RoomStatus } from "@/components/dashboard/room-status";
import { RecentReservations } from "@/components/dashboard/recent-room-reservations";
import { StatsGrid } from "@/components/dashboard/stats-grid";

export default function Dashboard() {
  const { data, isLoading, error } = useDashboardData();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-white">
        <Loader2 className="animate-spin text-primary w-10 h-10" />
      </div>
    );
  }

  if (error || !data) return <div>Error loading dashboard.</div>;

  return (
    <ProtectedRoute allowedRoles={["ADMIN"]}>
      <div className="flex h-screen w-full bg-gray-50 overflow-hidden">
        <AdminSidebar
          activePath="/admin/dashboard"
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed((prev) => !prev)}
        />

        <main
          className={`flex-1 overflow-y-auto p-4 md:p-6 transition-all duration-300
    ${sidebarCollapsed ? "md:ml-20" : "md:ml-64"} ml-0`}
        >
          <div className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Overview
                </h1>
                <p className="text-slate-500 text-sm sm:text-base">
                  Dashboard metrics for Dec 2025
                </p>
              </div>
              <button className="flex items-center gap-2 bg-primary text-white px-4 sm:px-5 py-2 sm:h-11 rounded-xl font-bold text-sm sm:text-base">
                <Plus size={20} /> New Reservation
              </button>
            </div>

            <StatsGrid stats={data.stats} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="lg:col-span-2">
                <RevenueTrends chartData={data.revenueHistory} />
              </div>
              <RoomStatus data={data.roomStatus} />
            </div>

            <RecentReservations reservations={data.recentReservations} />
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
