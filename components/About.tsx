import { ScrollReveal } from "@/components/ui/ScrollReveal";

const stats = [
  { number: "12+", label: "Projekte" },
  { number: "100%", label: "Zufriedene Kunden" },
  { number: "2024", label: "Gegründet" },
];

export default function About() {
  return (
    <section
      id="ueber-mich"
      className="bg-off-white dark:bg-[#111111] py-16 sm:py-24 px-5 sm:px-6 scroll-mt-[52px] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">
        {/* Left: Text */}
        <ScrollReveal>
          <div>
            <p className="text-blox-blue text-xs uppercase tracking-widest font-semibold">
              Über mich
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-near-black dark:text-white mt-2 font-display tracking-tight leading-tight">
              Gebaut in Wien.
              <br />
              Gedacht fürs Web.
            </h2>
            <p className="text-mid-gray dark:text-[#98989F] text-base sm:text-lg leading-relaxed mt-4 sm:mt-6">
              Ich bin [Name] — Webdesigner aus Wien mit einem Auge für Details
              und einem Gespür für das, was online wirklich funktioniert. Meine
              Projekte verbinden klares Design mit echter Wirkung.
            </p>

            {/* Stats */}
            <div className="flex gap-8 sm:gap-10 mt-8 sm:mt-10 flex-wrap">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-near-black dark:text-white font-display">
                    {stat.number}
                  </p>
                  <p className="text-mid-gray dark:text-[#98989F] text-sm mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Right: Photo placeholder */}
        <ScrollReveal delay={0.15}>
          {/* PHOTO: Replace with next/image */}
          <div className="w-full aspect-square bg-[#E8E8ED] dark:bg-[#2a2a2a] rounded-2xl flex items-center justify-center transition-colors duration-300">
            <span className="text-mid-gray text-sm font-mono">[ Foto ]</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
