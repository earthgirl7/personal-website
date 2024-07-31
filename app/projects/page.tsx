import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semi-light">PROJECTS</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
