// blog page with all the blog entries

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import blogData from "./blogData";

const BlogList = () => {
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
                <div className="mr-10 group-hover:text-gray-500">#hashtag</div>
                <div className="flex-1 flex justify-between items-center">
                  <div className="ml-2 group-hover:text-gray-500">
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
