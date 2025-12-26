// src/features/dashboard/components/RevenueTrends.tsx
interface RevenueTrendsProps {
  chartData: { day: string; value: number }[];
}

export const RevenueTrends = ({ chartData }: RevenueTrendsProps) => (
  <div className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm h-full">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-slate-900 text-lg font-bold">Revenue Trends</h3>
      <select className="bg-slate-50 text-sm rounded-lg px-3 py-2 outline-none">
        <option>Weekly</option>
      </select>
    </div>
    <div className="w-full h-64 relative">
      <svg className="w-full h-full" viewBox="0 0 800 300" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#137fec" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#137fec" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path 
          d="M0,250 Q100,200 200,220 T400,100 T600,150 T800,80 L800,300 L0,300 Z" 
          fill="url(#chartFill)" 
        />
        <path 
          d="M0,250 Q100,200 200,220 T400,100 T600,150 T800,80" 
          fill="none" stroke="#137fec" strokeWidth="3" strokeLinecap="round" 
        />
      </svg>
    </div>
    <div className="flex justify-between mt-4 text-xs font-bold text-slate-400">
      {chartData.map(d => <span key={d.day}>{d.day}</span>)}
    </div>
  </div>
);