"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import About from "./components/About";

export default function Home() {
  const words = [
    "AI engineer",
    "lifelong learner",
    "wanderer",
    "creative",
    "scholar",
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
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pb-[1vh]">
        <div className="flex flex-grow container mx-auto pt-[35vh] pb-[40vh] items-center justify-center">
          <div className="text-center">
            {/* <p className="text-xl font-light font-sans mb-5">Hi, my name is</p> */}
            <h1 className="text-4xl font-sans font-semi-light mb-8">
              ANOSHA RAHIM
            </h1>

            <p className="text-2xl font-light font-sans flex justify-center items-center mb-8">
              <span className="word-container">
                <span className={`word-change ${isChanging ? "changing" : ""}`}>
                  {currentWord}
                </span>
              </span>
            </p>
            <p className="text-sm font-light font-sans mb-5">
              📍 San Francisco, CA
            </p>
          </div>
        </div>
        <About />
      </main>

      <Footer />
    </div>
  );

  //
}
