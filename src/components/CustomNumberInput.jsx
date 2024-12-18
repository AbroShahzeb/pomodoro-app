import { DownArrow } from "./icon/DownArrow";
import { UpArrow } from "./icon/UpArrow";

export const CustomNumberInput = ({ className, value, setValue }) => {
  const STEP_VALUE = 5;
  return (
    <div
      className={`${className} h-[40px] rounded-[10px] overflow-hidden relative`}
    >
      <input
        type="number"
        className="px-[16px] py-[12px] bg-grayOne h-full w-full focus:outline-none text-[14px] font-bold text-darkOne font-theme1Font"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="flex flex-col gap-2 absolute z-30 top-1/2 right-[16px] -translate-y-1/2">
        <span
          className="text-[#bbbdcb] hover:text-darkOne"
          onClick={() => setValue((prev) => +prev + STEP_VALUE)}
        >
          <UpArrow />
        </span>
        <span
          className="text-[#bbbdcb] hover:text-darkOne"
          onClick={() => setValue((prev) => +prev - STEP_VALUE)}
        >
          <DownArrow />
        </span>
      </div>
    </div>
  );
};
