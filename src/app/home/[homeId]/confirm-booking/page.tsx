import CancelBookingPolicy from "@/components/cancel-booking-policy";
import CardConfirmBooking from "@/components/card-confirm-booking";
import ConfirmBookingHeader from "@/components/confirm-booking-header";
import ConfirmBookingPolicy from "@/components/confirm-booking-policy";
import GuestInformation from "@/components/guest-information";
import PaymentMethod from "@/components/payment-method";
import { rooms } from "@/src/constant/data-dummy";
import { notFound } from "next/navigation";
import { RoomBooking } from "@/src/constant/data-dummy";

type Props = { params: { homeId: string } };

export default async function ConfirmBooking({ params }: Props) {
  const { homeId } = await params;

  const roomId = Number(homeId);
  if (isNaN(roomId)) notFound();

  const room = rooms.find((r) => r.id === roomId);
  if (!room) notFound();

  return (
    <div className="p-8 bg-gray-100">
      <ConfirmBookingHeader />

      <div className="mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <GuestInformation />
          <PaymentMethod />
          <CancelBookingPolicy />
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 flex flex-col gap-6">
            {/* <CardConfirmBooking data={RoomBooking} /> */}
            <ConfirmBookingPolicy />
          </div>
        </div>
      </div>
    </div>
  );
}
