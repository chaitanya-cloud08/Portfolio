import Section from './Section';
import { experience, education } from '../data';

const TimelineItem = ({ item }) => {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 dark:before:bg-slate-700 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-accent after:border-4 after:box-content after:border-slate-50 after:dark:border-slate-900 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-28 h-6 mb-3 p-4 sm:mb-0 text-accent bg-accent/20 rounded-full">{item.duration}</time>
        <div className="text-xl font-bold text-textLight dark:text-textDark">{item.role || item.degree}</div>
      </div>
      <div className="text-textLight/80 dark:text-textDark/80">{item.company || item.institution}</div>
      <div className="text-sm mt-2">{item.description}</div>
    </div>
  );
};


const Experience = () => {
  return (
    <Section id="experience" title="Experience & Education">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-center">Work Experience</h3>
        {experience.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
        <h3 className="text-2xl font-bold mt-16 mb-6 text-center">Education</h3>
        {education.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;