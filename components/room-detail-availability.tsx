"use client";

import { useState } from "react";

export default function RoomDetailAvailability() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthName = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <section className="w-full ">
      <h3 className="text-xl font-bold mb-6">Availability</h3>

      <div className="bg-white shadow-md rounded-xl p-8 max-w-6xl mx-auto">
        <div className="flex justify-between mb-6">
          <h4 className="font-bold text-lg">{monthName}</h4>

          <div className="flex gap-2">
            <button onClick={prevMonth}>◀</button>
            <button onClick={nextMonth}>▶</button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-3 text-center text-sm font-semibold text-gray-500 mb-3">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-3">
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={i} />
          ))}

          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;

            const isSelected =
              selectedDate?.getDate() === day &&
              selectedDate?.getMonth() === month &&
              selectedDate?.getFullYear() === year;

            return (
              <button
                key={day}
                onClick={() => setSelectedDate(new Date(year, month, day))}
                className={`p-3 rounded-lg text-center
                  ${
                    isSelected ? "bg-blue-600 text-white" : "hover:bg-blue-50"
                  }`}
              >
                {day}
              </button>
            );
          })}
        </div>

        {selectedDate && (
          <p className="mt-4 text-sm">
            Selected: <b>{selectedDate.toDateString()}</b>
          </p>
        )}
      </div>
    </section>
  );
}
