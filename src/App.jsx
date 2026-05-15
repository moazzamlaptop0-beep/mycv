import Navbar from "./components/Navbar"; 
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import GithubStats from "./components/GithubStats"; // Live GitHub Activity
import Testimonials from "./components/Testimonials"; // Industry Experience
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#030303] text-slate-200 overflow-x-hidden relative scroll-smooth font-sans">
      <Navbar /> 
      
      {/* Background Ambient Glows - Visual Depth */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px]" />
      </div>

      {/* Intro Section - Moazzam, AI-Augmented Developer */}
      <Hero />
      
      {/* Skills & Expertise Section */}
      <div id="about" className="pt-20">
        <About />
      </div>
      
      {/* Featured Projects - AI & Data Science Hub */}
      <div id="projects" className="pt-20">
        <Projects />
      </div>

      {/* GitHub Calendar - Proving Daily Development Efforts */}
      <div id="github" className="pt-10">
        <GithubStats />
      </div>

      {/* Professional Experience - Ascend BPO DevOps Internship */}
      <div id="experience" className="pt-20">
        <Testimonials />
      </div>
      
      {/* Contact Section - Ready to Collaborate */}
      <div id="contact" className="pt-20">
        <Contact />
      </div>

      {/* Branding & Social Links */}
      <Footer />
    </div>
  );
}

export default App;