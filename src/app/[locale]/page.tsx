import Hero from "@/app/[locale]/components/hero";
import Skils from "./components/skils";
import About from "./components/about";
import Project from "./components/project";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="mx-4">
      <Hero />
      <Skils />
      <Project />
      <About />
      <Contact />
    </main>
  );
}
