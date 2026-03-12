"use client";

import { useRef, useEffect, useCallback } from "react";

const CLIENTS = [
  "Webdesign",
  "UI/UX Design",
  "Conversion Optimierung",
  "Responsive Design",
  "SEO-optimierte Websites",
  "Branding Identity",
  "Landing Pages",
  "Performance Speed",
  "Wartung Support",
  "Individuelle Lösungen",
];

const SPEED = 50; // px per second (normal)
const HOVER_SPEED = SPEED * 0.3; // 30% of normal = 70% slower

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const speedRef = useRef(SPEED);
  const targetSpeedRef = useRef(SPEED);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  const animate = useCallback((time: number) => {
    if (!trackRef.current) return;

    if (lastTimeRef.current === 0) lastTimeRef.current = time;
    const delta = (time - lastTimeRef.current) / 1000;
    lastTimeRef.current = time;

    // Smoothly lerp speed toward target
    speedRef.current += (targetSpeedRef.current - speedRef.current) * Math.min(delta * 4, 1);

    offsetRef.current -= speedRef.current * delta;

    // Reset when first half has scrolled past
    const halfWidth = trackRef.current.scrollWidth / 2;
    if (Math.abs(offsetRef.current) >= halfWidth) {
      offsetRef.current += halfWidth;
    }

    trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  const items = [...CLIENTS, ...CLIENTS];

  return (
    <div
      className="bg-off-white dark:bg-[#111111] h-12 sm:h-16 relative overflow-hidden border-t border-b border-light-gray dark:border-white/10 transition-colors duration-300"
      onMouseEnter={() => { targetSpeedRef.current = HOVER_SPEED; }}
      onMouseLeave={() => { targetSpeedRef.current = SPEED; }}
    >
      {/* Left fade */}
      <div
        className="absolute inset-y-0 left-0 w-16 sm:w-32 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, var(--marquee-bg), transparent)",
        }}
      />
      {/* Right fade */}
      <div
        className="absolute inset-y-0 right-0 w-16 sm:w-32 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, var(--marquee-bg), transparent)",
        }}
      />

      {/* Scrolling content */}
      <div
        ref={trackRef}
        className="flex items-center h-full whitespace-nowrap will-change-transform"
      >
        {items.map((client, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="text-near-black dark:text-[#d1d1d6] text-xs sm:text-sm font-medium uppercase tracking-widest px-3 sm:px-6">
              {client}
            </span>
            <span className="text-blox-blue text-xl">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
