"use client";

import Link from "next/link";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import { Code2, Guitar, ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import OrbitCursor from "./_components/OrbitCursor";
import bandPhoto from "../../public/band-photo.jpg";
import devIllustration from "../../public/dev-illustration.jpg";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 16 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const fallIn: Variants = {
  hidden: (custom: { rotate: number; x: number }) => ({
    opacity: 0,
    y: -520,
    x: custom.x,
    rotate: custom.rotate,
    scale: 0.8,
  }),
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 130, damping: 13, mass: 1 },
  },
};

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white flex flex-col items-center justify-center gap-12 px-4 py-20">
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"
      />

      <OrbitCursor />

      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.15 }}
        className="relative text-center flex flex-col items-center gap-4"
      >
        <motion.span
          variants={popIn}
          className="rotate-[-2deg] rounded-full border-2 border-white px-4 py-1 text-xs font-bold uppercase tracking-widest"
        >
          Hello, I&apos;m
        </motion.span>

        <motion.h1
          variants={popIn}
          className={`${spaceGrotesk.className} text-5xl sm:text-7xl font-bold uppercase tracking-tight leading-[0.95]`}
        >
          Natan Oihman
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="max-w-md text-base sm:text-lg text-gray-400"
        >
          I&apos;m a software engineer and a musician.{" "}
          <span className="text-white">What are you here for?</span>
        </motion.p>
      </motion.div>

      <div className="relative flex flex-col sm:flex-row gap-8 w-full max-w-2xl">
        <motion.div
          custom={{ rotate: -10, x: -40 }}
          variants={fallIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.55 }}
          className="flex-1"
        >
          <Link
            href="/code"
            className="group relative flex aspect-[4/5] w-full rounded-2xl border-2 border-white overflow-hidden shadow-[8px_8px_0_0_#ffffff] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#ffffff] active:translate-x-0 active:translate-y-0 active:shadow-[4px_4px_0_0_#ffffff]"
          >
            <Image
              src={devIllustration}
              alt="Illustration of a fullstack developer at work"
              fill
              placeholder="blur"
              className="object-cover grayscale brightness-75 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
            <ArrowUpRight
              size={22}
              className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <div className="relative h-full w-full flex flex-col items-center justify-end gap-2 text-center p-8">
              <Code2
                size={36}
                strokeWidth={1.75}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
              <span
                className={`${spaceGrotesk.className} text-xl font-bold uppercase`}
              >
                Software Development
              </span>
              <span className="text-sm text-gray-300">
                Projects, experience, and skills
              </span>
            </div>
          </Link>
        </motion.div>

        <motion.div
          custom={{ rotate: 10, x: 40 }}
          variants={fallIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.7 }}
          className="flex-1"
        >
          <Link
            href="/music"
            className="group relative flex aspect-[4/5] w-full rounded-2xl border-2 border-white overflow-hidden shadow-[8px_8px_0_0_#ffffff] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#ffffff] active:translate-x-0 active:translate-y-0 active:shadow-[4px_4px_0_0_#ffffff]"
          >
            <Image
              src={bandPhoto}
              alt="Playing bass with the band"
              fill
              placeholder="blur"
              className="object-cover object-[22%_30%] grayscale brightness-75 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
            <ArrowUpRight
              size={22}
              className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <div className="relative h-full w-full flex flex-col items-center justify-end gap-2 text-center p-8">
              <Guitar
                size={36}
                strokeWidth={1.75}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
              <span
                className={`${spaceGrotesk.className} text-xl font-bold uppercase`}
              >
                Music
              </span>
              <span className="text-sm text-gray-300">
                Bass playing and bookings
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
