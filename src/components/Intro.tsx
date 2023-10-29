"use client";

// import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import {
  useIsTouchDevice,
  useScrollWithinBounds,
  useSectionInView,
} from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import WordTextComponent from "./WordTextComponent";
import { useLoading } from "@/context/LoadingContext";

const introText = [
  "fullstack",
  "developer",
  "gap",
  '"quality is',
  "not an act",
  'it is a habbit."',
];
export default function Intro() {
  // const { loading, setLoading } = useLoading();
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const isTouch = useIsTouchDevice();
  const { scrollY, elementRef } = useScrollWithinBounds<HTMLDivElement>();

  return (
    <section
      ref={ref}
      id="home"
      className=" relative h-[100vh] w-full  flex flex-col gap-4 p-2 justify-center  items-center"
    >
      <>
        <motion.div
          ref={elementRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`font-extrabold relative w-[75vw] lg:h-[35vw] md:h-[80%] p-2 justify-center items-center select-none overflow-hidden flex flex-col border-[9px] border-black/70 bg-white/10 whitespace-pre uppercase tracking-widest lg:text-[8vw] md:text-[7.7rem] sm:text-[5rem] lg:leading-[4.9vw]  md:leading-[2rem] `}
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

        <motion.div
          initial={{ scale: 0, opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="flex flex-col gap-4 text-lg font-medium sm:flex-row px-4"
        >
          <Link
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
            className="bg-gray-900 group dark:bg-white/20 dark:text-white/60 dark:hover:border-black/50 shadow-2xl flex hover:scale-105 gap-2 items-center justify-center rounded-full text-white px-7 border-black border-2 transition active:scale-95 py-3"
            href="#contact"
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
          <a
            className="bg-white cursor-pointer shadow-2xl  flex hover:scale-105
          transition active:scale-95  dark:bg-white/10 dark:hover:border-white/50 dark:border-gray-800/40 dark:text-white/60 gap-2 items-center justify-center rounded-full outline-none  text-gray-950 px-7 py-3 border-black/70 border-2"
            href="/_Natan Oihman CV.pdf"
            target="_blank"
          >
            {" "}
            Check out my CV{" "}
            <HiDownload className="opacity-70 group-hover:translate-x-1 transition" />
          </a>
          <a
            className="bg-white cursor-pointer shadow-2xl border-black/70 border-2 hover:scale-110
          transition active:scale-95 flex gap-2 items-center dark:hover:border-white/50 dark:border-gray-800/40 dark:bg-white/10 dark:text-white/60 justify-center rounded-full text-[1.35rem] text-gray-700 p-4"
            href="https://www.linkedin.com/in/natan-oihman-32373123a/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="bg-white cursor-pointer shadow-2xl border-black/70 border-2 hover:scale-110
          transition active:scale-95 flex gap-2 items-center dark:hover:border-white/50 dark:border-gray-800/40 dark:bg-white/10 dark:text-white/60 justify-center rounded-full text-[1.35rem] text-gray-700 p-4"
            href="https://github.com/NatanOih"
            target="_blank"
          >
            <BsGithub />
          </a>
        </motion.div>
      </>
    </section>
  );
}
