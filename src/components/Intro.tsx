"use client";
import React from "react";
import { motion } from "framer-motion";

import {
  useIsTouchDevice,
  useScrollWithinBounds,
  useSectionInView,
} from "@/lib/hooks";
import WordTextComponent from "./WordTextComponent";
import SocialLinks from "./SocialLinks";

const introText = [
  "fullstack",
  "developer",
  "gap",
  '"quality is',
  "not an act",
  'it is a habit."',
];
export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  const isTouch = useIsTouchDevice();
  const { scrollY, elementRef } = useScrollWithinBounds<HTMLDivElement>();

  return (
    <section
      ref={ref}
      id="home"
      className="overflow-hidden relative h-[100vh] w-full  flex flex-col gap-4 p-2 justify-center  items-center"
    >
      <>
        <motion.div
          ref={elementRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`font-extrabold relative transition-all w-[75vw] lg:h-[37vw] md:h-[80%] p-2 justify-center items-center select-none overflow-hidden flex flex-col border-[9px] border-black/70 bg-[#293462]/80 dark:bg-white/10 whitespace-pre uppercase tracking-widest lg:text-[8vw] md:text-[7.7rem] sm:text-[5rem] lg:leading-[5.0vw]  md:leading-[2rem] `}
        >
          {introText.map((word, wordIndex) => {
            return (
              <WordTextComponent
                index={wordIndex}
                scrollY={scrollY}
                key={word}
                word={word}
              />
            );
          })}
          <h2 className="absolute text-base animate-bounce !leading-5 tracking-wider right-0 bottom-0">
            {" "}
            Aristo{" "}
          </h2>
        </motion.div>

        <SocialLinks />
      </>
    </section>
  );
}
