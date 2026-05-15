import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink, MessageSquare, Terminal, Zap } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto relative z-10">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative p-1 md:p-1 rounded-[3rem] bg-gradient-to-br from-blue-500/20 via-transparent to-emerald-500/20"
      >
        <div className="bg-zinc-950/90 border border-white/5 p-8 md:p-16 rounded-[2.9rem] backdrop-blur-3xl overflow-hidden relative">
          
          {/* Background Decorative Elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/10 blur-[100px]" />

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Available for New Projects</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
              Let's Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Verse.</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Transforming complex ideas into fluid digital experiences. Whether it's AI integration or a full-stack deployment, let's connect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email Card */}
            <motion.a 
              href="mailto:moazzam.developer@gmail.com"
              whileHover={{ scale: 1.02 }}
              className="group flex items-center gap-5 p-6 bg-white/[0.03] border border-white/5 rounded-3xl hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="p-4 bg-blue-500/10 rounded-2xl group-hover:bg-blue-500 group-hover:text-black transition-colors">
                <Mail className="w-6 h-6 text-blue-400 group-hover:text-white" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-500 uppercase font-mono tracking-widest mb-1">Direct Email</p>
                <p className="text-white text-sm font-bold break-all">moazzam.developer@gmail.com</p>
              </div>
            </motion.a>

            {/* Phone/WhatsApp Card */}
            <motion.a 
              href="https://wa.me/923258665664"
              target="_blank"
              whileHover={{ scale: 1.02 }}
              className="group flex items-center gap-5 p-6 bg-white/[0.03] border border-white/5 rounded-3xl hover:border-emerald-500/30 transition-all duration-500"
            >
              <div className="p-4 bg-emerald-500/10 rounded-2xl group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                <Phone className="w-6 h-6 text-emerald-400 group-hover:text-white" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-500 uppercase font-mono tracking-widest mb-1">WhatsApp / Call</p>
                <p className="text-white text-sm font-bold">+92 325 8665664</p>
              </div>
            </motion.a>
          </div>

          {/* Primary Action: Fiverr */}
          <motion.a 
            href="https://www.fiverr.com/moazzam_dev" // Replace with your actual Fiverr link
            target="_blank"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 w-full py-5 bg-white text-black font-black uppercase text-xs tracking-[0.2em] rounded-2xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-3"
          >
            <Zap className="w-4 h-4 fill-current" />
            Hire me on Fiverr
            <ExternalLink className="w-4 h-4" />
          </motion.a>
          
          <div className="mt-12 flex items-center justify-center gap-8 border-t border-white/5 pt-8">
            <div className="flex flex-col items-center">
               <span className="text-white font-black text-lg">24/7</span>
               <span className="text-[9px] text-slate-600 uppercase font-mono">Response</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div className="flex flex-col items-center">
               <span className="text-white font-black text-lg">FAST</span>
               <span className="text-[9px] text-slate-600 uppercase font-mono">Delivery</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-10 flex flex-col items-center gap-2">
        <p className="text-[10px] text-slate-600 uppercase tracking-[0.5em] font-mono flex items-center gap-2">
          <Terminal size={12} /> Code. Create. Connect.
        </p>
      </div>
    </section>
  );
};

export default Contact;