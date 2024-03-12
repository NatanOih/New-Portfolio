import Contact from "@/components/Contact/Contact";
import Experience from "@/components/Expirience/Experience";
import Intro from "@/components/Intro/Intro";
import ProgressBar from "@/components/ProjectSection/ProgressBar";
import Projects from "@/components/ProjectSection/Projects";
import SectionDevider from "@/components/SectionDevider";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 items-center px-4 ">
      <Intro />
      <div className="py-2" />
      <SectionDevider />
      <div className="py-2" />
      <Skills />
      <div className="py-2" />
      <SectionDevider />
      <div className="py-2" />
      <Projects />
      <SectionDevider />
      <div className="py-2" />
      <Experience />
      <div className="py-2" />
      <SectionDevider />
      <Contact />
      <ProgressBar />
    </main>
  );
}
