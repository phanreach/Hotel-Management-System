// src/features/dashboard/components/RecentReservations.tsx
import { MoreVertical } from 'lucide-react';

export const RecentReservations = ({ reservations }: { reservations: any[] }) => (
  <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
    <div className="flex items-center justify-between p-6 border-b border-slate-100">
      <h3 className="text-slate-900 text-lg font-bold">Recent Reservations</h3>
      <button className="text-[#137fec] text-sm font-bold">View All</button>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-slate-50 text-xs uppercase font-bold text-slate-500">
          <tr>
            <th className="px-6 py-4">Guest</th>
            <th className="px-6 py-4">Room</th>
            <th className="px-6 py-4">Check-in</th>
            <th className="px-6 py-4">Amount</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {reservations.map((res) => (
            <tr key={res.id} className="hover:bg-slate-50/50">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-200" />
                  <div className="text-sm font-bold">{res.guest}</div>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-slate-600">{res.room}</td>
              <td className="px-6 py-4 text-sm text-slate-600">{res.date}</td>
              <td className="px-6 py-4 text-sm font-bold">{res.amount}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded-full text-[10px] font-black uppercase ${
                  res.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'
                }`}>
                  {res.status}
                </span>
              </td>
              <td className="px-6 py-4 text-right"><MoreVertical size={16} className="text-slate-400" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);