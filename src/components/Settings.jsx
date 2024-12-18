import { SettingsIcon } from "./icon/SettingsIcon";

export const Settings = ({ setModalOpen }) => {
  return (
    <div className="justify-self-center">
      <span
        className="text-[#D7E0FF]/50 hover:text-[#D7E0FF]"
        onClick={() => setModalOpen(true)}
      >
        <SettingsIcon />
      </span>
    </div>
  );
};
