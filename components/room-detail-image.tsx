"use client";

import React from "react";
import { RoomBase } from "@/src/types/api";

interface RoomDetailGalleryProps {
  room: RoomBase;
}

const PLACEHOLDER =
  "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";

export default function RoomDetailGallery({ room }: RoomDetailGalleryProps) {
  const images =
    room.images && room.images.length > 0
      ? room.images
      : [PLACEHOLDER, PLACEHOLDER, PLACEHOLDER];

  const [mainImage, secondImage, thirdImage] = [
    images[0] || PLACEHOLDER,
    images[1] || PLACEHOLDER,
    images[2] || PLACEHOLDER,
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[400px] md:h-[500px] mb-10 overflow-hidden rounded-xl">
      {/* Main image */}
      <div className="col-span-1 md:col-span-3 h-full group relative cursor-pointer overflow-hidden rounded-lg">
        <div
          className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${mainImage})` }}
          aria-label={room.description}
        />
      </div>

      {/* Side images */}
      <div className="col-span-1 flex flex-col gap-4 h-full">
        <div
          className="flex-1 w-full bg-center bg-cover rounded-lg relative group cursor-pointer overflow-hidden"
          style={{ backgroundImage: `url(${secondImage})` }}
          aria-label={room.description}
        />
        <div
          className="flex-1 w-full bg-center bg-cover rounded-lg relative group cursor-pointer overflow-hidden"
          style={{ backgroundImage: `url(${thirdImage})` }}
          aria-label={room.description}
        />
      </div>
    </div>
  );
}
