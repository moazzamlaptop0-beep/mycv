import React from "react";
import { motion } from "framer-motion";
import { Bot, DatabaseZap, Binary, ArrowRight, Beaker, ExternalLink, ShoppingBag, Terminal, Activity } from "lucide-react";

const projectHub = [
  {
    title: "AI Skin Disease Detection",
    status: "FINAL YEAR PROJECT",
    type: "Deep Learning (CNN)",
    desc: "A medical-grade AI system using Convolutional Neural Networks to identify skin pathologies and recommend nearby specialists.",
    tech: ["TensorFlow", "CNN", "Python", "React", "Node.js"],
    bgGradient: "from-blue-500/10 via-transparent to-transparent",
    icon: <Bot className="w-8 h-8 text-blue-400" />,
    dataVisual: (
      <div className="flex flex-col gap-1.5 opacity-50 w-20">
        <div className="w-full h-1 bg-blue-500/40 rounded-full animate-pulse" />
        <div className="w-3/4 h-1 bg-blue-400/20 rounded-full" />
      </div>
    ),
    color: "hover:border-blue-500/30 shadow-blue-500/5",
    github: "https://github.com/moazzamlaptop0-beep/FYP-FrontEnd"
  },
  {
    title: "Automated IVR & Dashboard",
    status: "DEVOPS INTERNSHIP",
    type: "Backend Automation",
    desc: "Engineered an automated IVR system and a custom React Flow monitoring dashboard for real-time visualization of backend services at Ascend BPO.",
    tech: ["React Flow", "Node.js", "API", "DevOps"],
    bgGradient: "from-orange-500/10 via-transparent to-transparent",
    icon: <Activity className="w-8 h-8 text-orange-400" />,
    dataVisual: (
      <div className="flex gap-1 items-center opacity-50 h-4">
        <div className="w-2 h-2 bg-orange-500 rounded-full animate-ping" />
        <div className="w-8 h-[2px] bg-orange-500/30" />
        <div className="w-2 h-2 bg-orange-500/50 rounded-full" />
      </div>
    ),
    color: "hover:border-orange-500/30 shadow-orange-500/5",
    github: "https://github.com/moazzamlaptop0-beep"
  },
  {
    title: "Filo Clone - Shopify Store",
    status: "PRODUCTION UI",
    type: "E-Commerce Architecture",
    desc: "A premium Shopify-inspired storefront focusing on high-performance rendering, fluid cart transitions, and modern UI/UX.",
    tech: ["React", "Vite", "Framer Motion", "Tailwind CSS"],
    bgGradient: "from-purple-500/10 via-transparent to-transparent",
    icon: <ShoppingBag className="w-8 h-8 text-purple-400" />,
    dataVisual: (
      <div className="flex gap-1 items-end h-4 opacity-50">
        {[2, 4, 3, 5].map((h, i) => (
          <div key={i} className={`w-1 bg-purple-500/40 rounded-full animate-bounce`} style={{ height: `${h*4}px`, animationDelay: `${i*0.1}s` }} />
        ))}
      </div>
    ),
    color: "hover:border-purple-500/30 shadow-purple-500/5",
    github: "https://github.com/moazzamlaptop0-beep/filo-clone-react",
    live: "https://filo-clone-react.vercel.app/"
  },
  {
    title: "Amazon Sales Analytics",
    status: "DATA ANALYSIS",
    type: "ML & Sentiment Analysis",
    desc: "Utilizing matrix calculations and Scikit-Learn for deep sentiment mining and rating prediction on large-scale Amazon datasets.",
    tech: ["NumPy", "Scikit-Learn", "Pandas", "Matplotlib"],
    bgGradient: "from-emerald-500/10 via-transparent to-transparent",
    icon: <DatabaseZap className="w-8 h-8 text-emerald-400" />,
    dataVisual: (
      <div className="flex items-center gap-2 opacity-50">
        <div className="w-3 h-3 rounded-full border-2 border-emerald-500 animate-ping" />
        <span className="text-[8px] font-mono text-emerald-400">PROCESSING</span>
      </div>
    ),
    color: "hover:border-emerald-500/30 shadow-emerald-500/5",
    github: "https://github.com/moazzamlaptop0-beep/amazon"
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-16 p-10 border border-white/10 rounded-[3rem] bg-white/[0.02] backdrop-blur-3xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] -z-10" />
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-emerald-500 font-mono text-[10px] tracking-[0.4em] uppercase">
              <Terminal className="w-4 h-4" />
              <span>Project Repository // 2026_V1</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
              Intelligence <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">Hub.</span>
            </h2>
          </div>

          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://github.com/moazzamlaptop0-beep" 
            target="_blank" 
            className="group flex items-center gap-4 px-10 py-5 rounded-2xl border border-white/10 bg-white/5 text-white font-bold hover:bg-white hover:text-black transition-all duration-500"
          >
            <span className="text-xs uppercase tracking-widest">Explore All Repos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </motion.a>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projectHub.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative rounded-[3rem] border border-white/5 bg-zinc-950/40 overflow-hidden group transition-all duration-500 ${project.color}`}
          >
            <div className={`relative h-56 overflow-hidden bg-zinc-900/20 bg-gradient-to-br ${project.bgGradient}`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.02),transparent)]" />
              
              <div className="absolute inset-8 flex justify-between items-start z-20">
                <div className="p-5 bg-black/40 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
                <div className="flex flex-col items-end gap-3">
                  <span className="text-[9px] font-mono font-black text-white/40 bg-white/5 px-4 py-2 rounded-lg border border-white/10 tracking-widest">
                    {project.status}
                  </span>
                  {project.dataVisual}
                </div>
              </div>
            </div>

            <div className="p-10 pt-6 relative z-30">
              <div className="mb-6">
                <h3 className="text-3xl font-black text-white mb-2 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-[10px] font-mono">
                  <span className="text-blue-500 font-bold uppercase tracking-widest">{project.type}</span>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-8 min-h-[3rem]">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-10 pt-6 border-t border-white/5">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white/[0.03] border border-white/5 rounded-lg text-[9px] font-mono text-slate-500 group-hover:text-white group-hover:border-white/20 transition-all">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a 
                  href={project.github}
                  target="_blank"
                  className="flex-1 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
                >
                  Source <ExternalLink size={12} />
                </a>
                {project.live && (
                  <a 
                    href={project.live}
                    target="_blank"
                    className="flex-1 py-4 bg-blue-600 rounded-xl text-white text-[10px] font-bold uppercase tracking-widest hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
                  >
                    Launch <ArrowRight size={12} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;