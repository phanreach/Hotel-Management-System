"use client";

import React, { useState } from "react";
import DashboardRoomHeader from "@/components/dashboard-room-header";
import DashboardRoomFilter from "@/components/dashboard-room-filter";
import DashboardRoomDataTable from "@/components/dashboard-user-data-table";
import DashboardRoomFooter from "@/components/dashboard-room-footer";
import AdminSidebar from "@/components/shared/admin-sidebar";
import ProtectedRoute from "@/components/protected-route";
import UseRoomQuery from "@/src/hook/use-room-query";
import Pagination from "@/components/pagination";

export default function DashboardRoom() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { data: rooms, isLoading } = UseRoomQuery(currentPage - 1);

  return (
    <ProtectedRoute allowedRoles={["ADMIN"]}>
      <div className="flex h-screen w-full bg-gray-50 overflow-hidden">
        <AdminSidebar
          activePath="/admin/room"
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed((prev) => !prev)}
        />

        <main
          className={`flex-1 overflow-y-auto transition-all duration-300 ${
            sidebarCollapsed ? "ml-20" : "ml-64"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-8">
            <DashboardRoomHeader />

            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <DashboardRoomFilter />
            </section>

            <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {isLoading || !rooms ? (
                <div className="p-8 text-center text-gray-500">
                  Loading rooms…
                </div>
              ) : (
                <>
                  <DashboardRoomDataTable rooms={rooms} />

                  <div className="mt-6 flex justify-center">
                    <Pagination
                      currentPage={currentPage}
                      totalPages={rooms.totalPages}
                      onPageChange={setCurrentPage}
                    />
                  </div>
                </>
              )}
            </section>

            <DashboardRoomFooter />
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
