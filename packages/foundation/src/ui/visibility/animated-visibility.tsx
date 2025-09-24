import React from "react";
import { AnimatePresence, motion, MotionProps } from "framer-motion";

const variants = {
  hidden: { opacity: 0, transition: { duration: 0.3 }, height: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 }, height: "auto" },
};

interface IAnimatedVisibilityProps extends MotionProps {
  children: React.ReactNode;
  visible: boolean;
  className?: string;
}

const AnimatedVisibility = ({
  children,
  visible,
  ...props
}: IAnimatedVisibilityProps) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial="hidden"
          variants={variants}
          animate="visible"
          exit="hidden"
          {...props}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { AnimatedVisibility };
