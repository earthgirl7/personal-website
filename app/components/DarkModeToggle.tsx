"use client";

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      className={` py-1 rounded flex items-center justify-center ${
        isDarkMode
          ? "bg-[var(--foreground-rgb)] text-white"
          : "bg-[var(--foreground-rgb)] text-gray-800"
      }`}
      onClick={toggleMode}
    >
      {isDarkMode ? (
        <FaSun className="text-[var(--foreground-rgb)] hover:text-gray-500" />
      ) : (
        <FaMoon className="text-[var(--foreground-rgb)] hover:text-gray-500" />
      )}
    </button>
  );
};

export default DarkModeToggle;
