import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/hemanthbabu648', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/hemanthbabu648', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/hemanthbabu648', icon: Twitter },
  { name: 'Instagram', href: 'https://www.instagram.com/hemanthbabu648', icon: Instagram },
];

export default function SocialSidebar() {
  return (
    <div className="fixed left-4 xl:left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2 z-20">
      {/* Vertical Line */}
      <div className="w-px h-8 bg-[var(--text-secondary)]" />

      {/* Social Icons */}
      <div className="flex flex-col gap-3">
        {socialLinks.map(social => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-white transition-colors"
              aria-label={social.name}
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>

      {/* Vertical Line */}
      <div className="w-px h-8 bg-[var(--text-secondary)]" />
    </div>
  );
}
