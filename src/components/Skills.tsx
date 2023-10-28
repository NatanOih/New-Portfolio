"use client";
import { useLocalMousePosition, useSectionInView } from "@/lib/hooks";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import BehindMaskElement from "./BehindMaskElement";
import FrontMaskElement from "./FrontMaskElement";

//{ children }: { children: React.ReactNode }

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);
  const { localMousePos, handleMouseMove, mousePosRef } =
    useLocalMousePosition();
  const [isHidden, setisHidden] = useState<boolean>(true);

  return (
    <section
      ref={ref}
      id="skills"
      className={twMerge(
        "w-full flex justify-center select-none  items-center",
        `${isHidden && "cursor-none"}`
      )}
    >
      <article
        ref={mousePosRef}
        onMouseMove={handleMouseMove}
        className="relative flex justify-center z:5 p-6 w-full h-[40rem] "
      >
        <BehindMaskElement isHidden={isHidden} />
        <FrontMaskElement
          localMousePos={localMousePos}
          setisHidden={setisHidden}
          isHidden={isHidden}
        />
      </article>
    </section>
  );
}
