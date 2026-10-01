"use client";

import { useTheme } from "@/app/code/_context/ThemeContext";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

// fixed sm:top-5 top-14 right-5

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="bg-white/80 w-9 h-9 border border-black/40 overflow-hidden rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all "
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun size={15} /> : <BsMoon size={15} />}
    </button>
  );
}
// className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
