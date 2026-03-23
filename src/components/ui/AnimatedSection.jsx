import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedSection = ({ children, className = '', delay = 0, direction = 'up', once = true, as = 'div' }) => {
  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
    none: { x: 0, y: 0 }
  };

  const Component = motion[as] || motion.div;

  return (
    <Component
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </Component>
  );
};
