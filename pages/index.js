import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <div className="max-w-[90%] mx-auto flex flex-col my-[2%]">
        {/* Navbar */}
        <Navbar />
        {/* Hero */}
        <Hero />
        {/* Skills */}
        <Skills />
        {/* Experience */}
        <Experience />
        {/* Projects */}
        <Projects />
        {/* Contact me */}
        <Contact />
      </div>
    </>
  );
}
