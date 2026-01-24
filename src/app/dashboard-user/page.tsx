import React from 'react';
import DashboardUserHeader from '@/components/dahsboard-user-header';
import DashboardUserFilter from '@/components/dashborad-user-filter';
import DashboardUserDataTable from '@/components/dashboard-user-data-table';
import DashboardUserFooter from '@/components/dashboard-user-footer';

export default function DashboardUser() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* Page Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Header */}
        <section>
          <DashboardUserHeader />
        </section>

        {/* Filter Card */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200">
          <DashboardUserFilter />
        </section>

        {/* Data Table Card */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <DashboardUserDataTable />
          <DashboardUserFooter />
        </section>

      </div>
    </main>
  );
}
