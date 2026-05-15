import React from "react";
import { motion } from "framer-motion";
import { Quote, Briefcase, Workflow, CheckCircle2, Terminal } from "lucide-react";

const Testimonials = () => {
  const experiences = [
    {
      company: "Ascend BPO Services",
      role: "DevOps Intern",
      period: "Internship Period",
      impact: "Developed an automated IVR System with a custom backend demo. Engineered a complex monitoring dashboard using React Flow for real-time visualization.",
      feedback: "Moazzam and his team's implementation of the IVR system and the React Flow dashboard significantly streamlined our backend demonstrations.",
      author: "DevOps Team Lead / Supervisor"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="flex flex-col items-center mb-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-emerald-500 font-mono text-[10px] mb-4 tracking-[0.4em] uppercase"
        >
          <Terminal className="w-4 h-4" />
          <span>Professional Validation // Archive_01</span>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black text-white tracking-tighter"
        >
          Industry <span className="text-emerald-500 italic">Impact.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Professional Experience Card */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2 p-10 rounded-[3rem] bg-zinc-950/40 border border-white/10 backdrop-blur-3xl relative overflow-hidden group shadow-2xl"
        >
          {/* Subtle Background Icon */}
          <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700">
            <Workflow className="w-64 h-64 text-emerald-500" />
          </div>

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-3xl font-black text-white mb-2">{experiences[0].company}</h3>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-emerald-500/10 rounded-lg text-emerald-500 font-mono text-[9px] uppercase tracking-widest border border-emerald-500/20">
                    {experiences[0].role}
                  </span>
                  <span className="text-white/20 font-mono text-[9px]">// {experiences[0].period}</span>
                </div>
              </div>
              <Briefcase className="w-6 h-6 text-emerald-500/50" />
            </div>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <p className="text-slate-300 text-base leading-relaxed">
                  Developed an <span className="text-white font-bold">Automated IVR System</span> with a custom-engineered backend for internal operations.
                </p>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/20 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-slate-300 text-base leading-relaxed">
                  Architected a real-time <span className="text-blue-400 font-bold italic">React Flow Dashboard</span> to visualize complex backend metrics.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
              {["DevOps Infrastructure", "React Flow", "Backend Architecture", "Workflow Automation"].map((t) => (
                <span key={t} className="px-3 py-1.5 bg-white/5 rounded-lg text-[9px] font-mono text-slate-400 border border-white/5 uppercase">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* High-Impact Testimonial Quote */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-10 rounded-[3rem] bg-emerald-500 flex flex-col justify-between text-black relative overflow-hidden group shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)]"
        >
          {/* Large Decorative Quote Icon */}
          <Quote className="absolute top-[-20px] left-[-10px] w-40 h-40 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
          
          <div className="relative z-10">
             <div className="w-10 h-1 bg-black/20 rounded-full mb-8" />
             <p className="text-2xl font-black italic leading-[1.2] tracking-tighter">
              "{experiences[0].feedback}"
            </p>
          </div>

          <div className="relative z-10 pt-6 mt-8 border-t border-black/10">
            <p className="font-black uppercase text-[10px] tracking-[0.3em] mb-1">{experiences[0].author}</p>
            <p className="text-xs font-bold opacity-60 uppercase tracking-widest">Ascend BPO Services</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;