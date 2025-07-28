import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 0.6,
    },
  },
};

export const staggerChildren: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}; 