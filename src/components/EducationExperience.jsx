import React from "react";
import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const EducationExperience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const journeySection = document.getElementById("journey");
    if (journeySection) observer.observe(journeySection);

    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      degree: "Bachelor of Technology in CSE",
      institution: "University of Engineering & Management, Jaipur",
      duration: "2022 - Present",
      grade: "CGPA: 7.6/10.00",
      lastSemester: "Last Semester: 8.8/10.00",
      icon: "🎓"
    },
    {
      degree: "Senior Secondary - 12th RBSE",
      institution: "Proton Academy, Chomu (Jaipur)",
      duration: "2021 - 2022",
      grade: "Passed with 75.40%",
      icon: "📚"
    },
    {
      degree: "Secondary - 10th RBSE",
      institution: "Proton Academy, Chomu (Jaipur)",
      duration: "2019 - 2020",
      grade: "Passed with 81.33%",
      icon: "📖"
    }
  ];

  const experienceData = [
    {
      position: "Cybersecurity Virtual Internship",
      company: "AICTE & EduSkills",
      duration: "Jan 2025 - Mar 2025",
      type: "Remote · Government Certified",
      description: "10-week government-certified internship under AICTE's National Internship Portal. Gained hands-on exposure to network security, threat detection, firewalls, and secure system architecture.",
      support: "Supported by Palo Alto Networks",
      icon: "🔐"
    },
    {
      position: "GOOGLE AI-ML VIRTUAL INTERNSHIP",
      company: "AICTE & EduSkills",
      duration: "Current",
      type: "Remote · Active",
      description: "Working on machine learning projects and AI model development. Contributing to real-world applications and gaining experience in data science and artificial intelligence.",
      support: "Focus on Data Science, Deep Learning & NLP",
      icon: "🤖"
    }
  ];

   const certifications = [
  {
     title: "The Joy of Computing Using Python – NPTEL, IIT Madras",
    image: "/certificates/py.png"
  },
  {
   title: "Big Data Computing – NPTEL, IIT Kanpur",
    image: "/certificates/bd.png"
  },
  {
     title: "Introduction to Operating Systems – NPTEL, IIT Madras",
    image: "/certificates/os.png"
  },
  {
    title: "Developing Soft Skills and Personality – NPTEL, IIT Kanpur",
    image: "/certificates/sk.png"
  },
  {
    title: "Foundations of Cybersecurity – Coursera, Google",
    image: "/certificates/fcs.png"
  },
  {
    title: "Generative AI Fundamentals – IBM",
    image: "/certificates/genai.png"
  }
];


  return (
    <section 
  id="journey" 
  className="bg-gradient-to-br from-[#031025] via-[#0a1429] to-[#031025] text-white pt-20 pb-12 px-6 min-h-screen relative overflow-hidden"
>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            MY JOURNEY
          </h2>
          
          <p
            className={`text-lg text-gray-300 max-w-3xl mx-auto transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ 
              fontFamily: "'Inter', sans-serif",
              transitionDelay: '0.3s'
            }}
          >
            Academic Excellence & Professional Growth Through Innovation and Learning
          </p>
          
          <div 
            className={`w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-6 rounded-full transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
            style={{ transitionDelay: '0.5s' }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
<div
  className={`transition-all duration-1000 ease-out ${
    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
  }`}
  style={{ transitionDelay: "0.6s" }}
>
  <div className="flex items-center mb-12 justify-center">
    <div className="text-4xl mr-4">🎓</div>
    <h3
      className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-lg"
      style={{ fontFamily: "'Orbitron', sans-serif" }}
    >
      Education
    </h3>
  </div>

  <div className="relative">
    {/* Vertical glowing line */}
    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 animate-pulse rounded-full shadow-lg shadow-cyan-500/50"></div>

    <div className="space-y-12">
      {educationData.map((edu, index) => (
        <div
          key={index}
          className={`relative flex items-center w-full ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          {/* Connector dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
            <div className="w-6 h-6 rounded-full bg-cyan-400 border-4 border-[#0a1429] shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>
          </div>

          {/* Card */}
          <div
            className={`w-[45%] p-6 rounded-2xl bg-[#0a1429]/70 backdrop-blur-md border border-cyan-400/20 
              hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/20 transition-all duration-500 
              relative group ${
                index % 2 === 0 ? "text-left" : "text-right"
              }`}
          >
            {/* Arrow effect */}
            <div
              className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 ${
                index % 2 === 0
                  ? "border-r-8 border-t-transparent border-b-transparent border-r-cyan-400/40 -left-3"
                  : "border-l-8 border-t-transparent border-b-transparent border-l-cyan-400/40 -right-3"
              }`}
            ></div>

            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{edu.icon}</span>
                <div>
                  <h4
                    className="text-xl font-bold text-cyan-300 tracking-wide group-hover:text-cyan-200 transition-colors"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    {edu.degree}
                  </h4>
                  <p
                    className="text-gray-400 text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {edu.institution}
                  </p>
                </div>
              </div>
              <span
                className="text-xs text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                {edu.duration}
              </span>
            </div>

            <div className="space-y-1">
              <p
                className="text-sm text-gray-200 font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {edu.grade}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

          {/* Experience Section */}
          <div 
            className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '0.8s' }}
          >
            <div className="flex items-center mb-8">
              <div className="text-3xl mr-4">💼</div>
              <h3 
                className="text-3xl font-bold text-white"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Experience
              </h3>
            </div>

            <div className="space-y-6">
              {experienceData.map((exp, index) => (
                <div
                  key={index}
                  className="bg-[#0a1429]/60 backdrop-blur-sm border border-cyan-400/20 p-6 rounded-xl hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{exp.icon}</span>
                      <div>
                        <h4 
                          className="text-lg font-bold text-cyan-300"
                          style={{ fontFamily: "'Orbitron', sans-serif" }}
                        >
                          {exp.position}
                        </h4>
                        <p 
                          className="text-gray-300 text-sm mt-1"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span 
                        className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full block mb-1"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                      >
                        {exp.duration}
                      </span>
                      <span 
                        className="text-xs text-blue-300"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <p 
                    className="text-sm text-gray-200 leading-relaxed mb-2"
                    style={{ 
                      fontFamily: "'Inter', sans-serif",
                      lineHeight: '1.6'
                    }}
                  >
                    {exp.description}
                  </p>
                  
                  {exp.support && (
                    <p 
                      className="text-xs text-cyan-300 italic"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {exp.support}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div 
          className={`mt-16 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1.0s' }}
        >
          <div className="flex items-center mb-8">
            <div className="text-6xl mr-4"></div>
            <h2
            className={`text-4xl sm:text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Certifications
          </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {certifications.map((cert, index) => (
    <div
      key={index}
      className="bg-[#0a1429]/60 backdrop-blur-md border border-cyan-400/20 p-4 rounded-xl hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300"
    >
      <h4 
        className="text-sm font-bold text-cyan-300 mb-3"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        {cert.title}
      </h4>

      <a href={cert.image} target="_blank" rel="noopener noreferrer">
        <img 
          src={cert.image} 
          alt={cert.title} 
          className="rounded-lg w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
        />
      </a>
    </div>
  ))}
</div>

        </div>
           

    <section 
      id="activities"
      className="bg-gradient-to-br from-[#031025] via-[#0a1429] to-[#031025] text-white py-20 px-6 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl sm:text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            OTHER ACTIVITIES
          </h2>
          <p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Beyond technical life , I actively explore creativity and personal growth through various activities.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-6 rounded-full" />
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 1. Drawing & Sketching */}
          <div className="bg-[#0a1429]/60 backdrop-blur-sm border border-cyan-400/20 p-6 rounded-xl">
            <h3 
              className="text-xl font-bold text-cyan-300 mb-4 text-center"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Drawing & Sketching ~ my favourite hobby.
            </h3>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={20}
              className="rounded-lg"
            >
              <SwiperSlide>
                <img src="/images/tshirt.jpg" className="rounded-lg w-full h-48 object-cover" />
                <p className="text-gray-300 text-sm mt-2 text-center">Proud moment..!! The Dean of my university buys T-shirt with my artwork in a bidding competition! 🎉.</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/eye.jpg" className="rounded-lg w-full h-48 object-cover" />
                <p className="text-gray-300 text-sm mt-2 text-center">The YELLOW Eye.</p>
              </SwiperSlide>
              {/* Yaha aur unlimited slides add kar sakta hai */}
            </Swiper>
          </div>

          {/* 2. Creative Projects */}
          <div className="bg-[#0a1429]/60 backdrop-blur-sm border border-cyan-400/20 p-6 rounded-xl">
            <h3 
              className="text-xl font-bold text-cyan-300 mb-4 text-center"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Creativity
            </h3>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={20}
              className="rounded-lg"
            >
              <SwiperSlide>
                <img src="/images/stone.png" className="rounded-lg w-full h-48 object-cover" />
                <p className="text-gray-300 text-sm mt-2 text-center">A tiny House on a Stone.</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/src/assets/project2.jpg" className="rounded-lg w-full h-48 object-cover" />
                <p className="text-gray-300 text-sm mt-2 text-center"> etc.</p>
              </SwiperSlide>
              {/* Yaha bhi aur add kar sakta hai */}
            </Swiper>
          </div>

          {/* 3. Personal Growth */}
          <div className="bg-[#0a1429]/60 backdrop-blur-sm border border-cyan-400/20 p-6 rounded-xl">
            <h3 
              className="text-xl font-bold text-cyan-300 mb-4 text-center"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Personal Growth
            </h3>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={20}
              className="rounded-lg"
            >
              <SwiperSlide>
                <img src="/images/mount.png" className="rounded-lg w-full h-48 object-cover" />
                <p className="text-gray-300 text-sm mt-2 text-center">Just trying to focus.</p>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/src/assets/other2.jpg" className="rounded-lg w-full h-48 object-cover" />
                <p className="text-gray-300 text-sm mt-2 text-center"></p>
              </SwiperSlide>
              {/* Unlimited slides */}
            </Swiper>
          </div>
        </div>
      </div>
    </section>

        {/* Skills Highlight */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1.2s' }}
        ></div>

        {/* Achievement Stats */}
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
      `}</style>
    </section>
  );
};

export default EducationExperience;