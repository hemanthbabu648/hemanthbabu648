import Image from 'next/image';

interface ProfileImageProps {
  src: string;
  alt: string;
  badge?: string;
  priority?: boolean;
}

export default function ProfileImage({ src, alt, badge, priority }: ProfileImageProps) {
  return (
    <div
      className="relative flex justify-center md:justify-end opacity-0 animate-fade-in"
      style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
    >
      <div className="relative group">
        {/* Glow Effect Behind Image */}
        <div className="absolute -inset-4 bg-gradient-to-br from-[var(--np-accent-purple)]/20 to-[var(--np-accent-cyan)]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Image Container */}
        <div className="relative w-64 h-80 rounded-lg overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="256px"
            priority={priority}
            className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--np-bg-primary)]/80 via-transparent to-transparent" />

          {/* Border Glow on Hover */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--np-accent-purple)]/50 rounded-lg transition-colors duration-300" />
        </div>

        {/* Decorative Border */}
        <div className="absolute inset-0 border border-[var(--np-accent-purple)]/50 rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-300" />

        {/* Decorative Dots */}
        <div className="absolute -bottom-6 -left-6 grid grid-cols-5 gap-2">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full bg-white/40 hover:bg-[var(--np-accent-purple)] transition-colors duration-200"
            />
          ))}
        </div>

        {/* Floating Badge */}
        {badge && (
          <div className="absolute -top-3 -right-3 px-3 py-1 bg-[var(--np-accent-purple)] rounded-full text-xs font-medium text-white shadow-lg shadow-[var(--np-accent-purple)]/30">
            {badge}
          </div>
        )}
      </div>
    </div>
  );
}
