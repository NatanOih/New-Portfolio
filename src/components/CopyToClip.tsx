"use client";
// import getRelativeCoordinates from "@/lib/utility";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useIsTouchDevice } from "@/lib/hooks";
import { mousePosType } from "@/lib/types";

export default function CopyToClip() {
  const [isCopied, setIsCopied] = useState(false);
  const [hoverNotification, setHoverNotification] = useState(false);
  // const [mousePosition, setMousePosition] = useState<any>({});
  // const globalPos = useMousePoistion(hoverNotification);
  const [localMousePos, setLocalMousePos] = useState<mousePosType>({
    x: 0,
    y: 0,
  });
  // const boxRef = useRef<any>();
  const isTouch = useIsTouchDevice();

  const handleMouseMove = (e: any) => {
    // setMousePosition(getRelativeCoordinates(e, boxRef.current));

    const localX =
      e.pageX - e.target.offsetLeft - e.target.offsetParent.offsetLeft;
    const localY =
      e.pageY - e.target.offsetTop - e.target.offsetParent.offsetTop;
    setLocalMousePos({ x: localX, y: localY });
  };

  // async function copyTextToClipboard(text: string) {
  //   return await navigator.clipboard.writeText(text);
  // }

  const handleCopyClick = () => {
    // copyTextToClipboard("natanoih@gmail.com")
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
      // ref={boxRef}
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
          setTimeout(function () {
            handleMouseMove(e);
          }, 20);
        }}
        onClick={handleCopyClick}
      >
        natanoih@gmail.com
      </button>{" "}
      or through this form:
      {hoverNotification ? (
        <motion.span
          initial={{
            x: localMousePos?.x - 70,
            y: localMousePos?.y - 70,
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            x: localMousePos.x + 100,
            y: localMousePos.y - 25,
          }}
          transition={{ type: "spring" }}
          className="absolute left-0 top-0 p-2 rounded bg-gray-950 text-white opacity-80"
        >
          {" "}
          {isCopied ? "Copied to clipboard" : "Copy"}{" "}
        </motion.span>
      ) : null}
    </p>
  );
}
