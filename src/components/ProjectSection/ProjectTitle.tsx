import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { projectObject } from "@/lib/types";
import { setTimeout } from "timers/promises";

type ProjectTitleType = {
  setCurrentProject: (c: any) => void | any;
  currentProject: projectObject;
  project: projectObject;
};

export default function ProjectTitle({
  project,
  currentProject,
  setCurrentProject,
}: ProjectTitleType) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setCurrentProject(project);
    }
  }, [isInView, setCurrentProject, project]);

  return (
    <p
      ref={ref}
      className={twMerge(
        "py-24 font-mono select-none flex flex-col gap-6 text-5xl dark:text-black/80 text-black/20 rounded-sm",
        isInView &&
          " dark:text-gray-200 text-black/80  font-bold dark:bg-gray-500/20 bg-gray-700/50 transition-all !duration-1000"
      )}
    >
      {currentProject && (
        <>
          <span className="underline"> {project.title} </span>
          <span className="text-start text-2xl px-20  ">
            {project.description}
          </span>
        </>
      )}
    </p>
  );
}
