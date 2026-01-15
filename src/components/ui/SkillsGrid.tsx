import { SKILLS } from '@/constants/content';

function SkillsGrid() {
  return (
    <div className="relative group">
      {/* Outer Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--np-accent-purple)] to-[var(--np-accent-cyan)] rounded-xl opacity-20 blur-sm" />

      {/* Main Container */}
      <div className="relative rounded-xl overflow-hidden border border-[var(--np-border-muted)] bg-[var(--np-bg-secondary)]/80 backdrop-blur-sm">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {SKILLS.map((skill, index) => (
            <div
              key={skill.category}
              className={`relative p-5 group/item transition-all duration-300 hover:bg-[var(--np-accent-purple)]/5 ${
                index < SKILLS.length - 1
                  ? 'border-r border-b lg:border-b-0 border-[var(--np-border-muted)]/50'
                  : ''
              }`}
            >
              {/* Category Header */}
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2 group-hover/item:text-[var(--np-accent-purple)] transition-colors">
                <span className="w-2 h-2 rounded-full bg-[var(--np-accent-purple)]" />
                {skill.category}
              </h4>

              {/* Skills List */}
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li
                    key={item}
                    className="text-[var(--np-text-secondary)] text-sm flex items-center gap-2 opacity-0 animate-fade-in hover:text-[var(--np-accent-cyan)] transition-colors cursor-default"
                    style={{
                      animationDelay: `${index * 100 + itemIndex * 50}ms`,
                      animationFillMode: 'forwards',
                    }}
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--np-text-muted)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsGrid;
