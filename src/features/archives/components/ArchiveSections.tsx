import type { LoreSection } from '@/types/lore';

type ArchiveSectionsProps = {
  sections: LoreSection[];
};

export function ArchiveSections({ sections }: ArchiveSectionsProps) {
  return (
    <section className="archive-sections">
      {sections.map((section) => (
        <article key={section.title} className="archive-section">
          <h2>{section.title}</h2>
          <p>{section.content}</p>
          {section.placeholder ? <p className="muted-text">{section.placeholder}</p> : null}
        </article>
      ))}
    </section>
  );
}
