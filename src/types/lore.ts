export type Stat = {
  label: string;
  value: string;
  warning?: boolean;
};

export type SidebarAsset = {
  label: string;
  value: string;
};

export type LoreSection = {
  title: string;
  content: string;
  placeholder?: string;
};

export type ThreatLevel = 'LOW' | 'ELEVATED' | 'SEVERE' | 'BLACKSITE';

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

export type RelatedRecord = {
  title: string;
  type: string;
};

export type CelestialRecord = {
  id: string;
  name: string;
  designation: string;
  category: string;
  image: string;
  summary?: string;
  status?: string;
  threatLevel?: ThreatLevel;
  threatAssessment?: string;
  stats: Stat[];
  sidebarAssets: SidebarAsset[];
  sections: LoreSection[];
  timeline?: TimelineEvent[];
  relatedRecords?: RelatedRecord[];
  moons?: CelestialRecord[];
};

export type LoreDatabase = {
  planets: Record<string, CelestialRecord>;
};

export type ArchiveHistoryEntry = {
  record: CelestialRecord;
  scroll: number;
};

export type ArchiveViewState = 'initial' | 'returning';
