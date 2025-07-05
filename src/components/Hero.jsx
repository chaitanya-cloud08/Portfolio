import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo, socialLinks } from '../data';
import Section from './Section';
import BlinkingCursor from './BlinkingCursor';

const Hero = () => {
  return (
    <Section id="home">
  <div className="flex flex-col items-start -mt-20 sm:-mt-24">         
    <motion.p
          className="font-mono text-accent mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {`// Hi, my name is`}
        </motion.p>
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {personalInfo.name}.
        </motion.h1>
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-400 dark:text-slate-500 h-24 md:h-auto">
          <TypeAnimation
            sequence={[
              'I build user-centric products.',
              2000,
              'I bridge tech and user needs.',
              2000,
              'I am a Product Enthusiast.',
              2000,
              'I am a Software Developer.',
              2000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            cursor={false}
          />
          <BlinkingCursor />
        </div>
        <motion.p
          className="max-w-xl mt-6 text-slate-600 dark:text-slate-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
Building thoughtful tech for real human needs.        </motion.p>
        <motion.div
          className="flex space-x-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
           {socialLinks.map((social) => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" 
               className="text-slate-500 hover:text-accent transition-colors p-2"
               aria-label={social.name}
            >
              <social.icon size={24} />
            </a>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;