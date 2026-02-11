"use client";

import { RoomBase } from "@/src/types/api";
import Icon from "@/src/assets/icon/icon-asset";

interface AmenitiesRoomDetailProps {
  room: RoomBase;
}

const AmenitiesRoomDetail = ({ room }: AmenitiesRoomDetailProps) => {
  return (
    <section>
      <h3 className="text-xl font-bold mb-6">Amenities</h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
        {room.amenities?.map((amenity) => {
          return (
            <div key={amenity.name} className="flex items-start gap-3">
              <Icon
                name={amenity.icon as keyof typeof Icon}
                className="w-4 h-4 text-blue-600"
              />
              <div>
                <p className="font-medium">{amenity.name}</p>
                {/* <p className="text-sm">{amenity.description}</p> */}
              </div>
            </div>
          );
        })}
      </div>

      {room.amenities && room.amenities.length > 6 && (
        <button className="mt-8 text-blue-600 font-bold text-sm hover:underline transition">
          View all {room.amenities.length} amenities
        </button>
      )}
    </section>
  );
};

export default AmenitiesRoomDetail;
