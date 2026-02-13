"use client";

type Props = {
  value: "all";
  onChange: (value: "all") => void;
};

export default function BookinghistoryStatus({ value, onChange }: Props) {
  return (
    <section className="w-full border-b border-[#dbe0e6]">
      <div className="flex gap-8 overflow-x-auto no-scrollbar">
        <button
          onClick={() => onChange("all")}
          className={`flex flex-col items-center justify-center pb-3 pt-2 min-w-fit border-b-[3px] transition-colors
            border-b-blue-600 text-blue-600
          `}
        >
          <p className="text-sm font-bold">All Bookings</p>
        </button>
      </div>
    </section>
  );
}
