import React from "react";
import { motion } from "framer-motion";

export default function LetterTextComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.span
      className={` cursor-default transition-all hover:text-slate-300/70`}
      whileHover={{
        y: [-1, -1.6, -2.4, -0.9, 1.1, 0],
        scaleY: [1, 1.3, 0.8, 1, 1.1, 1],
      }}
    >
      {children}
    </motion.span>
  );
}
