import type { CelestialRecord } from '@/types/lore';

type PlanetCardProps = {
  record: CelestialRecord;
  onSelect: (record: CelestialRecord, event: React.MouseEvent<HTMLElement>) => void;
};

export function PlanetCard({ record, onSelect }: PlanetCardProps) {
  const gravity = record.stats[0]?.value ?? 'UNKNOWN';

  return (
    <button className="planet-card" type="button" onClick={(event) => onSelect(record, event)}>
      <span className="planet-card-image" style={{ backgroundImage: `url(${record.image})` }} />
      <span className="planet-card-overlay" />
      <span className="planet-card-content">
        <span className="planet-designation">{record.designation}</span>
        <strong>{record.name}</strong>
        <span className="planet-card-readout">
          <span>
            <small>GRAV</small>
            <span>{gravity}</span>
          </span>
          {record.moons ? (
            <span>
              <small>MOONS</small>
              <span className="cyan-text">{record.moons.length}</span>
            </span>
          ) : null}
        </span>
      </span>
    </button>
  );
}
