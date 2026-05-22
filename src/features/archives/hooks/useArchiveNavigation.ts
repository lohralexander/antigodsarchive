import { useMemo, useState } from 'react';
import type { ArchiveHistoryEntry, CelestialRecord } from '@/types/lore';
import { findParentRecord } from '../utils/archiveHelpers';

export function useArchiveNavigation(records: CelestialRecord[]) {
  const [activeRecord, setActiveRecord] = useState<CelestialRecord | null>(null);
  const [history, setHistory] = useState<ArchiveHistoryEntry[]>([]);
  const [startRect, setStartRect] = useState<DOMRect | null>(null);

  const parentRecord = useMemo(
    () => (activeRecord ? findParentRecord(records, activeRecord.id) : null),
    [activeRecord, records],
  );

  function openRecord(record: CelestialRecord, event?: React.MouseEvent<HTMLElement>) {
    if (event?.currentTarget) {
      setStartRect(event.currentTarget.getBoundingClientRect());
    } else {
      setStartRect(null);
    }

    setHistory((current) =>
      activeRecord
        ? [...current, { record: activeRecord, scroll: window.scrollY }]
        : current,
    );
    setActiveRecord(record);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function closeRecord() {
    const previous = history.at(-1);

    if (previous) {
      setHistory((current) => current.slice(0, -1));
      setActiveRecord(previous.record);
      window.scrollTo({ top: previous.scroll, behavior: 'instant' });
      return;
    }

    setActiveRecord(null);
    setStartRect(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  return {
    activeRecord,
    parentRecord,
    startRect,
    openRecord,
    closeRecord,
  };
}
