"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="fixed left-1 top-1 w-[5px]  bottom-1 dark:bg-white/60 bg-[#222] "
      style={{ scaleY }}
    />
  );
}
