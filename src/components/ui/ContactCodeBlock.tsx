interface ContactCodeBlockProps {
  variableName?: string;
  properties: { key: string; value: string }[];
}

export default function ContactCodeBlock({
  variableName = 'contact',
  properties,
}: ContactCodeBlockProps) {
  return (
    <div className="bg-[var(--np-bg-secondary)]/60 backdrop-blur-sm rounded-lg p-4 border border-[var(--np-border-muted)] font-mono text-sm">
      <div className="text-[var(--np-text-muted)]">
        <span className="text-[var(--np-accent-purple)]">const</span>{' '}
        <span className="text-[var(--np-accent-cyan)]">{variableName}</span> = {'{'}
      </div>
      {properties.map((prop, index) => (
        <div key={prop.key} className="text-[var(--np-text-muted)] ml-4">
          {prop.key}: <span className="text-green-400">&quot;{prop.value}&quot;</span>
          {index < properties.length - 1 && ','}
        </div>
      ))}
      <div className="text-[var(--np-text-muted)]">{'}'}</div>
    </div>
  );
}
