"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const texts = [
    "Welcome to my digital corner.",
    "Explore my journey.",
    "Discover my passions.",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newIndex = Math.min(
        Math.floor(scrollPosition / 300),
        texts.length - 1
      );
      setCurrentTextIndex(newIndex);
      // Calculate opacity based on scroll position
      const sectionStart = newIndex * 300;
      const sectionEnd = sectionStart + 300;
      const progress =
        (scrollPosition - sectionStart) / (sectionEnd - sectionStart);

      // Fade in from 0 to 1 in the first 20%, stay at 1 until 80%, then fade out
      let newOpacity;
      if (progress < 0.2) {
        newOpacity = progress / 0.2;
      } else if (progress > 0.8) {
        newOpacity = 1 - (progress - 0.8) / 0.2;
      } else {
        newOpacity = 1;
      }

      setOpacity(Math.max(0, Math.min(1, newOpacity)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [texts.length]);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Header isFixed={true} />
        <div className="h-[200vh]">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <h1
              className="text-4xl font-semi-light"
              style={{ opacity: opacity }}
            >
              {texts[currentTextIndex]}
            </h1>
          </div>
        </div>
        <div className="">
          <div className="h-screen flex items-center justify-center">
            <div className="font-mono font-light w-1/3 max-w-2xl">
              <div className="mb-8 text-xl">1. CURIOSITY</div>
              <div>
                We live in a world that is infinitely discoverable. To me, it is
                exhilarating to know that I could spend a lifetime devoting
                myself to learning and I'd still only scratch the surface.
                Learning about ideologies, individuals, groups, and systems.{" "}
              </div>
            </div>
          </div>
          <div className="h-screen flex items-center justify-center">
            <div className="font-mono font-light w-1/3 max-w-2xl">
              <div className="mb-8 text-xl">2. SYSTEMS THINKING </div>
              <div>
                The whole is greater than the sum of its parts. It's potentially
                chaotic, displaying emergence, non-linearity, and adaptive
                self-organization. I am the whole. I exist within a whole, which
                exists within an interconnected network of wholes, which may
                itself by a whole..{" "}
              </div>
            </div>
          </div>
          <div className="h-screen flex items-center justify-center">
            <div className="font-mono font-light w-1/3 max-w-2xl">
              <div className="mb-8 text-xl">3. MOVEMENT </div>
              <div>
                Change begets life. We are constantly in flux, as living beings
                made of matter, operating in society made of systems. We
                invented calculus to understand the dynamism that permeates our
                world, so we could track the shapeshifting of the abstract and
                the tangible.{" "}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
