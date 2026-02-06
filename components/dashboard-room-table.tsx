import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";
import { RoomBase } from "@/src/types/api";
import useDeleteRoom from "@/src/hook/use-delete-room";

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
  const { mutate: deleteRoom } = useDeleteRoom();

  const handleDeleteRoom = (roomId: number) => {
    if (!roomId) return;
    if (!confirm("Are you sure you want to delete this room?")) return;

    deleteRoom(roomId);
  };

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
          {rooms.content.map((room) => (
            <tr key={room.id} className="hover:bg-gray-50">
              <td className="p-4" />
              <td className="p-4 flex items-center gap-3">
                <img
                  src={room.images?.[0] || PLACEHOLDER}
                  alt={room.title}
                  width={48}
                  height={48}
                  className="rounded-lg object-cover"
                  priority={true}
                />
                <p className="font-bold text-gray-900">{room.title}</p>
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

              <td className="p-4 text-sm">{room.maxGuest} persons</td>

              <td className="p-4 text-right">
                <div className="flex justify-end gap-1">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Pencil size={16} />
                  </button>
                  <button
                    className="p-2 hover:bg-red-50 rounded-lg text-red-600"
                    onClick={() => handleDeleteRoom(room.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
