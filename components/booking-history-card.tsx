// src/components/booking-history-card.tsx
"use client";

import type { RoomBooking } from "@/src/types/api";
import { useCancelBooking } from "@/src/hook/use-cancel-booking";

export type Props = {
  data: RoomBooking;
};

export default function BookingHistoryCard({ data }: Props) {
  const cancelMutation = useCancelBooking();

  const handleCancel = () => {
    if (!confirm("Are you sure you want to cancel this booking?")) return;
    if (!data.bookingId) return;
    cancelMutation.mutate(data.bookingId);
  };

  const imageUrl = data.roomResponse.images?.[0] ?? "/placeholder.jpg";

  return (
    <div className="flex flex-col md:flex-row gap-4 rounded-xl bg-white p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="relative w-full md:w-64 aspect-video md:aspect-[4/3] rounded-lg overflow-hidden shrink-0">
        <img
          src={imageUrl}
          alt={data.roomResponse.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-gray-900 text-xl font-bold">
            {data.roomResponse.title}
          </h3>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-500 text-sm">
            <span>
              {data.checkInDate} – {data.checkOutDate} ({data.nights} Nights)
            </span>
            <span>• {data.roomResponse.bedType ?? "Standard Bed"}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-gray-100">
          <p className="text-gray-900 text-lg font-bold">
            ${data.totalPrice?.toFixed(2)}
            <span className="text-sm font-normal text-gray-500"> / Total</span>
          </p>

          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={handleCancel}
              className="flex-1 md:flex-none h-10 px-4 rounded-lg bg-red-600 text-white text-sm font-bold hover:bg-red-700 disabled:opacity-50"
            >
              Cancel Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
