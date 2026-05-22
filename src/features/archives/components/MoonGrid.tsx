import type { CelestialRecord } from '@/types/lore';

type MoonGridProps = {
  moons?: CelestialRecord[];
  onSelectMoon: (record: CelestialRecord, event: React.MouseEvent<HTMLElement>) => void;
};

export function MoonGrid({ moons, onSelectMoon }: MoonGridProps) {
  if (!moons?.length) {
    return null;
  }

  return (
    <section className="moon-grid-section">
      <div className="section-title-row">
        <p className="eyebrow">Registered Satellites</p>
        <span>{moons.length.toString().padStart(2, '0')}</span>
      </div>
      <div className="moon-grid">
        {moons.map((moon) => (
          <button
            key={moon.id}
            type="button"
            className="moon-card"
            onClick={(event) => onSelectMoon(moon, event)}
          >
            <span className="moon-card-image" style={{ backgroundImage: `url(${moon.image})` }} />
            <span>
              <strong>{moon.name}</strong>
              <small>{moon.designation}</small>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
