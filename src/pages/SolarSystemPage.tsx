import { ArchiveDetailView } from '@/features/archives/components/ArchiveDetailView';
import { SolarSystemOverview } from '@/features/archives/components/SolarSystemOverview';
import { useArchiveNavigation } from '@/features/archives/hooks/useArchiveNavigation';
import { getPlanetRecords } from '@/features/archives/utils/archiveHelpers';
import { loreDatabase } from '@/data/loreDatabase';

const planetRecords = getPlanetRecords(loreDatabase.planets);

export function SolarSystemPage() {
  const {
    activeRecord,
    activeRecordScroll,
    animateFromStartRect,
    parentRecord,
    startRect,
    viewState,
    openRecord,
    closeRecord,
  } = useArchiveNavigation(planetRecords);

  if (activeRecord) {
    return (
      <ArchiveDetailView
        key={activeRecord.id}
        record={activeRecord}
        parentRecord={parentRecord}
        initialScroll={activeRecordScroll}
        startRect={startRect}
        animateFromStartRect={animateFromStartRect}
        onBack={closeRecord}
        onDrillDown={openRecord}
      />
    );
  }

  return (
    <main>
      <SolarSystemOverview
        records={planetRecords}
        animate={viewState !== 'returning'}
        onSelectRecord={openRecord}
      />
    </main>
  );
}
