"use client";

import ProtectedRoute from "@/components/protected-route";
import AdminSidebar from "@/components/shared/admin-sidebar";
import { useState } from "react";

export default function DashboardBooking() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <ProtectedRoute allowedRoles={["ADMIN"]}>
      <div className="flex h-screen w-full bg-gray-50 overflow-hidden">
        <AdminSidebar
          activePath="/admin/booking"
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed((prev) => !prev)}
        />

        <main
          className={`flex-1 overflow-y-auto transition-all duration-300 ${
            sidebarCollapsed ? "ml-20" : "ml-64"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-8"></div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
