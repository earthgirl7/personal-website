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
  
  // Show all blog posts
  const visibleBlogData = blogData;
  
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
          Jesse Schmidt
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
              alt="Profile Picture"
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
                Hi, I&apos;m Jesse.
                <br />
                <br />
                I work at the intersection of psychedelic science, consciousness research, and structured self-experimentation—translating grassroots experimentation with psychoactive tools into rigorous, ethical research frameworks.
                <br />
                <br />
                I&apos;m drawn to paradox: the ever-expanding point between science and spirit, logic and intuition, direct experience and formal knowledge. My work synthesizes these tensions into practice.
                <br />
                <br />
                I studied neuroscience and psychoactive drug research, later earning a master&apos;s in international business. I&apos;ve spoken on psychedelics, AI, and consciousness, and helped build technologies that listen to and reflect the human mind. I&apos;ve lived and worked across 60+ countries, often within intentional communities that shaped how I understand altered states and collective meaning-making.
                <br />
                <br />
                My experiments are varied: tryptamine biochemistry, privacy-preserving voice analysis, peptide protocols for neuroadaptation, embodied investigations into biomechanics and physiology. Right now I&apos;m focused on building bridges between informal self-experimentation and formal research—developing protocols and datasets that make these explorations legible to academic and clinical institutions without stripping them of nuance.
                <br />
                <br />
                I thrive in intentional community and collaborative research environments. At heart, I&apos;m interested in how we design systems—scientific, technological, and social—that help humans understand themselves more clearly.
                <br />
                <br />
                Each of these is part of my larger inquiry into how the human experiment can be made more beautiful, transparent, and awake.
              </div>
            ) : (
              <div className="space-y-4 mt-6 lg:mt-0">
                {visibleBlogData.length === 0 ? (
                  <p className="text-base font-light text-gray-500">Coming soon</p>
                ) : (
                  visibleBlogData.map((post) => (
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
                  ))
                )}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

