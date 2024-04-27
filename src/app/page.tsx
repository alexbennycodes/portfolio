import AboutMe from "@/components/about-me";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="overflow-x-hidden relative pb-24">
      <Hero />
      <AboutMe />
      <Projects />
    </main>
  );
}
