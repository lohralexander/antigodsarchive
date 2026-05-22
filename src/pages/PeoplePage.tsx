import { EmptyState } from '@/components/ui/EmptyState';
import { PageShell } from '@/components/layout/PageShell';

export function PeoplePage() {
  return (
    <PageShell
      eyebrow="Personnel and Factions"
      title="People records are staged for expansion."
      description="Commanders, factions, syndicates, researchers, and compromised personnel can live here without changing the archive detail components."
    >
      <EmptyState
        title="No personnel dossiers"
        description="The page exists as a clean route placeholder instead of mixing unfinished content into the solar archive."
      />
    </PageShell>
  );
}
