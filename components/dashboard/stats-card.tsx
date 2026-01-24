interface StatsGridProps {
  stats: Array<{
    id: number;
    label: string;
    value: string;
    trend?: string;
    progress?: number;
    subtext?: string;
    iconType: string;
  }>;
}

export const StatsGrid = ({ stats }: StatsGridProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {stats.map((item) => (
      <StatsCard key={item.id} {...item} />
    ))}
  </div>
);
