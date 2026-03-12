"use client";

import { useState } from "react";

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

export default function Marquee() {
  const [paused, setPaused] = useState(false);

  const items = [...CLIENTS, ...CLIENTS]; // duplicate for seamless loop

  return (
    <div className="bg-off-white dark:bg-[#111111] h-16 relative overflow-hidden border-t border-b border-light-gray dark:border-white/10 transition-colors duration-300">
      {/* Left fade — uses CSS variable set per theme */}
      <div
        className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, var(--marquee-bg), transparent)",
        }}
      />
      {/* Right fade */}
      <div
        className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, var(--marquee-bg), transparent)",
        }}
      />

      {/* Scrolling content */}
      <div
        className="flex items-center h-full animate-marquee whitespace-nowrap"
        style={{ animationPlayState: paused ? "paused" : "running" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {items.map((client, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="text-near-black dark:text-[#d1d1d6] text-sm font-medium uppercase tracking-widest px-6">
              {client}
            </span>
            <span className="text-blox-blue text-xl">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
