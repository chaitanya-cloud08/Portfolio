import { motion } from 'framer-motion';

const BlinkingCursor = () => {
  return (
    <motion.div
      className="inline-block h-6 w-2 md:h-8 md:w-3 bg-accent"
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 1.2, repeat: Infinity }}
    />
  );
};

export default BlinkingCursor;