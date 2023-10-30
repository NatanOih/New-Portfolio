import React from "react";

type CardProps = {
  gradient: any;
};

export default function ProjectCard({ gradient }: CardProps) {
  const data = {
    dick1: "bg-black",
    dick2: "bg-white/50",
    dick3: "bg-blue-500",
    dick4: "bg-red-500",
  } as any;

  return (
    <article
      className={` ${data[gradient]}  h-[90%] w-[90%] border-2 rounded-2xl border-black flex justify-center items-center`}
    >
      {gradient}
    </article>
  );
}
