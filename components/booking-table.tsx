"use client";

import { RoomBooking } from "@/src/types/api";

const PLACEHOLDER =
  "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";

type BookingTableProps = {
  bookings: RoomBooking[];
};

export default function BookingTable({ bookings }: BookingTableProps) {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="p-4 text-xs font-bold text-gray-500 uppercase">
              Guest
            </th>
            <th className="p-4 text-xs font-bold text-gray-500 uppercase">
              Room
            </th>
            <th className="p-4 text-xs font-bold text-gray-500 uppercase">
              Check In
            </th>
            <th className="p-4 text-xs font-bold text-gray-500 uppercase">
              Check Out
            </th>
            <th className="p-4 text-xs font-bold text-gray-500 uppercase">
              Nights
            </th>
            <th className="p-4 text-xs font-bold text-gray-500 uppercase">
              Total Price
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {bookings.map((booking) => (
            <tr key={booking.bookingId} className="hover:bg-gray-50">
              {/* Guest */}
              <td className="p-4">
                <p className="font-semibold text-gray-900">
                  {booking.bookerName}
                </p>
                <p className="text-xs text-gray-500">{booking.bookerEmail}</p>
              </td>

              {/* Room */}
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <img
                    src={booking.roomResponse.images?.[0] || PLACEHOLDER}
                    alt={booking.roomResponse.title}
                    className="w-14 h-14 rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-900">
                      {booking.roomResponse.title}
                    </p>
                    <p className="text-xs text-gray-500">
                      {booking.roomResponse.roomType} •{" "}
                      {booking.roomResponse.bedType}
                    </p>
                  </div>
                </div>
              </td>

              {/* Dates */}
              <td className="p-4 text-sm">
                <p>{booking.checkInDate}</p>
              </td>

              <td className="p-4 text-sm">
                <p>{booking.checkOutDate}</p>
              </td>

              {/* Nights */}
              <td className="p-4 text-sm">{booking.nights} Nights</td>

              {/* Price */}
              <td className="p-4 text-sm font-semibold">
                ${booking.totalPrice}
              </td>

              {/* Status */}
              {/* <td className="p-4">
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                    booking.status === "PENDING"
                      ? "bg-yellow-100 text-yellow-700"
                      : booking.status === "CONFIRMED"
                        ? "bg-green-100 text-green-700"
                        : booking.status === "CANCELLED"
                          ? "bg-red-100 text-red-700"
                          : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {booking.status}
                </span>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
