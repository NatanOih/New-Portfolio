"use client";
import getRelativeCoordinates from "@/lib/utility";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useIsTouchDevice } from "@/lib/hooks";

export default function CopyToClip() {
  const [isCopied, setIsCopied] = useState(false);
  const [hoverNotification, setHoverNotification] = useState(false);
  const [mousePosition, setMousePosition] = useState<any>({});

  const isTouch = useIsTouchDevice();

  const boxRef = useRef<any>();
  const handleMouseMove = (e: any) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };

  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard("natanoih@gmail.com")
      .then(() => {
        // If successful, update the isCopied state value
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
      ref={boxRef}
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
        onMouseMove={(e) => {
          handleMouseMove(e);
        }}
        onClick={handleCopyClick}
      >
        natanoih@gmail.com
      </button>{" "}
      or through this form:
      {hoverNotification ? (
        <motion.span
          initial={{
            x: mousePosition?.x - 300,
            y: mousePosition?.y - 100,
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            x: mousePosition?.x - 50,
            y: mousePosition?.y - 50,
          }}
          transition={{ type: "spring" }}
          className="absolute left-0 top-0  p-2 rounded bg-gray-950 text-white opacity-80"
        >
          {" "}
          {isCopied ? "Copied to clipboard" : "Copy"}{" "}
        </motion.span>
      ) : null}
    </p>
  );
}
