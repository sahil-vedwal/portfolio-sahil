import { useEffect, useState } from "react";
import sahilImg from "../assets/sahil3.png";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.3);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#031025] via-[#7a8591] to-[#031025] w-full min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-[#7a8591]/8 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <section className="relative flex flex-col lg:flex-row items-center justify-between px-6 py-20 w-full min-h-screen max-w-7xl mx-auto">
        {/* Left Side - Text */}
        <div
          className="w-full lg:w-1/2 space-y-8 z-10 sm:pl-4 lg:pl-8 transition-all duration-700"
          style={{ transform: `translateY(${offsetY * 0.3}px)` }}
        >
          {/* Greeting */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              textShadow: "2px 2px 10px rgba(0,0,0,0.6)",
              animation: "floatText 2s ease-in-out infinite alternate",
            }}
          >
            Hey, <br /> I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Sahil Vedwal
            </span>
          </h1>
          <h2
           className="text-2xl sm:text-3xl font-semibold text-white"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
           >
           Welcome to my PORTFOLIO .!! <br /> Let's Connect...
         </h2>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="mailto:sahilvedwal54@gmail.com"
              className="flex items-center gap-3 px-6 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/30 hover:border-cyan-400/60 rounded-xl text-cyan-300 hover:text-cyan-200 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              <FaEnvelope size={20} />
              <span className="font-medium">Email</span>
            </a>

            <a
              href="https://www.linkedin.com/in/sahil-vedwal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-400/30 hover:border-blue-400/60 rounded-xl text-blue-300 hover:text-blue-200 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              <FaLinkedin size={20} />
              <span className="font-medium">LinkedIn</span>
            </a>

            <a
              href="https://github.com/sahil-vedwal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-gray-500/10 hover:bg-gray-500/20 border border-gray-400/30 hover:border-gray-400/60 rounded-xl text-gray-300 hover:text-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-gray-400/20"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              <FaGithub size={20} />
              <span className="font-medium">GitHub</span>
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div
          className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end relative z-10 transition-all duration-700"
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
          <div className="relative w-full max-w-[500px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px]">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse" />
            
            <img
              src={sahilImg}
              alt="Sahil"
              className="relative w-full h-full object-cover hover:scale-105 transition-all duration-500 ease-out"
              style={{
                animation: "floatImage 3s ease-in-out infinite alternate, subtleGlow 2s ease-in-out infinite alternate",
                filter: "drop-shadow(0 10px 30px rgba(6, 182, 212, 0.3))"
              }}
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span
              className="text-xs text-gray-100 tracking-wider"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              SCROLL
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent" />
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap");

        @keyframes floatText {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes floatImage {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(1deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        @keyframes subtleGlow {
          0% {
            filter: drop-shadow(0 10px 30px rgba(6, 182, 212, 0.3));
          }
          50% {
            filter: drop-shadow(0 15px 40px rgba(6, 182, 212, 0.5));
          }
          100% {
            filter: drop-shadow(0 10px 30px rgba(6, 182, 212, 0.3));
          }
        }
      `}</style>
    </div>
  );
}