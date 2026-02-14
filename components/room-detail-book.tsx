import React, { useState, useMemo } from "react";
import type { RoomBase } from "@/src/types/api";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useRoomAvailability } from "@/src/hook/use-room-availability";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface RoomDetailBookProps {
  room: RoomBase;
}

export default function RoomDetailBook({ room }: RoomDetailBookProps) {
  const router = useRouter();
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const [checkIn, setCheckIn] = useState<Date>(today);
  const [checkOut, setCheckOut] = useState<Date>(tomorrow);
  const [guests, setGuests] = useState(1);

  const { data: availability } = useRoomAvailability(room.id);
  const bookedDates: Date[] = (availability?.bookedDates || []).map(
    (d) => new Date(d),
  );

  const isSameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  const isDateBooked = (date: Date) => {
    return bookedDates.some((b) => isSameDay(b, date));
  };

  const numberOfNights = useMemo(() => {
    const diff = checkOut.getTime() - checkIn.getTime();
    const nights = Math.ceil(diff / (1000 * 3600 * 24));
    return nights > 0 ? nights : 0;
  }, [checkIn, checkOut]);

  const totalBasePrice = (room.pricePerNight ?? 0) * numberOfNights;

  const handleBookNow = () => {
    if (numberOfNights <= 0) {
      alert("Check-out date must be after check-in date");
      return;
    }

    const token = Cookies.get("accessToken");
    const bookingUrl =
      `/home/${room.id}/confirm-booking` +
      `?checkIn=${checkIn.toISOString().split("T")[0]}` +
      `&checkOut=${checkOut.toISOString().split("T")[0]}` +
      `&guests=${guests}&numberOfNights=${numberOfNights}`;

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

          <span
            className={`px-2 py-1 rounded text-xs font-bold ${
              numberOfNights > 0
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {numberOfNights > 0 ? "Available" : "Unavailable"}
          </span>
        </div>

        {/* DATE PICKER */}
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-600 uppercase">
              Check-in
            </label>
            <DatePicker
              selected={checkIn}
              onChange={(date: Date | null) => {
                if (!date) return;
                setCheckIn(date);
                if (date >= checkOut) {
                  const newCheckOut = new Date(date);
                  newCheckOut.setDate(date.getDate() + 1);
                  setCheckOut(newCheckOut);
                }
              }}
              minDate={today}
              filterDate={(date) => !isDateBooked(date)} // now properly blocks booked dates
              className="h-10 rounded-lg border px-3 text-sm w-full"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-600 uppercase">
              Check-out
            </label>
            <DatePicker
              selected={checkOut}
              onChange={(date: Date | null) => {
                if (!date) return;
                setCheckOut(date);
              }}
              minDate={new Date(checkIn.getTime() + 24 * 60 * 60 * 1000)}
              filterDate={(date) => !isDateBooked(date) && date > checkIn}
              className="h-10 rounded-lg border px-3 text-sm w-full"
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
          disabled={numberOfNights <= 0}
          className={`h-12 w-full text-white font-bold rounded-lg shadow transition-colors ${
            numberOfNights <= 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
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
