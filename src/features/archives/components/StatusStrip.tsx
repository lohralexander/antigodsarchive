import type { CelestialRecord } from '@/types/lore';

type StatusStripProps = {
  record: CelestialRecord;
};

export function StatusStrip({ record }: StatusStripProps) {
  return (
    <section className="status-strip" aria-label="Record status">
      <StatusCell label="Designation" value={record.designation} />
      <StatusCell label="Category" value={record.category} />
      <StatusCell label="Status" value={record.status ?? 'UNSPECIFIED'} />
      <StatusCell label="Threat Level" value={record.threatLevel ?? 'UNKNOWN'} warning />
    </section>
  );
}

type StatusCellProps = {
  label: string;
  value: string;
  warning?: boolean;
};

function StatusCell({ label, value, warning }: StatusCellProps) {
  return (
    <div className="status-cell">
      <span>{label}</span>
      <strong className={warning ? 'warning-text' : undefined}>{value}</strong>
    </div>
  );
}
