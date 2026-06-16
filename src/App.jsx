import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="noise-overlay" />

      <div className="fixed left-[-120px] top-[120px] z-0 h-[340px] w-[340px] rounded-full bg-cyan-400/20 blur-[120px]" />
      <div className="fixed right-[-140px] top-[280px] z-0 h-[380px] w-[380px] rounded-full bg-purple-500/20 blur-[130px]" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
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