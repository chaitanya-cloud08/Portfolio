import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import MobileNav from './components/MobileNav'; 
import LeftNav from './components/LeftNav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' } 
    );

    sections.forEach((sectionId) => {
      const el = document.getElementById(sectionId);
      if (el) {
        sectionRefs.current[sectionId] = el;
        observer.observe(el);
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach((el) => {
        if(el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
    <ParticleBackground />
            <LeftNav sections={sections} activeSection={activeSection} />
<MobileNav />
      <div className="flex">
                  <div className="w-full md:w-[calc(100%-16rem)] md:ml-64">
          <main className="container mx-auto px-6 lg:px-12 py-12 md:py-0">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
      <ThemeToggle />
    </>
  );
}

export default App;