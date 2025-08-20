"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import About from "./components/About";
import HeroCircle from "./components/HeroCircle";

export default function Home() {
  const words = [
    "ML Research Engineer",
  ];
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isChanging, setIsChanging] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Theme detection logic similar to ThemeToggle
    const storedTheme = window.localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const currentTheme = storedTheme || systemTheme;
    setTheme(currentTheme);

    // Listen for theme changes via class mutations
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDark = document.documentElement.classList.contains("dark");
          setTheme(isDark ? "dark" : "light");
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Listen for system preference changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      // Only respond to system changes if no theme is manually stored
      if (!window.localStorage.getItem("theme")) {
        const newTheme = e.matches ? "dark" : "light";
        setTheme(newTheme);
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentWord((prevWord) => {
          const currentIndex = words.indexOf(prevWord);
          const nextIndex = (currentIndex + 1) % words.length;
          return words[nextIndex];
        });
        setIsChanging(false);
      }, 500); // Half of the interval for smooth transition
    }, 9000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Background Images */}
      <div className="fixed inset-0 z-[-1]">
        <Image
          src="/eveningsky.jpg"
          alt="Evening Sky"
          fill
          className={`object-cover ${
            theme === "dark" ? "opacity-100 evening-sky-animation" : "opacity-0"
          }`}
        />
        {/* 30% Black Overlay for Dark Mode */}
        <div 
          className={`absolute inset-0 bg-black ${
            theme === "dark" ? "opacity-35" : "opacity-0"
          }`}
        />
      </div>

      <Header isFixed={true} />
      <main className="flex items-center justify-center min-h-screen">
        <HeroCircle currentWord={currentWord} isChanging={isChanging} />
      </main>

      {/* <About /> */}

      <Footer />
    </div>
  );

  //
}
