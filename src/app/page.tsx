import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import ProgressBar from "@/components/ProgressBar";
import Projects from "@/components/Projects";
import SectionDevider from "@/components/SectionDevider";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 items-center px-4 overflow-hidden">
      <Intro />
      <div className="py-2" />
      <SectionDevider />
      <div className="py-2" />
      <About />
      <div className="py-2" />
      <SectionDevider />
      <div className="py-2" />
      {/* <Projects /> */}
      <div className="py-2" />
      <Experience />
      <div className="py-2" />
      <Contact />
      <ProgressBar />
    </main>
  );
}
