import Image from "next/image";
import SocialIcons from "./components/SocialIcons";

export default function Home() {
  return (
    // Dark mode: add "dark:bg-gray-900" to className below to re-enable
    <div className="min-h-screen bg-white py-12 sm:py-24 lg:py-48">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 lg:gap-12">
          {/* Left Column - Name and About Header */}
          <div className="flex-none w-full lg:w-auto lg:self-start">
            {/* Dark mode: add "dark:text-gray-100" to className below to re-enable */}
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Anosha Rahim
            </h1>
            
            <SocialIcons />
          </div>
          
          {/* Middle Column - Portrait Image */}
          <div className="flex-[1] w-full lg:w-auto lg:self-start">
            <Image
              src="/portrait.png"
              alt="Anosha Rahim"
              width={1600}
              height={1000}
              className="w-full h-auto"
              priority
            />
          </div>
          
          {/* Right Column - About Content */}
          <div className="flex-[1.5] w-full lg:w-auto lg:pr-16">
            {/* Dark mode: add "dark:text-gray-100" to paragraph, and "dark:text-gray-100" to links below to re-enable */}
            <p className="text-sm font-light leading-snug text-gray-900">
              I am a machine learning researcher at <a href="https://springtail.ai/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-orange-500 underline">Springtail</a>, where I build novel AI models to enable scientific reasoning in machines.
              <br /><br />
              Previously, I worked on knowledge graphs for AI-powered drug discovery at <a href="https://enveda.com/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-orange-500 underline">Enveda Bio</a>, as well as advancing conversational AI at Zoom. I also led engineering for a startup developing privacy-focused communication tools.
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
