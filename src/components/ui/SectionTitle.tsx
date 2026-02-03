import Link from 'next/link';

interface SectionTitleProps {
  title: string;
  showViewAll?: boolean;
  viewAllHref?: string;
}

export default function SectionTitle({ title, showViewAll, viewAllHref }: SectionTitleProps) {
  return (
    <div className="flex items-center justify-between mb-10">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="text-[var(--accent-purple)]">#</span>
          {title}
        </h2>
        <div className="hidden md:block w-64 h-[2px] bg-gradient-to-r from-[var(--accent-purple)] to-transparent" />
      </div>
      {showViewAll && viewAllHref && (
        <Link
          href={viewAllHref}
          className="text-[var(--text-secondary)] text-sm hover:text-[var(--accent-purple)] transition-colors group"
        >
          View all{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1">
            ~~&gt;
          </span>
        </Link>
      )}
    </div>
  );
}
