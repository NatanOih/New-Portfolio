import { FromtProps } from "@/lib/types";
import React, { useState } from "react";
import SkillsContent from "./SkillsContent";
import { BsLamp, BsLampFill } from "react-icons/bs";

export default function FrontMaskElement({
  localMousePos,
  setisHidden,
  isHidden,
}: FromtProps) {
  const [transition, setTransition] = useState(
    "opacity 1s cubic-bezier(0.77, 0, 0.175, 1)"
  );

  const mask = {
    clipPath: `circle(50px at ${localMousePos.x}px ${localMousePos.y}px)`,
    transition: transition,
    animation: "fadeIn 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards",
  };

  const mask2 = {
    clipPath: `circle(60% at 50% 50%)`,
    transition: transition,
    animation: "fadeIn 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards",
  };

  const handleTransition = () => {
    !isHidden
      ? setTransition("clip-path 0.25s")
      : setTransition("clip-path 1s");
    setisHidden(!isHidden);
    !isHidden &&
      setTimeout(() => {
        setTransition("opacity 1s cubic-bezier(0.77, 0, 0.175, 1)");
      }, 250);
  };

  return (
    <>
      <article
        id="HIDDEN"
        style={isHidden ? mask : mask2}
        className=" absolute flex flex-col items-center gap-4 justify-start  p-6 top-0 z-2 w-full h-[40rem]  rounded-lg border-black border-2 dark:bg-[#dbd8d6] bg-zinc-100/80"
      >
        <div className="flex justify-center">
          <h3 className=" font-playfair  w-fit  font-semibold text-center xl:text-8xl md:text-6xl text-4xl  p-1 dark:text-black h-fit dark:bg-white/80 bg-black text-[#dbd8d6]  rounded-lg ">
            MY
            <span className="border-4  border-black hello">SKILLS</span>
          </h3>
        </div>

        <SkillsContent isHidden={isHidden} />
      </article>

      <button
        onClick={handleTransition}
        className="absolute bottom-5 right-5 w-15 h-15 text-5xl dark:bg-gray-950 bg-gray-200 rounded-full dark:hover:text-gray-200 hover:text-gray-900 hover:border-black/20  dark:hover:border-black/80 border-2 p-1 hover:animate-none  hover:scale-110 active:scale-95 transition-all duration-400 ease-in-out  "
      >
        {!isHidden ? <BsLampFill /> : <BsLamp />}
      </button>
    </>
  );
}
