import React from "react";
import { twMerge } from "tailwind-merge";
type CardProps = {
  gradient: string;
  children: React.ReactNode;
};

export default function ProjectCard({ gradient, children }: CardProps) {
  return (
    <article
      className={`bg-gradient-to-br ${gradient} h-[90%] w-[90%] border-2 rounded-2xl border-black flex justify-center items-center`}
    >
      {children}
    </article>
  );
}
