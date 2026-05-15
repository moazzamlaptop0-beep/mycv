import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout, Database, Brain, Terminal, Sparkles, ShieldCheck } from "lucide-react";

const About = () => {
  const [active, setActive] = useState(0);

  const skills = [
    { 
      title: "Frontend Design", 
      desc: "Creating immersive, high-fidelity interfaces with React and Framer Motion. I focus on motion-driven storytelling and pixel-perfect responsiveness.",
      icon: <Layout className="w-8 h-8 text-blue-400" />,
      bgClass: "bg-blue-premium",
      tag: "UI/UX & 3D Interaction"
    },
    { 
      title: "Backend & DevOps", 
      desc: "Building scalable architectures and automated pipelines. Experienced in real-time monitoring dashboards and secure API integration.",
      icon: <Database className="w-8 h-8 text-emerald-400" />,
      bgClass: "bg-emerald-premium",
      tag: "Node, DevOps & Cloud"
    },
    { 
      title: "AI & Intelligence", 
      desc: "Developed AI-powered systems like Skin Disease Detection using CNNs and integrated Gemini API for sophisticated conversational agents.",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      bgClass: "bg-purple-premium",
      tag: "ML & Generative AI"
    }
  ];

  return (
    <section className="pb-32 pt-10 px-6 relative z-10 max-w-7xl mx-auto overflow-hidden">
      <style>{`
        @keyframes flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .bg-blue-premium { background: linear-gradient(-45deg, #020617, #1e3a8a, #3b82f6); background-size: 400% 400%; animation: flow 10s ease infinite; }
        .bg-emerald-premium { background: linear-gradient(-45deg, #020617, #064e3b, #10b981); background-size: 400% 400%; animation: flow 10s ease infinite; }
        .bg-purple-premium { background: linear-gradient(-45deg, #020617, #4c1d95, #a855f7); background-size: 400% 400%; animation: flow 10s ease infinite; }
      `}</style>

      {/* Intro Section */}
      <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            className="flex items-center gap-2 text-emerald-500 font-mono text-xs mb-4"
          >
            <Terminal className="w-4 h-4" />
            <span className="tracking-[0.4em] uppercase">Tech Stack & Vision</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight">
            Engineering with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">Precision.</span>
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-2xl"
        >
          <Sparkles className="absolute -top-4 -right-4 text-emerald-400 w-8 h-8 opacity-50" />
          <p className="text-slate-300 text-lg leading-relaxed font-medium">
            Building the next generation of web applications where <span className="text-white underline decoration-blue-500/50">intelligence meets interface</span>. 
            I bridge the gap between complex backend logic and immersive frontend experiences, utilizing AI to speed up deployment and enhance user interaction.
          </p>
        </motion.div>
      </div>

      {/* Interactive Cards */}
      <div className="flex flex-col md:flex-row gap-6 h-[600px] w-full">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            layout
            onMouseEnter={() => setActive(index)}
            className={`relative cursor-pointer overflow-hidden rounded-[3rem] border border-white/5 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
              active === index ? "flex-[4] shadow-[0_0_50px_rgba(0,0,0,0.5)]" : "flex-1"
            } ${skill.bgClass}`}
          >
            {/* Dark Overlay */}
            <div className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${active === index ? "opacity-30" : "opacity-80"}`} />

            <div className="relative z-10 h-full flex flex-col justify-between p-10">
              <div className="flex items-center justify-between">
                <div className="p-4 bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10">
                  {skill.icon}
                </div>
                {active === index && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    className="flex items-center gap-2 text-[10px] font-mono font-bold text-white bg-white/10 px-4 py-2 rounded-full border border-white/20 uppercase tracking-widest"
                  >
                    <ShieldCheck size={12} /> {skill.tag}
                  </motion.div>
                )}
              </div>

              <div className="flex flex-col gap-4">
                <motion.h3 
                  layout="position" 
                  className={`font-black text-white tracking-tighter ${
                    active === index ? "text-4xl md:text-5xl" : "text-xl md:rotate-[-90deg] md:whitespace-nowrap md:mb-12"
                  }`}
                >
                  {skill.title}
                </motion.h3>

                <AnimatePresence>
                  {active === index && (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-white/70 text-lg max-w-lg leading-relaxed"
                    >
                      {skill.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;