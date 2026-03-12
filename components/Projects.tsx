"use client";

import Image from "next/image";
import { Paintbrush, Coffee, Calculator, Dumbbell } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";

const projects = [
  {
    name: "Maler Wagner",
    description: "Moderner Webauftritt für einen traditionellen Malerbetrieb",
    tag: "webdesign",
    Icon: Paintbrush,
    imageSrc: "/projects/kevin-bhagat-zNRITe8NPqY-unsplash.jpg",
    href: "#",
    cta: "Projekt ansehen",
    className: "lg:col-span-2",
  },
  {
    name: "Café Central",
    description: "Einladende Online-Präsenz mit Reservierungssystem",
    tag: "branding",
    Icon: Coffee,
    imageSrc: "/projects/tran-mau-tri-tam-h7v_38e3iGE-unsplash.jpg",
    href: "#",
    cta: "Projekt ansehen",
    className: "lg:col-span-1",
  },
  {
    name: "Steuerberater Müller",
    description: "Professionelle Kanzlei-Website mit Mandantenportal",
    tag: "corporate",
    Icon: Calculator,
    imageSrc: "/projects/carlos-muza-hpjSkU2UYSU-unsplash.jpg",
    href: "#",
    cta: "Projekt ansehen",
    className: "lg:col-span-1",
  },
  {
    name: "FitLife Gym",
    description: "Dynamische Landingpage mit Kursplan-Integration",
    tag: "landing",
    Icon: Dumbbell,
    imageSrc: "/projects/lee-campbell-DtDlVpy-vvQ-unsplash.jpg",
    href: "#",
    cta: "Projekt ansehen",
    className: "lg:col-span-2",
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

      <div className="max-w-6xl mx-auto px-5 sm:px-6 pt-8 sm:pt-12 pb-16 sm:pb-24">
        <BentoGrid>
          {projects.map((project, index) => (
            <BentoCard
              key={project.name}
              {...project}
              background={
                <Image
                  src={project.imageSrc}
                  alt={project.name}
                  fill
                  quality={75}
                  priority={index < 2}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              }
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
