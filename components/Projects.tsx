"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CardStack, type CardStackItem } from "@/components/ui/card-stack";

const projects: CardStackItem[] = [
  {
    id: 1,
    title: "Maler Wagner",
    description: "Moderner Webauftritt für einen traditionellen Malerbetrieb",
    tag: "webdesign",
    imageSrc: "/projects/kevin-bhagat-zNRITe8NPqY-unsplash.jpg",
    href: "#",
  },
  {
    id: 2,
    title: "Café Central",
    description: "Einladende Online-Präsenz mit Reservierungssystem",
    tag: "branding",
    imageSrc: "/projects/tran-mau-tri-tam-h7v_38e3iGE-unsplash.jpg",
    href: "#",
  },
  {
    id: 3,
    title: "Steuerberater Müller",
    description: "Professionelle Kanzlei-Website mit Mandantenportal",
    tag: "corporate",
    imageSrc: "/projects/carlos-muza-hpjSkU2UYSU-unsplash.jpg",
    href: "#",
  },
  {
    id: 4,
    title: "FitLife Gym",
    description: "Dynamische Landingpage mit Kursplan-Integration",
    tag: "landing",
    imageSrc: "/projects/lee-campbell-DtDlVpy-vvQ-unsplash.jpg",
    href: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projekte"
      className="bg-white dark:bg-blox-black scroll-mt-[52px] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto pt-16 sm:pt-24 px-5 sm:px-6">
        <ScrollReveal>
          <p className="text-blox-blue text-xs uppercase tracking-widest font-semibold">
            Projekte
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-near-black dark:text-white mt-2 mb-0 font-display tracking-tight">
            Ausgewählte Arbeiten
          </h2>
        </ScrollReveal>
      </div>

      <div className="max-w-5xl mx-auto px-2 sm:px-6 pt-8 sm:pt-12 pb-16 sm:pb-24">
        <CardStack
          items={projects}
          initialIndex={0}
          autoAdvance
          intervalMs={2000}
          pauseOnHover
          showDots
        />
      </div>
    </section>
  );
}
