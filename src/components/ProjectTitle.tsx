import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { projectObject } from "@/lib/types";

type ProjectTitleType = {
  children: React.ReactNode;
  setCurrentProject: (c: any) => void | any;
  project: projectObject;
};

export default function ProjectTitle({
  project,
  children,
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
        "py-24 font-mono select-none text-5xl text-gray-300",
        isInView && "text-black"
      )}
    >
      {children}
    </p>
  );
}
