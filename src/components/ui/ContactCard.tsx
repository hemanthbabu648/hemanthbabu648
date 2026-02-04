import { LucideIcon, Send } from 'lucide-react';

interface ContactLink {
  href: string;
  icon: LucideIcon;
  label: string;
  handle: string;
  accentColor: 'purple' | 'cyan';
}

interface ContactCardProps {
  title?: string;
  subtitle?: string;
  links: ContactLink[];
  statusText?: string;
}

export default function ContactCard({
  title = 'Message me here',
  subtitle = "I'll respond within 24-48 hours",
  links,
  statusText = 'Available for new oppurtunities & projects ',
}: ContactCardProps) {
  const getAccentClasses = (color: 'purple' | 'cyan') => {
    if (color === 'purple') {
      return {
        bg: 'hover:bg-[var(--accent-purple)]/10',
        border: 'hover:border-[var(--accent-purple)]/30',
        iconBg: 'bg-[var(--accent-purple)]/10 group-hover/link:bg-[var(--accent-purple)]/20',
        iconColor: 'text-[var(--accent-purple)]',
      };
    }
    return {
      bg: 'hover:bg-[var(--accent-cyan)]/10',
      border: 'hover:border-[var(--accent-cyan)]/30',
      iconBg: 'bg-[var(--accent-cyan)]/10 group-hover/link:bg-[var(--accent-cyan)]/20',
      iconColor: 'text-[var(--accent-cyan)]',
    };
  };

  return (
    <div className="relative group w-full md:w-auto">
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-cyan)] rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />

      {/* Contact Card */}
      <div className="relative bg-[var(--bg-secondary)]/80 backdrop-blur-sm rounded-xl p-6 border border-[var(--border-muted)] group-hover:border-[var(--accent-purple)]/50 transition-colors">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[var(--accent-purple)]/20 flex items-center justify-center">
            <Send size={18} className="text-[var(--accent-purple)]" />
          </div>
          <div>
            <p className="text-[var(--text-primary)] font-semibold">{title}</p>
            <p className="text-[var(--text-muted)] text-xs">{subtitle}</p>
          </div>
        </div>

        {/* Contact Links */}
        <ul className="space-y-4">
          {links.map(link => {
            const accent = getAccentClasses(link.accentColor);
            const Icon = link.icon;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-3 rounded-lg bg-[var(--bg-tertiary)]/50 ${accent.bg} border border-transparent ${accent.border} transition-all group/link`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg ${accent.iconBg} flex items-center justify-center transition-colors`}
                  >
                    <Icon size={16} className={accent.iconColor} />
                  </div>
                  <div>
                    <p className="text-[var(--text-primary)] text-sm font-medium">{link.label}</p>
                    <p className="text-[var(--text-secondary)] text-xs">{link.handle}</p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Status Indicator */}
        <div className="mt-6 flex items-center gap-2 text-xs text-[var(--text-muted)]">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          {statusText}
        </div>
      </div>
    </div>
  );
}
