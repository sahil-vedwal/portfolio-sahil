import React from "react";
import { useState, useEffect } from "react";

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    const aboutSection = document.getElementById("about");
    if (aboutSection) observer.observe(aboutSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="relative bg-gradient-to-r from-[#031025] via-[#7a8591] to-[#031025] text-white py-32 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#7a8591]/20 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031025]/50 via-transparent to-[#031025]/30" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header with staggered animation */}
<div className="text-center mb-16">
  <h2
    className={`text-5xl sm:text-7xl font-black bg-gradient-to-r from-cyan-400 via-[#00FFFF] to-cyan-400 bg-clip-text text-transparent mb-6 transition-all duration-1000 ease-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
    }`}
    style={{ 
      fontFamily: "'Orbitron', sans-serif",
      transitionDelay: '0.2s'
    }}
  >
    WHO I'm ??
  </h2>
  
  <div 
    className={`w-24 h-1 bg-gradient-to-r from-cyan-400 via-[#7a8591] to-cyan-400 mx-auto rounded-full transition-all duration-1000 ease-out ${
      isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
    }`}
    style={{ transitionDelay: '0.6s' }}
  />

  {/* Download CV Button */}
  <a
    href="/cv.pdf"
    download="Sahil_Vedwal_CV.pdf"
    className="inline-block mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-[#7a8591] to-cyan-400 text-[#031025] font-bold text-lg shadow-lg hover:scale-105 transform transition-all duration-300"
    style={{ fontFamily: "'Orbitron', sans-serif" }}
  >
    Download CV
  </a>
</div>


        {/* Content with glassmorphism card */}
        <div 
          className={`backdrop-blur-xl bg-gradient-to-br from-[#031025]/40 via-[#7a8591]/10 to-[#031025]/40 border border-[#7a8591]/20 rounded-3xl p-8 sm:p-12 shadow-2xl transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.4s' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
           <div className="space-y-6">
  <h3 
    className={`text-2xl sm:text-3xl font-bold text-white mb-4 transition-all duration-1000 ease-out ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
    }`}
    style={{ 
      fontFamily: "'Orbitron', sans-serif",
      transitionDelay: '0.8s'
    }}
  >
    Hi! I'm <span className="text-cyan-400">SAHIL</span>
  </h3>
  
  <p 
    className={`text-lg text-[#FFFFFF] leading-relaxed transition-all duration-1000 ease-out ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
    }`}
    style={{
      fontFamily: "'Orbitron', sans-serif",
      transitionDelay: "1s",
    }}
  >
   I’m a <span className="text-cyan-400 font-semibold">20-year-old final year student from a small village in Jaipur</span>, 
just trying to survive in this world by doing the things that make me happy. ✨

  </p>

  <p 
    className={`text-lg text-[#FFFFFF] leading-relaxed transition-all duration-1000 ease-out ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
    }`}
    style={{
      fontFamily: "'Orbitron', sans-serif",
      transitionDelay: "1.2s",
    }}
  >
    I’m deeply curious about <span className="text-cyan-400 font-semibold">technology & communication</span>.  
    From coding projects and UI/UX design to simply figuring out how things work — 
    I love exploring and learning. But I’m not just about tech: I’m also an <span className="text-cyan-400">artist</span>, 
    who enjoys drawing, creating art, and sometimes gaming to refresh my mind. 🎨🎮
  </p>

  <p 
    className={`text-lg text-[#FFFFFF] leading-relaxed transition-all duration-1000 ease-out ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
    }`}
    style={{
      fontFamily: "'Orbitron', sans-serif",
      transitionDelay: "1.4s",
    }}
  >
    My long-term goal is simple: <span className="text-cyan-400 font-semibold">earn through what I love doing</span> 
    — turning my interests into my career. Right now, that path is development, 
    where I’ve built projects, solved problems, and grown a lot through academics and beyond. 🚀
  </p>

  <p 
    className={`text-lg text-[#FFFFFF] leading-relaxed transition-all duration-1000 ease-out ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
    }`}
    style={{
      fontFamily: "'Orbitron', sans-serif",
      transitionDelay: "1.6s",
    }}
  >
    Along the way, I’ve honed soft skills like <span className="text-cyan-400">leadership, creativity, and adaptability</span>, 
    which help me connect with people, handle challenges, and keep growing every day.
  </p>

              {/* Skills tags */}
        
            </div>

            {/* Visual element */}
            <div className="relative">
              <div 
                className={`w-80 h-80 mx-auto relative transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-90 rotate-12'
                }`}
                style={{ transitionDelay: '0.6s' }}
              >
                {/* Animated rings */}
                <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-4 border border-[#7a8591]/40 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                <div className="absolute inset-8 border border-cyan-400/20 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
                
                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 bg-gradient-to-br from-[#031025]/60 via-[#7a8591]/30 to-[#031025]/60 rounded-full backdrop-blur-xl flex items-center justify-center border border-cyan-400/20 shadow-lg shadow-cyan-400/10">
                    <div 
                      className="text-4xl font-black text-cyan-400" 
                      style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                      SV
                    </div>
                  </div>
                </div>

                {/* Floating icons */}
                <div className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-br from-[#031025]/80 via-[#7a8591]/40 to-cyan-500/20 rounded-xl backdrop-blur-sm flex items-center justify-center animate-bounce border border-cyan-400/20">
                  <span className="text-cyan-400 text-xl">⚡</span>
                </div>
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-br from-[#031025]/80 via-[#7a8591]/40 to-cyan-500/20 rounded-xl backdrop-blur-sm flex items-center justify-center animate-bounce border border-[#7a8591]/30" style={{ animationDelay: '0.5s' }}>
                  <span className="text-[#7a8591] text-xl">🚀</span>
                </div>
                
                {/* Additional floating elements */}
                <div className="absolute top-1/4 left-4 w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-[#7a8591]/20 rounded-full backdrop-blur-sm animate-pulse border border-cyan-400/10" />
                <div className="absolute bottom-1/4 right-4 w-8 h-8 bg-gradient-to-br from-[#7a8591]/20 to-cyan-400/20 rounded-full backdrop-blur-sm animate-pulse delay-700 border border-[#7a8591]/10" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div 
          className={`flex justify-center mt-12 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '1.6s' }}
        >
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-[#7a8591] rounded-full animate-pulse"
                style={{ 
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '2s'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default About;