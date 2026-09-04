"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/app/code/_lib/data";
import Link from "next/link";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { useActiveSectionContext } from "@/app/code/_context/ActiveSectionContextProvider";
import { useLoading } from "@/app/code/_context/LoadingContext";
import ThemeSwitch from "./ThemeSwitch";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const { loading, setLoading } = useLoading();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    linkName: any,
    linkHash: string
  ) => {
    e.preventDefault();
    document.querySelector(linkHash)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(linkName);
    setTimeOfLastClick(Date.now());
    setMobileMenuOpen(false);
  };

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
      <Link
        href="/"
        className="fixed top-2 left-2 sm:top-4 sm:left-4 z-50 text-sm text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
      >
        &larr; Back
      </Link>

      <motion.div
        className="fixed inset-x-0 top-0 mx-auto overflow-hidden md:h-[4.5rem] w-full rounded-none border opacity-40 bg-slate-200/80 shadow-md shadow-black/[0.13]
      backdrop-blur-[0.5rem] sm:top-3 sm:h-[3.25rem] sm:w-[36rem] h-[3rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      />

      <nav className="fixed inset-x-0 mx-auto flex w-fit items-center top-[0.15rem] h-12 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 sm:justify-center">
        <ul className="hidden sm:flex items-center gap-5 text-[0.9rem] font-medium text-gray-500">
          {links.map((link) => (
            <motion.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="h-4/5 flex relative itmes-center justify-center"
              key={link.hash}
            >
              <Link
                className={twMerge(
                  "flex w-full select-none items-center justify-center sm:p-3 p-[0.3rem] hover:text-gray-950 transition-all dark:text-gray-500 dark:hover:text-gray-200",
                  `${
                    activeSection == link.name &&
                    "dark:text-gray-300 text-gray-950"
                  }`
                )}
                href={link.hash}
                onClick={(e) => handleClick(e, link.name, link.hash)}
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
          <motion.li
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="h-4/5 flex relative itmes-center  justify-center"
          >
            <ThemeSwitch />
          </motion.li>
        </ul>

        <div className="flex sm:hidden items-center justify-between w-[min(22rem,90vw)]">
          <button
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="w-9 h-9 flex items-center justify-center rounded-full text-gray-700 hover:bg-black/5 dark:text-gray-300 dark:hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
          <ThemeSwitch />
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-[3.25rem] z-40 mx-auto w-[min(20rem,90vw)] overflow-hidden rounded-2xl border bg-slate-200/95 shadow-lg backdrop-blur-[0.5rem] dark:border-black/40 dark:bg-gray-950/95 sm:hidden"
          >
            <ul className="flex flex-col divide-y divide-black/10 dark:divide-white/10">
              {links.map((link) => (
                <li key={link.hash}>
                  <Link
                    href={link.hash}
                    onClick={(e) => handleClick(e, link.name, link.hash)}
                    className={twMerge(
                      "block w-full px-4 py-3 text-center font-medium text-gray-600 dark:text-gray-300",
                      activeSection === link.name &&
                        "bg-black/5 text-gray-950 dark:bg-white/10 dark:text-gray-100"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
