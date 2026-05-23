import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Maximize2, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

type HistoryEvent = {
  id: string;
  date: string;
  title: string;
  shortText: string;
  largeText: string;
};

const historyEvents: HistoryEvent[] = [
  {
    id: 'first-signal',
    date: '2149.03',
    title: 'First Signal Breach',
    shortText:
      'A deep-system listening array records a repeating pattern from beyond Neptune.',
    largeText:
      'The first signal breach begins as a maintenance anomaly in the Triton relay chain. Within six hours, technicians isolate a repeating mathematical structure that cannot be attributed to any registered human transmitter. The archive later classifies the event as the earliest confirmed contact marker, because every subsequent Antigod incursion repeats one fragment of the same pattern before arrival.',
  },
  {
    id: 'mars-interdict',
    date: '2197.11',
    title: 'Mars Interdict',
    shortText:
      'Orbital governors seal the Martian sky after three ascent corridors vanish in sequence.',
    largeText:
      'The Mars Interdict transforms a local security order into the first system-wide emergency doctrine. Three ascent corridors disappear from traffic telemetry while ground witnesses report uninterrupted launch burns. The contradiction forces command to suspend all civilian departures, deploy archival observers to the shipyards, and formalize the first chain of evidence rules for hostile reality distortions.',
  },
  {
    id: 'archive-charter',
    date: '2241.08',
    title: 'Archive Charter Ratified',
    shortText:
      'The surviving councils establish the Antigods Archive as an independent record authority.',
    largeText:
      'The Archive Charter is ratified after the Titan hearings expose how fragmented planetary reports had become. The charter grants the archive the right to preserve contradictory testimony, sealed military telemetry, recovered machine logs, and survivor accounts in one indexed system. Its central rule is simple: no record is discarded only because it fails to agree with the physics of the day.',
  },
];

function getHistoryScrollTarget(element: HTMLElement) {
  const navbarHeight = document.querySelector('.navbar')?.getBoundingClientRect().height ?? 0;
  return element.getBoundingClientRect().top + window.scrollY - navbarHeight;
}

export function HistoryPage() {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const eventRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    if (!selectedEventId || isExpanded) {
      return;
    }

    const scrollToSelectedEvent = () => {
      const selectedElement = eventRefs.current[selectedEventId];

      if (!selectedElement) {
        return;
      }

      window.scrollTo({
        top: getHistoryScrollTarget(selectedElement),
        behavior: 'smooth',
      });
    };

    const animationFrame = requestAnimationFrame(scrollToSelectedEvent);
    const settledAnimation = window.setTimeout(scrollToSelectedEvent, 460);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.clearTimeout(settledAnimation);
    };
  }, [selectedEventId, isExpanded]);

  function selectEvent(eventId: string) {
    if (selectedEventId === eventId) {
      closePanel();
      return;
    }

    setSelectedEventId(eventId);
    setIsExpanded(false);
  }

  function closePanel() {
    setSelectedEventId(null);
    setIsExpanded(false);
  }

  function collapsePanel() {
    setIsExpanded(false);
  }

  return (
    <main
      className={`history-page ${selectedEventId ? 'history-page-focused' : ''} ${
        isExpanded ? 'history-page-expanded' : ''
      }`}
    >
      <section className="history-header">
        <p className="eyebrow">Chronological Records</p>
        <h1>History</h1>
        <p>
          Indexed events are ordered from earliest confirmed marker to the latest
          preserved archive milestone.
        </p>
      </section>

      <section className="history-timeline" aria-label="Historic events timeline">
        {historyEvents.map((event) => (
          <article
            key={event.id}
            ref={(element) => {
              eventRefs.current[event.id] = element;
            }}
            className={`history-event ${
              selectedEventId === event.id ? 'history-event-active' : ''
            } ${selectedEventId && selectedEventId !== event.id ? 'history-event-muted' : ''}`}
          >
            <button
              className="history-event-marker"
              type="button"
              aria-label={`Open ${event.title}`}
              aria-expanded={selectedEventId === event.id}
              onClick={() => selectEvent(event.id)}
            />
            <div className="history-event-summary">
              <button
                className="history-event-title-button"
                type="button"
                aria-expanded={selectedEventId === event.id}
                onClick={() => selectEvent(event.id)}
              >
                <time dateTime={event.date}>{event.date}</time>
                <h2>{event.title}</h2>
              </button>

              <div
                className={`history-detail-panel ${
                  selectedEventId === event.id ? 'history-detail-panel-visible' : ''
                } ${isExpanded && selectedEventId === event.id ? 'history-detail-panel-expanded' : ''}`}
                aria-hidden={selectedEventId !== event.id}
              >
                {selectedEventId === event.id ? (
                  <>
                    <div className="history-detail-copy">
                      <p className="history-short-text">{event.shortText}</p>
                      <p className="history-large-text">{event.largeText}</p>
                    </div>

                    <div className="history-detail-actions">
                      {isExpanded ? (
                        <Button
                          icon={<ArrowLeft size={16} aria-hidden="true" />}
                          variant="ghost"
                          onClick={collapsePanel}
                        >
                          Back
                        </Button>
                      ) : (
                        <Button
                          className="history-expand-button"
                          icon={<Maximize2 size={16} aria-hidden="true" />}
                          onClick={() => setIsExpanded(true)}
                        >
                          Open Full Record
                        </Button>
                      )}
                      <Button
                        icon={<X size={16} aria-hidden="true" />}
                        variant="ghost"
                        onClick={closePanel}
                      >
                        Close
                      </Button>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
