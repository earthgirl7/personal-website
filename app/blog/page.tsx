// blog page with all the blog entries

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import blogData from "./blogData";

const BlogList = () => {
  const hashtagColors: { [key: string]: string } = {
    "#poem": "text-blue-500",
    "#research": "text-green-700",
    "#experience": "text-pink-500",
    // Add more hashtags and their corresponding color classes
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-16 flex justify-center">
        <div className="w-2/5">
          <div className="text-4xl flex justify-center font-sans">
            The Inside of My Brain
          </div>
          <hr className="border-t border-black my-4" />

          {blogData.map((blog) => (
            <Link
              href={`/blog/${blog.id}/${encodeURIComponent(
                blog.title.toLowerCase().replace(/\s+/g, "-")
              )}`}
              key={blog.id}
            >
              <div className="flex items-center py-4 group">
                    hashtagColors[blog.hashtag] || "text-gray-500"
                    {blog.title}
                  </div>
                  <div className="whitespace-nowrap group-hover:text-gray-500">
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
