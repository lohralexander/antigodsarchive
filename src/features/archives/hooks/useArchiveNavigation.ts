import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { ArchiveHistoryEntry, ArchiveViewState, CelestialRecord } from '@/types/lore';
import { findParentRecord } from '../utils/archiveHelpers';

export function useArchiveNavigation(records: CelestialRecord[]) {
  const [activeRecord, setActiveRecord] = useState<CelestialRecord | null>(null);
  const [history, setHistory] = useState<ArchiveHistoryEntry[]>([]);
  const [startRect, setStartRect] = useState<DOMRect | null>(null);
  const [animateFromStartRect, setAnimateFromStartRect] = useState(false);
  const [activeRecordScroll, setActiveRecordScroll] = useState(0);
  const [gridScroll, setGridScroll] = useState(0);
  const [viewState, setViewState] = useState<ArchiveViewState>('initial');
  const pendingRestoreScrollRef = useRef<number | null>(null);

  const parentRecord = useMemo(
    () => (activeRecord ? findParentRecord(records, activeRecord.id) : null),
    [activeRecord, records],
  );

  useLayoutEffect(() => {
    if (activeRecord || pendingRestoreScrollRef.current === null) {
      return;
    }

    window.scrollTo({ top: pendingRestoreScrollRef.current, behavior: 'instant' });
    pendingRestoreScrollRef.current = null;
  }, [activeRecord, viewState]);

  function openRecord(record: CelestialRecord, event?: React.MouseEvent<HTMLElement>) {
    const detailScroll =
      event?.currentTarget.closest<HTMLElement>('.archive-detail')?.scrollTop ?? 0;
    const nextStartRect = event?.currentTarget
      ? event.currentTarget.getBoundingClientRect()
      : null;

    setStartRect(nextStartRect);
    setAnimateFromStartRect(nextStartRect !== null);

    if (!activeRecord) {
      setGridScroll(window.scrollY);
    } else {
      setHistory((current) => [
        ...current,
        { record: activeRecord, scroll: detailScroll, startRect },
      ]);
    }

    setViewState('initial');
    setActiveRecordScroll(0);
    setActiveRecord(record);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function closeRecord() {
    const previous = history.at(-1);

    if (previous) {
      setHistory((current) => current.slice(0, -1));
      setStartRect(previous.startRect);
      setAnimateFromStartRect(false);
      setActiveRecordScroll(previous.scroll);
      setActiveRecord(previous.record);
      setViewState('returning');
      return;
    }

    setActiveRecord(null);
    setStartRect(null);
    setAnimateFromStartRect(false);
    setActiveRecordScroll(0);
    setViewState('returning');
    pendingRestoreScrollRef.current = gridScroll;
  }

  return {
    activeRecord,
    activeRecordScroll,
    animateFromStartRect,
    parentRecord,
    startRect,
    viewState,
    openRecord,
    closeRecord,
  };
}
