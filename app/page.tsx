"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  const words = [
    "AI engineer",
    "lifelong learner",
    "traveler",
    "creative",
    "athlete",
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
      <main className="pb-[30vh]">
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
        <div className="flex flex-col items-center justify-center min-h-screen">
          <Image
            src="/maxim-berg.jpg"
            alt="Description of image"
            width={200}
            height={100}
          />
          <Image
            src="/kier-in-sight.jpg"
            alt="Description of image"
            width={200}
            height={100}
          />

          <Image
            src="/geordanna-cordero.jpg"
            alt="Description of image"
            width={200}
            height={100}
          />
        </div>
      </main>
      <Footer />
    </div>
  );

  //
}
