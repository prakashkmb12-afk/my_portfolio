import Navbar from "src/components/Navbar";
import InteractiveBackground from "src/components/visual/InteractiveBackground";
import Hero from "src/components/sections/Hero";
import About from "src/components/sections/About";
import Skills from "src/components/sections/Skills";
import Projects from "src/components/sections/Projects";
import Contact from "src/components/sections/Contact";
import Footer from "src/components/Footer";

export default function Home() {
  return (
    <>
      {/* 3D and Canvas Background Layer */}
      <InteractiveBackground />

      {/* Floating Header Navigation */}
      <Navbar />

      {/* Main Sections Wrapper */}
      <main className="relative flex flex-col w-full min-h-screen">
        {/* Hero Section */}
        <Hero />
        
        {/* About Me Section */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Featured Projects Grid */}
        <Projects />

        {/* Contact Form Section */}
        <Contact />
      </main>

      {/* Bottom Footer Section */}
      <Footer />
    </>
  );
}
