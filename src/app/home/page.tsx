"use client";

import RoomCard from "@/components/room-card";
import Header from "@/components/header";
import PriceRange from "@/components/price-range";
import CategoriesCheck from "@/components/categories-check";
import Amenities from "@/components/amenities";
import UseRoomQuery from "@/src/hook/use-room-query";
import HomePagination from "@/components/home-pagination";
import { useState } from "react";

export default function Home() {
    const [page, setPage] = useState(1); // UI starts from 1
  const { data: rooms, isLoading, isError } = UseRoomQuery(page - 1, 6);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!rooms) return <div>No rooms found</div>;

  
  if (isError || !rooms) {
    return <div>Error loading rooms.</div>;
  }

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
      <HomePagination
        totalPages={rooms.totalPages}
        currentPage={page}
        onChange={(newPage) => setPage(newPage)}
      />
    </div>
  );
}
