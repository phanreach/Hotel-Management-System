"use client";

import Link from "next/link";
import { FaStar } from "react-icons/fa";
import Icon from "@/src/assets/icon/icon-asset";
import { RoomBase } from "@/src/types/api";

type RoomCardProps = {
  rooms: {
    content: RoomBase[];
    totalPages: number;
    totalElements: number;
  };
};

export default function RoomCard({ rooms }: RoomCardProps) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.content.map((room) => (
          <Link
            key={room.id}
            href={`/home/${room.id}`}
            className="block bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
          >
            <div className="relative overflow-hidden group">
              <img
                src={
                  room.images[0]?.images ||
                  "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                }
                alt={room.title}
                className="w-full h-56 sm:h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {room.rating !== undefined && (
                <div className="absolute top-3 left-3 flex items-center gap-1 text-yellow-500 font-semibold bg-white/90 px-2 py-1 rounded">
                  <FaStar className="w-4 h-4" />
                  <span className="text-sm">{room.rating}</span>
                </div>
              )}
            </div>

            <div className="p-4 sm:p-5 flex flex-col flex-1 space-y-6">
              <h5 className="text-lg sm:text-xl font-bold mb-2 line-clamp-2">
                {room.title}
              </h5>

              <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3 flex-1">
                {room.description}
              </p>

              <div className="flex gap-4 items-center justify-between">
                {room.amenities?.slice(0, 3).map((amenity) => (
                  <div key={amenity.name} className="flex gap-3  text-gray-700">
                    <Icon
                      name={amenity.icon as keyof typeof Icon}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-sm font-medium">{amenity.name}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mt-auto">
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Per Night</p>
                  <p className="text-sm sm:text-base font-bold">
                    {room.pricePerNight} $
                  </p>
                </div>

                <span className="bg-blue-600 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-xl font-semibold hover:bg-blue-700 transition text-sm sm:text-base cursor-pointer">
                  Book Now
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* <div className="mt-8 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={rooms.totalPages}
          onPageChange={setCurrentPage}
        />
      </div> */}
    </>
  );
}
