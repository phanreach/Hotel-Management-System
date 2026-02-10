"use client";
import CancelBookingPolicy from "@/components/cancel-booking-policy";
import CardConfirmBooking from "@/components/card-confirm-booking";
import ConfirmBookingHeader from "@/components/confirm-booking-header";
import ConfirmBookingPolicy from "@/components/confirm-booking-policy";
import GuestInformation from "@/components/guest-information";
import PaymentMethod from "@/components/payment-method";
import { useRoomByIdQuery } from "@/src/hook/use-room-query-id";
import { useParams, useSearchParams } from "next/navigation";
import { notFound } from "next/navigation";
import { RoomBooking } from "@/src/constant/data-dummy";
import { useState } from "react";
import { Guest } from "@/src/types/api";

type Props = { params: { homeId: string } };

export default function ConfirmBooking() {
  const params = useParams();
   const [guest, setGuest] = useState<Guest>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequest: "",
  });
  const homeId = params?.homeId;
  const searchParams = useSearchParams();

  const checkIn = searchParams.get("checkIn");
const checkOut = searchParams.get("checkOut");
const numberOfNights = Number(searchParams.get("numberOfNights")) || 1;



  if (!homeId || Array.isArray(homeId)) notFound();
  if (!/^\d+$/.test(homeId)) notFound();

  const roomId = Number(homeId);
  const { data: room, isLoading, isError } = useRoomByIdQuery(roomId);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !room) notFound();

  // You can calculate nights, subtotal, taxes, etc. here
  const nights = numberOfNights; // Replace with real check-in/check-out logic
  // const guests = 2;
  const guests = Math.max(1, Number(searchParams.get("guests")) || 1);
  const taxes = 0; // example
  const discount = 0;
  const roomWithBooking = {
    ...room,
    checkIn,
    checkOut,
    nights,
    guests,
    taxes,
    discount,
  };
  console.log("Room with booking data:", roomWithBooking);

  return (
    <div className="p-8 bg-gray-100">
      <ConfirmBookingHeader />

      <div className="mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        <div className="lg:col-span-2 flex flex-col gap-8">
        <GuestInformation guest={guest} onChange={setGuest} />
          {/* <PaymentMethod /> */}
          <CancelBookingPolicy />
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 flex flex-col gap-6">
            <CardConfirmBooking data={roomWithBooking}   guest={guest} />
            <ConfirmBookingPolicy />
          </div>
        </div>
      </div>
    </div>
  );
}
