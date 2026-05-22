import type { RelatedRecord } from '@/types/lore';

type RelatedRecordsProps = {
  records?: RelatedRecord[];
};

export function RelatedRecords({ records }: RelatedRecordsProps) {
  if (!records?.length) {
    return null;
  }

  return (
    <section className="related-section">
      <h2>Related Records</h2>
      <div className="related-grid">
        {records.map((record) => (
          <article key={`${record.type}-${record.title}`} className="related-card">
            <span>{record.type}</span>
            <strong>{record.title}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
