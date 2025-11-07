"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import SocialIcons from "./SocialIcons";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogPost {
  id: string;
  hashtag: string;
  title: string;
  date: string;
  content: string;
}

interface HomeContentProps {
  blogData: BlogPost[];
}

export default function HomeContent({ blogData }: HomeContentProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const postParam = searchParams.get("post");
  
  // Filter to only show the travel blog post
  const visibleBlogData = blogData.filter(post => post.id === "7");
  
  const [activeTab, setActiveTab] = useState<"about" | "blog">(
    tabParam === "blog" ? "blog" : "about"
  );
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const currentTab = searchParams.get("tab");
    if (currentTab === "blog" || currentTab === "about") {
      setActiveTab(currentTab);
    }
    
    const postId = searchParams.get("post");
    if (postId) {
      const post = visibleBlogData.find(p => p.id === postId);
      setSelectedPost(post || null);
    } else {
      setSelectedPost(null);
    }
  }, [searchParams, visibleBlogData]);

  const handleTabChange = (tab: "about" | "blog") => {
    setActiveTab(tab);
    setSelectedPost(null);
    router.push(`?tab=${tab}`, { scroll: false });
  };
  
  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    router.push(`?tab=blog&post=${post.id}`, { scroll: false });
  };
  
  const handleBackToBlog = () => {
    setSelectedPost(null);
    router.push(`?tab=blog`, { scroll: false });
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 lg:gap-12">
      {/* Left Column - Name, Social Icons, and Navigation */}
      <div className="flex-none w-full lg:w-auto lg:self-start">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          Anosha Rahim
        </h1>
        
        <SocialIcons />
        
        {/* Navigation Tabs */}
        <div className="flex gap-6 mt-12 mb-6 lg:flex-col lg:gap-2 lg:mb-0">
          <button
            onClick={() => handleTabChange("about")}
            className={`text-md text-left ${
              activeTab === "about"
                ? "text-gray-900 font-semibold"
                : "text-gray-500 hover:text-gray-900 font-light"
            }`}
          >
            About
          </button>
          <button
            onClick={() => handleTabChange("blog")}
            className={`text-md text-left ${
              activeTab === "blog"
                ? "text-gray-900  font-semibold"
                : "text-gray-500 hover:text-gray-900 font-light"
            }`}
          >
            Blog
          </button>
        </div>
      </div>
      
      {selectedPost ? (
        /* Blog Post View - Spans both middle and right columns */
        <div className="flex-[2.5] w-full lg:w-auto lg:pr-16">
          <h1 className="text-3xl font-light text-gray-900 mb-2">
            {selectedPost.title}
          </h1>
          <p className="text-sm font-light text-gray-500 mb-8">
            {selectedPost.date}
          </p>
          <div className="text-base font-light leading-relaxed text-gray-900 markdown">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {selectedPost.content}
            </ReactMarkdown>
          </div>
          <button
            onClick={handleBackToBlog}
            className="text-sm font-light text-gray-500 hover:text-gray-900 mt-24"
          >
            ← Back to blog list
          </button>
        </div>
      ) : (
        <>
          {/* Middle Column - Portrait Image */}
          <div className={`flex-[1] w-full lg:w-auto lg:self-start ${
            activeTab === "blog" ? "hidden lg:block" : ""
          }`}>
            <Image
              src="/portrait.png"
              alt="Anosha Rahim"
              width={1600}
              height={1000}
              className="w-full h-auto"
              priority
            />
          </div>
          
          {/* Right Column - Dynamic Content */}
          <div className="flex-[1.5] w-full lg:w-auto lg:pr-16">
            {activeTab === "about" ? (
              <div className="text-base font-light leading-relaxed text-gray-900">
                I am an AI researcher at{" "}
                <a
                  href="https://springtail.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-orange-500 underline"
                >
                  Springtail
                </a>
                , where my mission is to unlock scientific reasoning in machines.
                <br />
                <br />
                Previously, I built knowledge graphs for drug discovery at{" "}
                <a
                  href="https://enveda.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-orange-500 underline"
                >
                  Enveda
                </a>{" "}
                and enhanced conversational AI at Zoom. I also led engineering for a
                startup developing privacy-focused communication tooling.
                <br />
                <br />
                In 2022, I graduated from Minerva University with a computer science
                degree, focusing specifically on AI and machine learning. During my
                undergrad, I lived in five countries as part of Minerva&apos;s{" "}
                <a
                  href="https://www.minervaproject.com/insights/seven-principles-for-designing-experiential-learning-journeys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-orange-500 underline"
                >
                  global rotation
                </a>{" "}
                program.
                <br />
                <br />
                I now live in San Francisco.
              </div>
            ) : (
              <div className="space-y-4 mt-6 lg:mt-0">
                {visibleBlogData.map((post) => (
                  <button
                    key={post.id}
                    onClick={() => handlePostClick(post)}
                    className="flex justify-between items-baseline group w-full text-left"
                  >
                    <span className="text-base font-light text-gray-900 group-hover:font-semibold flex-1 mr-4">
                      {post.title}
                    </span>
                    <span className="text-xs font-light text-gray-500 whitespace-nowrap flex-shrink-0 group-hover:font-semibold">
                      {post.date}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

