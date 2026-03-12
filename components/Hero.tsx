"use client";

import { motion } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";
import { ShinyButton } from "@/components/ui/shiny-button";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    delay,
    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  },
});

export default function Hero() {
  return (
    <section className="bg-white dark:bg-blox-black min-h-screen flex flex-col items-center justify-center px-5 sm:px-6 py-16 sm:py-20 transition-colors duration-300">
      <div className="flex flex-col items-center text-center w-full max-w-3xl">
        {/* 3D Model */}
        <motion.div
          {...fadeUp(0)}
          className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[480px] md:h-[480px] mb-8 sm:mb-10"
        >
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>

        {/* Text block */}
        <motion.h1
          {...fadeUp(0.15)}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-near-black dark:text-white tracking-tight font-display leading-[1.05]"
        >
          Websites, die verkaufen.
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="text-base sm:text-lg md:text-xl text-mid-gray font-normal mt-3 sm:mt-4 leading-relaxed max-w-2xl px-2 sm:px-0"
        >
          Wir bauen digitale Auftritte, die nicht nur gut aussehen —<br
            className="hidden md:block"
          />{" "}
          sondern Ergebnisse liefern.
        </motion.p>

        {/* CTA */}
        <motion.div {...fadeUp(0.45)} className="mt-6 sm:mt-8">
          <a href="#kontakt">
            <ShinyButton className="rounded-full px-6 sm:px-8 py-3">Projekt starten</ShinyButton>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
