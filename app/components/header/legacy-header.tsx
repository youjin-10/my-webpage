"use client";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

const menu = {
  open: {
    width: "280px",
    height: "380px",
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    // width: "100px",
    width: "6rem",
    // height: "40px",
    height: "2.5rem",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const links = [
  {
    title: "Projects",
    href: "/",
  },
  {
    title: "Agency",
    href: "/",
  },
  {
    title: "Expertise",
    href: "/",
  },
];

export const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (i: number) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const handleToggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="fixed top-10 right-10 ">
      <motion.div
        className="w-96 h-96 bg-[#c9fd74] rounded-3xl relative"
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed">
        <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
      </motion.div>
      <Button isActive={isActive} toggleMenu={handleToggleMenu} />
    </div>
  );
}

type ButtonProps = {
  isActive: boolean;
  toggleMenu: () => void;
};
function Button({ isActive, toggleMenu }: ButtonProps) {
  return (
    <div className="absolute top-0 right-0 w-24 h-10 cursor-pointer rounded-3xl overflow-hidden">
      <motion.div
        className="relative w-full h-full"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}>
        <div
          className="w-full h-full bg-[#c9fd74]"
          onClick={() => {
            toggleMenu();
          }}>
          <PerspectiveText label="Menu" />
        </div>
        <div
          className="w-full h-full bg-black"
          onClick={() => {
            toggleMenu();
          }}>
          <PerspectiveText label="Close" textColor="text-[#c9fd74]" />
        </div>
      </motion.div>
    </div>
  );
}

type PerspectiveTextProps = {
  label: string;
  textColor?: string;
};
function PerspectiveText({
  label,
  textColor = "text-black",
}: PerspectiveTextProps) {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full preserve-3d transition-transform duration-[0.75s] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:rotate-x-90">
      <p
        className={`m-0 uppercase pointer-events-none transition-all duration-[0.75s] ease-[cubic-bezier(0.76,0,0.24,1)] ${textColor} group-hover:-translate-y-full group-hover:opacity-0`}>
        {label}
      </p>
      <p
        className={`m-0 uppercase pointer-events-none transition-all duration-[0.75s] ease-[cubic-bezier(0.76,0,0.24,1)] absolute origin-bottom -rotate-x-90 translate-y-[9px] opacity-0 ${textColor} group-hover:opacity-100`}>
        {label}
      </p>
    </div>
  );
}

function Nav() {
  return (
    <div className="flex flex-col justify-between  pt-24 pb-12 px-10 h-full box-border">
      <div className="flex flex-col gap-[10px]">
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div
              key={`b_${i}`}
              className="perspective-[120px] perspective-origin-bottom">
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit">
                <a href={href} className="text-black  text-2xl no-underline">
                  {title}
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
