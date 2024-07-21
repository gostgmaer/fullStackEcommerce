// components/ThemeToggle.js
"use client"

import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);

  };

  return (
    <button onClick={toggleTheme} className="p-2">
      {theme === "light" ? (
        <MdDarkMode className="h-5 w-5" />
      ) : (
        <MdLightMode className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
