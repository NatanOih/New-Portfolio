"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import CopyToClip from "./CopyToClip";
import { sendEmail } from "@/lib/actions";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.4);

  return (
    <motion.section
      ref={ref}
      id="contact"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="px-4 py-10 sm:py-16 w-[min(100%,38rem)] "
    >
      <SectionHeading>Contact Me</SectionHeading>

      <div className="py-2" />
      <CopyToClip />

      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          console.log("data", data);

          if (error) {
            console.log("error", error);
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
        className="flex flex-col gap-8 dark:text-black"
      >
        <input
          placeholder="Your email"
          className="h-14 p-2 rounded-lg borderBlack dark:bg-white transition-all dark:focus:bg-opacity-90 dark:bg-opacity-70 dark:outline-none"
          type="email"
          name="email"
          required
          maxLength={500}
        />
        <textarea
          placeholder="Your message"
          name="message"
          required
          maxLength={500}
          className="h-52 rounded-lg p-2 dark:outline-none dark:focus:bg-opacity-90 transition-all dark:bg-white dark:bg-opacity-70 borderBlack "
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
