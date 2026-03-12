import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ShinyButton } from "@/components/ui/shiny-button";

const services = [
  {
    icon: "🌐",
    title: "Webdesign",
    desc: "Individuelle Websites, die Ihre Marke repräsentieren — visuell stark, conversion-optimiert.",
  },
  {
    icon: "💻",
    title: "Web Development",
    desc: "Sauberer Code, schnelle Ladezeiten, modernste Technologien. Gebaut für Performance.",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    desc: "Ihre Website sieht auf jedem Gerät perfekt aus — vom Smartphone bis zum 4K-Monitor.",
  },
  {
    icon: "🎨",
    title: "Branding & Identity",
    desc: "Logo, Farben, Typografie — wir geben Ihrer Marke eine unverwechselbare Identität.",
  },
  {
    icon: "⚡",
    title: "Landingpages",
    desc: "Zielgerichtete Seiten, die Besucher in Kunden verwandeln. Klar. Schnell. Effektiv.",
  },
  {
    icon: "🔧",
    title: "Wartung & Support",
    desc: "Updates, Sicherheit und technischer Support — damit Sie sich auf Ihr Business konzentrieren.",
  },
];

export default function Services() {
  return (
    <section
      id="leistungen"
      className="bg-soft-blue dark:bg-[#0a1628] py-16 sm:py-24 px-5 sm:px-6 scroll-mt-[52px] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-blox-blue text-xs uppercase tracking-widest font-semibold">
            Leistungen
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-near-black dark:text-white mt-2 mb-8 sm:mb-12 font-display tracking-tight">
            Was wir für Sie tun
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <div className="bg-ice-blue dark:bg-[#0f2040] rounded-2xl p-6 sm:p-8 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-blox-blue/10 transition-[transform,box-shadow] duration-300 h-full">
                <span className="text-3xl block mb-4">{service.icon}</span>
                <h3 className="text-lg font-semibold text-near-black dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-mid-gray dark:text-[#98989F] text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="mt-14 text-center">
            <a href="#kontakt">
              <ShinyButton className="rounded-full px-8 py-3 bg-blox-blue border-blox-blue text-white shadow-[0_2px_8px_rgba(0,113,227,0.3),0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_rgba(0,113,227,0.4),0_2px_6px_rgba(0,0,0,0.08)] dark:bg-blox-blue dark:border-blox-blue dark:shadow-[0_2px_10px_rgba(0,113,227,0.3)] dark:hover:shadow-[0_4px_24px_rgba(0,113,227,0.4)] [&>span:first-child]:text-white [&>span:first-child]:dark:text-white">Service anfragen</ShinyButton>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
