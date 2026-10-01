"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Check } from "lucide-react";

const EMAIL = "natanoih@gmail.com";

export default function MusicContact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(EMAIL)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      })
      .catch(() => {});
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl flex flex-col items-center gap-6 text-center"
    >
      <div>
        <h2 className="text-3xl font-bold">Got a session in mind?</h2>
        <p className="text-gray-400 mt-2">
          Recording, a cover, or just want to talk music — reach out.
        </p>
      </div>

      <motion.div
        animate={{
          boxShadow: [
            "0 0 20px 0px rgba(236,72,153,0.35)",
            "0 0 36px 6px rgba(236,72,153,0.55)",
            "0 0 20px 0px rgba(236,72,153,0.35)",
          ],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="rounded-full"
      >
        <button
          onClick={handleCopy}
          className="group flex items-center gap-3 rounded-full border border-pink-400/50 bg-white/5 px-6 py-3 transition-colors hover:bg-white/10"
        >
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.span
                key="check"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex items-center justify-center text-pink-400"
              >
                <Check size={18} />
              </motion.span>
            ) : (
              <motion.span
                key="mail"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex items-center justify-center text-pink-400"
              >
                <Mail size={18} />
              </motion.span>
            )}
          </AnimatePresence>
          <span className="text-base font-medium">
            {copied ? "Copied!" : EMAIL}
          </span>
        </button>
      </motion.div>
    </motion.section>
  );
}
