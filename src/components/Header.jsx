// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll for anchor links
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false); // close mobile menu
  };

  const menuItems = ["ABOUT", "SKILLS", "PROJECTS", "JOURNEY", "CONNECT"];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#031025]/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6">
        <h1
          className="text-xl sm:text-2xl font-extrabold text-white tracking-widest transition-all duration-300 hover:scale-105 hover:text-cyan-400 hover:drop-shadow-lg"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          MY PORTFOLIO
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              className="relative text-white font-bold tracking-wide transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 hover:w-full rounded"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu */}
        <button
          className="md:hidden text-white transition-all duration-300 hover:text-cyan-400 hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#031025]/90 backdrop-blur-md px-6 py-4 space-y-4 rounded-lg shadow-lg transition-all duration-500 animate-fadeIn">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              className="block text-white font-bold tracking-wide transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              {item}
            </a>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.5s ease-in-out forwards; }
      `}</style>
    </header>
  );
};

export default Header;
