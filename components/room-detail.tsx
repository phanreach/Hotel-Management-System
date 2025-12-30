"use client";

import { rooms } from "@/src/constant/data-dummy";
import { Room } from "@/src/types/api";
import { useParams } from "next/navigation";

export default function RoomDetail() {
  const { homeId } = useParams<{ homeId: string }>();

  const room = rooms.find((room: Room) => room.id === Number(homeId));

  console.log("room", room);

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{room.title}</h1>
    </div>
  );
}
