import { useMemo, useState } from 'react';
import type { ArchiveHistoryEntry, ArchiveViewState, CelestialRecord } from '@/types/lore';
import { findParentRecord } from '../utils/archiveHelpers';

export function useArchiveNavigation(records: CelestialRecord[]) {
  const [activeRecord, setActiveRecord] = useState<CelestialRecord | null>(null);
  const [history, setHistory] = useState<ArchiveHistoryEntry[]>([]);
  const [startRect, setStartRect] = useState<DOMRect | null>(null);
  const [gridScroll, setGridScroll] = useState(0);
  const [viewState, setViewState] = useState<ArchiveViewState>('initial');

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

    if (!activeRecord) {
      setGridScroll(window.scrollY);
    } else {
      setHistory((current) => [...current, { record: activeRecord, scroll: window.scrollY }]);
    }

    setViewState('initial');
    setActiveRecord(record);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function closeRecord() {
    const previous = history.at(-1);

    if (previous) {
      setHistory((current) => current.slice(0, -1));
      setActiveRecord(previous.record);
      setViewState('returning');
      window.scrollTo({ top: previous.scroll, behavior: 'instant' });
      return;
    }

    setActiveRecord(null);
    setStartRect(null);
    setViewState('returning');
    window.scrollTo({ top: gridScroll, behavior: 'instant' });
  }

  return {
    activeRecord,
    parentRecord,
    startRect,
    viewState,
    openRecord,
    closeRecord,
  };
}
