import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";

type techListObject = {
  path: string;
};
type TechProps = {
  title: string;
  techList: techListObject[];
  className: string;
  isHidden: boolean;
  ShowSkills: boolean;
};
export const Tech = ({ title, techList, isHidden, ShowSkills }: TechProps) => {
  const skillBoxControl = useAnimationControls();
  const skillsControls = useAnimationControls();

  useEffect(() => {
    skillBoxControl.start({ x: 0, opacity: 1 });
    skillsControls.start({ scale: 1, opacity: 1 });
  }, [skillsControls, title, skillBoxControl]);

  return (
    <motion.div
      initial={{ x: -150, opacity: 0 }}
      animate={skillBoxControl}
      transition={{
        duration: 1.2,
        type: "spring",
        stiffness: 300,
        ease: "easeInOut",
      }}
      className="bg-purple-300/20 rounded-xl border-2 border-black/40 h-fit w-fit flex flex-col p-5 justify-center items-center gap-10 shadow-xl overflow-hidden "
    >
      <motion.div
        initial={{ x: -250, opacity: 0 }}
        animate={skillBoxControl}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 200,
          delay: 0.2,
          ease: "easeInOut",
        }}
        className="max-w-[450px] max-h-[450px] border-8 bg-purple-800/40 border-black/90"
      >
        <motion.h3
          initial={{ x: -250, opacity: 0 }}
          animate={skillBoxControl}
          transition={{
            duration: 1.2,
            type: "spring",
            stiffness: 200,
            delay: 0.6,
            ease: "easeInOut",
          }}
          className=" text-center text-black font-semibold text-6xl "
        >
          {title.replace("_", " ")}
        </motion.h3>
      </motion.div>

      <div className="flex justify-center flex-wrap gap-5 ">
        {techList.map((skill, id) => {
          return (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={skillsControls}
              transition={{
                duration: 1.5,
                type: "spring",
                stiffness: 500,
                delay: 0.3 + 0.12 * id,
              }}
              key={id}
              style={{ filter: "grayscale(20%)" }}
              className="justify-center flex items-center p-1 border-2 bg-white cursor-pointer border-black hover:!bg-white/50 hover:!scale-125 hover:!transition-all"
            >
              <Image
                alt={skill.path}
                width={50}
                height={50}
                style={{ objectFit: "cover" }}
                src={"/img/" + skill.path}
                loading="eager"
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
