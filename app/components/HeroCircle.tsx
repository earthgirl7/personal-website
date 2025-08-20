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
        </div>
      </div>
    </div>
  );
} 