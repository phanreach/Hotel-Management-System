"use client";

import { useState, useEffect } from "react";
import BookinghistoryStatus from "@/components/booking-history-status";
import BookingHistoryPagination from "@/components/booking-history-pagination";
import useMyBookingsQuery from "@/src/hook/useMyBookings";
import BookingHistoryCard from "@/components/booking-history-card";

export default function BookingHistory() {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<"all">("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const { data: bookings = [], isLoading, error } = useMyBookingsQuery();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const filtered = bookings; // status filter can be added later
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const currentItems = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        <BookinghistoryStatus value={status} onChange={setStatus} />

        {isLoading ? (
          <p className="text-center mt-10">Loading...</p>
        ) : error ? (
          <p className="text-center mt-10 text-red-500">
            {(error as Error).message}
          </p>
        ) : currentItems.length === 0 ? (
          <EmptyState />
        ) : (
          <section className="flex flex-col gap-4">
            {currentItems.map((booking) => (
              <BookingHistoryCard
                key={booking.bookingId ?? booking.roomResponse?.title}
                data={booking}
              />
            ))}
          </section>
        )}

        {!isLoading && !error && totalPages > 1 && (
          <BookingHistoryPagination
            totalPages={totalPages}
            currentPage={currentPage}
            onChange={setCurrentPage}
          />
        )}
      </div>
    </main>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-white border border-dashed border-gray-300 rounded-xl p-10">
      <span className="material-symbols-outlined text-5xl text-gray-400 mb-4">
        hotel
      </span>
      <h3 className="text-lg font-semibold text-gray-900">No bookings yet</h3>
      <p className="text-gray-500 text-sm mt-1">
        When you book a hotel, it will appear here.
      </p>
    </div>
  );
}
