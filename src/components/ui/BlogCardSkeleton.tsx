export default function BlogCardSkeleton() {
  return (
    <div className="bg-[var(--np-bg-secondary)] rounded-xl overflow-hidden border border-[var(--np-border-muted)] animate-pulse">
      <div className="h-48 bg-[var(--np-bg-tertiary)]" />
      <div className="p-5 space-y-3">
        <div className="h-4 bg-[var(--np-bg-tertiary)] rounded w-3/4" />
        <div className="h-4 bg-[var(--np-bg-tertiary)] rounded w-1/2" />
        <div className="h-3 bg-[var(--np-bg-tertiary)] rounded w-full" />
        <div className="h-3 bg-[var(--np-bg-tertiary)] rounded w-2/3" />
      </div>
    </div>
  );
}
