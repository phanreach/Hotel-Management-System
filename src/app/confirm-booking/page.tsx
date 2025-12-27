import CancelBookingPolicy from "@/components/cancel-booking-policy";
import CardConfirmBooking from "@/components/card-confirm-booking";
import ConfirmBookingHeader from "@/components/confirm-booking-header";
import ConfirmBookingPolicy from "@/components/confirm-booking-policy";
import GuestInformation from "@/components/guest-information";
import Header from "@/components/header";
import PaymentMethod from "@/components/payment-method";
import React from "react";

export default function ConfirmBooking() {
  return (
    <div className="bg-gray-100 px-32 pb-32">
      <ConfirmBookingHeader />

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <GuestInformation />
          <PaymentMethod />
          <CancelBookingPolicy />
        </div>

        {/* RIGHT CARD */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <CardConfirmBooking />
            <ConfirmBookingPolicy />
          </div>
        </div>
      </div>
    </div>
  );
}
