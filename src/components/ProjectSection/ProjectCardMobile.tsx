import React, { useEffect, useState } from "react";

import Image from "next/image";

export default function ProjectCardMobile({ currentProject }: any) {
  const [animationTrigger, setAnimationTrigger] = useState(true);

  useEffect(() => {
    setAnimationTrigger(false);
    setTimeout(() => {
      setAnimationTrigger(true);
    }, 100);
  }, [currentProject, setAnimationTrigger]);

  return (
    <section
      className={`bg-[#d53f41] ${
        animationTrigger ? `opacity-100` : "opacity-0"
      } duration-200 rounded-md flex flex-col hello2 ease-in-out dark:text-[#dbd8d6] text-gray-950 relative w-full p-5 h-[37vh]`}
    >
      <article
        className={`absolute ${
          !animationTrigger
            ? "opacity-0 -translate-x-10"
            : "opacity-100 translate-x-0"
        } rounded-lg transition-all  w-full h-full scale-[60%] -right-10 z-0 overflow-hidden   border-2 border-black/20 brightness-70 hello3 -bottom-28`}
      >
        <Image fill alt="saf" src={currentProject?.src} />
      </article>

      <div className="w-full h-full flex flex-col gap-2  relative">
        <div className=" flex flex-row gap-4   stroke-black stroke-2 justify-center items-center">
          <h1
            className={`leading-[6vw] ${
              !animationTrigger ? "opacity-0 mb-10" : "opacity-100 mb-0"
            } font-[600] select-none  transition-all duration-100 underline text-[6vw]`}
          >
            {currentProject?.title}
          </h1>

          <h2 className=" relative leading-[6vw] w-20 h-20  antialiased stroke-2 p-2 hover:bg-gray-900/50 rounded-md  text-[6vw] bg-[#dbd8d6]/90 dark:bg-white/10 text-center hover:cursor-pointer  dark:hover:bg-black/20 flex justify-center items-center transition-all active:scale-90 dark:hover:text-[#dbd8d6]/80 ">
            <a target="_blank" href={currentProject?.link}>
              Live Site
            </a>
          </h2>

          <h2 className="antialiaseds dark:bg-white/10 transition-all stroke-2 hover:bg-gray-800/30 active:scale-90 bg-[#dbd8d6]/90 dark:hover:text-[#dbd8d6]/80 dark:hover:bg-black/20 hover:cursor-pointer  flex justify-center items-center p-2 rounded-md w-20 h-20  relative text-center  text-[5vw]">
            <a href={currentProject?.gitLink} target="_blank">
              Code
            </a>
          </h2>
        </div>

        <p className="antialiased flex gap-1 flex-wrap justify-center items-center text-sm">
          {currentProject?.category.split(",").map((x: string) => (
            <span
              className="bg-[#dbd8d6]/90 p-1  rounded-lg text-black"
              key={x}
            >
              {x}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
