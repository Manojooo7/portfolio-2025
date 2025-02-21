import HeroSection from "@/components/hero-section";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Skills } from "@/components/skiils";
import { Navbar } from "@/components/navbar";
import { About } from "@/components/about";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <ScrollProgress/>
      <Navbar/>
      <HeroSection />
      <About/>
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
