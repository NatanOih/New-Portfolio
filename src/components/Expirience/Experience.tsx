"use client";
import React from "react";
import SectionHeading from "../SectionHeading";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import CustomVerticalElement from "./CustomVerticalElement";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.4);

  return (
    <section
      id="experience"
      ref={ref}
      className="overflow-hidden scroll-mt-28 flex gap-4 flex-col py-14"
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline animate={true} lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <CustomVerticalElement item={item} index={index} />
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
