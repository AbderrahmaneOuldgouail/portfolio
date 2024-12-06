import Hero from "@/app/[locale]/components/hero";
import Skils from "./components/skils";
import About from "./components/about";
import Projects from "./components/project";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className=" mx-4">
      <Hero />
      <Skils />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
