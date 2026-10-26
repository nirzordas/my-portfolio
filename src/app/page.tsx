import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ExperienceEducation from "@/components/ExperienceEducation";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <ExperienceEducation />
        <Certificates />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
