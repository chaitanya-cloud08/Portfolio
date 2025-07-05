import Section from './Section';
import { projects } from '../data';
import { motion } from 'framer-motion';
import { Github, Link as LinkIcon } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="relative group flex flex-col h-full rounded-lg bg-white/10 dark:bg-black/20 p-6 backdrop-blur-sm border border-slate-300/20 dark:border-slate-800/40 transition-all duration-300 hover:border-accent/40"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        {/* Fake Window Controls */}
        <div className="absolute top-3 left-4 flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
        </div>
        <div className="flex items-center justify-end space-x-4 mb-4">
             {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors">
                    <Github size={20} />
                </a>
             )}
             {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors">
                    <LinkIcon size={20} />
                </a>
             )}
        </div>
        
        <h3 className="font-mono text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="text-slate-500 dark:text-slate-400 mb-4 flex-grow text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2 font-mono text-xs">
            {project.stack.map(tech => (
            <span key={tech} className="text-accent/80">{tech}</span>
            ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
    return (
        <Section id="projects">
            <h2 className="text-2xl font-bold font-mono mb-2"><span className='text-accent'>03.</span> Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </Section>
    );
};

export default Projects;