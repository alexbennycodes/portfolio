import AboutMe from "@/components/about-me";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="overflow-x-hidden relative">
      <Hero />
      <AboutMe />
    </main>
  );
}
