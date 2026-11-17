import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Results from "@/components/results";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main id="main-content">
      <Intro />
      <About />
      <Projects />
      <Results />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
