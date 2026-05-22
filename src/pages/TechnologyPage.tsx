import { EmptyState } from '@/components/ui/EmptyState';
import { PageShell } from '@/components/layout/PageShell';

export function TechnologyPage() {
  return (
    <PageShell
      eyebrow="Restricted Technology"
      title="Technology records are being indexed."
      description="This section is reserved for drives, weapons, shields, relays, and containment systems linked to the planetary archive."
    >
      <EmptyState
        title="No public technology dossiers"
        description="The data model and routing are ready; add technology records as a new feature domain when the lore is available."
      />
    </PageShell>
  );
}
