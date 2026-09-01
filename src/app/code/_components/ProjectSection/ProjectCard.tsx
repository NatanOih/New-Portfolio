import React, { useEffect, useState } from "react";

import Image from "next/image";

export default function ProjectCard({ currentProject }: any) {
  const [animationTrigger, setAnimationTrigger] = useState(true);

  useEffect(() => {
    setAnimationTrigger(false);
    setTimeout(() => {
      setAnimationTrigger(true);
    }, 100);
  }, [currentProject, setAnimationTrigger]);

  return (
    <article
      className={`bg-[#d53f41] ${
        animationTrigger ? `opacity-100` : "opacity-0"
      } duration-200 rounded-md hello2 ease-in-out dark:text-[#dbd8d6] text-gray-950 relative w-full p-5 h-[37vh]`}
    >
      <div className="w-full h-full relative">
        <div
          className={`absolute ${
            !animationTrigger
              ? "opacity-0 -translate-x-10"
              : "opacity-100 translate-x-0"
          } rounded-lg transition-all xl:w-[15vw] xl:h-[15vw] w-[20vw] h-[20vw] -right-4 z-0 overflow-hidden  border-2 border-black/20 brightness-70 hello3 -bottom-20`}
        >
          <Image fill alt="saf" src={currentProject?.src} />
        </div>
        <div className="absolute flex flex-col gap-4 bottom-[18%]  stroke-black stroke-2 justify-start items-start">
          <h1
            className={`leading-[6vw] ${
              !animationTrigger ? "opacity-0 mb-10" : "opacity-100 mb-0"
            } font-[600] select-none  transition-all duration-100 underline text-[6vw]`}
          >
            {currentProject?.title}
          </h1>
          <h2 className=" relative leading-[6vw] w-fit h-fit font-[400] antialiased stroke-2 px-3 hover:bg-gray-900/50 rounded-md  text-[6vw] bg-[#dbd8d6]/90 dark:bg-white/10 text-center  dark:hover:bg-black/20 transition-all active:scale-90 dark:hover:text-[#dbd8d6]/80 ">
            <a
              target="_blank"
              href={currentProject?.link}
              className="hover:cursor-pointer "
            >
              Live Site
            </a>
          </h2>
          <p className="antialiaseds dark:bg-white/10 transition-all hover:bg-gray-800/30 active:scale-90 bg-[#dbd8d6]/90 dark:hover:text-[#dbd8d6]/80 dark:hover:bg-black/20  p-2 rounded-sm w-fit z-1 relative leading-[24px] font-[400] text-[24px]">
            <a
              href={currentProject?.gitLink}
              target="_blank"
              className="hover:cursor-pointer"
            >
              Code
            </a>
          </p>
          <p className="antialiased w-[45%] z-1 h-[3rem]  leading-[24px] font-[400] text-[24px]">
            {currentProject?.category}
          </p>
        </div>
      </div>
    </article>
  );
}
