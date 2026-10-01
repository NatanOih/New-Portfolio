"use client";

import { motion } from "framer-motion";
import { AudioLines } from "lucide-react";

export default function RecordingService() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl flex flex-col items-center gap-4 text-center"
    >
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5"
      >
        <AudioLines size={24} />
      </motion.div>

      <p className="text-lg text-gray-300 leading-relaxed">
        Need bass or guitar on your track?{" "}
        <span className="text-white font-medium">
          I record clean, high-quality bass and guitar parts remotely
        </span>{" "}
        — send me the project and a reference, and I&apos;ll send back
        polished takes ready to drop into your mix.
      </p>
    </motion.section>
  );
}
