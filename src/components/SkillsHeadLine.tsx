import { hiddenProps } from "@/lib/types";
import React from "react";
import { twMerge } from "tailwind-merge";
export default function SkillsHeadLine({ isHidden }: hiddenProps) {
  return (
    <div className="flex justify-center">
      <h3 className=" font-playfair flex  justify-center w-fit  font-semibold text-center text-8xl p-1 text-black h-fit bg-white/30 rounded-lg ">
        MY
        <span
          className={twMerge(
            "border-4 border-black ",
            `${!isHidden && "hello"}`
          )}
        >
          SKILLS
        </span>
      </h3>
    </div>
  );
}
