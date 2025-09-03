// src/components/Footer.jsx
import React from "react";
import { FaGithub } from "react-icons/fa";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#031025] via-[#0b1a33] to-[#031025] text-white py-16 px-6 relative overflow-hidden">
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Poppins:wght@400;600&display=swap"
        rel="stylesheet"
      />

      {/* Background Glow Circles */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <h2
            className="text-3xl font-bold mb-4 text-cyan-400"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Sahil Vedwal
          </h2>
          <p
            className="text-sm leading-relaxed text-gray-400 max-w-xs"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Passionate Web & App Developer 🚀  
            Turning ideas into reality with clean code.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-start">
          <h2
            className="text-xl font-bold mb-4 text-cyan-400"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Quick Links
          </h2>
          <ul className="space-y-2">
            {["Home", "About", "Skills", "Projects", "Contact"].map((link, i) => (
              <li key={i}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="transition-all duration-300 hover:-translate-y-1 hover:text-cyan-300 inline-block"
                  style={{ color: "#e0e6f0" }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h2
            className="text-xl font-bold mb-4 text-cyan-400"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Contact
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaLocationDot className="text-cyan-400" /> Jaipur, Rajasthan, India
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaPhone className="text-cyan-400" /> 
              <a href="tel:+917850909801">+91 7850909801</a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaEnvelope className="text-cyan-400" /> 
              <a href="mailto:sahilvedwal54@gmail.com">sahilvedwal54@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="flex flex-col items-center md:items-start">
          <h2
            className="text-xl font-bold mb-4 text-cyan-400"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Follow Me
          </h2>
          <div className="flex gap-5 text-3xl mt-2">
            <a
              href="https://github.com/sahil-vedwal"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300 transition transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sahil-vedwal/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300 transition transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/917850909801"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300 transition transform hover:scale-110"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-500 mt-5 border-t border-gray-700 pt-6 font-poppins">
        © 2025 All rights reserved | by{" "}
        <span className="text-cyan-400 font-semibold">Sahil Vedwal</span>
      </div>
    </footer>
  );
};

export default Footer;
