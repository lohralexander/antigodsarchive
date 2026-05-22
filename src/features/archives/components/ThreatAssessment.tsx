import type { CelestialRecord } from '@/types/lore';

type ThreatAssessmentProps = {
  record: CelestialRecord;
};

export function ThreatAssessment({ record }: ThreatAssessmentProps) {
  return (
    <section className="threat-card">
      <p className="eyebrow">Threat Assessment</p>
      <p>{record.threatAssessment}</p>
    </section>
  );
}
