import React from 'react';
import { Search, ChevronDown, X } from 'lucide-react';

export default function DashboardUserFilter() {
  return (
    <div className="flex flex-col gap-4 bg-white rounded-xl shadow-sm border border-gray-200 p-4">
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        
        {/* Search */}
        <div className="flex-1 min-w-[300px]">
          <label className="relative flex w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by name or email..."
              className="block w-full rounded-lg border border-gray-200 bg-gray-100 py-3 pl-10 pr-4 
                         text-gray-900 placeholder-gray-500 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
            />
          </label>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Role Filter */}
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-lg 
                       text-sm font-medium text-gray-900 
                       hover:bg-gray-200 transition-colors"
          >
            <span>Role</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {/* Status Filter */}
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-lg 
                       text-sm font-medium text-gray-900 
                       hover:bg-gray-200 transition-colors"
          >
            <span>Status</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {/* Divider */}
          <div className="hidden sm:block w-px h-8 bg-gray-200 mx-1" />

          {/* Clear Filters */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg 
                       text-red-600 hover:bg-red-50 
                       text-sm font-semibold transition-colors"
          >
            <X className="w-4 h-4" />
            <span>Clear</span>
          </button>
        </div>
      </div>
    </div>
  );
}
