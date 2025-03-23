"use client";
import { useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiSun } from "react-icons/ci";

export default function DarkMode() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const toggleDark = () => setIsDark((prev) => !prev);
  return (
    <button onClick={toggleDark}>
      {isDark ? <MdOutlineDarkMode /> : <CiSun />}
    </button>
  );
}
