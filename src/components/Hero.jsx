import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import TechCarousel from "./TechCarousel";
import Scene3D from "./Scene3D";

const Typewriter = ({ text, delay = 70 }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center relative px-6 pt-10 pb-10 overflow-hidden bg-[#030303]">
      
      {/* 1. 3D Background Layer */}
      <Scene3D />

      {/* 2. Interface Content */}
      <div className="relative z-20 w-full flex flex-col items-center">
        
        {/* TechCarousel Layer */}
        <div className="w-full mb-12">
          <TechCarousel />
        </div>

        {/* Main Hero Content */}
        <div className="max-w-4xl text-center mt-10 md:mt-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-mono mb-8 tracking-[0.2em] uppercase"
          >
            <Code2 className="w-3 h-3" />
            <Typewriter text="AI-Augmented Web Developer" delay={50} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none mb-6">
              DEV <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">VERSE</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed italic">
              Building <span className="text-white border-b-2 border-emerald-500/50">Modern Web Apps</span> with AI Efficiency & Clean Design.
            </p>
          </motion.div>
          
          {/* Visual Divider (Optional: Adds a professional touch since buttons are gone) */}
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="w-24 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-auto mt-12"
          />
        </div>
      </div>

      {/* 3. Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#030303] via-[#030303]/80 to-transparent z-40 pointer-events-none" />
    </section>
  );
};

export default Hero;