"use client";

import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";
import ProjectTitle from "./ProjectTitle";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);
  const [currentProject, setCurrentProject] = useState("nothing");

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 max-w-6xl px-4 w-full  h-[300vh] scroll-smooth  "
    >
      <SectionHeading>My Projects </SectionHeading>
      <div className="flex  w-full h-full items-start gap-20 ">
        <ul className="w-full h-full flex flex-col gap-20 py-[50vh]">
          {["dick1", "dick2", "dick3", "dick4"].map((project, index) => (
            <li key={index}>
              <ProjectTitle setCurrentProject={setCurrentProject}>
                {project}
              </ProjectTitle>
            </li>
          ))}
        </ul>

        <div className="sticky top-0 flex h-screen w-full items-center ">
          <div className="bg-gray-700/80 flex justify-center items-center rounded-2xl w-full aspect-square">
            <ProjectCard gradient={""}> {currentProject} </ProjectCard>
          </div>
        </div>
      </div>
      <div className="h-[30vh]">g</div>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <article>
      <h3> {title}</h3>
      <p> {description}</p>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}> {tag}</li>
        ))}
      </ul>
      <Image src={imageUrl} alt={title} width={300} quality={95} />
    </article>
  );
}
