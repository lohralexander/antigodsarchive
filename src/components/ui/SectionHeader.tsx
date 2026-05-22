type SectionHeaderProps = {
  label: string;
  title?: string;
};

export function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <p className="eyebrow">{label}</p>
      {title ? <h2>{title}</h2> : null}
    </div>
  );
}
