import { SectionHeader } from '@/components/ui/SectionHeader';
import { StatRow } from '@/components/ui/StatRow';
import type { CelestialRecord } from '@/types/lore';

type ArchiveSidebarProps = {
  record: CelestialRecord;
};

export function ArchiveSidebar({ record }: ArchiveSidebarProps) {
  return (
    <aside className="archive-sidebar">
      <SectionHeader label="Technical Readout" title="Asset Register" />

      <div className="sidebar-panel">
        {record.stats.map((stat) => (
          <StatRow key={stat.label} stat={stat} />
        ))}
      </div>

      <div className="sidebar-panel">
        {record.sidebarAssets.map((asset) => (
          <div key={asset.label} className="asset-row">
            <span>{asset.label}</span>
            <strong>{asset.value}</strong>
          </div>
        ))}
      </div>
    </aside>
  );
}
