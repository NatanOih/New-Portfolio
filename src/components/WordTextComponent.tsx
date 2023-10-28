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
      console.log("finished");
    }, 1000);
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
              delay: 0.5 + index * 0.03,
            }
          : {
              type: "spring",
            }
      }
      className={` flex flex-row pr-[5vw]  justify-center w-[80%] ${
        word === "developer" || word === "not an act"
          ? "pl-[15vw] bg-[#22dddd]/30 w-auto  rounded-xl"
          : ""
      }  ${
        word === 'it is a habbit."'
          ? "pt-12 text-gray-950/80 justify-center lg:indent-[0.5vw] md:indent-3 tracking-tight pl-[5vw] "
          : ""
      } 
       
        `}
      key={word}
    >
      {word == "gap" ? (
        <div className="py-6" />
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
