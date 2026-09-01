"use client";
import { motion } from "framer-motion";
import React from "react";

export default function SectionDevider() {
  return (
    <motion.div
      // initial={{ opacity: 0, y: -100 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{ delay: 0.125 }}
      className="bg-gray-400 h-16 w-1 opacity-20 animate-pulse items-center rounded-full hidden sm:block"
    ></motion.div>
  );
}
