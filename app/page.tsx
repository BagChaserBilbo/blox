import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="min-h-[600px] bg-near-black" />,
});

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Projects />
      <Services />
      <About />
      <Contact />
    </>
  );
}
