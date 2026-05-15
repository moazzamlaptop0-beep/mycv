import React from "react";
// FIX: Named import use karein curly braces ke saath
import { GitHubCalendar } from "react-github-calendar"; 
import { motion } from "framer-motion";
import { GitBranch, Activity, Terminal } from "lucide-react";

const GithubStats = () => {
  const explicitTheme = {
    light: ['#09090b', '#064e3b', '#065f46', '#10b981', '#34d399'],
    dark: ['#09090b', '#064e3b', '#065f46', '#10b981', '#34d399'],
  };

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="p-10 md:p-14 rounded-[3rem] bg-zinc-950/40 border border-white/10 backdrop-blur-3xl relative overflow-hidden"
      >
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-emerald-500/5 blur-[100px] -z-10" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-emerald-400 font-mono text-[10px] tracking-[0.4em] uppercase">
              <Terminal className="w-4 h-4" />
              <span>System Integrity: Active</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Commit <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Consistency.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl">
            <Activity className="w-5 h-5 text-emerald-500 animate-pulse" />
            <div className="text-left">
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Live Feed</p>
              <p className="text-xs font-bold text-white">@moazzamlaptop0-beep</p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-emerald-500/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative overflow-x-auto p-8 bg-black/40 rounded-[2rem] border border-white/5 shadow-inner custom-scrollbar">
            <div className="min-w-[800px] flex justify-center"> 
              {/* Component name yahan fix hai */}
              <GitHubCalendar 
                username="moazzamlaptop0-beep"
                blockSize={13}
                blockMargin={6}
                theme={explicitTheme}
                fontSize={14}
                colorScheme="dark"
                loadingFallback={<div className="text-emerald-500 font-mono animate-pulse">Synchronizing with GitHub...</div>}
              />
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex items-center justify-center gap-2 text-slate-600 font-mono text-[9px] uppercase tracking-[0.3em]">
          <GitBranch size={12} />
          <span>Real-time development activity synchronized via GitHub API</span>
        </div>
      </motion.div>
    </section>
  );
};

export default GithubStats;