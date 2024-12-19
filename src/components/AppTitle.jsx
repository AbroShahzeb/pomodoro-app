import { Logo } from "./icon/Logo";

export const AppTitle = () => {
  return (
    <div className="w-full flex justify-center mt-4">
      <span className="w-full flex justify-center">
        <Logo />
      </span>
      {/* <h1 className="text-[32px] leading-normal font-bold text-center text-grayTwo">
        pomodoro
      </h1> */}
    </div>
  );
};
