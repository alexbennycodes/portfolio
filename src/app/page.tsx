import AboutMe from "@/components/about-me";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="overflow-x-hidden relative">
      <Hero />
      <AboutMe />
      <Projects />
    </main>
  );
}
