import React from "react";
import { LuAxe } from "react-icons/lu";

interface LogoProps {
  dark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ dark = false }) => {
  return (
    <div className="flex items-center space-x-2">
      <LuAxe
        size={28}
        className={`${dark ? "text-amber-800" : "text-amber-200"}`}
      />
      <span
        className={`font-serif text-xl font-bold tracking-tight ${
          dark ? "text-wood-900" : "text-white"
        }`}
      >
        Mimo workshop
      </span>
    </div>
  );
};
