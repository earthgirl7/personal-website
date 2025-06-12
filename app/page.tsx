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
    <div className="flex flex-col min-h-screen">
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
          <p className="text-xs lg:text-sm font-light font-sans mb-5">
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
