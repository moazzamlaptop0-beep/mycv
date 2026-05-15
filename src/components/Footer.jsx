import React from 'react';
// Lucide ko directly import karne ke bajaye hum * as Lucide use karenge
// taake export mismatch ka masla hi khatam ho jaye.
import * as Lucide from "lucide-react"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Yahan hum icons ko safely extract kar rahe hain
  const GithubIcon = Lucide.Github || Lucide.Github || Lucide.Code2;
  const LinkedinIcon = Lucide.Linkedin || Lucide.User;
  const MailIcon = Lucide.Mail || Lucide.Send;
  const ShieldCheckIcon = Lucide.ShieldCheck || Lucide.Check;
  const CpuIcon = Lucide.Cpu || Lucide.Activity;
  const ArrowUpRightIcon = Lucide.ArrowUpRight || Lucide.ArrowUp;

  return (
    <footer className="relative py-16 px-6 border-t border-white/5 bg-[#030303] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-emerald-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-lg font-black text-xl italic">
                V
              </div>
              <h2 className="text-2xl font-black text-white tracking-tighter uppercase">Dev Verse</h2>
            </div>
            <p className="max-w-xs text-sm text-slate-500 leading-relaxed font-medium">
              Architecting the next generation of intelligent web experiences and automated infrastructures.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div className="space-y-4">
              <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">Navigation</p>
              <ul className="space-y-2 text-sm font-bold text-slate-400">
                <li className="hover:text-white cursor-pointer transition-colors">Intelligence Hub</li>
                <li className="hover:text-white cursor-pointer transition-colors">Tech Stack</li>
                <li className="hover:text-white cursor-pointer transition-colors">Work History</li>
              </ul>
            </div>

            <div className="space-y-4">
              <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">Social Systems</p>
              <div className="flex gap-4">
                <a href="https://github.com/moazzamlaptop0-beep" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <GithubIcon size={20} />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <LinkedinIcon size={20} />
                </a>
                <a href="mailto:moazzam.developer@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                  <MailIcon size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 font-mono">
          <div className="flex items-center gap-6 text-[10px] text-slate-500 uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <ShieldCheckIcon size={12} className="text-emerald-500" /> System: Stable
            </span>
            <span className="flex items-center gap-2">
              <CpuIcon size={12} className="text-blue-500" /> Latency: 24ms
            </span>
          </div>

          <p className="text-[10px] text-slate-600 uppercase tracking-widest">
            © {currentYear} Dev Verse | Built by <span className="text-white">Moazzam</span>
          </p>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-[10px] text-white/40 hover:text-white uppercase tracking-widest transition-all group"
          >
            Back to Top <ArrowUpRightIcon size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;