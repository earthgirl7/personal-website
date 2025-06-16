"use client";
import { useState, useEffect, useRef } from "react";
import "./StickyDotCursor.css";

const StickyDotCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const cursorRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>();
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const speed = 0.4;

    const animate = () => {
      const dx = targetRef.current.x - cursorRef.current.x;
      const dy = targetRef.current.y - cursorRef.current.y;

      cursorRef.current.x += dx * speed;
      cursorRef.current.y += dy * speed;

      setPosition({
        x: Math.round(cursorRef.current.x),
        y: Math.round(cursorRef.current.y)
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsClicked(true);
    };

    const handleMouseUp = () => {
      // Keep the animation visible for its full duration
      timeoutRef.current = setTimeout(() => {
        setIsClicked(false);
      }, 800); // Match this with the CSS animation duration
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`fixed w-3 h-3 bg-pink-500 rounded-full pointer-events-none z-40 hidden md:block ${
        isClicked ? "ring-animation" : ""
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        transition: "transform 0.1s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    ></div>
  );
};

export default StickyDotCursor;