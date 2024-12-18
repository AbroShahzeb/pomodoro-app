import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const NavBar = ({ active, setActive, selectedColorTheme, colors }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    console.log("Window width", windowWidth);
  }, [windowWidth]);
  const navBackVariants = {
    pomodoro: {
      translateX: 0,
    },
    shortBreak: {
      translateX: windowWidth >= 768 ? 120 : 105,
    },
    longBreak: {
      translateX: windowWidth >= 768 ? 240 : 210,
    },
  };
  return (
    <nav className="bg-darkTwo relative list-none flex items-center text-[12px] md:text-sm font-bold p-2 rounded-[31.5px] w-[327px]  md:w-[373px] h-[63px]">
      <motion.div
        variants={navBackVariants}
        initial={active}
        animate={active}
        transition={{
          type: "tween",
          duration: 0.2,
          ease: "easeInOut",
        }}
        style={{ background: colors[selectedColorTheme] }}
        className={`w-[105px] md:w-[120px] h-[48px] rounded-[26.5px] absolute -z-0`}
      ></motion.div>
      <li
        className={`shrink-0 rounded-[26.5px] z-20 w-[105px] md:w-[120px] h-[48px] ${
          active === "pomodoro"
            ? "text-darkTwo"
            : "text-grayTwo/40 hover:text-grayTwo"
        } flex items-center justify-center cursor-pointer`}
        onClick={() => setActive("pomodoro")}
      >
        pomodoro
      </li>
      <li
        className={`w-[105px] md:w-[120px] h-[48px] flex items-center z-20 justify-center  ${
          active === "shortBreak"
            ? "text-darkTwo"
            : "text-grayTwo/40 hover:text-grayTwo"
        } cursor-pointer`}
        onClick={() => setActive("shortBreak")}
      >
        short break
      </li>
      <li
        className={`w-[105px] md:w-[120px] h-[48px] flex items-center z-20 justify-center ${
          active === "longBreak"
            ? "text-darkTwo"
            : "text-grayTwo/40 hover:text-grayTwo"
        } cursor-pointer`}
        onClick={() => setActive("longBreak")}
      >
        long break
      </li>
    </nav>
  );
};
