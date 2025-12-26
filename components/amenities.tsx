"use client";

import { useState } from "react";
import type { Amenity } from "@/src/types/api";
import { amenitiesData } from "@/src/constant/data-dummy";

export default function Amenities() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleAmenity = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
      <h1 className="font-semibold text-lg">Amenities</h1>

      <div className="space-y-4">
        {amenitiesData.map((amenity: Amenity) => {
          const Icon = amenity.icon;
          const isChecked = selected.includes(amenity.id);

          return (
            <div key={amenity.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon size={16} className="text-gray-500" />
                <p className="text-sm">{amenity.label}</p>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isChecked}
                  onChange={() => toggleAmenity(amenity.id)}
                />
                <div
                  className="
                    w-9 h-5 rounded-full
                    bg-gray-300
                    peer-checked:bg-blue-600
                    transition-colors
                    after:content-['']
                    after:absolute
                    after:top-[2px]
                    after:left-[2px]
                    after:h-4
                    after:w-4
                    after:bg-white
                    after:rounded-full
                    after:transition-transform
                    peer-checked:after:translate-x-4
                  "
                />
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
