import { QOUTE } from '@/constants/content';

export default function Quote() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl mx-auto md:ml-auto md:mr-0">
          {/* Quote Box */}
          <div className="np-glass rounded-lg p-8 relative">
            {/* Top Quote Mark */}
            <span className="absolute -top-4 left-6 bg-[var(--np-bg-primary)] px-3 text-4xl text-[var(--np-accent-purple)] font-serif">
              &ldquo;
            </span>

            <p className="text-lg md:text-2xl text-white text-center py-4 font-medium">
              {QOUTE.text}
            </p>

            {/* Bottom Quote Mark */}
            <span className="absolute -bottom-4 right-6 bg-[var(--np-bg-primary)] px-3 text-4xl text-[var(--np-accent-purple)] font-serif">
              &rdquo;
            </span>
          </div>

          {/* Author */}
          <div className="flex justify-end mt-6">
            <div className="np-glass rounded px-5 py-3">
              <span className="text-[var(--np-text-secondary)]">
                - <span className="text-[var(--np-accent-purple)]">{QOUTE.author}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
