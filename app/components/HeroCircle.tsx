"use client";
import { useState, useEffect } from "react";

interface HeroCircleProps {
  currentWord: string;
  isChanging: boolean;
}

export default function HeroCircle({ currentWord, isChanging }: HeroCircleProps) {
  // Dynamic circle sizing - only change this value to resize everything
  const circleRadius = 335;
  const textPathRadius = circleRadius + 10; // Increased gap to avoid interference
  const textPathDiameter = textPathRadius * 2;
  
  // Dynamic container and viewBox sizing
  const containerSize = (textPathRadius + 20) * 2; // Add padding around text
  const viewBoxSize = containerSize;
  const centerPoint = containerSize / 2;
  
  // Dynamic font size scaling - maintains consistent visual size
  const baseFontSize = 16; // Base size for radius 230
  const baseRadius = 230;
  const scalingFactor = 0.50; // Reduce scaling effect (0.6 = 60% of original scaling)
  const scaledFontSize = baseFontSize + ((baseFontSize * circleRadius) / baseRadius - baseFontSize) * scalingFactor;

  // Animation state for rotating text
  const [rotationOffset, setRotationOffset] = useState(0);

  useEffect(() => {
    const animationSpeed = .01; 
    const interval = setInterval(() => {
      setRotationOffset(prev => (prev + animationSpeed) % 100);
    },20); // Update every 50ms for smooth animation

    return () => clearInterval(interval);
  }, []);

  // Calculate positions with animation offset
  const blogOffset = (10 + rotationOffset) % 100;
  const aboutOffset = (50 + rotationOffset) % 100;
  const projectsOffset = (85 + rotationOffset) % 100;

  // Convert percentages to angles and calculate positions
  const getTextPosition = (offset: number) => {
    const angle = (offset / 100) * 360 - 90; // Start from top
    const angleRad = (angle * Math.PI) / 180;
    const x = centerPoint + textPathRadius * Math.cos(angleRad);
    const y = centerPoint + textPathRadius * Math.sin(angleRad);
    return { x, y, angle: angle + 90 }; // +90 to orient text correctly
  };

  const blogPos = getTextPosition(blogOffset);
  const aboutPos = getTextPosition(aboutOffset);
  const projectsPos = getTextPosition(projectsOffset);

  return (
    <div 
      className="relative flex items-center justify-center" 
      style={{ 
        width: `${containerSize}px`, 
        height: `${containerSize}px`
      }}
    >
      {/* Circle border only
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        fill="none"
      >
        <circle 
          cx={centerPoint}
          cy={centerPoint}
          r={circleRadius}
          stroke="currentColor" 
          strokeWidth="1"
        />
      </svg> */}
      
      {/* CSS-positioned navigation text
      <div
        className="absolute font-sans font-light tracking-wider cursor-pointer hover:text-pink-500"
        style={{
          left: `${blogPos.x}px`,
          top: `${blogPos.y}px`,
          transform: `translate(-50%, -50%) rotate(${blogPos.angle}deg)`,
          fontSize: `${scaledFontSize}px`,
          zIndex: 30,
        }}
      >
        BLOG
      </div>
      
      <div
        className="absolute font-sans font-light tracking-wider cursor-pointer hover:text-pink-500"
        style={{
          left: `${projectsPos.x}px`,
          top: `${projectsPos.y}px`,
          transform: `translate(-50%, -50%) rotate(${projectsPos.angle}deg)`,
          fontSize: `${scaledFontSize}px`,
          zIndex: 30,
        }}
      >
        PROJECTS
      </div>
      
      <div
        className="absolute font-sans font-light tracking-wider cursor-pointer hover:text-pink-500"
        style={{
          left: `${aboutPos.x}px`,
          top: `${aboutPos.y}px`,
          transform: `translate(-50%, -50%) rotate(${aboutPos.angle}deg)`,
          fontSize: `${scaledFontSize}px`,
          zIndex: 30,
        }}
      >
        ABOUT
      </div> */}
      
      <div 
        className="text-center flex flex-col justify-center h-full py-16"
        style={{ 
          zIndex: 10,
          pointerEvents: 'none'
        }}
      >
        <div style={{ pointerEvents: 'auto' }}>
          <h1 className="text-2xl lg:text-3xl font-sans font-semi-light mb-4">
            ANOSHA RAHIM
          </h1>

          <p className="text-sm lg:text-base font-light font-sans flex justify-center items-center mb-5">
            <span className="word-container">
              <span className={`word-change ${isChanging ? "changing" : ""}`}>
                {currentWord}
              </span>
            </span>
          </p>
          <p className="text-xs lg:text-sm font-light font-sans ">
            📍 San Francisco, CA
          </p>
                      <p className="text-xs lg:text-sm font-light font-sans mt-12 px-8 lg:px-16 text-left leading-relaxed">
              <span className="text-pink-500">→</span> I am designing custom CUDA kernels to memory-optimize a novel attention mechanism we are testing at{" "}
              <a 
                href="https://springtail.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-600 underline"
              >
                Springtail
              </a>.
              <br />
              <br />
              <span className="text-pink-500">→</span> I recently adapted flash attention techniques to slash memory complexity from O(n³) down to O(n).
              <br />
              <br />
              <span className="text-pink-500">→</span> Previously, I was a CTO at a privacy-focused communication tooling startup.
              <br />
              <br />
              <span className="text-pink-500">→</span> I am a graduate of the {" "}
              <a 
                href="https://www.theguardian.com/education/2020/jul/30/the-future-of-education-or-just-hype-the-rise-of-minerva-the-worlds-most-selective-university" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-600 underline"
              >
                Minerva University
              </a>, where I studied AI and Machine Learning.
              <br />
              <br />
              <span className="text-pink-500">→</span> Places I&apos;ve lived in for 6+ months:
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-500">→</span> San Francisco, CA  (current)
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-500">→</span> Berlin  (Minerva)
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-500">→</span> London (Minerva)
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-500">→</span> Seoul (Minerva)
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-500">→</span> Bali (COVID)
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-500">→</span> Ankara, Turkey (university - transferred out)
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-500">→</span> Appleton, WI (exchange program)
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-500">→</span> Karachi (grew up)
              <br />
              <br/>
              <span className="text-pink-500">→</span> My current obsession: Tai Chi
              <br />
              <br />
            </p>
        </div>
      </div>
    </div>
  );
} 