"use client";

import RoomCard from "@/components/room-card";
import Header from "@/components/header";
import PriceRange from "@/components/price-range";
import CategoriesCheck from "@/components/categories-check";
import UseRoomQuery from "@/src/hook/use-room-query";
import HomePagination from "@/components/home-pagination";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1);
  const { data: rooms, isLoading, isError } = UseRoomQuery(page - 1, 6);

  if (isLoading) return <div>Loading...</div>;
  if (!rooms || isError) return <div>No rooms found or error loading.</div>;

  return (
    <div className="bg-gray-100">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-8">
        <div className="lg:col-span-1 space-y-8">
          <PriceRange />
          <CategoriesCheck />
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
