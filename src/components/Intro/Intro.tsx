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
import Subtitle from "./Subtitle";

const introText = [
  "fullstack",
  "developer",
  "gap",
  '"quality is',
  "not an act,",
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
      className="overflow-hidden h-[100vh] w-full flex flex-col gap-4 p-2 justify-center items-center"
    >
      <>
        <motion.div
          ref={elementRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-extrabold relative transition-all w-[92vw] sm:w-[75vw] lg:h-[42vw] md:h-[80%] h-[70%] p-2 justify-center items-center overflow-hidden select-none flex flex-col border-[9px] border-black/70 bg-[#293462]/80 dark:bg-white/10 whitespace-pre uppercase lg:tracking-widest lg:text-[8.6vw] md:tracking-tight md:text-[5.3rem] text-[11.3vw] lg:leading-[7.2vw] leading-[10vw]"
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
          <Subtitle />
        </motion.div>
        <SocialLinks />
      </>
    </section>
  );
}
