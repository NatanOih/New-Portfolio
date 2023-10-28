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
    !isHidden ? setTransition("clip-path 0.3s") : setTransition("clip-path 1s");
    setisHidden(!isHidden);
    !isHidden &&
      setTimeout(() => {
        setTransition("opacity 1s cubic-bezier(0.77, 0, 0.175, 1)");
      }, 100);
  };

  return (
    <>
      <article
        id="HIDDEN"
        style={isHidden ? mask : mask2}
        className=" absolute flex flex-col items-center gap-4 justify-start p-6 top-0 z-2 w-full h-[40rem] bg-zinc-200/80"
      >
        <div className="flex justify-center">
          <h3 className=" font-playfair  w-fit  font-semibold text-center text-8xl p-1 text-black h-fit bg-white/80 rounded-lg ">
            MY
            <span className="border-4  border-black hello">SKILLS</span>
          </h3>
        </div>

        <SkillsContent isHidden={isHidden} />
      </article>

      <button
        onClick={handleTransition}
        className="absolute bottom-5 right-5 w-15 h-15 text-5xl bg-black rounded-full hover:text-white/70 hover:bg-black/80 border-2 p-1 hover:animate-none  hover:scale-110 active:scale-95 transition-all duration-500 ease-in-out  "
      >
        {!isHidden ? <BsLampFill /> : <BsLamp />}
      </button>
    </>
  );
}
