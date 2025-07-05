import { personalInfo, socialLinks } from '../data';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-slate-300 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map(social => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-textLight/70 dark:text-textDark/70 hover:text-accent transition-colors">
              <social.icon size={24} />
            </a>
          ))}
        </div>
        <p className="text-textLight/70 dark:text-textDark/70">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;