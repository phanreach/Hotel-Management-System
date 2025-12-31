"use client";

import { statusConfig } from "@/src/constant/data-dummy";
import { BookingSummary } from "@/src/types/api";

type Props = {
  data: BookingSummary;
};

export default function BookingHistoryCard({ data }: Props) {
  const total = data.nights * data.pricePerNight + data.taxes - data.discount;

  const status = statusConfig[data.status];

  return (
    <div className="flex flex-col md:flex-row gap-4 rounded-xl bg-white p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="relative w-full md:w-64 aspect-video md:aspect-[4/3] rounded-lg overflow-hidden shrink-0">
        <img
          src={data.imageUrl}
          alt={data.hotelName}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        <span
          className={`absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded-md shadow-sm ${status.badge}`}
        >
          {status.label}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between gap-4">
        <div className="space-y-1">
          <p className="text-blue-600 text-sm font-bold uppercase">
            {data.status} • #BK-7829
          </p>

          <h3 className="text-gray-900 text-xl font-bold">{data.hotelName}</h3>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-500 text-sm">
            <span>
              {data.checkIn.date} – {data.checkOut.date} ({data.nights} Nights)
            </span>
            <span>• {data.roomType}</span>
          </div>

          <p className="text-gray-500 text-sm">{data.address}</p>
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-gray-100">
          <p className="text-gray-900 text-lg font-bold">
            ${total.toFixed(2)}
            <span className="text-sm font-normal text-gray-500"> / Total</span>
          </p>

          <div className="flex gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none h-10 px-4 rounded-lg border border-gray-200 text-gray-800 text-sm font-bold hover:bg-gray-50">
              View Details
            </button>

            <button className="flex-1 md:flex-none h-10 px-6 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 shadow-sm">
              {status.primaryAction}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
