'use client';

import { useEffect, useRef } from 'react';

export default function CursorFollower() {
  const rabbitRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    let animationId: number;

    const animate = () => {
      const speed = 0.08;
      pos.current.x += (target.current.x - pos.current.x) * speed;
      pos.current.y += (target.current.y - pos.current.y) * speed;

      if (rabbitRef.current) {
        rabbitRef.current.style.left = `${pos.current.x}px`;
        rabbitRef.current.style.top = `${pos.current.y}px`;
      }

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={rabbitRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(15px, 10px)',
      }}
    >
      <svg
        width="28"
        height="34"
        viewBox="0 0 28 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left ear */}
        <ellipse cx="8" cy="6" rx="3.5" ry="8" fill="#915eff" />
        <ellipse cx="8" cy="6" rx="2" ry="6" fill="#c4a0ff" />
        {/* Right ear */}
        <ellipse cx="20" cy="6" rx="3.5" ry="8" fill="#915eff" />
        <ellipse cx="20" cy="6" rx="2" ry="6" fill="#c4a0ff" />
        {/* Head */}
        <ellipse cx="14" cy="18" rx="10" ry="9" fill="#915eff" />
        {/* Left eye */}
        <ellipse cx="10" cy="16" rx="2" ry="2.2" fill="white" />
        <circle cx="10.5" cy="16.2" r="1" fill="#111" />
        {/* Right eye */}
        <ellipse cx="18" cy="16" rx="2" ry="2.2" fill="white" />
        <circle cx="18.5" cy="16.2" r="1" fill="#111" />
        {/* Nose */}
        <ellipse cx="14" cy="19.5" rx="1.2" ry="0.8" fill="#ff99cc" />
        {/* Mouth */}
        <path d="M12.5 21 Q14 23 15.5 21" stroke="#c4a0ff" strokeWidth="0.8" fill="none" />
        {/* Whiskers */}
        <line x1="7" y1="19" x2="2" y2="17.5" stroke="#c4a0ff" strokeWidth="0.5" />
        <line x1="7" y1="20" x2="2" y2="20.5" stroke="#c4a0ff" strokeWidth="0.5" />
        <line x1="21" y1="19" x2="26" y2="17.5" stroke="#c4a0ff" strokeWidth="0.5" />
        <line x1="21" y1="20" x2="26" y2="20.5" stroke="#c4a0ff" strokeWidth="0.5" />
        {/* Cheeks */}
        <circle cx="7" cy="20" r="1.5" fill="#e0b0ff" opacity="0.4" />
        <circle cx="21" cy="20" r="1.5" fill="#e0b0ff" opacity="0.4" />
      </svg>
    </div>
  );
}
