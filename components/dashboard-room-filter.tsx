import React from "react";
import { Search, ChevronDown, X } from "lucide-react";

export default function DashboardRoomFilter() {
  return (
    <div className="flex flex-col gap-4 bg-white rounded-xl shadow-sm border border-gray-200 p-4">
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <div className="flex-1 min-w-[300px]">
          <label className="relative flex w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by room name or number..."
              className="block w-full rounded-lg border border-gray-200 bg-gray-100 py-3 pl-10 pr-4 
                         text-gray-900 placeholder-gray-500 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
            />
          </label>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-lg 
                       text-sm font-medium text-gray-900 
                       hover:bg-gray-200 transition-colors"
          >
            <span>Room Type</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          <button
            type="button"
            className="flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-lg 
                       text-sm font-medium text-gray-900 
                       hover:bg-gray-200 transition-colors"
          >
            <span>Status</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
