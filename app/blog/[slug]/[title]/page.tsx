// A single blog page
import React from "react";
import blogData from "../../blogData";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogPost({
  params,
}: {
  params: { slug: string; title: string };
}) {
  const post = blogData.find((post) => post.id === params.slug);
  const components = {
    h1: ({ node, ...props }) => (
      <h1 className="text-2xl font-bold mb-4 mt-7" {...props} />
    ),
    h2: ({ node, ...props }) => (
      <h2 className="text-xl font-semibold mb-3 mt-5" {...props} />
    ),
    h3: ({ node, ...props }) => (
      <h3 className="text-lg font-medium mb-2 mt-4" {...props} />
    ),
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  const hashtagColors: { [key: string]: string } = {
    "#poem": "text-blue-500",
    "#research": "text-green-700",
    "#experience": "text-pink-500",
    // Add more hashtags and their corresponding color classes
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-16 pb-[25rem] pt-32 flex justify-center">
        <div className="w-2/5">
          <p
            className={`mb-10 ${
              hashtagColors[post.hashtag] || "text-gray-500"
            }`}
          >
            {" "}
            {post.hashtag}
          </p>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-500 mb-10">{post.date}</p>
          {/* <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}
          <div className="leading-[2.5] font-light ">
            <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
