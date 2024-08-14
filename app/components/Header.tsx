import Head from "next/head";
import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-xl font-sans hover:text-hover-color" href="/">
          ANOSHA
        </Link>

        <nav className="flex justify-center flex-grow">
          <ul className="flex space-x-4">
            <li className="border-r border-gray-400 pr-4 ">
              <Link
                href="/blog"
                className=" font-light hover:text-hover-color font-sans"
              >
                WRITINGS
              </Link>
            </li>
            {/* work in progress */}
            {/* <li className="border-r border-gray-400 pr-4">
              <a
                href="/projects"
                className="font-light hover:text-gray-800 font-sans"
              >
                PROJECTS
              </a>
            </li> */}
            <li>
              <Link
                href="/about"
                className="font-light hover:text-hover-color font-sans"
              >
                STORY
              </Link>
            </li>
          </ul>
        </nav>

        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
