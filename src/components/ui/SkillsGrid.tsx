import { SKILLS } from '@/constants/content';

function SkillsGrid() {
  return (
    <div className="relative group">
      {/* Outer Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-cyan)] rounded-xl opacity-20 blur-sm" />

      {/* Main Container */}
      <div className="relative rounded-xl overflow-hidden border border-[var(--border-muted)] bg-[var(--bg-secondary)]/80 backdrop-blur-sm">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {SKILLS.map((skill, index) => (
            <div
              key={skill.category}
              className={`relative p-5 group/item transition-all duration-300 hover:bg-[var(--accent-purple)]/5 ${
                index < SKILLS.length - 1
                  ? 'border-r border-b lg:border-b-0 border-[var(--border-muted)]/50'
                  : ''
              }`}
            >
              {/* Category Header */}
              <h4 className="text-[var(--text-primary)] font-semibold mb-4 flex items-center gap-2 group-hover/item:text-[var(--accent-purple)] transition-colors">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-purple)]" />
                {skill.category}
              </h4>

              {/* Skills List */}
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li
                    key={item}
                    className="text-[var(--text-secondary)] text-sm flex items-center gap-2 opacity-0 animate-fade-in hover:text-[var(--accent-cyan)] transition-colors cursor-default"
                    style={{
                      animationDelay: `${index * 100 + itemIndex * 50}ms`,
                      animationFillMode: 'forwards',
                    }}
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
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
