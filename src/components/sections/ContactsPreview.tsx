import { Mail, MessageCircle } from 'lucide-react';

import ContactCard from '../ui/ContactCard';
import ContactCodeBlock from '../ui/ContactCodeBlock';
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
          <div
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
          >
            <p className="text-[var(--np-text-secondary)] text-lg leading-relaxed mb-6">
              I&apos;m interested in{' '}
              <span className="text-[var(--np-accent-purple)]">new opportunities</span>. However, if
              you have other request or question, don&apos;t hesitate to contact me.
            </p>

            {/* Decorative Code Block */}
            <ContactCodeBlock
              variableName="contact"
              properties={[
                { key: 'status', value: 'available' },
                { key: 'response', value: '24-48h' },
              ]}
            />
          </div>

          {/* Right: Contact Box with Glass Effect */}
          <div
            className="flex justify-start md:justify-end opacity-0 animate-fade-in"
            style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
          >
            <ContactCard
              links={[
                {
                  href: 'https://www.linkedin.com/in/hemanthbabu648',
                  icon: Mail,
                  label: 'LinkedIn',
                  handle: '@hemanthbabu648',
                  accentColor: 'purple',
                },
                {
                  href: 'https://wa.me/919490980700',
                  icon: MessageCircle,
                  label: 'WhatsApp',
                  handle: '+91 9490980700',
                  accentColor: 'cyan',
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
