"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useParams, useSearchParams, notFound } from "next/navigation";

import ConfirmBookingHeader from "@/components/confirm-booking-header";
import CancelBookingPolicy from "@/components/cancel-booking-policy";
import CardConfirmBooking from "@/components/card-confirm-booking";
import BookerInformation, { BookerForm } from "@/components/booker-information";

import { useRoomByIdQuery } from "@/src/hook/use-room-query-id";

export default function ConfirmBooking() {
  const params = useParams();
  const searchParams = useSearchParams();

  const [booker, setBooker] = useState<BookerForm>({
    bookerName: "",
    bookerEmail: "",
    bookerPhone: "",
    bookerSpecialRequest: "",
  });

  // read user info from cookie
  useEffect(() => {
    const firstName = Cookies.get("first_name") ?? "";
    const lastName = Cookies.get("last_name") ?? "";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBooker({
      bookerName: `${firstName} ${lastName}`.trim(),
      bookerEmail: Cookies.get("email") ?? "",
      bookerPhone: Cookies.get("phone") ?? "",
      bookerSpecialRequest: "",
    });
  }, []);

  // Room ID
  const homeId = params?.homeId;
  if (!homeId || Array.isArray(homeId)) notFound();
  const roomId = Number(homeId);
  if (isNaN(roomId)) notFound();

  const { data: room, isLoading, isError } = useRoomByIdQuery(roomId);
  if (isLoading) return <div>Loading...</div>;
  if (isError || !room) notFound();

  const checkIn = searchParams.get("checkIn") || "";
  const checkOut = searchParams.get("checkOut") || "";
  const guests = Number(searchParams.get("guests")) || 1;

  const nights =
    checkIn && checkOut
      ? Math.max(
          1,
          Math.floor(
            (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
              (1000 * 60 * 60 * 24),
          ),
        )
      : 1;

  const bookingSummary = {
    id: room.id,
    title: room.title,
    hotelName: room.hotelName,
    pricePerNight: room.pricePerNight,
    checkIn,
    checkOut,
    nights,
    guests,
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <ConfirmBookingHeader />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        <div className="lg:col-span-2 space-y-6">
          <BookerInformation booker={booker} />
          <CancelBookingPolicy />
        </div>
        <div className="lg:col-span-1">
          <CardConfirmBooking data={bookingSummary} />
        </div>
      </div>
    </div>
  );
}
