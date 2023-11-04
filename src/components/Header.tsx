"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { useLoading } from "@/context/LoadingContext";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const { loading, setLoading } = useLoading();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [setLoading]);

  if (loading) {
    return (
      <div className="bg-black fixed top-0 left-0 w-[110vw] overflow-hidden h-[110vh] ">
        <div className="absolute top-[50vh] left-[50vw] rounded-full w-10 h-10  border-t-4 border-slate-600 animate-spin"></div>
      </div>
    );
  }

  return (
    <header className="z-50 relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border opacity-40 bg-slate-200/80 shadow-md shadow-black/[0.13] 
      backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />

      <nav className="fixed justify-center flex top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex flex-wrap w-[22rem] items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="h-4/5 flex relative itmes-center justify-center"
              key={link.hash}
            >
              <Link
                className={twMerge(
                  " flex w-full select-none items-center justify-center p-3 hover:text-gray-950 transition-all dark:text-gray-500 dark:hover:text-gray-200",
                  `${
                    activeSection == link.name &&
                    "dark:text-gray-300 text-gray-950"
                  }`
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 40,
                    }}
                    className="bg-gray-100 dark:bg-gray-700 inset-0 -z-10 rounded-full absolute "
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
