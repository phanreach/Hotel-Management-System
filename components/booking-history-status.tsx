"use client";

import { BookingStatus } from "@/src/types/api";

type Props = {
  value: BookingStatus | "all";
  onChange: (value: BookingStatus | "all") => void;
};

const tabs: { label: string; value: Props["value"] }[] = [
  { label: "All Bookings", value: "all" },
  // { label: "Upcoming", value: "upcoming" },
  // { label: "Completed", value: "completed" },
  // { label: "Cancelled", value: "cancelled" },
];

export default function BookinghistoryStatus({ value, onChange }: Props) {
  return (
    <section className="w-full border-b border-[#dbe0e6]">
      <div className="flex gap-8 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => {
          const active = value === tab.value;

          return (
            <button
              key={tab.value}
              onClick={() => onChange(tab.value)}
              className={`flex flex-col items-center justify-center pb-3 pt-2 min-w-fit border-b-[3px] transition-colors
                ${
                  active
                    ? "border-b-blue-600 text-blue-600"
                    : "border-b-transparent text-gray-500 hover:text-blue-600"
                }
              `}
            >
              <p className="text-sm font-bold">{tab.label}</p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
