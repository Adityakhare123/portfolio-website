import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505]">
      <SmoothScroll />
      <CustomCursor />

      <div className="noise-overlay" />
      <div className="scanline" />

      <div className="relative z-10">
        <Navbar />
        <Hero />

        <div className="marquee">
          <div className="marquee-track">
            <span>PYTHON</span>
            <span>DATA ENGINEERING</span>
            <span>AI / ML</span>
            <span>OCR</span>
            <span>OPENCV</span>
            <span>REACT</span>
            <span>SQL</span>
            <span>APIS</span>
          </div>
          <div className="marquee-track">
            <span>PYTHON</span>
            <span>DATA ENGINEERING</span>
            <span>AI / ML</span>
            <span>OCR</span>
            <span>OPENCV</span>
            <span>REACT</span>
            <span>SQL</span>
            <span>APIS</span>
          </div>
        </div>

        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;