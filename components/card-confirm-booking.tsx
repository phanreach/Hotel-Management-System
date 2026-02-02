import type { RoomWithBooking } from "@/src/types/api";
import { MapPin, Lock } from "lucide-react";

type Props = {
  data: RoomWithBooking;
};

export default function CardConfirmBooking({ data }: Props) {
  const subtotal = data.pricePerNight * data.nights;
  const total = subtotal + data.taxes - data.discount;

  return (
    <div className="bg-white rounded-xl border border-[#dbe0e6] shadow-lg overflow-hidden">
      <div className="w-full h-48 bg-gray-200 relative">
        <div
          className="w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url(${data.images[0]})` }}
        />
        {data.roomType && (
          <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded">
            {data.roomType}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col gap-6">
        <div>
          <h3 className="text-lg font-bold text-[#111418] mb-1">
            {data.hotelName ?? data.title}
          </h3>
          <p className="text-sm text-[#617589] flex items-center gap-1">
            <MapPin size={16} />
            {data.address}
          </p>
        </div>

        <hr />

        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <div>
              <p className="text-xs font-semibold uppercase">Check-in</p>
              {/* <p className="text-sm font-bold">{data.checkIn.date}</p>
              <p className="text-xs">{data.checkIn.time}</p> */}
            </div>

            <div className="text-right">
              <p className="text-xs font-semibold uppercase">Check-out</p>
              {/* <p className="text-sm font-bold">{data.checkOut.date}</p>
              <p className="text-xs">{data.checkOut.time}</p> */}
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-2 text-center text-sm font-medium">
            {data.nights} Nights • {data.guests} Guests
          </div>
        </div>

        <hr />

        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-sm">
            <span>
              ${data.pricePerNight} × {data.nights} nights
            </span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Taxes & Fees</span>
            <span>${data.taxes.toFixed(2)}</span>
          </div>

          <div className="border-t border-dashed my-2" />

          <div className="flex justify-between items-end">
            <span className="font-bold">Grand Total</span>
            <span className="text-2xl font-black">${total.toFixed(2)}</span>
          </div>
        </div>

        <button className="flex w-full h-12 rounded-lg bg-blue-500 text-white font-bold items-center justify-center gap-2 hover:bg-blue-600">
          <Lock size={20} />
          Complete Booking
        </button>
      </div>
    </div>
  );
}
