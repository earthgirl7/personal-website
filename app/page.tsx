import { Suspense } from "react";
import HomeContent from "./components/HomeContent";
import blogData from "./blog/blogData";

export default function Home() {
  return (
    <div className="min-h-screen bg-white py-12 sm:py-24 lg:py-48">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <Suspense fallback={<div>Loading...</div>}>
          <HomeContent blogData={blogData} />
        </Suspense>
      </div>
    </div>
  );
}
