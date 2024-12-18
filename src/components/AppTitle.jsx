import { Logo } from "./icon/Logo";

export const AppTitle = () => {
  return (
    <div className="w-full flex justify-center">
      <span className="w-full flex justify-center">
        <Logo />
      </span>
      {/* <h1 className="text-[32px] leading-normal font-bold text-center text-grayTwo">
        pomodoro
      </h1> */}
    </div>
  );
};
