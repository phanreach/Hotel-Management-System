"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { useRoomByIdQuery } from "@/src/hook/use-room-query-id";
import RoomDetailHeader from "@/components/room-detail-header";
import RoomDetailGallery from "@/components/room-detail-image";
import DescriptionRoomDetail from "@/components/room-detail-description";
import AmenitiesRoomDetail from "@/components/room-detail-amenities";
import RoomDetailBook from "@/components/room-detail-book";
import RoomDetailAvailability from "@/components/room-detail-availability";
import RoomDetailReview from "@/components/room-detail-review";

export default function RoomDetailPage() {
  const params = useParams();
  const homeId = params?.homeId;
  if (!homeId || Array.isArray(homeId)) {
    notFound();
  }
  if (!/^\d+$/.test(homeId)) {
    notFound();
  }
  const roomId = Number(homeId);
  const { data: room, isLoading, isError } = useRoomByIdQuery(roomId);
  if (isLoading) return <div>Loading...</div>;
  if (isError || !room) notFound();

  return (
    <div className="bg-gray-100">
      <RoomDetailHeader room={room} />
      <div className="px-8 space-y-8">
        <RoomDetailGallery room={room} />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-8">
            <DescriptionRoomDetail room={room} />
            <AmenitiesRoomDetail room={room} />
            <RoomDetailAvailability />
            <RoomDetailReview />
          </div>
          <div className="lg:col-span-1">
            <RoomDetailBook room={room} />
          </div>
        </div>
      </div>
    </div>
  );
}
