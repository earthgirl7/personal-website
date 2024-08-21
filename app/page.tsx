"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";

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

  // const [ringSize, setRingSize] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setRingSize((prevSize) => Math.min(prevSize + 0.5, 200));
  //   }, 250);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pb-[1vh]">
        {/* <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: `${ringSize * 1.5}vw`,
            height: `${ringSize * 1.5}vw`,
            background: `radial-gradient(circle, rgba(100,149,237,0.8) 0%, rgba(100,149,237,0.4) 40%, rgba(100,149,237,0.1) 70%, rgba(100,149,237,0) 100%)`,
            transition: "all 0.5s ease-out",
            filter: "blur(10px)",
            opacity: 0.7,
          }}
        /> */}
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
        {/* <div className="flex flex-col items-center justify-center min-h-screen">
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
        </div> */}
      </main>
      <Footer />
    </div>
  );

  //
}
