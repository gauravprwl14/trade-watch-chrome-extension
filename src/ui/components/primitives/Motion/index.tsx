// components/MotionWrapper.jsx
'use client';

import { motion, MotionProps } from 'framer-motion';

export default function MotionWrapper({
  children,
  initial,
  animate,
  transition,
  className,
}: {
  children: React.ReactNode;
  initial?: MotionProps['initial'];
  animate?: MotionProps['animate'];
  transition?: MotionProps['transition'];
  className?: string;
}) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
