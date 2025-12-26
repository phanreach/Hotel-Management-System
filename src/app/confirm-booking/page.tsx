import ConfirmBookingHeader from "@/components/confirm-booking-header";
import GuestInformation from "@/components/guest-information";
import Header from "@/components/header";
import PaymentMethod from "@/components/payment-method";
import React from "react";

export default function ConfirmBooking() {
  return (
    <div className="bg-gray-100">
      <ConfirmBookingHeader />
      <div className="lg:col-span-2 flex flex-col gap-8">
        <GuestInformation />

        <PaymentMethod />
      </div>
    </div>
  );
}
