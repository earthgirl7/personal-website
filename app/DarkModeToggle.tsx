"use client";

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      className={`px-4 py-1 rounded flex items-center bg-transparent${
        isDarkMode ? "bg-gray-800 text-gray" : "bg-white text-gray-800"
      }`}
      onClick={toggleMode}
    >
      <div>
        <FaMoon
          className={`inline-block ${
            isDarkMode ? "text-white-400" : "text-gray-400"
          }`}
        />
      </div>
      <div className="w-px h-6 bg-gray-400 mx-2"></div>
      <div>
        {" "}
        <FaSun
          className={`inline-block ${
            isDarkMode ? "text-gray-400" : "text-white-400"
          }`}
        />
      </div>
    </button>
  );
};

export default DarkModeToggle;
