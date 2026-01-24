"use client";

import React from "react";
import { RoomBase } from "@/src/types/api";

interface RoomDetailGalleryProps {
  room: RoomBase;
}

export default function RoomDetailGallery({ room }: RoomDetailGalleryProps) {
  if (!room.images || room.images.length === 0) return null;

  const [mainImage, secondImage, thirdImage] = room.images;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[400px] md:h-[500px] mb-10 overflow-hidden rounded-xl">
      {mainImage && (
        <div className="col-span-1 md:col-span-3 h-full group relative cursor-pointer overflow-hidden rounded-lg">
          <div
            className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${mainImage})` }}
            aria-label={room.description}
          />
        </div>
      )}

      <div className="col-span-1 flex flex-col gap-4 h-full">
        {secondImage && (
          <div
            className="flex-1 w-full bg-center bg-cover rounded-lg relative group cursor-pointer overflow-hidden"
            style={{ backgroundImage: `url(${secondImage})` }}
            aria-label={room.description}
          />
        )}
        {thirdImage && (
          <div
            className="flex-1 w-full bg-center bg-cover rounded-lg relative group cursor-pointer overflow-hidden"
            style={{ backgroundImage: `url(${thirdImage})` }}
            aria-label={room.description}
          />
        )}
      </div>
    </div>
  );
}
