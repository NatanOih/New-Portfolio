"use client";

import React, { useState } from "react";
import SectionHeading from "../SectionHeading";
import { projectData } from "@/lib/data";
import { useIsTouchDevice, useSectionInView } from "@/lib/hooks";
import ProjectTitle from "./ProjectTitle";
import ProjectCard from "./ProjectCard";
import { projectObject } from "@/lib/types";
import { motion } from "framer-motion";
import ProjectMobile from "./ProjectMobile";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);
  const isMobile = useIsTouchDevice();
  const [currentProject, setCurrentProject] = useState<any>(null);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-14 px-4 w-full h-[fit] scroll-smooth  "
    >
      <SectionHeading>My Projects </SectionHeading>

      {isMobile ? (
        <ProjectMobile />
      ) : (
        <div className="flex w-full h-full items-start gap-14 ">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", delay: 1 }}
            className="w-full h-full text-center flex flex-col gap-14 py-[40vh]"
          >
            {projectData.map((project: projectObject, index: number) => (
              <li key={index}>
                <ProjectTitle
                  currentProject={currentProject}
                  project={project}
                  setCurrentProject={setCurrentProject}
                />
              </li>
            ))}
          </motion.ul>

          {currentProject && (
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring" }}
              className="sticky top-0 flex h-screen w-full items-center "
            >
              <ProjectCard currentProject={currentProject} />
            </motion.div>
          )}
        </div>
      )}
    </section>
  );
}
