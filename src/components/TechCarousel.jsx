import React from "react";
import { 
  SiReact, SiPython, SiTailwindcss, SiJavascript, 
  SiTensorflow, SiFastapi, SiGithub, SiMysql, SiVite, SiFramer
} from "react-icons/si";

const techStack = [
  { name: "React", icon: <SiReact size={50} />, color: "text-[#61DAFB]" },
  { name: "Python", icon: <SiPython size={50} />, color: "text-[#FFD43B]" },
  { name: "Tailwind", icon: <SiTailwindcss size={50} />, color: "text-[#06B6D4]" },
  { name: "JavaScript", icon: <SiJavascript size={50} />, color: "text-[#F7DF1E]" },
  { name: "TensorFlow", icon: <SiTensorflow size={50} />, color: "text-[#FF6F00]" },
  { name: "FastAPI", icon: <SiFastapi size={50} />, color: "text-[#009688]" },
  { name: "Vite", icon: <SiVite size={50} />, color: "text-[#646CFF]" },
  { name: "Framer", icon: <SiFramer size={50} />, color: "text-white" },
];

const TechCarousel = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-[0.3] [perspective:2500px]">
      <style>{`
        @keyframes auto-rotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        .animate-auto-rotate {
          animation: auto-rotate 40s linear infinite;
        }
      `}</style>
      
      {/* Central Glow Effect */}
      <div className="absolute w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full -z-10" />

      <div 
        className="relative w-full h-full flex items-center justify-center animate-auto-rotate"
        style={{ transformStyle: "preserve-3d" }}
      >
        {techStack.map((tech, index) => {
          const rotation = index * (360 / techStack.length);
          return (
            <div
              key={tech.name}
              className="absolute w-36 h-48 bg-zinc-950/80 border border-white/10 rounded-[2rem] flex flex-col items-center justify-center backdrop-blur-xl shadow-2xl group transition-all duration-700"
              style={{
                transform: `rotateY(${rotation}deg) translateZ(550px)`, // Bada radius for cinematic feel
                backfaceVisibility: "hidden",
              }}
            >
              {/* Icon with Dynamic Shadow */}
              <div className={`mb-4 transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] ${tech.color}`}>
                {tech.icon}
              </div>
              
              <span className={`font-mono text-[9px] tracking-[0.4em] uppercase font-black opacity-40 group-hover:opacity-100 transition-opacity ${tech.color}`}>
                {tech.name}
              </span>

              {/* Decorative Scanline effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent opacity-50" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechCarousel;