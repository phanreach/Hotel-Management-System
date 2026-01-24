"use client";

import Link from "next/link";
import type { RoomBase } from "@/src/types/api";
import { FaStar } from "react-icons/fa";

interface RoomDetailHeaderProps {
  room: RoomBase;
}

const RoomDetailHeader = ({ room }: RoomDetailHeaderProps) => {
  return (
    <div className="w-full bg-white px-4 md:px-10 py-6">
      <nav className="flex items-center gap-2 mb-6 text-sm">
        <Link
          href="/"
          className="flex items-center gap-1 text-gray-500 hover:text-gray-700"
        >
          Home
        </Link>
        <span className="text-gray-400 text-xs">›</span>
        <Link href="/home" className="text-gray-500 hover:text-gray-700">
          Rooms
        </Link>
        <span className="text-gray-400 text-xs">›</span>
        <span className="font-bold text-[#111418]">{room.title}</span>
      </nav>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-[#111418] text-3xl md:text-5xl font-black tracking-tight">
            {room.title}
          </h1>

          <div className="flex items-center flex-wrap gap-2 text-gray-500 text-sm md:text-base">
            {room.rating !== undefined && (
              <div className="flex items-center text-yellow-500 gap-1 font-bold">
                <FaStar />
                {room.rating}
              </div>
            )}

            <span>(124 Reviews)</span>
            {room.roomType && (
              <>
                <span className="text-gray-300">•</span>
                <span>{room.roomType}</span>
              </>
            )}

            {room.bedSize && (
              <>
                <span className="text-gray-300">•</span>
                <span>{room.bedSize}</span>
              </>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-xl border border-gray-200 bg-white px-5 h-12 text-sm font-bold text-[#111418] shadow-sm hover:bg-gray-50 transition">
            Edit Details
          </button>

          <button className="rounded-xl border border-gray-200 bg-white px-5 h-12 text-sm font-bold text-red-600 shadow-sm hover:bg-red-50 transition">
            Block Dates
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailHeader;
