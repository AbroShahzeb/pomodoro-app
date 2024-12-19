import { useState, useEffect } from "react";
import { SettingModal } from "./components/SettingModal";
import { Settings } from "./components/Settings";
import { AppTitle } from "./components/AppTitle";
import { NavBar } from "./components/Navbar";
import { CountDown } from "./components/CountDown";
import "./App.css";

const colors = { theme1: "#F87070", theme2: "#70F3F8", theme3: "#D881F8" };
const fonts = {
  theme1: "theme1Font",
  theme2: "theme2Font",
  theme3: "theme3Font",
};

function App() {
  const [POMODORO_TIME, SET_POMODORO_TIME] = useState(25 * 60);
  const [pomodoroTime, setPomodoroTime] = useState(
    localStorage.getItem("pomodoro") || 25 * 60
  );
  const [pomodoro, setPomodoro] = useState(
    localStorage.getItem("pomodoro") || 25
  );
  const [shortBreak, setShortBreak] = useState(
    localStorage.getItem("shortBreak") || 5
  );
  const [longBreak, setLongBreak] = useState(
    localStorage.getItem("longBreak") || 15
  );
  const [pomodoroStatus, setPomodoroStatus] = useState("paused");
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [activePomodoroType, setActivePomodoroType] = useState("pomodoro");
  const [selectedColorTheme, setSelectedColorTheme] = useState("theme1");
  const [selectedFontTheme, setSelectedFontTheme] = useState("theme1");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPomodoroTime((prev) => prev - 1);
    }, 1000);

    if (pomodoroStatus === "paused") clearInterval(intervalId);

    if (pomodoroTime === 0) {
      setPomodoroStatus("finished");
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [pomodoroStatus, pomodoroTime]);

  useEffect(() => {
    const colorTheme = localStorage.getItem("colorTheme");
    const fontTheme = localStorage.getItem("fontTheme");
    if (colorTheme) {
      setSelectedColorTheme(colorTheme);
    } else {
      localStorage.setItem("colorTheme", selectedColorTheme);
    }

    if (fontTheme) {
      setSelectedFontTheme(fontTheme);
    } else {
      localStorage.setItem("fontTheme", selectedFontTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pomodoro", pomodoro);
    localStorage.setItem("shortBreak", shortBreak);
    localStorage.setItem("longBreak", longBreak);
    setPomodoroTime(localStorage.getItem(activePomodoroType) * 60);
    SET_POMODORO_TIME(localStorage.getItem(activePomodoroType) * 60);
  }, [pomodoro, shortBreak, longBreak]);

  useEffect(() => {
    localStorage.setItem("colorTheme", selectedColorTheme);
    localStorage.setItem("fontTheme", selectedFontTheme);
  }, [selectedColorTheme, selectedColorTheme]);

  useEffect(() => {
    setPomodoroTime(localStorage.getItem(activePomodoroType) * 60);
    SET_POMODORO_TIME(localStorage.getItem(activePomodoroType) * 60);
    setPomodoroStatus("paused");
  }, [activePomodoroType]);
  return (
    <>
      <SettingModal
        isOpen={isSettingOpen}
        setIsOpen={setIsSettingOpen}
        pomodoro={pomodoro}
        setPomodoro={setPomodoro}
        shortBreak={shortBreak}
        setShortBreak={setShortBreak}
        longBreak={longBreak}
        setLongBreak={setLongBreak}
        selectedFontTheme={selectedFontTheme}
        selectedColorTheme={selectedColorTheme}
        setSelectedColorTheme={setSelectedColorTheme}
        setSelectedFontTheme={setSelectedFontTheme}
        fonts={fonts}
        colors={colors}
      />
      <main
        className={`w-full min-h-screen bg-darkOne flex items-start justify-center  relative font-${fonts[selectedFontTheme]}`}
      >
        <div>
          <div className="mb-[45px] lg:mb-[47px] sm:mb-[55px] mt-[32px] sm:mt-[80px] lg:mt-[48px]">
            <AppTitle />
          </div>
          <div className="mb-[48px] sm:mb-[109px] lg:mb-[45px] flex justify-center">
            <NavBar
              active={activePomodoroType}
              setActive={setActivePomodoroType}
              selectedColorTheme={selectedColorTheme}
              colors={colors}
            />
          </div>
          <div className="mb-[79px] sm:mb-[144px] lg:mb-[63px] justify-self-center flex justify-center">
            <CountDown
              pomodoroStatus={pomodoroStatus}
              pomodoroTime={pomodoroTime}
              setPomodoroStatus={setPomodoroStatus}
              setPomodoroTime={setPomodoroTime}
              selectedColorTheme={selectedColorTheme}
              selectedFontTheme={selectedFontTheme}
              POMODORO_TIME={POMODORO_TIME}
              colors={colors}
            />
          </div>
          <div className="mb-[48px] sm:mb-[103px] lg:mb-[56px] w-full flex justify-center">
            <Settings setModalOpen={setIsSettingOpen} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
