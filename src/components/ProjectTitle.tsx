import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { twMerge } from "tailwind-merge";

type ProjectTitleType = {
  children: React.ReactNode;
  setCurrentProject: (c: any) => void | any;
};

export default function ProjectTitle({
  children,
  setCurrentProject,
}: ProjectTitleType) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setCurrentProject(children);
    }
  }, [isInView, setCurrentProject, children]);

  return (
    <p
      ref={ref}
      className={twMerge(
        "py-24 font-mono text-5xl text-gray-300",
        isInView && "text-black"
      )}
    >
      {children}
    </p>
  );
}
