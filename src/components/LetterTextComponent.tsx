import React from "react";
import { motion } from "framer-motion";

const staggerLetters = {
  initial: {
    y: -100,
  },
  animate: (index: number) => ({
    y: 0,
    transition: {
      delay: 0.01 * index,
      duration: 0.1,
    },
  }),
};

export default function LetterTextComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.span
      className={` cursor-default hover:text-slate-100/70`}
      whileHover={{
        y: [-1, -1.6, -2.4, -0.9, 1.1, 0],
        scaleY: [1, 1.3, 0.8, 1, 1.1, 1],
      }}
      initial={{ y: 0, scaleY: 1 }}
    >
      {children}
    </motion.span>
  );
}
