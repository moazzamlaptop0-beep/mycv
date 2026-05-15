import React from "react";
import { motion } from "framer-motion";
import { Download, Menu } from "lucide-react";

const Navbar = () => {
  // Resume handle function (optional, direct link is also fine)
  const handleDownload = () => {
    // Ye line console mein check karne ke liye hai
    console.log("Downloading Resume...");
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 px-6 py-5 flex justify-between items-center backdrop-blur-xl bg-[#030303]/60 border-b border-white/10"
    >
      {/* Brand Logo */}
      <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 tracking-tighter cursor-pointer hover:opacity-80 transition-opacity">
        DV.
      </div>
      
      {/* Desktop Links */}
      <div className="hidden md:flex gap-10 text-[11px] font-mono uppercase tracking-widest text-slate-400">
        {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={item === 'Home' ? '#' : `#${item.toLowerCase()}`} 
            className="hover:text-emerald-400 transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        {/* Functional Resume Button */}
        <a 
          href="/resume.pdf" target="_blank" rel="noreferrer" // 👈 File ka path jo public folder mein hogi
          download="Moazzam_Resume.pdf" // 👈 Download hone par file ka naam
          className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-white text-black text-[10px] font-bold uppercase rounded-xl hover:bg-blue-400 hover:text-white hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] cursor-pointer"
          onClick={handleDownload}
        >
          <Download size={14} /> Resume
        </a>
        
        {/* Mobile Menu Icon */}
        <button className="md:hidden text-slate-400 hover:text-white transition-colors">
          <Menu size={24} />
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;