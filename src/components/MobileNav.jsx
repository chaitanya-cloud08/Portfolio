import React, { useState } from 'react';
import { personalInfo } from '../data';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Experience", href: "#experience" },
  { title: "Contact", href: "#contact" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      height: 0,
      transition: { duration: 0.3, when: "afterChildren" }
    },
    visible: {
      opacity: 1,
      y: 0,
      height: 'auto',
      transition: { duration: 0.3, when: "beforeChildren", staggerChildren: 0.05 }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <header className="md:hidden sticky top-0 z-40 w-full bg-light/90 dark:bg-dark/90 backdrop-blur-sm border-b border-slate-300/20 dark:border-slate-800/40">
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center h-16">
        <a href="#" className="font-mono text-xl font-bold">
          {personalInfo.name.split(' ')[0]}.<span className="text-accent">jsx</span>
        </a>

        <button onClick={toggleMenu} className="p-2 -mr-2" aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="px-4 pb-4 border-b border-slate-300/20 dark:border-slate-800/40"
          >
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={toggleMenu} 
                  className="px-3 py-2 text-base font-medium rounded-md hover:bg-slate-200 dark:hover:bg-gray-700"
                  variants={linkVariants}
                >
                  {link.title}
                </motion.a>
              ))}
              <motion.a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-4 py-2 mt-4 font-semibold text-white bg-accent rounded-lg hover:bg-accent-hover transition-colors"
                aria-label="Download my Resume"
                variants={linkVariants}
              >
                <Download size={18} className="mr-2" />
                Resume
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default MobileNav;