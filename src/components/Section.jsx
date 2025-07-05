import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, children }) => {
  return (
    <motion.section
      id={id}
      className="min-h-screen py-24 flex flex-col justify-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
};

export default Section;