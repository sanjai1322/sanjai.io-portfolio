import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechMastery from "@/components/TechMastery";
import Projects from "@/components/Projects";
import Studio from "@/components/Studio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-bg-primary min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <TechMastery />
      <Projects />
      <Studio />
      <Testimonials />
      <BlogPreview />
      <Contact />
      <Footer />
    </main>
  );
}
