import React from "react";

export default function ConfirmBookingHeader() {
  return (
    <div>
      {/* page heading */}
      <div className="flex flex-col gap-2 mb-8 px-4">
        <h1 className="text-[#111418] text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
          Review and Confirm Your Stay
        </h1>
        <p className="text-[#617589] dark:text-gray-400 text-base font-normal leading-normal">
          Please review your booking details and enter guest information to
          finalize your reservation.
        </p>
      </div>
    </div>
  );
}
