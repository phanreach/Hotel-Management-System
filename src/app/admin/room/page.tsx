"use client";

import React, { useState } from "react";
import DashboardRoomHeader from "@/components/dashboard-room-header";
import DashboardRoomFilter from "@/components/dashboard-room-filter";
import DashboardRoomDataTable from "@/components/dashboard-room-table";
import AdminSidebar from "@/components/shared/admin-sidebar";
import ProtectedRoute from "@/components/protected-route";
import UseRoomQuery from "@/src/hook/use-room-query";
import Pagination from "@/components/pagination";
import AddRoom from "@/components/add-room";
import Cookies from "js-cookie";

export default function DashboardRoom() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { data: rooms, isLoading } = UseRoomQuery(currentPage - 1);
  console.log("Token from cookie:", Cookies.get("accessToken"));
  console.log("Rooms data:", rooms);

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
            <div className="flex items-center justify-between">
              <DashboardRoomHeader />
              <AddRoom />
            </div>

            <section className="bg-white rounded-xl">
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
                  <div className="my-6 flex justify-center border-t border-gray-200 p-3">
                    <Pagination
                      currentPage={currentPage}
                      totalPages={rooms.totalPages}
                      onPageChange={setCurrentPage}
                    />
                  </div>
                </>
              )}
            </section>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
