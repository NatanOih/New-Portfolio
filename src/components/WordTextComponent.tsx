"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useScrollWithinBounds } from "@/lib/hooks";
import LetterTextComponent from "./LetterTextComponent";

type word = {
  word: string;
  index: number;
  scrollY: number;
};
// ${initialLoad ? " transition-all" : ""}
export default function WordTextComponent({ word, index, scrollY }: word) {
  // const { scrollY, elementRef } = useScrollWithinBounds<HTMLDivElement>();

  const [initialLoad, setInitialLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setInitialLoad(true);
      console.log("finished");
    }, 1500);
  }, []);

  return (
    <motion.h1
      // ref={elementRef}
      initial={
        !initialLoad
          ? {
              opacity: 0,
              y: -100,
            }
          : {}
      }
      animate={
        !initialLoad
          ? {
              opacity: 1,
              y: 0,
            }
          : { y: `${scrollY * 0.2 * (index * 0.3 + 1)}px` }
      }
      transition={
        !initialLoad
          ? {
              type: "spring",
              damping: 12,
              velocity: 12,
              bounce: 1.95,
              restSpeed: 0.7,
              restDelta: 0.7,
              duration: 0.15,
              // mass: 2,
              stiffness: 300,
              delay: 0.3 + index * 0.02,
            }
          : {
              ease: "easeOut",
              duration: 1,
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
      // style={
      //   initialLoad
      //     ? {
      //         translateY: `${scrollY * 0.4 * (index * 0.3 + 1)}px`,
      //         transition: "all 1s ease-out",
      //       }
      //     : {}
      // }
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
