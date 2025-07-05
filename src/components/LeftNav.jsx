import React from 'react';
import clsx from 'clsx';
import { personalInfo } from '../data';
import { Home, User, Code, Briefcase, Mail, Cpu, Download } from 'lucide-react';

const icons = {
  home: Home,
  about: User,
  skills: Cpu,
  projects: Code,
  experience: Briefcase,
  contact: Mail,
};

const LeftNav = ({ sections, activeSection }) => {
  return (
    <aside className=" hidden md:flex flex-col h-screen fixed top-0 left-0 z-40 w-64 bg-light/80 dark:bg-dark/80 backdrop-blur-sm border-r border-slate-300/20 dark:border-slate-800/40">
      
      {/* Top section: This part will grow but not push the bottom part out */}
      <div className="flex-grow overflow-y-auto">
        
        {/* --- MODIFIED PROFILE SECTION --- */}
        <div className="p-4 py-6 text-center">
          <a href="#" className="inline-block mb-4">
            <img 
              src={personalInfo.profilePicture} 
              alt="Profile picture of Alex Doe"
              className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-accent/50 shadow-lg hover:border-accent transition-all duration-300"
            />
          </a>
          <a href="#" className="font-mono text-2xl font-bold">
            {personalInfo.name.split(' ')[0]}.<span className="text-accent">jsx</span>
          </a>
          <p className="text-xs text-slate-500 mt-1">{personalInfo.tagline}</p>
        </div>
        {/* --- END OF MODIFIED SECTION --- */}

        <ul className="space-y-2 font-medium px-3">
          {sections.map((section) => {
            const Icon = icons[section];
            return (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={clsx(
                    'flex items-center p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-gray-700 group transition-all duration-200',
                    { 'bg-accent/20 text-accent': activeSection === section }
                  )}
                >
                  <Icon className={clsx(
                    'w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-textLight dark:group-hover:text-textDark transition-colors duration-200',
                    { 'text-accent': activeSection === section }
                  )} />
                  <span className="ml-3 capitalize">{section === 'home' ? 'Home' : section}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Bottom section: This part is now guaranteed to be at the bottom */}
      <div className="p-4 border-t border-slate-300/20 dark:border-slate-800/40">
        <a
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full px-4 py-2 font-semibold text-white bg-accent rounded-lg hover:bg-accent-hover transition-colors duration-300 shadow-lg hover:shadow-glow-accent"
          aria-label="Download my Resume"
        >
          <Download size={18} className="mr-2" />
          Resume
        </a>
      </div>

    </aside>
  );
};

export default LeftNav;