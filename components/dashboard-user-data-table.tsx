import React from "react";
import { Pencil, Trash2 } from "lucide-react";
import { RoomBase } from "@/src/types/api";

const PLACEHOLDER =
  "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";

type RoomTableProps = {
  rooms: {
    content: RoomBase[];
    totalPages: number;
    totalElements: number;
  };
};

export default function DashboardRoomDataTable({ rooms }: RoomTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="p-4 w-14" />
            <th className="p-4 text-xs font-bold text-gray-500 uppercase">
              Room Info
            </th>
            <th className="p-4 text-xs font-bold text-gray-500 uppercase">
              Type
            </th>
            <th className="p-4 text-xs font-bold text-gray-500 uppercase">
              Price / Night
            </th>
            <th className="p-4 text-xs font-bold text-gray-500 uppercase">
              Status
            </th>
            <th className="p-4 text-xs font-bold text-gray-500 uppercase">
              Capacity
            </th>
            <th className="p-4 text-right text-xs font-bold text-gray-500 uppercase">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {rooms.content.map((room) => {
            const image = room.images?.[0]?.image || PLACEHOLDER;

            return (
              <tr key={room.id} className="hover:bg-gray-50">
                <td className="p-4" />

                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={image}
                      alt={room.hotelName}
                      className="size-12 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-900">
                        {room.hotelName}
                      </p>
                      <p className="text-xs text-gray-500">ID: #{room.id}</p>
                    </div>
                  </div>
                </td>

                <td className="p-4 text-sm">{room.roomType}</td>
                <td className="p-4 text-sm">${room.pricePerNight}</td>

                <td className="p-4">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      room.isAvailable
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {room.isAvailable ? "Available" : "Not Available"}
                  </span>
                </td>

                <td className="p-4 text-sm">{room.maxGuests} persons</td>

                <td className="p-4 text-right">
                  <div className="flex justify-end gap-1">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Pencil size={16} />
                    </button>
                    <button className="p-2 hover:bg-red-50 rounded-lg text-red-600">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
