// src/features/dashboard/components/StatsGrid.tsx
import React from 'react';
import { DollarSign, PieChart, LogIn, Calendar, TrendingUp } from 'lucide-react';

const iconMap: Record<string, any> = {
  dollar: DollarSign,
  pie: PieChart,
  login: LogIn,
  calendar: Calendar
};

interface StatsGridProps {
  stats: any[];
}

export const StatsGrid = ({ stats }: StatsGridProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {stats.map((stat) => {
      const Icon = iconMap[stat.icon] || Calendar;
      return (
        <div key={stat.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
            <div className="p-2 bg-slate-50 text-slate-600 rounded-lg"><Icon size={20} /></div>
          </div>
          <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
          {stat.trend && (
            <div className="flex items-center gap-1 mt-1 text-emerald-600 text-sm font-medium">
              <TrendingUp size={14} /> {stat.trend} <span className="text-slate-400 font-normal">vs last month</span>
            </div>
          )}
          {stat.progress && (
            <div className="w-full bg-slate-100 rounded-full h-1.5 mt-3">
              <div className="bg-[#137fec] h-1.5 rounded-full" style={{ width: `${stat.progress}%` }} />
            </div>
          )}
          {stat.subtext && <p className="text-slate-400 text-sm mt-1">{stat.subtext}</p>}
        </div>
      );
    })}
  </div>
);