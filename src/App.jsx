import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Connect from "./components/Connect";
import EducationExperience from "./components/EducationExperience";
import Footer from "./components/Footer";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#031025]">
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <EducationExperience />
        <Connect />
      </main>

      <Footer /> 
    </div>
  );
}
