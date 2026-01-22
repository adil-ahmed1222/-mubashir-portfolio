import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AIBackground } from "@/components/AIBackground";
import { SectionDivider } from "@/components/SectionDivider";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AIBackground />
      <Navbar />
      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-32 px-6 pb-24 pt-32 sm:px-10 lg:px-12">
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>

        <SectionDivider delay={0.05} />

        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        <SectionDivider delay={0.05} />

        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>

        <SectionDivider delay={0.05} />

        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>

        <SectionDivider delay={0.05} />

        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
