import React from 'react';
import { motion } from 'framer-motion';

const MountTransition = ({ children }) => {
  return (
    <motion.div
      variants={{
        initial: {
          opacity: 0,
        },
        in: {
          opacity: 1,
        },
        out: {
          opacity: 0,
        },
      }}
      transition={{
        ease: 'easeOut',
        transition: 'linear',
        duration: 0.5,
      }}
      initial="initial"
      animate="in"
      exit="out"
    >
      {children}
    </motion.div>
  );
};

export default MountTransition;
