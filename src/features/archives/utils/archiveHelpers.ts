import type { CelestialRecord } from '@/types/lore';

export function getPlanetRecords(planets: Record<string, CelestialRecord>) {
  return Object.values(planets);
}

export function getRecordCount(records: CelestialRecord[]) {
  return records.reduce(
    (count, record) => count + 1 + (record.moons?.length ?? 0),
    0,
  );
}

export function findParentRecord(
  records: CelestialRecord[],
  childId: string,
): CelestialRecord | null {
  return (
    records.find((record) => record.moons?.some((moon) => moon.id === childId)) ??
    null
  );
}
