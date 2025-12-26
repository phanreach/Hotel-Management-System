"use client";

import { useQuery } from "@tanstack/react-query";

export const useDashboardData = () => {
  return useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: async () => {
      // Simulated API Delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      return {
        stats: [
          { id: 1, label: 'Total Revenue', value: '$45,231', trend: '+12%', icon: 'dollar' },
          { id: 2, label: 'Occupancy Rate', value: '78%', progress: 78, icon: 'pie' },
          { id: 3, label: 'Check-ins Today', value: '12', subtext: '4 guests remaining', icon: 'login' },
          { id: 4, label: 'Total Bookings', value: '145', trend: '+8%', icon: 'calendar' },
        ],
        revenueHistory: [
          { day: 'Mon', value: 200 }, { day: 'Tue', value: 180 }, { day: 'Wed', value: 220 },
          { day: 'Thu', value: 150 }, { day: 'Fri', value: 250 }, { day: 'Sat', value: 210 },
          { day: 'Sun', value: 280 }
        ],
        roomStatus: {
          occupied: 65,
          available: 25,
          maintenance: 10,
          total: 124
        },
        recentReservations: [
          { id: '#BK-1024', guest: 'Jane Doe', room: 'Deluxe Suite', date: 'Oct 24, 2025', amount: '$450.00', status: 'Confirmed' },
          { id: '#BK-1025', guest: 'Robert Fox', room: 'Standard Room', date: 'Oct 25, 2025', amount: '$120.00', status: 'Pending' },
          { id: '#BK-1026', guest: 'Esther Howard', room: 'Double Room', date: 'Oct 26, 2025', amount: '$230.00', status: 'Confirmed' },
          { id: '#BK-1027', guest: 'Cameron Williamson', room: 'Standard Room', date: 'Oct 27, 2025', amount: '$120.00', status: 'Cancelled' },
        ]
      };
    },
  });
};