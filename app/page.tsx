"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 sm:py-24 lg:py-48">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 lg:gap-12">
          {/* Left Column - Name and About Header */}
          <div className="flex-none w-full lg:w-auto lg:self-start">
            <h1 className="text-2xl sm:text-3xl font-normal text-gray-900 dark:text-gray-100">
              Anosha Rahim
            </h1>
 
 
            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-4">
              <a
                href="https://github.com/anosharahim"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: '#9ca3af' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#4b5563'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
              >
                <FaGithub className="text-base" />
              </a>
              <a
                href="https://linkedin.com/in/anosharahim"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: '#9ca3af' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#4b5563'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
              >
                <FaLinkedin className="text-base" />
              </a>
              <a
                href="https://twitter.com/anosha_rahim"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: '#9ca3af' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#4b5563'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
              >
                <FaTwitter className="text-base" />
              </a>
            </div>
            
            {/* <h2 className="text-lg text-gray-900 dark:text-gray-100 mt-4">
              About
            </h2> */}
          </div>
          
          {/* Middle Column - Portrait Image */}
          <div className="flex-[1] w-full lg:w-auto lg:self-start">
            <Image
              src="/portrait.png"
              alt="Anosha Rahim"
              width={1600}
              height={1000}
              className="w-full h-auto max-w-full sm:max-w-sm lg:max-w-none"
            />
            
          </div>
          
          {/* Right Column - About Content */}
          <div className="flex-[2] w-full lg:w-auto lg:pr-32">
            <p className="text-sm font-light leading-relaxed">
              I am a machine learning researcher at <a href="https://springtail.ai/" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-gray-100 hover:text-orange-500 underline">Springtail</a>, where I build novel AI models to enable scientific reasoning in machines.
              <br /><br />
              Previously, I worked on knowledge graphs for AI-powered drug discovery at <a href="https://enveda.com/" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-gray-100 hover:text-orange-500 underline">Enveda Bio</a>, as well as advancing conversational AI at Zoom. I also led engineering for a startup developing privacy-focused communication tools.
              <br /><br />
              I graduated from Minerva University with a computer science degree. During my undergrad studying AI and machine learning,
              I lived in five countries as part of Minerva&apos;s global rotation program.

              <br /><br />
              Currently, I live in San Francisco.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
