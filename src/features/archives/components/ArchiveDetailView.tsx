import { useEffect, useRef, useState } from 'react';
import { AlertCircle, ChevronLeft, Database, Orbit } from 'lucide-react';
import type { CelestialRecord } from '@/types/lore';

type AnimationPhase = 'start' | 'expanding' | 'done' | 'closing';

type ArchiveDetailViewProps = {
  record: CelestialRecord;
  parentRecord: CelestialRecord | null;
  startRect: DOMRect | null;
  onBack: () => void;
  onDrillDown: (record: CelestialRecord, event: React.MouseEvent<HTMLElement>) => void;
};

export function ArchiveDetailView({
  record,
  parentRecord,
  startRect,
  onBack,
  onDrillDown,
}: ArchiveDetailViewProps) {
  const [animPhase, setAnimPhase] = useState<AnimationPhase>(
    startRect ? 'start' : 'done',
  );
  const animPhaseRef = useRef(animPhase);
  const heroBgRef = useRef<HTMLDivElement | null>(null);
  const heroOverlayRef = useRef<HTMLDivElement | null>(null);
  const headerTextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    animPhaseRef.current = animPhase;
  }, [animPhase]);

  useEffect(() => {
    let rafId = 0;

    function handleScroll() {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (animPhaseRef.current !== 'done') {
          return;
        }

        const y = window.scrollY;

        if (heroBgRef.current) {
          heroBgRef.current.style.transform = `scale(${1 + y * 0.0003})`;
        }

        if (heroOverlayRef.current) {
          heroOverlayRef.current.style.opacity = `${Math.min(0.95, 0.4 + y * 0.0015)}`;
        }

        if (headerTextRef.current) {
          headerTextRef.current.style.opacity = `${Math.max(0, 1 - y * 0.002)}`;
          headerTextRef.current.style.transform = `translateY(-${y * 0.4}px)`;
        }
      });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    if (startRect && animPhase === 'start') {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimPhase('expanding'));
      });

      const timer = window.setTimeout(() => {
        setAnimPhase('done');
        handleScroll();
      }, 700);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.clearTimeout(timer);
        cancelAnimationFrame(rafId);
      };
    }

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [animPhase, record.id, startRect]);

  function handleBackClick() {
    setAnimPhase('closing');

    if (heroBgRef.current) {
      heroBgRef.current.style.transform = 'scale(1)';
    }

    if (heroOverlayRef.current) {
      heroOverlayRef.current.style.opacity = '0.2';
    }

    window.setTimeout(onBack, 700);
  }

  const isAnimating =
    animPhase === 'start' || animPhase === 'expanding' || animPhase === 'closing';
  const showContent = animPhase === 'expanding' || animPhase === 'done';
  const breadcrumbPrefix = parentRecord
    ? `SYSTEMS / ${parentRecord.name.toUpperCase()}`
    : 'SYSTEMS';

  return (
    <div className={`archive-detail ${!startRect ? 'animate-fade-in' : ''}`}>
      <div
        ref={heroBgRef}
        className="detail-hero-bg"
        style={{
          backgroundImage: `url(${record.image})`,
          top:
            (animPhase === 'start' || animPhase === 'closing') && startRect
              ? `${startRect.top}px`
              : '0px',
          left:
            (animPhase === 'start' || animPhase === 'closing') && startRect
              ? `${startRect.left}px`
              : '0px',
          width:
            (animPhase === 'start' || animPhase === 'closing') && startRect
              ? `${startRect.width}px`
              : '100%',
          height:
            (animPhase === 'start' || animPhase === 'closing') && startRect
              ? `${startRect.height}px`
              : '100vh',
          borderRadius:
            (animPhase === 'start' || animPhase === 'closing') && startRect
              ? '0.75rem'
              : '0px',
          transition: isAnimating ? 'all 700ms cubic-bezier(0.32,0.72,0,1)' : 'none',
        }}
      >
        <div
          ref={heroOverlayRef}
          className="detail-hero-overlay"
          style={{
            opacity: animPhase === 'start' || animPhase === 'closing' ? 0.2 : 0.4,
            transition: isAnimating ? 'opacity 700ms ease' : 'none',
          }}
        />
      </div>

      <div className="detail-foreground">
        <div className="hero-spacer" />

        <header className={`detail-header ${showContent ? 'show' : ''}`}>
          <div ref={headerTextRef} className="detail-header-text">
            <button type="button" onClick={handleBackClick} className="back-button">
              <ChevronLeft size={16} aria-hidden="true" />
              {parentRecord ? `Return to ${parentRecord.name}` : 'Return to Directory'}
            </button>

            <p className="detail-breadcrumb">
              {breadcrumbPrefix} / {record.category.toUpperCase()} / {record.designation}
            </p>
            <h1>{record.name}</h1>
          </div>
        </header>

        <div className={`detail-content-shell ${showContent ? 'show' : ''}`}>
          <div className="detail-content-grid">
            <article className="detail-article">
              {record.moons && record.moons.length > 0 ? (
                <section className="detail-section">
                  <h2 className="icon-heading">
                    <Orbit size={24} aria-hidden="true" />
                    Registered Satellites
                  </h2>

                  <div className="satellite-grid">
                    {record.moons.map((moon) => (
                      <button
                        key={moon.id}
                        type="button"
                        onClick={(event) => onDrillDown(moon, event)}
                        className="satellite-card"
                      >
                        <span
                          className="satellite-card-image"
                          style={{ backgroundImage: `url(${moon.image})` }}
                        />
                        <span className="satellite-card-shade" />
                        <span className="satellite-card-content">
                          <span>{moon.designation}</span>
                          <strong>{moon.name}</strong>
                        </span>
                      </button>
                    ))}
                  </div>
                </section>
              ) : null}

              {record.sections.map((section) => (
                <section key={section.title} className="detail-section">
                  <h2>{section.title}</h2>
                  <p>{section.content}</p>

                  {section.placeholder ? (
                    <div className="placeholder-panel">
                      <span>{section.placeholder}</span>
                    </div>
                  ) : null}
                </section>
              ))}
            </article>

            <aside className="technical-sidebar">
              <div className="technical-panel">
                <h3>
                  <AlertCircle size={16} aria-hidden="true" />
                  Physical Readout
                </h3>

                <div className="readout-list">
                  {record.stats.map((stat) => (
                    <div key={stat.label} className="readout-row">
                      <span>{stat.label}</span>
                      <strong className={stat.warning ? 'warning-text' : undefined}>
                        {stat.value}
                      </strong>
                    </div>
                  ))}
                </div>

                <h3>
                  <Database size={16} aria-hidden="true" />
                  Key Assets
                </h3>

                <div className="readout-list">
                  {record.sidebarAssets.map((asset) => (
                    <div key={asset.label} className="readout-row">
                      <span>{asset.label}</span>
                      <strong>{asset.value}</strong>
                    </div>
                  ))}
                </div>

                <div className="transmission-footer">
                  End of Transmission
                  <br />
                  <span>ANTIGOD_PROTOCOL_ACTIVE</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
