'use client';
import React, { useState, useMemo } from 'react';

const BookNow = () => {
  // 1. State for dates
  const [checkIn, setCheckIn] = useState('2023-10-12');
  const [checkOut, setCheckOut] = useState('2023-10-15');

  // Constants
  const pricePerNight = 250;
  const cleaningFee = 50;
  const serviceFee = 40;

  // 2. Calculate number of nights
  const numberOfNights = useMemo(() => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const difference = end.getTime() - start.getTime();
    const nights = Math.ceil(difference / (1000 * 3600 * 24));
    return nights > 0 ? nights : 0;
  }, [checkIn, checkOut]);

  // 3. Calculate Total
  const totalBasePrice = numberOfNights * pricePerNight;
  const totalPrice = totalBasePrice + cleaningFee + serviceFee;

  return (
    <div className="lg:col-span-4 relative">
      <div className="sticky top-24 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-6 flex flex-col gap-6">
        
        {/* Header */}
        <div className="flex items-end justify-between border-b border-gray-100 pb-4">
          <div>
            <span className="text-sm text-gray-400 line-through">$350</span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black text-[#111418]">${pricePerNight}</span>
              <span className="text-sm text-gray-500 font-medium">/ night</span>
            </div>
          </div>
          <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold uppercase tracking-wide">
            Available
          </div>
        </div>

        {/* Inputs Section */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-2">
            {/* Check-in Calendar */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Check-in</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full h-10 rounded-lg border border-gray-300 bg-transparent px-3 text-sm font-medium text-[#111418] focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Check-out Calendar */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Check-out</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full h-10 rounded-lg border border-gray-300 bg-transparent px-3 text-sm font-medium text-[#111418] focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Guests Dropdown */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Guests</label>
            <div className="relative">
              <select className="w-full h-10 rounded-lg border border-gray-300 bg-transparent px-3 text-sm font-medium text-[#111418] focus:ring-2 focus:ring-blue-500 outline-none appearance-none">
                <option className='text-black'>2 Adults, 0 Children</option>
                <option className='text-black'>2 Adults, 1 Child</option>
                <option className='text-black'>1 Adult</option>
              </select>
              <span className="material-symbols-outlined absolute right-2 top-2 text-gray-400 text-lg pointer-events-none">
                expand_more
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic Price Breakdown */}
        <div className="flex flex-col gap-3 py-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>${pricePerNight} x {numberOfNights} nights</span>
            <span>${totalBasePrice}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Cleaning Fee</span>
            <span>${cleaningFee}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Service Fee</span>
            <span>${serviceFee}</span>
          </div>
          <div className="h-px bg-gray-200 my-1"></div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-[#111418]">Total (USD)</span>
            <span className="font-black text-xl text-[#111418]">
              ${numberOfNights > 0 ? totalPrice : (cleaningFee + serviceFee)}
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2 text-base">
          Book Now
        </button>
        
        <p className="text-center text-xs text-gray-400">You won&apos;t be charged yet</p>
      </div>
    </div>
  );
};

export default BookNow;
