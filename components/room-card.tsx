"use client";

import { Room } from "@/src/types/api";
import { rooms } from "@/src/constant/data-dummy";
import { Wifi, BedDouble, Utensils } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import Pagination from "./pagination";

export default function RoomCard() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(rooms.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRooms = rooms.slice(startIndex, endIndex);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentRooms.map((room: Room) => (
          <div
            key={room.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group"
          >
            <a href="#" className="block relative overflow-hidden">
              <img
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                src={room.images[0]}
                alt={room.title}
              />

              <div className="absolute flex items-center gap-2 bg-amber-50 top-3 left-3 px-3 py-1 rounded-full">
                <FaStar className="text-yellow-400" />
                <p className="text-sm font-semibold text-gray-800">
                  {room.rating}
                </p>
              </div>
            </a>

            <div className="p-5 flex flex-col flex-1">
              <a href="#" className="block mb-2">
                <h5 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
                  {room.title}
                </h5>
              </a>

              <p className="mb-4 text-sm text-gray-600 line-clamp-3 leading-relaxed flex-1">
                {room.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-4 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-1.5 text-gray-700">
                  <Wifi size={16} className="text-blue-600" />
                  <span className="text-xs font-medium">
                    {room.amenities[0]}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-700">
                  <Utensils size={16} className="text-blue-600" />
                  <span className="text-xs font-medium">
                    {room.amenities[1]}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-700">
                  <BedDouble size={16} className="text-blue-600" />
                  <span className="text-xs font-medium">{room.bedType}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-auto justify-between">
                <div>
                  <p className="text-sm text-gray-600">Per Night</p>
                  <p className="font-bold text-gray-800">
                    {room.pricePerNight} $
                  </p>
                </div>

                <button className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl px-5 py-3 transition-colors duration-200 shadow-md hover:shadow-lg">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
}
