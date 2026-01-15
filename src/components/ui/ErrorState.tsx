import { ArrowUpRight, LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ErrorStateProps {
  icon: LucideIcon;
  message: string;
  linkText: string;
  linkHref: string;
}

export default function ErrorState({ icon: Icon, message, linkText, linkHref }: ErrorStateProps) {
  return (
    <div className="text-center py-12">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--np-bg-secondary)] mb-4">
        <Icon size={32} className="text-[var(--np-text-muted)]" />
      </div>
      <p className="text-[var(--np-text-secondary)] mb-4">{message}</p>
      <Link
        href={linkHref}
        target="_blank"
        className="inline-flex items-center gap-2 text-[var(--np-accent-purple)] hover:underline"
      >
        {linkText}
        <ArrowUpRight size={16} />
      </Link>
    </div>
  );
}
