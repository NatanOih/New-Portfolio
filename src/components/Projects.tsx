"use client";

import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import { projectData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import ProjectTitle from "./ProjectTitle";
import ProjectCard from "./ProjectCard";

type projectObject = {
  title: string;
};

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);
  const [currentProject, setCurrentProject] = useState("nothing");

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 px-4 w-full h-[fit] scroll-smooth  "
    >
      <SectionHeading>My Projects </SectionHeading>
      <div className="flex w-full h-full items-start gap-14 ">
        <ul className="w-full h-full text-center flex flex-col gap-14 py-[50vh]">
          {projectData.map((project: projectObject, index: number) => (
            <li key={index}>
              <ProjectTitle setCurrentProject={setCurrentProject}>
                {project.title}
              </ProjectTitle>
            </li>
          ))}
        </ul>

        <div className="sticky top-0 flex h-screen w-full items-center ">
          <ProjectCard currentProject={currentProject} />
        </div>
      </div>
      <div className="h-[30vh]">g</div>
    </section>
  );
}
