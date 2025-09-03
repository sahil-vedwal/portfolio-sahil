import React, { useState, useEffect } from "react";
import cLogo from "../assets/c.png";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const skillsSection = document.getElementById("skills");
    if (skillsSection) observer.observe(skillsSection);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [{ name: "C", image: cLogo, color: "from-blue-500 to-blue-700" },
               { name: "Python", image: "/public/images/python.png", color: "from-yellow-400 to-green-500" },
        { name: "Java", image: "/public/images/java.png", color: "from-red-500 to-orange-500" },
        { name: "JavaScript", image: "/public/images/js.png", color: "from-yellow-400 to-yellow-600" }
      ]
    },
    {
      title: "Web & Mobile",
      skills: [
        { name: "React.js", image: "/images/react.png", color: "from-cyan-400 to-blue-500" },
        { name: "HTML", image: "/images/html.png", color: "from-orange-500 to-blue-500" },
         { name: "CSS", image: "/images/css.png", color: "from-orange-500 to-blue-500" },
        { name: "Flutter", image: "/images/flutter.png", color: "from-blue-400 to-cyan-400" },
        { name: "TailwindCSS", image: "/images/tailwind.png", color: "from-teal-400 to-blue-500" }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Firebase", image: "/images/firebase.png", color: "from-yellow-500 to-orange-500" },
        { name: "MySQL", image: "/images/mysql.png", color: "from-blue-600 to-orange-500" },
        { name: "PHP", image: "/images/php.png", color: "from-purple-600 to-blue-600" },
        { name: "Django", image: "/images/django.png", color: "from-green-600 to-teal-500" }
      ]
    },
    {
      title: "Design & Tools",
      skills: [
        { name: "Figma", image: "/images/figma.png", color: "from-purple-500 to-pink-500" },
        { name: "Canva", image: "/images/canva.jpeg", color: "from-cyan-400 to-purple-500" },
        { name: "Photoshop", image: "/images/ps.png", color: "from-blue-600 to-cyan-500" },
        { name: "Lightroom", image: "/images/lr.png", color: "from-blue-500 to-purple-500" }
      ]
    },
    {
      title: "Development Tools",
      skills: [
        { name: "VS Code", image: "/images/vscode.png", color: "from-blue-500 to-cyan-400" },
        { name: "GitHub", image: "/images/github.png", color: "from-[#000000] to-[#000000]" },
        { name: "Postman", image: "/images/pm.png", color: "from-orange-500 to-red-500" },
        { name: "AWS", image: "/images/aws.png", color: "from-orange-500 to-yellow-500" },
        { name: "Android Studio", image: "/images/as.png", color: "from-green-500 to-green-500" }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className="bg-gradient-to-r from-[#031025] via-[#7a8591] to-[#031025] text-white py-24 px-6 min-h-screen relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#7a8591]/8 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-6xl font-black bg-gradient-to-r from-cyan-400 via-[#00FFFF] to-cyan-400 bg-clip-text text-transparent mb-4 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            TECHNICAL SKILLS
          </h2>
          
          <div 
            className={`w-20 h-1 bg-gradient-to-r from-cyan-400 to-[#7a8591] mx-auto rounded-full transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
            style={{ transitionDelay: '0.3s' }}
          />
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${0.4 + categoryIndex * 0.15}s` }}
            >
              {/* Category Title */}
              <h3
                className="text-xl sm:text-2xl font-bold mb-6 text-center"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                <span className="text-cyan-400">{category.title}</span>
              </h3>

              {/* Skills Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group relative backdrop-blur-sm bg-gradient-to-br from-[#031025]/70 via-[#031025]/15 to-[#031025]/70 border border-[#031025]/25 rounded-xl p-4 shadow-lg hover:shadow-xl hover:shadow-cyan-400/15 transition-all duration-400 hover:scale-105 cursor-pointer"
                    style={{ 
                      animationDelay: `${0.5 + categoryIndex * 0.15 + skillIndex * 0.08}s`,
                      animation: isVisible ? 'fadeInUp 0.5s ease-out forwards' : 'none'
                    }}
                  >
                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-400 rounded-xl`} />
                    
                    {/* Content */}
                    <div className="relative z-10 text-center">
                      {/* Logo Image */}
                      <img 
                        src={skill.image} 
                        alt={skill.name} 
                        className="w-20 h-20 mx-auto mb-3 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500"
                      />

                      {/* Skill Name */}
                      <h4
                        className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                      >
                        {skill.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&display=swap');
        
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

export default Skills;
