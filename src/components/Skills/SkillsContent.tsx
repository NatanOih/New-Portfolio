import { experitesFields } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Tech } from "./Tech";
import Image from "next/image";

type skillsContentType = {
  isHidden: boolean;
};

export default function SkillsContent({ isHidden }: skillsContentType) {
  const [ShowSkills, setShowSkills] = useState(false);
  const [skillCard, setSkillCard] = useState<any>({
    title: "",
    whatToShow: [{ name: "", path: "" }],
  });

  useEffect(() => {
    if (isHidden) {
      setSkillCard({ title: "", whatToShow: [{ name: "", path: "" }] });
      setShowSkills(false);
    }
  }, [isHidden]);

  return (
    <>
      <div
        className={`flex relative items-center flex-row py-4 justify-center gap-10`}
      >
        <AnimatePresence initial={false}>
          {!isHidden &&
            experitesFields.map((field, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      duration: 0.7,
                      delay: 0.6,
                      ease: "easeInOut",
                    },
                  }}
                  exit={{
                    y: -100,
                    opacity: 0,
                    transition: { duration: 0.35, ease: "easeInOut" },
                  }}
                  onMouseEnter={() => {
                    setSkillCard(field);

                    setShowSkills(false);
                    setTimeout(() => {
                      setShowSkills(true);
                    }, 200);
                  }}
                  className="cursor-pointer p-2 hover:!-translate-y-3 hover:!transition-all hover:!hue-rotate-90"
                >
                  <Image
                    alt="ascasc"
                    loading="lazy"
                    height={150}
                    width={150}
                    style={{ objectFit: "scale-down" }}
                    src={`/img/${field.title}.png`}
                  />
                </motion.div>
              );
            })}
        </AnimatePresence>
      </div>

      {ShowSkills && !isHidden && (
        <Tech
          isHidden={isHidden}
          className={""}
          ShowSkills={ShowSkills}
          title={skillCard.title}
          techList={skillCard.whatToShow}
        />
      )}
    </>
  );
}
