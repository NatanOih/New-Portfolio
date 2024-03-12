"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useIsTouchDevice, useLocalMousePosition } from "@/lib/hooks";

export default function CopyToClip() {
  const [isCopied, setIsCopied] = useState(false);
  const [hoverNotification, setHoverNotification] = useState(false);
  const isTouch = useIsTouchDevice();

  const { localMousePos, handleMouseMove, mousePosRef } =
    useLocalMousePosition();

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText("natanoih@gmail.com")
      .then(() => {
        setIsCopied(true);
        if (isTouch) {
          setHoverNotification(true);
        }
        setTimeout(() => {
          setIsCopied(false);
          if (isTouch) {
            setHoverNotification(false);
          }
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <p
      ref={mousePosRef}
      className="text-gray-700 dark:text-white/80 relative py-8 text-center"
    >
      {" "}
      Contact me at{" "}
      <button
        className="underline dark:hover:text-red-300 hover:drop-shadow-xl  hover:text-red-900 "
        onMouseEnter={() => {
          if (!isTouch) {
            setHoverNotification(true);
          }
        }}
        onMouseLeave={() => {
          setTimeout(function () {
            setHoverNotification(false);
          }, 30);
        }}
        onMouseMove={handleMouseMove}
        onClick={handleCopyClick}
      >
        natanoih@gmail.com
      </button>{" "}
      or through this form:
      {hoverNotification ? (
        <motion.span
          initial={{
            x: localMousePos?.x - 45,
            y: localMousePos?.y + 55,
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            x: localMousePos.x + 40,
            y: localMousePos.y - 40,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            velocity: 1,
            bounce: 1.65,
            damping: 10,
            duration: 0.4,
          }}
          className="absolute select-none cursor-none left-0 top-0 p-2 rounded bg-gray-950 text-white opacity-80"
        >
          {" "}
          {isCopied ? "Copied to clipboard" : "Copy"}{" "}
        </motion.span>
      ) : null}
    </p>
  );
}
