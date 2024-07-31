import Head from "next/head";
import DarkModeToggle from "./DarkModeToggle";

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <a className="text-xl font-sans" href="/">
          ANOSHA
        </a>

        <nav className="flex justify-center flex-grow">
          <ul className="flex space-x-4">
            <li className="border-r border-gray-400 pr-4 ">
              <a
                href="/blog"
                className=" font-light hover:text-gray-800 font-sans"
              >
                BLOG
              </a>
            </li>
            <li className="border-r border-gray-400 pr-4">
              <a
                href="/projects"
                className="font-light hover:text-gray-800 font-sans"
              >
                PROJECTS
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="font-light hover:text-gray-800 font-sans"
              >
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

export default Header;
