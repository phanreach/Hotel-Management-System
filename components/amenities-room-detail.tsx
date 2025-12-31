import React from 'react';
import {
    Wifi,
} from "lucide-react";
const AmenitiesRoomDetail = () => {
  // 1. Define the amenities data to keep the JSX clean
  const amenitiesList = [
    { icon: 'wifi', label: 'High-Speed Wi-Fi' },
    { icon: 'ac_unit', label: 'Climate Control' },
    { icon: 'tv', label: '55" 4K Smart TV' },
    { icon: 'king_bed', label: 'King Size Bed' },
    { icon: 'local_cafe', label: 'Coffee Maker' },
    { icon: 'work', label: 'Workspace' },
    { icon: 'room_service', label: '24/7 Room Service' },
    { icon: 'lock', label: 'In-room Safe' },
    { icon: 'iron', label: 'Ironing Facilities' },
  ];

  return (
    <section className="py-8">
      <h3 className="text-xl font-bold text-[#111418] dark:text-white mb-6">
        Amenities
      </h3>
      
      {/* 2. Responsive Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
        {amenitiesList.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 text-[#111418] dark:text-gray-200"
          >
            <span className="material-symbols-outlined text-blue-600">
              {item.icon}
            </span>
            <span className="text-sm md:text-base font-medium">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* 3. "View All" Action */}
      <button 
        type="button"
        className="mt-8 text-blue-600 font-bold text-sm hover:underline transition-all"
      >
        View all 24 amenities
      </button>
    </section>
  );
};

export default AmenitiesRoomDetail;