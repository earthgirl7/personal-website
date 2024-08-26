"use client";
import Head from "next/head";
import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";
import { useState } from "react";

const Header: React.FC<{ isFixed?: boolean }> = ({ isFixed = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  const headerClasses = `py-0 sm:py-6 px-0 sm:px-4 ${
    isFixed ? "fixed top-0 left-0 right-0 z-10" : ""
  } `;

  const handleTouchStart = (e: React.TouchEvent) => {
    setSwipeStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (swipeStart - e.touches[0].clientX > 50) {
      setIsMenuOpen(false);
      setIsBlurred(false);
    }
  };

  const [swipeStart, setSwipeStart] = useState(0);
  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex justify-between items-center">
        <button
          className="md:hidden text-3xl p-4"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            setIsBlurred(!isBlurred);
          }}
        >
          ☰
        </button>

        <div className="w-full md:w-auto">
          <Link
            className="text-xl font-sans hover:text-hover-color text-center md:text-left block"
            href="/"
          >
            ANOSHA
          </Link>
        </div>
        <div className="relative">
          <nav
            className={`md:flex justify-center flex-grow ${
              isMenuOpen
                ? "block fixed inset-0 flex text-xl font-bold"
                : "hidden"
            } md:relative md:block bg-[var(--foreground-rgb)] md:bg-transparent md:dark:bg-transparent z-50`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <ul
              className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-10 md:p-0 ${
                isMenuOpen ? "w-full" : ""
              }`}
            >
              <li className=" md:pr-4">
                <Link
                  href="/blog"
                  className=" font-light hover:text-hover-color font-sans"
                >
                  WRITINGS
                </Link>
              </li>
              {/* <li className=" md:pr-4">
                <Link
                  href="/about"
                  className="font-light hover:text-hover-color font-sans"
                >
                  ABOUT
                </Link>
              </li> */}
              {/* <li className="">
                <Link
                  href="https://anosharahim.github.io/resume/"
                  className="font-light hover:text-hover-color font-sans"
                >
                  RESUME
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>

        <DarkModeToggle />
      </div>
      {isBlurred && (
        <div
          className="fixed inset-0 bg-white dark:bg-[var(--menu-bg-dark)] bg-opacity-90 backdrop-blur-md z-30"
          onClick={() => {
            setIsMenuOpen(false);
            setIsBlurred(false);
          }}
        ></div>
      )}
    </header>
  );
};

export default Header;
