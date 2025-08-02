import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-grey dark:bg-dark/80 backdrop-blur-sm border border-slate-300/20 dark:border-slate-800/40 shadow-lg hover:shadow-glow-accent hover:border-accent/40 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme} 
        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
        transition={{ duration: 0.2 }}
      >
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;