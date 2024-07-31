import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-light font-sans">Hi, my name is</p>
          <h1 className="text-4xl font-sans font-semi-light  ">ANOSHA RAHIM</h1>
          <p className="text-xl font-light  font-sans">
            and I am an AI engineer
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
