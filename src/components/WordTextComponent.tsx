import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { useParallax } from "@/lib/hooks";
import LetterTextComponent from "./LetterTextComponent";

type word = {
  word: string;
};

export default function WordTextComponent({ word }: word) {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });
  const [initialLoad, setInitialLoad] = useState(false);
  const y = useParallax(scrollYProgress, 800);

  useEffect(() => {
    setTimeout(() => {
      setInitialLoad(true);
    }, 800);
  }, []);

  return (
    <motion.h1
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        type: "spring",
        velocity: 12,
        bounce: 0.8,
      }}
      className={`flex ${
        word === "developer" || word === "not an act"
          ? "justify-center bg-[#22dddd]/30 w-auto  rounded-xl"
          : ""
      }  ${
        word === 'it is a habbit."'
          ? "pt-20 text-red-800/50 justify-center lg:indent-10 md: tracking-tight "
          : ""
      } ${initialLoad ? " transition-all" : ""} `}
      key={word}
      style={initialLoad ? { y } : {}}
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
}
