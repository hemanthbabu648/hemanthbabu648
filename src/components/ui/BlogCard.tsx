import { ArrowUpRight, Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { getSiteBaseUrl } from '@/utils/StringUtils';
interface BlogCardProps {
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  url: string;
  author?: string;
  tags?: string[];
}

export default function BlogCard({
  title,
  excerpt,
  coverImage,
  date,
  readTime,
  url,
  tags = [],
}: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--np-accent-purple)] to-[var(--np-accent-cyan)] rounded-xl opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300" />

      {/* Card Background */}
      <div className="relative bg-[var(--np-bg-secondary)] rounded-xl overflow-hidden border border-[var(--np-border-muted)] group-hover:border-[var(--np-accent-purple)]/50 transition-colors h-full flex flex-col">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={getSiteBaseUrl('BLOGS', coverImage)}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--np-bg-secondary)] via-transparent to-transparent" />

          {/* Read Time Badge */}
          <div className="absolute top-3 right-3 px-3 py-1 bg-[var(--np-bg-primary)]/80 backdrop-blur-sm rounded-full text-xs text-[var(--np-accent-cyan)] font-medium flex items-center gap-1">
            <Clock size={12} />
            {readTime}
          </div>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="px-5 pt-4">
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded bg-[var(--np-accent-purple)]/10 text-[var(--np-accent-purple)] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[var(--np-accent-purple)] transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-[var(--np-text-secondary)] text-sm mb-4 line-clamp-2 leading-relaxed flex-1">
            {excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-[var(--np-border-muted)]/50">
            <div className="flex items-center gap-2 text-[var(--np-text-muted)] text-xs">
              <Calendar size={14} />
              <span>{formatDate(date)}</span>
            </div>
            <span className="flex items-center gap-1 text-[var(--np-accent-purple)] text-sm font-medium group-hover:gap-2 transition-all">
              Read more
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
