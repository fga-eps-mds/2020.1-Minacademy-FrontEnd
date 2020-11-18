import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const defaultTransition = {
  type: 'tween',
  ease: 'easeIn',
  duration: 0.5,
};

const defaultVariants = {
  initial: {
    opacity: 0,
    y: '100vh',
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: '100vh',
    scale: 0.5,
  },
};

const MotionDiv = ({
  children,
  className,
  variants = defaultVariants,
  transition = defaultTransition,
  layout = false
}) => {
  return (
    <motion.div
      layout={layout}
      className={className}
      variants={variants}
      transition={transition}
      initial="initial"
      animate="in"
      exit="out"
    >
      {children}
    </motion.div>
  );
};

MotionDiv.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
  variants: PropTypes.oneOfType([PropTypes.object]).isRequired,
  transition: PropTypes.oneOfType([PropTypes.object]).isRequired,
  layout: PropTypes. PropTypes.bool.isRequired,
};

export default memo(MotionDiv);
