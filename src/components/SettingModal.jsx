import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CloseIcon } from "./icon/CloseIcon";
import { CustomNumberInput } from "./CustomNumberInput";

export const SettingModal = ({
  isOpen,
  setIsOpen,
  selectedFontTheme,
  selectedColorTheme,
  setSelectedColorTheme,
  setSelectedFontTheme,
  setPomodoro,
  setShortBreak,
  setLongBreak,
  fonts,
  colors,
}) => {
  const [pomodoroTime, setPomodoroTime] = useState(
    localStorage.getItem("pomodoro") || 25
  );
  const [shortBreakTime, setShortBreakTime] = useState(
    localStorage.getItem("shortBreak") || 5
  );
  const [longBreakTime, setLongBreakTime] = useState(
    localStorage.getItem("longBreak") || 15
  );
  const [fontFamily, setFontFamily] = useState(selectedFontTheme);
  const [color, setColor] = useState(selectedColorTheme);

  const modalVariants = {
    open: {
      opacity: 1,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%) scale(1)",
    },
    close: {
      opacity: 0,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%) scale(0.2)",
    },
  };

  const handleApplyTheme = () => {
    setPomodoro(pomodoroTime);
    setShortBreak(shortBreakTime);
    setLongBreak(longBreakTime);
    setSelectedColorTheme(color);
    setSelectedFontTheme(fontFamily);
    setIsOpen(false);
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className={`inset-0 w-full h-screen fixed z-[50] font-${fonts[selectedFontTheme]}`}
        >
          <div
            className="absolute inset-0 bg-[#0A0C1C]/50 w-full min-h-screen"
            onClick={() => setIsOpen(false)}
          ></div>
          <motion.div
            variants={modalVariants}
            initial={"close"}
            animate={isOpen ? "open" : "close"}
            exit={"close"}
            className="bg-white absolute rounded-[15px]  z-[100] max-w-[327px] w-[327px] sm:w-[540px] sm:max-w-[540px] -mt-[13.25px]"
          >
            <div className="pt-[24px] pb-[28px] sm:p-0  border-b border-[#E3E1E1]">
              <div className="px-[24px] sm:px-[40px] sm:py-[32px] flex items-center justify-between gap-4">
                <h3 className="text-[20px] sm:text-[28px] font-bold text-darkTwo leading-normal">
                  Settings
                </h3>
                <span
                  className="size-[14px] text-[#D8D8D8] hover:text-darkOne"
                  onClick={() => setIsOpen(false)}
                >
                  <CloseIcon />
                </span>
              </div>
            </div>

            <div className="py-[24px] mx-[24px] sm:mx-[40px] border-b border-[#E3E1E1]">
              <div className="uppercase text-[11px] sm:text-[13px] sm:tracking-[5px] font-bold text-center sm:text-left text-darkTwo tracking-[4.231px] mb-[18px] sm:mb-[26px]">
                time (minutes)
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-5">
                <div className="flex items-center sm:flex-col sm:items-start sm:gap-[10px] justify-between">
                  <span className="text-darkOne/40 text-xs font-bold">
                    pomodoro
                  </span>
                  <CustomNumberInput
                    className={"max-w-[140px]"}
                    value={pomodoroTime}
                    setValue={setPomodoroTime}
                  />
                </div>
                <div className="flex items-center justify-between sm:flex-col sm:items-start sm:gap-[10px] ">
                  <span className="text-darkOne/40 text-xs font-bold">
                    short break
                  </span>
                  <CustomNumberInput
                    className={"max-w-[140px]"}
                    value={shortBreakTime}
                    setValue={setShortBreakTime}
                  />
                </div>
                <div className="flex items-center justify-between sm:flex-col sm:items-start sm:gap-[10px] ">
                  <span className="text-darkOne/40 text-xs font-bold">
                    long break
                  </span>
                  <CustomNumberInput
                    className={"max-w-[140px]"}
                    value={longBreakTime}
                    setValue={setLongBreakTime}
                  />
                </div>
              </div>
            </div>

            <div className="py-[24px] mx-[24px] sm:mx-[40px] flex flex-col sm:flex-row sm:justify-between sm:gap-5 items-center gap-[18px] border-b border-[#E3E1E1]">
              <div className="text-[11px] sm:text-[13px] sm:tracking-[5px] uppercase text-darkTwo font-bold tracking-[4.231px] text-center">
                font
              </div>
              <div className="flex items-center gap-4">
                <div
                  className={`size-10 flex cursor-pointer transition-all items-center justify-center font-bold rounded-full text-[15px] font-theme1Font  ${
                    fontFamily === "theme1"
                      ? "bg-darkTwo text-white"
                      : "bg-grayOne text-darkOne"
                  }`}
                  style={{
                    fontFamily: "Kumbh Sans",
                  }}
                  onClick={() => setFontFamily("theme1")}
                >
                  Aa
                </div>
                <div
                  className={`size-10 flex cursor-pointer transition-all items-center justify-center font-bold rounded-full text-[15px] font-theme1Font  ${
                    fontFamily === "theme2"
                      ? "bg-darkTwo text-white"
                      : "bg-grayOne text-darkOne"
                  }`}
                  style={{
                    fontFamily: "Roboto Slab",
                  }}
                  onClick={() => setFontFamily("theme2")}
                >
                  Aa
                </div>
                <div
                  className={`size-10 flex cursor-pointer transition-all items-center justify-center font-bold rounded-full text-[15px] font-theme1Font  ${
                    fontFamily === "theme3"
                      ? "bg-darkTwo text-white"
                      : "bg-grayOne text-darkOne"
                  }`}
                  style={{
                    fontFamily: "Space Mono",
                  }}
                  onClick={() => setFontFamily("theme3")}
                >
                  Aa
                </div>
              </div>
            </div>

            <div className="pt-[24px] mx-[24px] sm:mx-[40px] mb-[59px] flex flex-col sm:flex-row sm:justify-between sm:gap-5 items-center gap-[18px] ">
              <div className="text-[11px] sm:text-[13px] sm:tracking-[5px] uppercase text-darkTwo font-bold tracking-[4.231px] text-center">
                color
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="size-10 flex items-center justify-center font-bold rounded-full text-[15px] font-theme1Font bg-theme1Accent text-darkOne "
                  onClick={() => setColor("theme1")}
                >
                  {color === "theme1" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="none"
                      className="flex items-center justify-center"
                    >
                      <path
                        d="M14 20.5L17.9526 24.4526L26.4053 16"
                        stroke="#161932"
                        stroke-width="2"
                      />
                    </svg>
                  )}
                </div>
                <div
                  className="size-10 flex items-center justify-center font-bold rounded-full text-[15px] font-theme2Font bg-theme2Accent text-darkOne"
                  onClick={() => setColor("theme2")}
                >
                  {color === "theme2" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="none"
                      className="flex items-center justify-center"
                    >
                      <path
                        d="M14 20.5L17.9526 24.4526L26.4053 16"
                        stroke="#161932"
                        stroke-width="2"
                      />
                    </svg>
                  )}
                </div>
                <div
                  className="size-10 flex items-center justify-center font-bold rounded-full text-[15px] font-theme3Font bg-theme3Accent text-darkOne"
                  onClick={() => setColor("theme3")}
                >
                  {color === "theme3" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="none"
                      className="flex items-center justify-center"
                    >
                      <path
                        d="M14 20.5L17.9526 24.4526L26.4053 16"
                        stroke="#161932"
                        stroke-width="2"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>

            <button
              className="text-base text-white font-bold text-center w-[140px] h-[53px] flex items-center justify-center bg-theme1Accent absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[26.5px]"
              onClick={handleApplyTheme}
            >
              Apply
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
