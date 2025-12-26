"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DatePicker } from "./ui/date-picker";
import { Users, Search, Bed } from "lucide-react";

export default function Header() {
  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();

  return (
    <div className="bg-white relative px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-bold text-5xl text-gray-900 mb-3">
            Find Your Perfect Stay
          </h1>
          <p className="text-gray-600 text-lg">
            Discover luxury accommodations tailored to your needs
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-end">
            <div className="space-y-2">
              <DatePicker
                label="Check In"
                date={checkIn}
                onChange={setCheckIn}
              />
            </div>

            <div className="space-y-2">
              <DatePicker
                label="Check Out"
                date={checkOut}
                onChange={setCheckOut}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Users size={16} className="text-blue-600" />
                Guests
              </label>
              <div className="relative">
                <input
                  type="number"
                  min={1}
                  defaultValue={1}
                  className="h-12 w-full rounded-xl border-2 border-gray-200 bg-white px-4 text-sm focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Bed size={16} className="text-blue-600" />
                Room Type
              </label>
              <select className="h-12 w-full rounded-xl border-2 border-gray-200 bg-white px-4 text-sm focus:border-blue-500 focus:outline-none transition-colors cursor-pointer">
                <option>Any</option>
                <option>Single</option>
                <option>Double</option>
                <option>King</option>
                <option>Queen</option>
                <option>Suite</option>
                <option>Deluxe</option>
              </select>
            </div>

            <Button className="h-12 w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2">
              <Search size={18} />
              Search
            </Button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span>Best Price Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span>Free Cancellation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}
