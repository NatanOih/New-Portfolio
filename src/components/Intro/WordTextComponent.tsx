"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LetterTextComponent from "./LetterTextComponent";

type word = {
  word: string;
  index: number;
  scrollY: number;
};

export default function WordTextComponent({ word, index, scrollY }: word) {
  const [initialLoad, setInitialLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInitialLoad(true);
    }, 900);
  }, []);

  return (
    <motion.h1
      initial={
        !initialLoad
          ? {
              opacity: 0,
              y: -300,
            }
          : {}
      }
      animate={
        !initialLoad
          ? {
              opacity: 1,
              y: 0,
            }
          : { y: `${scrollY * 0.4 * (index * 0.3 + 1)}px` }
      }
      transition={
        !initialLoad
          ? {
              type: "spring",
              damping: 15,
              velocity: 10,
              bounce: 4.95,
              stiffness: 300,
              delay: 0.2 + index * 0.02,
            }
          : {
              type: "spring",
            }
      }
      className={` flex flex-row sm:pr-[5vw] sm:py-0 py-[0.8rem] pr-2  dark:text-[#FCECDD]/90 justify-center sm:w-[80%]  ${
        word === "developer" || word === "not an act,"
          ? "pl-[12vw] bg-[#d53f41]/80 dark:bg-[#d53f41]/10 w-[90%]  rounded-xl"
          : ""
      }  ${
        word === 'it is a habit."'
          ? "pt-10  text-[#FCECDD]/90 dark:text-slate-950/90 drop-shadow-md justify-center lg:indent-[0.3vw] md:indent-[0.55vw] tracking-tight pl-[5vw] "
          : ""
      } 
       
        `}
      key={word}
    >
      {word == "gap" ? (
        <div className="lg:py-6 py-4" />
      ) : (
        word.split("").map((letter, letterIndex) => (
          <React.Fragment key={letterIndex}>
            <LetterTextComponent>{letter}</LetterTextComponent>
          </React.Fragment>
        ))
      )}
    </motion.h1>
  );
}
