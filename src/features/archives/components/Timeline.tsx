import type { TimelineEvent } from '@/types/lore';

type TimelineProps = {
  events?: TimelineEvent[];
};

export function Timeline({ events }: TimelineProps) {
  if (!events?.length) {
    return null;
  }

  return (
    <section className="timeline-section">
      <h2>Chronology</h2>
      <div className="timeline-list">
        {events.map((event) => (
          <article key={`${event.year}-${event.title}`} className="timeline-event">
            <time>{event.year}</time>
            <div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
