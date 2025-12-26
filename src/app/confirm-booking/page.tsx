import ConfirmBookingHeader from "@/components/confirm-booking-header";
import GuestInformation from "@/components/guest-information";
import Header from "@/components/header";
import React from "react";

export default function ConfirmBooking() {
  return (
    <div className="bg-gray-100">
      <ConfirmBookingHeader />
      <GuestInformation />
    </div>
  );
}
