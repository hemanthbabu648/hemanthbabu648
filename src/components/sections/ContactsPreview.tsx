import { Mail, MessageCircle, Send } from 'lucide-react';

import SectionTitle from '../ui/SectionTitle';

export default function ContactsPreview() {
  return (
    <section id="contacts" className="py-16 md:py-24 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--np-accent-purple)]/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative">
        <SectionTitle title="contacts" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Text with Decoration */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <p className="text-[var(--np-text-secondary)] text-lg leading-relaxed mb-6">
              I&apos;m interested in <span className="text-[var(--np-accent-purple)]">freelance opportunities</span>. However,
              if you have other request or question, don&apos;t hesitate
              to contact me.
            </p>

            {/* Decorative Code Block */}
            <div className="bg-[var(--np-bg-secondary)]/60 backdrop-blur-sm rounded-lg p-4 border border-[var(--np-border-muted)] font-mono text-sm">
              <div className="text-[var(--np-text-muted)]">
                <span className="text-[var(--np-accent-purple)]">const</span>{' '}
                <span className="text-[var(--np-accent-cyan)]">contact</span> = {'{'}
              </div>
              <div className="text-[var(--np-text-muted)] ml-4">
                status: <span className="text-green-400">&quot;available&quot;</span>,
              </div>
              <div className="text-[var(--np-text-muted)] ml-4">
                response: <span className="text-green-400">&quot;24-48h&quot;</span>
              </div>
              <div className="text-[var(--np-text-muted)]">{'}'}</div>
            </div>
          </div>

          {/* Right: Contact Box with Glass Effect */}
          <div className="flex justify-start md:justify-end opacity-0 animate-fade-in" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <div className="relative group w-full md:w-auto">
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--np-accent-purple)] to-[var(--np-accent-cyan)] rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />

              {/* Contact Card */}
              <div className="relative bg-[var(--np-bg-secondary)]/80 backdrop-blur-sm rounded-xl p-6 border border-[var(--np-border-muted)] group-hover:border-[var(--np-accent-purple)]/50 transition-colors">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--np-accent-purple)]/20 flex items-center justify-center">
                    <Send size={18} className="text-[var(--np-accent-purple)]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Message me here</p>
                    <p className="text-[var(--np-text-muted)] text-xs">I&apos;ll respond within 24-48 hours</p>
                  </div>
                </div>

                {/* Contact Links */}
                <ul className="space-y-4">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/hemanthbabu648"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg bg-[var(--np-bg-tertiary)]/50 hover:bg-[var(--np-accent-purple)]/10 border border-transparent hover:border-[var(--np-accent-purple)]/30 transition-all group/link"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[var(--np-accent-purple)]/10 flex items-center justify-center group-hover/link:bg-[var(--np-accent-purple)]/20 transition-colors">
                        <Mail size={16} className="text-[var(--np-accent-purple)]" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">LinkedIn</p>
                        <p className="text-[var(--np-text-secondary)] text-xs">@hemanthbabu648</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/919490980700"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg bg-[var(--np-bg-tertiary)]/50 hover:bg-[var(--np-accent-cyan)]/10 border border-transparent hover:border-[var(--np-accent-cyan)]/30 transition-all group/link"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[var(--np-accent-cyan)]/10 flex items-center justify-center group-hover/link:bg-[var(--np-accent-cyan)]/20 transition-colors">
                        <MessageCircle size={16} className="text-[var(--np-accent-cyan)]" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">WhatsApp</p>
                        <p className="text-[var(--np-text-secondary)] text-xs">+91 9490980700</p>
                      </div>
                    </a>
                  </li>
                </ul>

                {/* Status Indicator */}
                <div className="mt-6 flex items-center gap-2 text-xs text-[var(--np-text-muted)]">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Available for new projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
