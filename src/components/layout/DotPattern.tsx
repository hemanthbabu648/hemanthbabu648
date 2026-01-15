interface DotPatternProps {
  position: 'left' | 'right';
}

export default function DotPattern({ position }: DotPatternProps) {
  return (
    <div
      className={`fixed top-1/2 -translate-y-1/2 ${
        position === 'left' ? 'left-4 xl:left-8' : 'right-4 xl:right-8'
      } hidden lg:block z-10`}
    >
      <div className="grid grid-cols-5 gap-3">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-white" />
        ))}
      </div>
    </div>
  );
}
