"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
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
        <Header isFixed={true} />
        <div className="h-[100vh]">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <div className="flex flex-col items-center">
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
            <div className="font-mono font-light w-1/3 max-w-2xl">
              <div className="mb-2 text-xl">{principle.title}</div>
              <div>{principle.content}</div>
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default About;

