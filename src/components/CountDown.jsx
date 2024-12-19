import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export const CountDown = ({
  pomodoroStatus,
  setPomodoroStatus,
  pomodoroTime,
  setPomodoroTime,
  selectedColorTheme,
  selectedFontTheme,
  POMODORO_TIME,
  colors,
}) => {
  const percentage = 100 - (pomodoroTime / POMODORO_TIME) * 100;

  return (
    <div className="w-[300px] h-[300px] rounded-[300px] md:w-[410px] md:h-[410px] md:rounded-[410px] bg-pomodoroContainerGradient shadow-pomodoroContainerShadow p-[16px] md:p-[22px] ">
      <CircularProgressbarWithChildren
        value={percentage}
        strokeWidth={3.2786}
        className={`p-[9.88px] md:p-[13.5px] bg-darkTwo rounded-full w-fit h-fit`}
        styles={buildStyles({
          // Colors
          pathColor: `${colors[selectedColorTheme]}`,
          trailColor: "transparent",
        })}
      >
        <div className="text-center text-grayTwo lg:mt-[29px]">
          <p
            className={` ${
              selectedFontTheme === "theme1" && "heading-1-small-theme1"
            }  ${selectedFontTheme === "theme2" && "heading-1-small-theme2"}  ${
              selectedFontTheme === "theme3" && "heading-1-small-theme3"
            } md:heading-1 `}
          >
            {formatTime(pomodoroTime)}
          </p>
          <button
            className={`heading-3 md:mt-[22px] `}
            onClick={() => {
              if (pomodoroStatus === "started")
                return setPomodoroStatus("paused");
              if (pomodoroStatus === "paused")
                return setPomodoroStatus("started");
              if (pomodoroStatus === "finished") {
                setPomodoroTime(POMODORO_TIME);
                setPomodoroStatus("started");
                return;
              }
            }}
          >
            {pomodoroStatus === "started" && "Pause"}
            {pomodoroStatus === "paused" && "Start"}
            {pomodoroStatus === "finished" && "Restart"}
          </button>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};
