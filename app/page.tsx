import DarkModeToggle from "./DarkModeToggle";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl">ANOSHA</h1>

        <nav className="flex justify-center flex-grow">
          <ul className="flex space-x-4">
            <li className="border-r border-gray-400 pr-4">
              <a href="#" className=" font-light hover:text-gray-800">
                BLOG
              </a>
            </li>
            <li className="border-r border-gray-400 pr-4">
              <a href="#" className="font-light hover:text-gray-800">
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#" className="font-light hover:text-gray-800">
                STORY
              </a>
            </li>
          </ul>
        </nav>
        <DarkModeToggle />
      </div>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="py-4 px-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-3 ">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl text-gray-600 hover:text-gray-800 transition duration-300" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl text-gray-600 hover:text-gray-800 transition duration-300" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl text-gray-600 hover:text-gray-800 transition duration-300" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl text-gray-600 hover:text-gray-800 transition duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-light">Hi, my name is</p>
          <h1 className="text-4xl font-semi-light">ANOSHA RAHIM</h1>
          <p className="text-xl font-light">and I am an AI engineer</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
