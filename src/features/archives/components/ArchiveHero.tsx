import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import type { CelestialRecord } from '@/types/lore';
import { useHeroScrollZoom } from '../hooks/useHeroScrollZoom';

type ArchiveHeroProps = {
  record: CelestialRecord;
  parentRecord: CelestialRecord | null;
  startRect: DOMRect | null;
  onBack: () => void;
};

export function ArchiveHero({
  record,
  parentRecord,
  startRect,
  onBack,
}: ArchiveHeroProps) {
  const { zoom, fade } = useHeroScrollZoom();

  return (
    <section className="archive-hero" aria-label={`${record.name} archive hero`}>
      <div
        className="archive-hero-image"
        style={{
          backgroundImage: `url(${record.image})`,
          transform: `scale(${zoom})`,
          transformOrigin: startRect
            ? `${startRect.left + startRect.width / 2}px ${startRect.top}px`
            : 'center center',
        }}
      />
      <div className="archive-hero-overlay" style={{ opacity: 0.45 + fade * 0.35 }} />

      <div className="archive-hero-content">
        <Button
          type="button"
          variant="ghost"
          icon={<ArrowLeft size={17} aria-hidden="true" />}
          onClick={onBack}
        >
          {parentRecord ? `Return to ${parentRecord.name}` : 'Return to Index'}
        </Button>

        <div>
          <div className="hero-meta">
            <Badge tone={record.threatLevel === 'LOW' ? 'neutral' : 'warning'}>
              {record.threatLevel}
            </Badge>
            <span>{record.designation}</span>
            <span>{record.category}</span>
          </div>
          <h1>{record.name}</h1>
          <p>{record.summary}</p>
        </div>
      </div>
    </section>
  );
}
