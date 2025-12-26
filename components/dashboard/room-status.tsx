// src/features/dashboard/components/RoomStatus.tsx
interface RoomStatusProps {
  data: { occupied: number; available: number; maintenance: number; total: number };
}

export const RoomStatus = ({ data }: RoomStatusProps) => (
  <div className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm">
    <h3 className="text-slate-900 text-lg font-bold mb-6">Room Status</h3>
    <div className="flex justify-center relative py-4">
      <svg className="w-40 h-40 -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f1f5f9" strokeWidth="12" />
        <circle 
          cx="50" cy="50" r="40" fill="transparent" stroke="#137fec" strokeWidth="12" 
          strokeDasharray={`${(data.occupied / 100) * 251.2} 251.2`} 
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold">{data.total}</span>
        <span className="text-[10px] uppercase font-bold text-slate-400">Total</span>
      </div>
    </div>
    <div className="mt-6 space-y-3">
      <StatusItem color="bg-[#137fec]" label="Occupied" value={`${data.occupied}%`} />
      <StatusItem color="bg-emerald-500" label="Available" value={`${data.available}%`} />
      <StatusItem color="bg-slate-400" label="Maintenance" value={`${data.maintenance}%`} />
    </div>
  </div>
);

const StatusItem = ({ color, label, value }: any) => (
  <div className="flex items-center justify-between text-sm">
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${color}`} />
      <span className="text-slate-600">{label}</span>
    </div>
    <span className="font-bold">{value}</span>
  </div>
);