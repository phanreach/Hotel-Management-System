import { bookingDummy } from "@/src/constant/data-dummy";
import { BookingSummary } from "@/src/types/api";
import { MapPin, Lock } from "lucide-react";
import React from "react";

type Props = {
  data?: BookingSummary;
};

export default function CardConfirmBooking({ data = bookingDummy }: Props) {
  const subtotal = data.pricePerNight * data.nights;
  const total = subtotal + data.taxes - data.discount;

  return (
    <div className="bg-white rounded-xl border border-[#dbe0e6] shadow-lg overflow-hidden">
      {/* IMAGE HEADER */}
      <div className="w-full h-48 bg-gray-200 relative">
        <div
          className="w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              data.imageUrl ||
              "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070')",
          }}
        />
        <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">
          {data.roomType}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col gap-6">
        {/* Hotel Info */}
        <div>
          <h3 className="text-lg font-bold text-[#111418] mb-1">
            {data.hotelName}
          </h3>
          <p className="text-sm text-[#617589] flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">
              <MapPin size={16} className="text-grey-600" />
            </span>
            {data.address}
          </p>
        </div>

        <hr className="border-[#f0f2f4]" />

        {/* Dates */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold uppercase text-[#9aa2ac] mb-1">
                Check-in
              </p>
              <p className="text-sm font-bold text-[#111418]">
                {data.checkIn.date}
              </p>
              <p className="text-xs text-[#617589]">{data.checkIn.time}</p>
            </div>

            <div className="h-8 w-[1px] bg-[#f0f2f4] mx-2 self-center" />

            <div className="text-right">
              <p className="text-xs font-semibold uppercase text-[#9aa2ac] mb-1">
                Check-out
              </p>
              <p className="text-sm font-bold text-[#111418]">
                {data.checkOut.date}
              </p>
              <p className="text-xs text-[#617589]">{data.checkOut.time}</p>
            </div>
          </div>

          <div className="bg-[#f6f7f8] rounded-lg p-2 text-center text-sm font-medium text-[#111418]">
            {data.nights} Nights • {data.guests} Guests
          </div>
        </div>

        <hr className="border-[#f0f2f4]" />

        {/* Price */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-sm text-[#617589]">
            <span>
              ${data.pricePerNight} x {data.nights} nights
            </span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-sm text-[#617589]">
            <span>Taxes & Fees</span>
            <span>${data.taxes.toFixed(2)}</span>
          </div>

          <div className="border-t border-dashed border-[#dbe0e6] my-2" />

          <div className="flex justify-between items-end">
            <span className="text-base font-bold text-[#111418]">
              Grand Total
            </span>
            <span className="text-2xl font-black text-[#111418]">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
        <button className="flex w-full cursor-pointer rounded-lg h-12 bg-blue-500 text-white text-base font-bold shadow-lg shadow-primary/30 hover:bg-blue-600 transition-all items-center justify-center gap-2">
          <span className="material-symbols-outlined">
            <Lock size={20} className="text-white" />
          </span>{" "}
          Complete Booking
        </button>
      </div>
    </div>
  );
}
