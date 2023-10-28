import React from "react";

type behindProps = {
  isHidden: boolean;
};

export default function BehindMaskElement({ isHidden }: behindProps) {
  return (
    <article
      id="REVEALED"
      className="absolute flex justify-center gap-10 p-6 top-0 z-0 w-full h-[40rem] rounded-lg border-black border-2 bg-slate-700/80"
    >
      <div className="flex justify-center">
        <h3 className=" font-playfair w-fit  font-semibold text-center text-8xl p-1 bg-black/90 h-fit rounded-lg  ">
          MY
          <span className="border-4 rounded-se-md border-slate-100/80 hello2">
            SKILLS
          </span>
        </h3>
      </div>
    </article>
  );
}
