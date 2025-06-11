"use client";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  const [ringSize, setRingSize] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / documentHeight) * 100;
      setRingSize(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const texts = [
    "welcome to my digital corner",
    "where I share who I am",
    "and the principles I live by →",
  ];
  const principles = [
    {
      title: "1. CURIOSITY",
      content:
        "We live in a world that is infinitely discoverable. To me, it is exhilarating to know that I could spend a lifetime devoting myself to learning and I'd still only scratch the surface. Learning about ideologies, individuals, groups, and systems.",
    },
    {
      title: "2. SYSTEMS THINKING",
      content:
        "The whole is greater than the sum of its parts. It's potentially chaotic, displaying emergence, non-linearity, and adaptive self-organization. I am the whole. I exist within a whole, which exists within an interconnected network of wholes, which may itself by a whole.",
    },
    {
      title: "3. MOVEMENT",
      content:
        "Change begets life. We are constantly in flux, as living beings made of matter, operating in society made of systems. We invented calculus to understand the dynamism that permeates our world, so we could track the shapeshifting of the abstract and the tangible.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: '100vw',
              height: '100vw',
              transform: `translate(-50%, -50%) scale(${ringSize / 100})`,
              background:
                "radial-gradient(circle, transparent 51%, rgba(255,105,180,0.5) 50%, rgba(255,105,180,0.5) 51%, transparent 52%)",
              transition: "transform 0.1s cubic-bezier(0.4, 0, 0.2, 1)",
              WebkitTransform: `translate(-50%, -50%) scale(${ringSize / 100})`,
              WebkitTransition: "transform 0.1s cubic-bezier(0.4, 0, 0.2, 1)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              perspective: 1000,
              WebkitPerspective: 1000,
            }}
          />
        </div>
        {/* <Header isFixed={true} /> */}
        <div className="h-[100vh]">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <div className="flex flex-col items-center px-4 sm:px-0">
              {texts.map((text, index) => (
                <h1 key={index} className="text-4xl font-semi-light">
                  {text}
                </h1>
              ))}
            </div>
          </div>
        </div>

        {principles.map((principle, index) => (
          <div
            key={index}
            className="h-screen flex items-center justify-center"
          >
            <div className="font-mono font-light w-full sm:w-1/3  px-4 sm:px-0 max-w-2xl">
              <div className="mb-2 text-xl">{principle.title}</div>
              <div>{principle.content}</div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default About;
