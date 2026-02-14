"use client";

import { useState } from "react";
import { useRoomAvailability } from "@/src/hook/use-room-availability";

type Props = {
  roomId: number;
};

export default function RoomDetailAvailability({ roomId }: Props) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthName = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Fetch booked dates
  const { data, isLoading } = useRoomAvailability(roomId);

  const bookedDates: Date[] = (data?.bookedDates || []).map((d) => new Date(d));

  const isDateBooked = (date: Date) =>
    bookedDates.some(
      (booked) =>
        booked.getFullYear() === date.getFullYear() &&
        booked.getMonth() === date.getMonth() &&
        booked.getDate() === date.getDate(),
    );

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDate(null);
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDate(null);
  };

  return (
    <section className="w-full">
      <h3 className="text-xl font-bold mb-6">Availability</h3>

      <div className="bg-white shadow-md rounded-xl p-8">
        {/* Header */}
        <div className="flex justify-between mb-6">
          <h4 className="font-bold text-lg">{monthName}</h4>
          <div className="flex gap-2">
            <button onClick={prevMonth}>◀</button>
            <button onClick={nextMonth}>▶</button>
          </div>
        </div>

        {/* Weekdays */}
        <div className="grid grid-cols-7 gap-3 text-center text-sm font-semibold text-gray-500 mb-3">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {/* Calendar */}
        <div className="grid grid-cols-7 gap-3">
          {/* Empty spaces for first day */}
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={i} />
          ))}

          {/* Days */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const date = new Date(year, month, day);
            const isSelected =
              selectedDate?.toDateString() === date.toDateString();
            const disabled = isDateBooked(date);

            return (
              <button
                key={day}
                onClick={() => !disabled && setSelectedDate(date)}
                disabled={disabled}
                className={`p-3 rounded-lg text-center transition
                  ${isSelected ? "bg-blue-600 text-white" : ""}
                  ${disabled ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "hover:bg-blue-50"}
                `}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Availability Status */}
        {selectedDate && (
          <div className="mt-4 text-sm">
            {isLoading ? (
              <span className="text-gray-500">Checking availability...</span>
            ) : isDateBooked(selectedDate) ? (
              <span className="text-red-600 font-semibold">
                ❌ Not available on {selectedDate.toDateString()}
              </span>
            ) : (
              <span className="text-green-600 font-semibold">
                ✅ Available on {selectedDate.toDateString()}
              </span>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
