"use client";
import React, { useState, useMemo } from "react";
import type { RoomBase } from "@/src/types/api";
import Link from "next/link";

interface RoomDetailBookProps {
  room: RoomBase;
}

export default function RoomDetailBook({ room }: RoomDetailBookProps) {
  const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

// format as "YYYY-MM-DD" for backend
const formatDate = (date: Date) =>
  date.toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState(room?.checkinDate ||formatDate(today)
);
  const [checkOut, setCheckOut] = useState(room?.checkoutDate ||  formatDate(tomorrow));
  const [guests, setGuests] = useState(1);

  // const cleaningFee = room?.cleaningFee ?? 50;
  // const serviceFee = room?.serviceFee ?? 40;


  const numberOfNights = useMemo(() => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const difference = end.getTime() - start.getTime();
    const nights = Math.ceil(difference / (1000 * 3600 * 24));
    return nights > 0 ? nights : 0;
  }, [checkIn, checkOut]);

  const totalBasePrice = (room?.pricePerNight ?? 0) * numberOfNights;
  // const totalPrice = totalBasePrice + cleaningFee + serviceFee;
  const totalPrice = totalBasePrice;

  if (!room) return <div>Room not found</div>;

  return (
    <div className="lg:col-span-4 relative">
      <div className="sticky top-24 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-6 flex flex-col gap-6">
        <div className="flex items-end justify-between border-b border-gray-100 pb-4">
          <div>
            <span className="text-sm text-gray-400 line-through">$350</span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black text-[#111418]">
                ${room.pricePerNight}
              </span>
              <span className="text-sm text-gray-500 font-medium">/ night</span>
            </div>
          </div>
          <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold uppercase tracking-wide">
            Available
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                Check-in
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full h-10 rounded-lg border border-gray-300 bg-transparent px-3 text-sm font-medium text-[#111418] focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                Check-out
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full h-10 rounded-lg border border-gray-300 bg-transparent px-3 text-sm font-medium text-[#111418] focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

        {/* Guests selector */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-600 uppercase">
              Guests
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full h-10 rounded-lg border border-gray-300 bg-transparent px-3 text-sm font-medium"
            >
              {Array.from({ length: room.guests ?? 1}, (_, i) => i + 1).map(
                (num) => (
                  <option key={num} value={num}>
                    {num} Guest{num > 1 ? "s" : ""}
                  </option>
                )
              )}
            </select>
          </div>
        </div>
      
        <div className="flex flex-col gap-3 py-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>
              ${room.pricePerNight} x {numberOfNights} nights
            </span>
            <span>${totalBasePrice}</span>
          </div>
          {/* <div className="flex justify-between text-sm text-gray-600">
            <span>Cleaning Fee</span>
            <span>${cleaningFee}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Service Fee</span>
            <span>${serviceFee}</span> */}
          {/* </div> */}
          <div className="h-px bg-gray-200 my-1"></div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-[#111418]">Total (USD)</span>
            <span className="font-black text-xl text-[#111418]">
              {/* ${numberOfNights > 0 ? totalPrice : cleaningFee + serviceFee} */}
              ${numberOfNights > 0 ? totalPrice : 0}
            </span>
          </div>
        </div>

        <Link
          href={`/home/${room.id}/confirm-booking?checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}&numberOfNights=${numberOfNights}`}
          className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2 text-base"
        >
          Book Now
        </Link>
        <p className="text-center text-xs text-gray-400">
          You won&apos;t be charged yet
        </p>
      </div>
    </div>
  );
}
