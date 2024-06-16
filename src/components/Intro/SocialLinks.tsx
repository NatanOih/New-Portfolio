import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function SocialLinks() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="flex flex-col gap-4 text-lg font-medium sm:flex-row px-4"
    >
      <Link
        onClick={() => {
          setActiveSection("Contact");
          setTimeOfLastClick(Date.now());
        }}
        className="bg-gray-900 group dark:bg-white/20 dark:text-white/60 dark:hover:border-black/50  flex hover:scale-105 gap-2 items-center justify-center rounded-full text-white px-7 border-black border-2 transition active:scale-95 py-3"
        href="#contact"
      >
        Contact me here{" "}
        <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
      </Link>
      <a
        className="bg-white cursor-pointer   flex hover:scale-105
          transition active:scale-95  dark:bg-white/10 dark:hover:border-white/50 dark:border-gray-800/40 dark:text-white/60 gap-2 items-center justify-center rounded-full outline-none  text-gray-950 px-7 py-3 border-black/70 border-2"
        href="_Natan Oihman CV .pdf"
        target="_blank"
      >
        {" "}
        Check out my CV{" "}
        <HiDownload className="opacity-70 group-hover:translate-x-1 transition" />
      </a>
      <a
        className="bg-white cursor-pointer  border-black/70 border-2 hover:scale-110
          transition active:scale-95 flex gap-2 items-center dark:hover:border-white/50 dark:border-gray-800/40 dark:bg-white/10 dark:text-white/60 justify-center rounded-full text-[1.35rem] text-gray-700 p-4"
        href="https://www.linkedin.com/in/natan-oihman-32373123a/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        className="bg-white cursor-pointer border-black/70 border-2 hover:scale-110
          transition active:scale-95 flex gap-2 items-center dark:hover:border-white/50  dark:border-gray-800/40 dark:bg-white/10 dark:text-white/60 justify-center rounded-full text-[1.35rem] text-gray-700 p-4"
        href="https://github.com/NatanOih"
        target="_blank"
      >
        <BsGithub />
      </a>
    </motion.div>
  );
}
