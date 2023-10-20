import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";
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

export function useIsTouchDevice() {
  const [touchDevice, setTouchDevice] = useState(isTouchDevice());

  useEffect(() => {
    // Function to handle the resize event and recheck if it's a touch device
    function handleResize() {
      setTouchDevice(isTouchDevice());
    }

    // Attach the event listener for the resize event
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return touchDevice;
}
