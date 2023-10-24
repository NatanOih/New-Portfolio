"use client";
import { useLocalMousePosition } from "@/lib/hooks";
import React from "react";

export default function Skills() {
  const { localMousePos, handleMouseMove, mousePosRef } =
    useLocalMousePosition();

  const mask = {
    clipPath: `circle(50px at ${localMousePos.x}px ${localMousePos.y}px)`,
    transition: "opacity 1s cubic-bezier(0.77, 0, 0.175, 1)",
    animation: "fadeIn 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards",
  };

  return (
    <section className="h-[100vh] w-full flex justify-center items-center">
      <article
        ref={mousePosRef}
        onMouseMove={handleMouseMove}
        className="relative z:1000  w-[40rem] h-[40rem] cursor-none"
      >
        <div
          id="infront"
          className="absolute flex justify-center p-6 top-0 z-0 w-[40rem] h-[40rem] bg-blue-500"
        >
          <h3 className=" font-playfair font-semibold text-center text-8xl p-1 bg-black/30 h-fit rounded-lg  ">
            MY
            <span className="border-4  border-slate-900 hello2">SKILLS</span>
          </h3>
        </div>
        <div
          id="behind"
          style={mask}
          className=" absolute flex justify-center p-6 top-0 z-0 w-[40rem] h-[40rem] bg-red-500"
        >
          <h3 className=" font-playfair font-semibold text-center text-8xl p-1 text-black h-fit bg-white/30 rounded-lg ">
            MY
            <span className="border-4  border-black hello">SKILLS</span>
          </h3>
        </div>
        <span className="absolute bottom-10 left-10 w-10 h-10 rounded-full  ">
          {localMousePos.x} {localMousePos.y}
        </span>
      </article>
    </section>
  );
}
