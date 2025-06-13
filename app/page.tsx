"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import About from "./components/About";

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
    }, 5000);

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
          className={`object-cover transition-opacity duration-1000 ${
            theme === "dark" ? "opacity-100 evening-sky-animation" : "opacity-0"
          }`}
        />
      </div>

      <Header isFixed={true} />
      <main className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          {/* <p className="text-xl font-light font-sans mb-5">Hi, my name is</p> */}
          <h1 className="text-3xl lg:text-4xl font-sans font-semi-light mb-8">
            ANOSHA RAHIM
          </h1>

          <p className="text-xl lg:text-xl font-light font-sans flex justify-center items-center mb-8">
            <span className="word-container">
              <span className={`word-change ${isChanging ? "changing" : ""}`}>
                {currentWord}
              </span>
            </span>
          </p>
          <p className="text-xs lg:text-sm font-light font-sans mb-5 transition-transform duration-500 hover:scale-105 cursor-pointer">
            📍 San Francisco, CA
          </p>
        </div>
      </main>

      {/* <About /> */}

      <Footer />
    </div>
  );

  //
}
