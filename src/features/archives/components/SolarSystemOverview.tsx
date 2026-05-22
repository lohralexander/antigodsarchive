import type { CelestialRecord } from '@/types/lore';
import { PlanetCard } from './PlanetCard';

type SolarSystemOverviewProps = {
  records: CelestialRecord[];
  onSelectRecord: (record: CelestialRecord, event: React.MouseEvent<HTMLElement>) => void;
};

export function SolarSystemOverview({
  records,
  onSelectRecord,
}: SolarSystemOverviewProps) {
  return (
    <div className="system-directory animate-fade-zoom">
      <header className="directory-header">
        <h1>System Directory</h1>
        <p>
          Select a celestial body to access detailed historical, logistical, and
          architectural records.
          <br />
          <span>WARNING: Data classified under ANTIGOD directive.</span>
        </p>
      </header>

      <section className="overview-grid" aria-label="Solar system archive records">
        {records.map((record) => (
          <PlanetCard key={record.id} record={record} onSelect={onSelectRecord} />
        ))}
      </section>
    </div>
  );
}
