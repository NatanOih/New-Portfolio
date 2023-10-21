"use client";

// import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
// import Link from "next/link";
// import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
// import { HiDownload } from "react-icons/hi";
import { useIsTouchDevice, useParallax, useSectionInView } from "@/lib/hooks";
// import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import LetterTextComponent from "./LetterTextComponent";

const staggerLetters = {
  initial: {
    y: -100,
  },
  animate: (index: number) => ({
    y: 0,
    transition: {
      delay: 0.01 * index,
      duration: 0.1,
    },
  }),
};

const introText = [
  "fullstack",
  "developer",
  "gap",
  '"quality is',
  "not an act",
  'it is a habbit."',
];
export default function Intro() {
  const [loading, setLoading] = useState<boolean>(true);
  const { ref } = useSectionInView("Home", 0.5);
  // const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const isTouch = useIsTouchDevice();
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });
  const y = useParallax(scrollYProgress, 300);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="h-[100vh] fixed top-0 w-full bg-slate-400 flex justify-center items-center">
        loading..
      </div>
    );
  }
  return (
    <section
      ref={ref}
      id="home"
      className=" relative h-full w-full flex flex-col gap-8 p-8 justify-center scroll-mt-28 items-center"
    >
      <div
        className={`font-extrabold relative scroll-smooth w-full drop-shadow-xl shadow-xl text-start p-12 select-none overflow-hidden flex flex-col border-[9px] border-[#03001c] bg-white/10  container whitespace-pre uppercase tracking-wide lg:text-[9.2rem] leading-[7.3rem] `}
      >
        {introText.map((word, wordIndex) => {
          return (
            <motion.h1
              className={`flex ${
                word === "developer" || word === "not an act"
                  ? "justify-end bg-red-800/50  rounded-full"
                  : ""
              }  ${
                word === 'it is a habbit."'
                  ? "pt-20 text-red-800/50 justify-center tracking-tight "
                  : ""
              } transition-all flex duration-600 ease-in-out `}
              key={word}
              style={{ y: y, transition: "300ms all ease-in-out" }}
            >
              {word == "gap" ? (
                <div ref={scrollRef} className="py-8" />
              ) : (
                word.split("").map((letter, letterIndex) => (
                  <React.Fragment key={letterIndex}>
                    <LetterTextComponent>{letter}</LetterTextComponent>
                  </React.Fragment>
                ))
              )}
            </motion.h1>
          );
        })}
        <h2 className="absolute text-base animate-bounce text right-0 bottom-0">
          {" "}
          Aristo{" "}
        </h2>
      </div>

      {/* <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.2,
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
      </motion.div> */}
    </section>
  );
}
