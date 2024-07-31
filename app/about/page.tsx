import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="h-screen flex items-center justify-center">
          <h1 className="text-4xl font-semi-light">Welcome to my world.</h1>
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
