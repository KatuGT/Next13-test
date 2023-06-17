'use client'
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div onClick={toggle} className="flex gap-1 border border-solid border-white rounded-full px-1 relative">
      <span>🌜</span>
      <span>🌞</span>
      <span
        className={`h-full transition-all ease-in-out aspect-square rounded-full ${
          mode === "dark" ? "right-0" : "left-0"
        } bg-green-400 absolute`}
      ></span>
    </div>
  );
};

export default DarkModeToggle;
