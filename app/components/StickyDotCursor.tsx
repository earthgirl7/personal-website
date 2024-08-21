"use client";
import { useState, useEffect } from "react";

const StickyDotCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed w-3 h-3 bg-gray-500 rounded-full pointer-events-none transition-all duration-300 ease-out z-40"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-90%, -90%)",
        transition: "all 0.5s ease-out",
      }}
    ></div>
  );
};

export default StickyDotCursor;