import React, { useState } from "react";

interface SwitchProps {
  onToggle: (isLive: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ onToggle }) => {
  const [isLive, setIsLive] = useState(false);

  const handleToggle = () => {
    setIsLive(!isLive);
    onToggle(!isLive);
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <span
        className={`text-base font-normal font-workSans mx-2 transition-colors ${
          isLive ? "text-green-500 font-bold" : "text-greyColr"
        }`}
      >
        {isLive ? "Live" : "Test"} Mode
      </span>
      <div
        className={`w-16 rounded-full relative cursor-pointer transition-colors ${
          isLive
            ? "bg-green-500 h-8"
            : "bg-[#f8fbfe] border-[#b3c7d4] border h-[34px]"
        }`}
        onClick={handleToggle}
      >
        <div
          className={`w-6 h-6 rounded-full absolute top-1 left-1 transition-transform ${
            isLive ? "transform translate-x-8 bg-white" : "bg-[#b3c7d4] "
          }`}
        />
      </div>
    </div>
  );
};

export default Switch;
