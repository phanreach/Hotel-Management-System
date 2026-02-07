import React from "react";

export default function DashboardRoomHeader() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-gray-900 text-3xl md:text-4xl font-black leading-tight tracking-tight">
            Room Management
          </h1>
          <p className="text-gray-500 text-base">
            Manage rooms, availability, pricing, and room status.
          </p>
        </div>
      </div>
    </div>
  );
}
