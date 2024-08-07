import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName, mousePosType } from "./types";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 2000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}

function isTouchDevice() {
  if (typeof window !== "undefined") {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }
  return false; // Fallback for non-browser environments
}

export function useIsTouchDevice(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const isTouchDevice: boolean =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isMobileUserAgent: boolean =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      const isMobileWindowSize: boolean = window.innerWidth <= 768;

      setIsMobile(isTouchDevice || isMobileUserAgent || isMobileWindowSize);
    };

    checkIfMobile();

    // Add resize listener to re-check on screen size changes
    window.addEventListener("resize", checkIfMobile);

    // Cleanup the listener on unmount
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return isMobile;
}

export function useLocalMousePosition() {
  const [localMousePos, setLocalMousePos] = useState<mousePosType>({
    x: 0,
    y: 0,
    pageY: 0,
    pageX: 0,
  });
  const mousePosRef = useRef<any>(null);

  const handleMouseMove = (e: any) => {
    const { offsetTop, offsetLeft } = mousePosRef?.current;

    const localX = Math.round(e.clientX) - offsetLeft;
    const localY = Math.round(e.pageY) - offsetTop;

    setLocalMousePos({ x: localX, y: localY, pageY: e.pageY, pageX: e.pageX });
  };

  return { localMousePos, handleMouseMove, mousePosRef };
}

export function useScrollWithinBounds<T extends HTMLElement>() {
  const [scrollY, setScrollY] = useState<number>(0);
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const element = elementRef.current;
        const parent = element.parentElement;

        if (parent) {
          const parentTop = parent.getBoundingClientRect().top;
          const parentBottom = parent.getBoundingClientRect().bottom;

          const elementTop = element.getBoundingClientRect().top;
          const elementBottom = element.getBoundingClientRect().bottom;

          if (window.scrollY <= parentBottom + 500) {
            setScrollY(window.scrollY);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // setScrollY(0);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollY, elementRef };
}
