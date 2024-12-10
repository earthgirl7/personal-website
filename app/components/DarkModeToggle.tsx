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

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={` px-4 sm:px-0 rounded flex items-center justify-center ${
        isDarkMode
          ? "bg-[var(--foreground-rgb)] text-white"
          : "bg-[var(--foreground-rgb)] text-gray-800"
      }`}
      onClick={toggleMode}
    >
      {isDarkMode ? (
        <FaSun className="text-[var(--foreground-rgb)] hover:text-hover-color" />
      ) : (
        <FaMoon className="text-[var(--foreground-rgb)] hover:text-hover-color" />
      )}
    </button>
  );
};

export default DarkModeToggle;
