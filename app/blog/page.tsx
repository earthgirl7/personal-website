import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
          {/* single blog entry block */}
          <div className="flex items-center py-4">
            <div className="mr-10">#hashtag</div>
            <div className="flex-1 flex justify-between items-center">
              <div className="ml-2">New Blog Post Title </div>
              <div className="whitespace-nowrap">July 31, 2024</div>
            </div>
          </div>
          {/* single blog entry block */}
          <div className="flex items-center py-4">
            <div className="mr-10">#hashtag</div>
            <div className="flex-1 flex justify-between items-center">
              <div className="ml-2">New Blog Post Title </div>
              <div className="whitespace-nowrap">July 31, 2024</div>
            </div>
          </div>
          {/* single blog entry block */}
          <div className="flex items-center py-4">
            <div className="mr-10">#hashtag</div>
            <div className="flex-1 flex justify-between items-center">
              <div className="ml-2">New Blog Post Title </div>
              <div className="whitespace-nowrap">July 31, 2024</div>
            </div>
          </div>
          {/* single blog entry block */}
          <div className="flex items-center py-4">
            <div className="mr-10">#hashtag</div>
            <div className="flex-1 flex justify-between items-center">
              <div className="ml-2">New Blog Post Title </div>
              <div className="whitespace-nowrap">July 31, 2024</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogList;
