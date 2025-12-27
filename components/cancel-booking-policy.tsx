import React from "react";
import { Info } from "lucide-react";

export default function CancelBookingPolicy() {
  return (
    <div>
      <div className="bg-blue-50  rounded-xl border border-blue-100 p-6 flex gap-4 items-start">
        <span className="material-symbols-outlined text-primary mt-1">
          <Info size={24} className="text-blue-600" />
        </span>
        <div>
          <h4 className="text-base font-bold text-[#111418] mb-1">
            Cancellation Policy
          </h4>
          <p className="text-sm text-[#617589] leading-relaxed">
            Free cancellation until 48 hours before check-in (Oct 10).
            Cancellations made after this time will be charged for the first
            night of the stay. No-shows are non-refundable.
          </p>
        </div>
      </div>
    </div>
  );
}
