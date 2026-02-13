"use client";

import React, { useState, useMemo } from "react";
import type { RoomBase } from "@/src/types/api";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

interface RoomDetailBookProps {
  room: RoomBase;
}

export default function RoomDetailBook({ room }: RoomDetailBookProps) {
  const router = useRouter();

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const formatDate = (date: Date) => date.toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState(formatDate(today));
  const [checkOut, setCheckOut] = useState(formatDate(tomorrow));
  const [guests, setGuests] = useState(1);

  const numberOfNights = useMemo(() => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = end.getTime() - start.getTime();
    const nights = Math.ceil(diff / (1000 * 3600 * 24));
    return nights > 0 ? nights : 0;
  }, [checkIn, checkOut]);

  const totalBasePrice = (room.pricePerNight ?? 0) * numberOfNights;

  if (!room) return <div>Room not found</div>;

  const handleBookNow = () => {
    if (numberOfNights <= 0) {
      alert("Check-out date must be after check-in date");
      return;
    }

    const token = Cookies.get("accessToken");

    const bookingUrl =
      `/home/${room.id}/confirm-booking` +
      `?checkIn=${checkIn}` +
      `&checkOut=${checkOut}` +
      `&guests=${guests}` +
      `&numberOfNights=${numberOfNights}`;

    if (!token) {
      router.push(`/auth/login?redirect=${encodeURIComponent(bookingUrl)}`);
      return;
    }

    router.push(bookingUrl);
  };

  return (
    <div className="lg:col-span-4 relative">
      <div className="sticky top-24 bg-white rounded-xl shadow-lg p-6 flex flex-col gap-6">
        {/* PRICE */}
        <div className="flex items-end justify-between border-b pb-4">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black">${room.pricePerNight}</span>
              <span className="text-sm text-gray-500">/ night</span>
            </div>
          </div>

          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">
            Available
          </span>
        </div>

        {/* DATE INPUTS */}
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-600 uppercase">
              Check-in
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="h-10 rounded-lg border px-3 text-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-600 uppercase">
              Check-out
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="h-10 rounded-lg border px-3 text-sm"
            />
          </div>
        </div>

        {/* GUESTS */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-bold text-gray-600 uppercase">
            Guests
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="h-10 rounded-lg border px-3 text-sm"
          >
            {Array.from({ length: room.guests ?? 1 }, (_, i) => i + 1).map(
              (num) => (
                <option key={num} value={num}>
                  {num} Guest{num > 1 ? "s" : ""}
                </option>
              ),
            )}
          </select>
        </div>

        {/* TOTAL */}
        <div className="flex flex-col gap-3 pt-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>
              ${room.pricePerNight} × {numberOfNights} nights
            </span>
            <span>${totalBasePrice}</span>
          </div>

          <div className="h-px bg-gray-200" />

          <div className="flex justify-between items-center">
            <span className="font-bold">Total (USD)</span>
            <span className="text-xl font-black">
              ${numberOfNights > 0 ? totalBasePrice : 0}
            </span>
          </div>
        </div>

        {/* BOOK BUTTON */}
        <button
          onClick={handleBookNow}
          className="h-12 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow cursor-pointer transition-colors"
        >
          Book Now
        </button>

        <p className="text-center text-xs text-gray-400">
          You won&apos;t be charged yet
        </p>
      </div>
    </div>
  );
}
