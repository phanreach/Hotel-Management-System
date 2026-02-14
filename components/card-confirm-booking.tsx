import { Lock } from "lucide-react";
import { useState } from "react";
import { useBookingMutation } from "@/src/hook/use-booking-mutation";

type Props = {
  data: {
    id: number;
    title: string;
    hotelName?: string;
    pricePerNight: number;
    checkIn: string;
    checkOut: string;
    nights: number;
    guests: number;
    taxes?: number;
    discount?: number;
  };
};

export default function CardConfirmBooking({ data }: Props) {
  const { bookRoom, loading, error } = useBookingMutation();
  const [successMessage, setSuccessMessage] = useState("");

  const subtotal = data.pricePerNight * data.nights;
  const taxes = data.taxes ?? 0;
  const discount = data.discount ?? 0;
  const total = subtotal + taxes - discount;

  const handleBooking = async () => {
    if (!data.checkIn || !data.checkOut || data.checkIn >= data.checkOut) {
      return alert("Invalid check-in or check-out date");
    }

    const payload = {
      roomId: data.id,
      checkInDate: data.checkIn,
      checkOutDate: data.checkOut,
    };

    try {
      const res = await bookRoom(payload);
      if (res) setSuccessMessage("Booking completed successfully! 🎉");
    } catch (err) {
      console.error(err);
      alert("Room isn't available for that day");
    }
  };

  return (
    <div className="bg-white rounded-xl border border-[#dbe0e6] shadow-lg overflow-hidden">
      <div className="p-6 flex flex-col gap-6">
        <h3 className="text-lg font-bold">{data.hotelName ?? data.title}</h3>
        <hr />
        <div className="flex justify-between">
          <div>
            <p className="text-xs font-semibold">CHECK-IN</p>
            <p className="font-bold">{data.checkIn}</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-semibold">CHECK-OUT</p>
            <p className="font-bold">{data.checkOut}</p>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-2 text-center text-sm font-medium">
          {data.nights} Nights • {data.guests} Guests
        </div>

        <hr />

        <div className="flex flex-col gap-2 text-sm">
          <div className="flex justify-between">
            <span>
              ${data.pricePerNight} × {data.nights} nights
            </span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Taxes & Fees</span>
            <span>${taxes.toFixed(2)}</span>
          </div>
          <div className="border-t border-dashed my-2" />
          <div className="flex justify-between items-end">
            <span className="font-bold">Grand Total</span>
            <span className="text-2xl font-black">${total.toFixed(2)}</span>
          </div>
        </div>

        {successMessage && (
          <div className="bg-green-100 text-green-800 p-2 rounded text-center font-medium">
            {successMessage}
          </div>
        )}

        {error && (
          <div className="bg-red-100 text-red-800 p-2 rounded text-center font-medium">
            {error}
          </div>
        )}

        <button
          onClick={handleBooking}
          disabled={loading}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-600 disabled:opacity-50"
        >
          <Lock size={20} />
          {loading ? "Booking..." : "Complete Booking"}
        </button>
      </div>
    </div>
  );
}
