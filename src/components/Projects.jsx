import React from "react";
import { useState, useEffect } from "react";
import krishnaImg from "../assets/images/krishna.png";
import expenseImg from "../assets/images/expense-tracker.png";
import faceImg from "../assets/images/fac.png";
import iotImg from "../assets/images/iot.png";
import smsImg from "../assets/images/smspy.png";
import desktopImg from "../assets/images/desktop-student-records.jpg";
import smartHomeImg from "../assets/images/smart-home.jpg";
import newImg from "../assets/images/new.png";
const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const projectsSection = document.getElementById("projects");
    if (projectsSection) observer.observe(projectsSection);

    return () => observer.disconnect();
  }, []);

  const projects = [
  {
    name: "Krishna AI Chatbot",
    tech: "Gemini API + Bhagavad Gita",
    description: "AI chatbot emulating Lord Krishna's persona with wisdom from Bhagavad Gita, featuring voice output and ethical filtering.",
    image: krishnaImg,
    hasLiveDemo: true,
    githubLink: "https://github.com/sahil-vedwal/krishna_ai",
    demoLink: "https://sahil-vedwal.github.io/krishna_ai/"
  },
  {
    name: "Expense Tracker App",
    tech: "Flutter + Firebase",
    description: "Cross-platform mobile app for tracking and categorizing daily expenses with Firebase authentication and real-time database.",
    image: expenseImg,
    githubLink: "https://github.com/sahil-vedwal/Expense-Tracker-App-using-Flutter"
  },
  {
    name: "Face Recognition Attendance",
    tech: "OpenCV + Deep Learning",
    description: "AI-based attendance system with spoof detection and SMS alerts. Achieved 95% accuracy and reduced proxy attendance by 40%.",
    image: faceImg,
    githubLink: "https://github.com/sahil-vedwal/Face-Recognition-Attendance-system-using-Python-DL-ML"
  },
  {
    name: "Smart Home Automation",
    tech: "IoT + Microcontrollers",
    description: "Voice-controlled home automation system with sensors and relays. Achieved 40% energy consumption savings.",
    image: iotImg,
    githubLink: "https://github.com/sahil-vedwal/smart-home-automation"
  },
  {
    name: "UEM Student Management System",
    tech: "Python + MySQL",
    description: "Desktop system for managing student records with enrollment, course registration, and grade tracking capabilities.",
    image: smsImg,
    githubLink: "https://github.com/sahil-vedwal/student-management-system"
  },
  {
    name: "UEM Student Records",
    tech: "HTML + CSS + JS",
    description: "Responsive web platform with secure admin functionalities for student registration, data updates, and course assignments.",
    image: desktopImg,
    githubLink: "https://github.com/sahil-vedwal/Student_Management_System_Using_Python"
  },
  {
    name: "Some UI/UX Designes",
    tech: "Figma",
    description: "Here are some of my UI/UX design projects created in Figma, where I focused on simplicity, usability, and modern visual appeal.",
    image: smartHomeImg,
    githubLink: "https://github.com/sahil-vedwal/"
  },
  {
    name: "Coming Soon",
    tech: "...",
    description: "...",
    image: newImg,
    githubLink: "https://github.com/sahil-vedwal"
  }
];

  // Handle navigation clicks
  const handleLinkClick = (url) => {
    if (url && url !== "#") {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section 
      id="projects" 
      className="bg-gradient-to-r from-[#031025] via-[#7a8591] to-[#031025] text-white py-24 px-6 min-h-screen relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#7a8591]/8 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-6xl font-black bg-gradient-to-r from-cyan-400 via-[#00FFFF] to-cyan-400 bg-clip-text text-transparent mb-4 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            MY PROJECTS
          </h2>
          
          <p
            className={`text-lg text-[#FFFFFF] max-w-2xl mx-auto transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ 
              fontFamily: "'Orbitron', sans-serif",
              transitionDelay: '0.3s'
            }}
          >
            Real-world applications showcasing innovation and technical expertise
          </p>
          
          <div 
            className={`w-20 h-1 bg-gradient-to-r from-cyan-400 to-[#7a8591] mx-auto mt-6 rounded-full transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
            style={{ transitionDelay: '0.5s' }}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`relative bg-[#031025]/80 border border-[#7a8591]/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-cyan-400/20 transition-all duration-300 hover:border-cyan-400/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${0.6 + index * 0.1}s`,
                animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
              }}
            >

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-[#031025]/60">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Show fallback content
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#031025] to-[#7a8591]/20">
                        <div class="text-center">
                          <div class="text-4xl mb-2 text-cyan-400">💻</div>
                          <p class="text-xs text-gray-400 font-medium">${project.name}</p>
                        </div>
                      </div>
                    `;
                  }}
                />
                
                {/* Tech Badge */}
                <div className="absolute top-3 right-3">
                  <div className="px-2 py-1 bg-cyan-500/90 rounded-full text-xs font-bold text-white backdrop-blur-sm"
                       style={{ fontFamily: "'Orbitron', sans-serif" }}>
                    {project.tech}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Project Title */}
                <h3
                  className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300"
                  style={{ 
                    fontFamily: "'Orbitron', sans-serif",
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                  }}
                >
                  {project.name}
                </h3>

                {/* Description */}
                <p
                  className="text-sm text-gray-200 leading-relaxed mb-6 line-clamp-3 font-medium"
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                    lineHeight: '1.6'
                  }}
                >
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {project.hasLiveDemo ? (
                    <>
                      <button
                        onClick={() => handleLinkClick(project.demoLink)}
                        className="flex-1 py-2 px-4 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg text-white font-semibold text-sm hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                      >
                        Live Demo
                      </button>
                      <button
                        onClick={() => handleLinkClick(project.githubLink)}
                        className="flex-1 py-2 px-4 border border-[#7a8591]/40 rounded-lg text-[#7a8591] hover:text-cyan-400 hover:border-cyan-400/50 transition-colors duration-300 font-semibold text-sm"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                      >
                        GitHub
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleLinkClick(project.githubLink)}
                      className="flex-1 py-2 px-4 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg text-white font-semibold text-sm hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
                      style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                      View on GitHub
                    </button>
                  )}
                </div>
              </div>

              {/* Bottom Accent Line - Unified cyan theme */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#7a8591]/20 to-transparent">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div 
          className={`text-center mt-16 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '1.2s' }}
        >
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Projects;