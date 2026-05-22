import type { Stat } from '@/types/lore';

type StatRowProps = {
  stat: Stat;
};

export function StatRow({ stat }: StatRowProps) {
  return (
    <div className="stat-row">
      <span>{stat.label}</span>
      <strong className={stat.warning ? 'warning-text' : undefined}>{stat.value}</strong>
    </div>
  );
}
