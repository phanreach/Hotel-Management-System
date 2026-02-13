"use client";

import ProtectedRoute from "@/components/protected-route";
import AdminSidebar from "@/components/shared/admin-sidebar";
import { useState } from "react";

export default function DashboardStaff() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <ProtectedRoute allowedRoles={["ADMIN"]}>
      <div className="flex h-screen w-full bg-gray-50 overflow-hidden">
        <AdminSidebar
          activePath="/admin/staff"
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed((prev) => !prev)}
        />

        <main
          className={`flex-1 overflow-y-auto transition-all duration-300 ${
            sidebarCollapsed ? "ml-20" : "ml-64"
          }`}
        >
          <div className="h-full flex items-center justify-center px-6">
            <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L6 21m12-4l3.75 4M3 12h18M4.5 6h15"
                    />
                  </svg>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Staff Management
              </h2>

              <p className="text-gray-500 mb-6">
                This feature is currently under development.
                <br />
                We’re working hard to bring it to you soon.
              </p>

              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
                🚧 Coming Soon
              </span>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
