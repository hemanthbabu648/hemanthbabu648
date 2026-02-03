interface CodeSnippetProps {
  variableName?: string;
  items: string[];
  animationDelay?: string;
}

export default function CodeSnippet({
  variableName = 'skills',
  items,
  animationDelay = '500ms',
}: CodeSnippetProps) {
  return (
    <div
      className="opacity-0 animate-fade-in text-left"
      style={{ animationDelay, animationFillMode: 'forwards' }}
    >
      <div className="font-mono text-xs text-[var(--text-muted)]">
        <span className="text-[var(--accent-purple)]">const</span>{' '}
        <span className="text-[var(--accent-cyan)]">{variableName}</span> = [
      </div>
      {items.map((item, index) => (
        <div key={item} className="font-mono text-xs text-[var(--text-muted)] ml-4">
          <span className="text-white/60">&quot;{item}&quot;</span>
          {index < items.length - 1 && ','}
        </div>
      ))}
      <div className="font-mono text-xs text-[var(--text-muted)]">];</div>
    </div>
  );
}
