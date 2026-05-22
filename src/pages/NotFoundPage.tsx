import { Link } from 'react-router-dom';
import { PageShell } from '@/components/layout/PageShell';

export function NotFoundPage() {
  return (
    <PageShell
      eyebrow="404"
      title="Archive route not found."
      description="The requested record path is not available in this index."
    >
      <Link className="text-link" to="/">
        Return to Solar System
      </Link>
    </PageShell>
  );
}
