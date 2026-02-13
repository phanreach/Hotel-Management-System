"use client";

import ProtectedRoute from "@/components/protected-route";
import AdminSidebar from "@/components/shared/admin-sidebar";
import { useState } from "react";
import useBookingQuery from "@/src/hook/use-booking-query";
import BookingTable from "@/components/booking-table";

export default function DashboardBooking() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { data: bookings, isLoading } = useBookingQuery();

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
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-8">
            {/* Header */}
            <div>
              <h1 className="text-gray-900 text-3xl md:text-4xl font-black">
                Booking Management
              </h1>
              <p className="text-gray-500">
                Manage bookings, guest information, and reservation details.
              </p>
            </div>

            {isLoading ? (
              <p className="text-gray-500 text-center py-10">
                Loading bookings...
              </p>
            ) : bookings && bookings.length > 0 ? (
              <BookingTable bookings={bookings} />
            ) : (
              <p className="text-gray-500 text-center py-10">
                No bookings found.
              </p>
            )}
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
