"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";

export const staggerLetters = {
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

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="py-6 h-[100vh] sm:py-0 max-w-[50rem] flex flex-col gap-8 justify-center scroll-mt-28 items-center"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
              delay: 0.2,
            }}
          >
            <Image
              src="/randomPhoto.jpg"
              width={192}
              height={192}
              quality="100"
              alt="image"
              priority={true}
              className="border-[0.35rem]  border-gray-50 shadow-xl "
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.6,
              duration: 0.4,
            }}
            className="text-4xl bottom-0 right-0 absolute"
          >
            🐱‍🐉
          </motion.span>
        </div>
      </div>

      <p className="font-medium text-center whitespace-pre flex flex-wrap !leading-[1.5] text-2xl sm:text-4xl">
        {"Hello, I`m Natan, A fullstack developer. "
          .split(/(?!$)/u)
          .map((letter, index) => {
            return (
              <motion.span
                variants={staggerLetters}
                initial="initial"
                animate="animate"
                custom={index}
                key={index}
              >
                {letter}
              </motion.span>
            );
          })}
      </p>

      <motion.div
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
      </motion.div>
    </section>
  );
}
