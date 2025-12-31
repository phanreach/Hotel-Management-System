'use client';
import React from 'react';
import Link from 'next/link';

const RoomDetailHeader = () => {
  return (
    <div className="w-full bg-white px-4 md:px-10 py-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 mb-6 text-sm">
        <Link href="/" className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
          Home
        </Link>
        <span className="text-gray-400 text-xs">›</span>
        <Link href="/rooms" className="text-gray-500 hover:text-gray-700">
          Rooms
        </Link>
        <span className="text-gray-400 text-xs">›</span>
        <span className="font-bold text-[#111418]">
          Executive King Suite
        </span>
      </nav>

      {/* Main Content Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        
        {/* Left Side: Title and Stats */}
        <div className="flex flex-col gap-3">
          <h1 className="text-[#111418] text-3xl md:text-5xl font-black tracking-tight">
            Executive King Suite
          </h1>
          
          <div className="flex items-center flex-wrap gap-2 text-gray-500 text-sm md:text-base">
            <div className="flex items-center text-yellow-500 gap-1 font-bold">
              <span className="material-symbols-outlined text-[20px] fill-current">star</span>
              4.9
            </div>
            <span>(124 Reviews)</span>
            <span className="text-gray-300">•</span>
            <span>City View</span>
            <span className="text-gray-300">•</span>
            <span>500 sqft</span>
          </div>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center rounded-xl border border-gray-200 bg-white px-5 h-12 text-sm font-bold text-[#111418] shadow-sm hover:bg-gray-50 transition-colors">
            Edit Details
          </button>
          
          <button className="flex items-center justify-center rounded-xl border border-gray-200 bg-white px-5 h-12 text-sm font-bold text-red-600 shadow-sm hover:bg-red-50 transition-colors">
            Block Dates
          </button>
        </div>

      </div>
    </div>
  );
};

export default RoomDetailHeader;
