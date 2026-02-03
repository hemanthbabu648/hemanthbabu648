export default function ProjectCardSkeleton() {
  return (
    <div className="bg-[var(--bg-secondary)] rounded-xl overflow-hidden border border-[var(--border-muted)] animate-pulse">
      <div className="h-44 bg-[var(--bg-tertiary)]" />
      <div className="p-5 space-y-3">
        <div className="flex gap-2">
          <div className="h-6 bg-[var(--bg-tertiary)] rounded w-16" />
          <div className="h-6 bg-[var(--bg-tertiary)] rounded w-20" />
        </div>
        <div className="h-5 bg-[var(--bg-tertiary)] rounded w-3/4" />
        <div className="h-4 bg-[var(--bg-tertiary)] rounded w-full" />
        <div className="h-4 bg-[var(--bg-tertiary)] rounded w-2/3" />
      </div>
    </div>
  );
}
