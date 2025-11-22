// import AboutMe from "@/components/about-me";
import BentoGrid from "@/components/bento-grid";
import Hero from "@/components/hero";
// import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="overflow-x-hidden relative">
      <Hero />
      <BentoGrid />
      {/* <AboutMe /> */}
      {/* <Projects /> */}
    </main>
  );
}
