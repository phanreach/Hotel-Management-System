"use client";

import React from 'react';
import { Plus, Loader2 } from 'lucide-react';
import { AdminSidebar } from '@/components/shared/admin-sidebar';
import { AdminHeader } from '@/components/shared/admin-header';
import { RevenueTrends } from '@/components/dashboard/revenue-trends';
import { RoomStatus } from '@/components/dashboard/room-status';
import { RecentReservations } from '@/components/dashboard/recent-room-reservations';
import { StatsGrid } from '@/components/dashboard/stats-grid';
import { useDashboardData } from '@/hooks/useDashboard';

// Sub-components now accepting props

export default function DashboardPageContent() {
  const { data, isLoading, error } = useDashboardData();

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-white">
        <Loader2 className="animate-spin text-primary w-10 h-10" />
      </div>
    );
  }

  if (error || !data) return <div>Error loading dashboard.</div>;

  return (
    <div className="flex h-screen w-full bg-[#f6f7f8] overflow-hidden">
      <AdminSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-3xl font-black text-slate-900">Overview</h1>
                <p className="text-slate-500">Dashboard metrics for Dec 2025</p>
              </div>
              <button className="flex items-center gap-2 bg-primary text-white px-5 h-11 rounded-xl font-bold">
                <Plus size={20} /> New Reservation
              </button>
            </div>

            <StatsGrid stats={data.stats} />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <RevenueTrends chartData={data.revenueHistory} />
              </div>
              <RoomStatus data={data.roomStatus} />
            </div>

            <RecentReservations reservations={data.recentReservations} />
          </div>
        </main>
      </div>
    </div>
  );
}