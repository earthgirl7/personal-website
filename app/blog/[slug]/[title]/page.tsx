// A single blog page
import React from "react";
import blogData from "../../blogData";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function BlogPost({
  params,
}: {
  params: { slug: string; title: string };
}) {
  const post = blogData.find((post) => post.id === params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-16 flex justify-center">
        <div className="w-2/5">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-500 mb-4">{post.date}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
