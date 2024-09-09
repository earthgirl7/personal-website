// blog page with all the blog entries

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import blogData from "./blogData";

const BlogList = () => {
  const hashtagColors: { [key: string]: string } = {
    "#poem": "text-blue-500",
    "#rabbithole": "text-green-700",
    "#experience": "text-pink-500",
    "#machinelearning": "text-orange-600"
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-16 flex justify-center">
        <div className="w-full p-4 sm:w-1/2">
          <div className="text-4xl flex justify-center font-sans">
            The Inside of My Brain
          </div>
          <hr className="border-t border-current border-t-[0.5px] my-4" />

          {blogData.map((blog) => (
            <Link
              href={`/blog/${blog.id}/${encodeURIComponent(
                blog.title.toLowerCase().replace(/\s+/g, "-")
              )}`}
              key={blog.id}
            >
              <div className="flex flex-col sm:flex-row items-center py-4 group">
                <div className="w-full sm:w-32 sm:mr-10 mb-2 sm:mb-0 order-first sm:order-none flex justify-between items-center">
                  <div
                    className={`group-hover:text-hover-color text-xs sm:text-base ${
                      hashtagColors[blog.hashtag] || "text-gray-500"
                    }`}
                  >
                    {blog.hashtag}
                  </div>
                  <div className="whitespace-nowrap group-hover:text-hover-color font-light text-xs sm:text-sm sm:hidden">
                    {blog.date}
                  </div>
                </div>
                <div className="w-full sm:flex-1 flex justify-between items-center font-light">
                  <div className="group-hover:text-hover-color">
                    {blog.title}
                  </div>
                  <div className="whitespace-nowrap group-hover:text-hover-color font-light text-xs sm:text-base hidden sm:block">
                    {blog.date}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogList;
