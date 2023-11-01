import React, { useEffect, useState } from "react";

import { projectData } from "@/lib/data";
import Image from "next/image";
// import sudokuIMG from "/public/sudokuIMG.png";
import { projectObject } from "@/lib/types";

// export const image = {
//   src: sudokuIMG,
//   description:
//     "A sudoku App featuring animations, server actions, unique design and state managment.",

//   title: "Sudoko App",
//   category: "React Next.js Jotai Tailwind",
//   link: "https://suduko-next-js.vercel.app/",
//   gitLink: "https://github.com/NatanOih/suduko-nextJS",
// };

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
      } duration-200 rounded-md hello2 ease-in-out relative w-full p-5 h-[37vh]`}
    >
      <div className="w-full h-full relative">
        <Image
          className={`absolute ${
            !animationTrigger
              ? "opacity-0 -translate-x-10"
              : "opacity-100 translate-x-0"
          } rounded-lg transition-all h-auto right-0 z-0 overflow-hidden sepia grayscale brightness-60 hello -bottom-20`}
          width={280}
          height={"280"}
          alt="saf"
          src={currentProject?.src}
        />
        <div className="absolute bottom-[18%] text-[#dbd8d6] stroke-black stroke-2">
          <h1
            className={`leading-[6vw] ${
              !animationTrigger ? "opacity-0 mb-10" : "opacity-100 mb-0"
            } font-[600] py-8 transition-all duration-100 underline text-[6vw]`}
          >
            {currentProject?.title}
          </h1>
          <h2 className=" relative leading-[6vw] w-fit h-fit font-[400] antialiased stroke-2 px-3  rounded-md stroke-black text-[6vw] bg-white/10 text-center  hover:bg-black/20 transition-all active:scale-90 hover:text-white ">
            <a
              target="_blank"
              href={currentProject?.link}
              className="hover:cursor-pointer "
            >
              Live Site
            </a>
          </h2>
          <p className="antialiased mt-[2vh] bg-white/10 transition-all active:scale-90  hover:text-white hover:bg-black/20  p-2 rounded-sm w-fit z-1 relative leading-[24px] font-[400] text-[24px]">
            <a
              href={currentProject?.gitLink}
              target="_blank"
              className="hover:cursor-pointer"
            >
              Code
            </a>
          </p>
          <p className="antialiased mt-[2vh] z-1 relative leading-[24px] font-[400] text-[24px]">
            {currentProject?.category}
          </p>
        </div>
      </div>
    </article>
  );
}

// if (TheColor === "nothing") {
//   return (
//     <div
//       className={`flex justify-center items-center transition-opacity duration-200 ease-in-out  bg-gray-700 aspect-square w-[20vw] select-none  rounded-2xl border-black   ${
//         animationTrigger ? "opacity-100" : "opacity-0"
//       }`}
//     >
//       <h1 className="text-clip overflow-hidden">
//         projects projects projects projects projects
//       </h1>
//     </div>
//   );
// }

// <article
//   style={{ backgroundColor: TheColor }}
//   className={`transition-opacity ${
//     animationTrigger ? `opacity-100` : "opacity-0"
//   }  flex justify-center items-center grayscale-[70%] duration-200 ease-in-out w-[20vw] aspect-square select-none border-2 relative rounded-2xl border-black `}
// >
//   <p className="absolute top-2 left-2 text-lg p-1  ">
//     {projectData[currentProject]?.description}
//   </p>

//   <Image
//     className={`absolute bottom-2 left-2 ${
//       !animationTrigger
//         ? "opacity-0 -translate-x-10"
//         : "opacity-100 translate-x-0"
//     } grayscale rounded-xl transition-all `}
//     width={200}
//     height={200}
//     loading="lazy"
//     alt="image"
//     src={projectData[currentProject]?.imageUrl}
//   />

//   <ul className="absolute right-5 bg-gray-300 text-black/90 rounded-3xl text-start p-2 ">
//     {projectData[currentProject]?.tags &&
//       projectData[currentProject]?.tags.map((tag: any, index: number) => (
//         <li className="" key={index}>
//           {tag}
//         </li>
//       ))}
//   </ul>
// </article>
