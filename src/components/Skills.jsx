import Section from './Section';
import { skills } from '../data';
import { motion } from 'framer-motion';

const skillVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
  return (
    <Section id="skills" title="My Toolkit">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-center">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.tech.map((skill, index) => (
              <motion.span 
                key={index}
                className="px-4 py-2 bg-slate-200/80 dark:bg-slate-800/80 hover:bg-accent dark:hover:bg-accent hover:text-white rounded-full text-sm font-medium"
                variants={skillVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                custom={index} // You can use this for stagger effects if needed
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 text-center">Product Tools</h3>
          <div className="flex flex-wrap justify-center gap-3 ">
            {skills.product.map((skill, index) => (
               <motion.span 
                key={index}
                className="px-4 py-2 bg-slate-200/80 hover:bg-accent hover:text-white dark:bg-slate-800/80 dark:hover:bg-accent rounded-full text-sm font-medium"
                variants={skillVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                custom={index}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;