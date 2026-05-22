import { ArchiveDetailView } from '@/features/archives/components/ArchiveDetailView';
import { SolarSystemOverview } from '@/features/archives/components/SolarSystemOverview';
import { useArchiveNavigation } from '@/features/archives/hooks/useArchiveNavigation';
import { getPlanetRecords } from '@/features/archives/utils/archiveHelpers';
import { loreDatabase } from '@/data/loreDatabase';

const planetRecords = getPlanetRecords(loreDatabase.planets);

export function SolarSystemPage() {
  const {
    activeRecord,
    parentRecord,
    startRect,
    openRecord,
    closeRecord,
  } = useArchiveNavigation(planetRecords);

  if (activeRecord) {
    return (
      <ArchiveDetailView
        record={activeRecord}
        parentRecord={parentRecord}
        startRect={startRect}
        onBack={closeRecord}
        onDrillDown={openRecord}
      />
    );
  }

  return (
    <main>
      <SolarSystemOverview records={planetRecords} onSelectRecord={openRecord} />
    </main>
  );
}
