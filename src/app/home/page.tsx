"use client";

import RoomCard from "@/components/room-card";
import Header from "@/components/header";
import PriceRange from "@/components/price-range";
import CategoriesCheck from "@/components/categories-check";
import Amenities from "@/components/amenities";
import UseRoomQuery from "@/src/hook/use-room-query";

export default function Home() {
  const currentPage = 1;
  const { data: rooms, isLoading, isError } = UseRoomQuery(currentPage - 1);

  if (!rooms) return <div>No rooms found</div>;

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError || !rooms) {
    return <div>Error loading rooms.</div>;
  }

  // console.log("Home rooms:", rooms);
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-8">
        <div className="lg:col-span-1 space-y-8">
          <PriceRange />
          <CategoriesCheck />
          <Amenities />
        </div>
        <div className="lg:col-span-3">
          <RoomCard rooms={rooms} />
        </div>
      </div>
    </div>
  );
}
