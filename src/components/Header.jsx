import React from 'react';
import { personalInfo } from '../data';

const Header = () => {
  const navLinks = [
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Experience", href: "#experience" },
    { title: "Contact", href: "#contact" },
        { title: "Resume", href: "#resume" },

  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-sm bg-light/80 dark:bg-dark/80 border-b border-slate-300 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <a href="#" className="font-bold text-xl text-accent">{personalInfo.name.split(' ')[0]}</a>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-sm font-medium hover:text-accent transition-colors">
              {link.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;