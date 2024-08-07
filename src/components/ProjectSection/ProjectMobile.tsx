import React from "react";
import { projectObject } from "@/lib/types";
import { motion } from "framer-motion";
import { projectData } from "@/lib/data";
import ProjectTitle from "./ProjectTitle";
import ProjectCard from "./ProjectCard";
import ProjectCardMobile from "./ProjectCardMobile";

export default function ProjectMobile() {
  return (
    <motion.ul
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", delay: 1 }}
      className="w-full h-full text-center flex flex-col gap-14 py-[40vh]"
    >
      {projectData.map((project: projectObject, index: number) => (
        <li key={index}>
          <ProjectTitle
            currentProject={project}
            project={project}
            setCurrentProject={() => {}}
          />

          <ProjectCardMobile currentProject={project} />
        </li>
      ))}
    </motion.ul>
  );
}
