import React from 'react';
import DashboardRoomHeader from '@/components/dashboard-room-header';
import DashboardRoomFilter from '@/components/dashboard-room-filter';
import DashboardRoomDataTable from '@/components/dashboard-user-data-table';
import DashboardRoomFooter from '@/components/dashboard-room-footer';


export default function DashboardRoom() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* Page Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Header */}
        <section>
          <DashboardRoomHeader />
        </section>

        {/* Filter Card */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200">
          <DashboardRoomFilter />
        </section>

        {/* Data Table Card */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <DashboardRoomDataTable />
          <DashboardRoomFooter />
        </section>

      </div>
    </main>
  );
}
