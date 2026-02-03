import CodeSnippet from '../ui/CodeSnippet';
import SectionTitle from '../ui/SectionTitle';
import SkillsGrid from '../ui/SkillsGrid';

export default function SkillsPreview() {
  return (
    <section id="skills" className="py-16 md:py-24 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent-cyan)]/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left: Decorative Elements */}
          <div className="hidden md:flex md:col-span-1 flex-col items-center justify-center h-full py-8">
            {/* Decorative Shapes with Glow */}
            <div
              className="flex flex-col items-start gap-6 opacity-0 animate-fade-in"
              style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
            >
              <div className="w-14 h-14 lg:w-16 lg:h-16 border border-white/30 relative group hover:border-[var(--accent-purple)] transition-colors duration-300">
                <div className="absolute inset-0 bg-[var(--accent-purple)]/0 group-hover:bg-[var(--accent-purple)]/10 transition-all duration-300" />
              </div>

              {/* Code Snippet Decoration */}
              <div className="ml-4">
                <CodeSnippet items={['creativity', 'passion', 'dedication']} />
              </div>

              <div className="w-14 h-14 lg:w-16 lg:h-16 border border-[var(--accent-purple)]/50 ml-10 relative group hover:border-[var(--accent-cyan)] transition-colors duration-300">
                <div className="absolute inset-0 bg-[var(--accent-cyan)]/0 group-hover:bg-[var(--accent-cyan)]/10 transition-all duration-300" />
                {/* Glowing Corner */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[var(--accent-purple)] rounded-full animate-pulse" />
              </div>
            </div>
          </div>

          {/* Right: Skills */}
          <div className="md:col-span-4">
            <SectionTitle title="skills" />
            <div className="mt-6">
              <SkillsGrid />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
