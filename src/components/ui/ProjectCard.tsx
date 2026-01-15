import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { getSiteBaseUrl } from '@/utils/StringUtils';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
  isSmall?: boolean;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  sourceUrl,
  isSmall = false,
}: ProjectCardProps) {
  if (isSmall) {
    return (
      <div className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02]">
        {/* Glass Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--np-bg-secondary)] to-[var(--np-bg-tertiary)] opacity-90" />
        <div className="absolute inset-0 border border-[var(--np-border-muted)] rounded-xl group-hover:border-[var(--np-accent-purple)]/50 transition-colors" />

        <div className="relative p-5">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[var(--np-accent-purple)] text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[var(--np-accent-purple)] transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[var(--np-text-secondary)] text-sm mb-4 line-clamp-2 leading-relaxed">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex gap-3">
            {sourceUrl && (
              <Link
                href={sourceUrl}
                target="_blank"
                className="flex items-center gap-2 text-[var(--np-text-secondary)] text-sm hover:text-[var(--np-accent-purple)] transition-colors"
              >
                <Github size={16} />
                <span>Code</span>
              </Link>
            )}
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                className="flex items-center gap-2 text-[var(--np-text-secondary)] text-sm hover:text-[var(--np-accent-cyan)] transition-colors"
              >
                <ExternalLink size={16} />
                <span>Live</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02]">
      {/* Glow Effect on Hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--np-accent-purple)] to-[var(--np-accent-cyan)] rounded-xl opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300" />

      {/* Card Background */}
      <div className="relative bg-[var(--np-bg-secondary)] rounded-xl overflow-hidden border border-[var(--np-border-muted)] group-hover:border-[var(--np-accent-purple)]/50 transition-colors">
        {/* Image */}
        {image && (
          <div className="relative h-44 overflow-hidden">
            <Image
              src={getSiteBaseUrl('APP', image)}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--np-bg-secondary)] via-transparent to-transparent" />
          </div>
        )}

        {/* Tags */}
        <div className="px-5 py-3 border-b border-[var(--np-border-muted)]/50">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded bg-[var(--np-accent-purple)]/10 text-[var(--np-accent-purple)] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-[var(--np-accent-purple)] transition-colors">
            {title}
          </h3>
          <p className="text-[var(--np-text-secondary)] text-sm mb-5 line-clamp-2 leading-relaxed">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex gap-3">
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                className="np-btn-primary text-sm px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <span>Live Demo</span>
                <ExternalLink size={14} />
              </Link>
            )}
            {sourceUrl && (
              <Link
                href={sourceUrl}
                target="_blank"
                className="np-btn-secondary text-sm px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <Github size={14} />
                <span>Code</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
