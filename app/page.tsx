import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Publications from "@/components/Publications";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Publications />
      <Contact />
      <Footer />
    </main>
  );
}