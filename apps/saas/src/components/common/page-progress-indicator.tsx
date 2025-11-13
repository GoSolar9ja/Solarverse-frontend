import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PageProgressIndicator() {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    // Start progress on route change
    setProgress(20);

    interval = setInterval(() => {
      setProgress((prev) => {
        // Progress gradually up to 90%
        if (prev < 90) return prev + Math.random() * 10;
        return prev;
      });
    }, 200);

    // Simulate "done" after route settles
    const completeTimeout = setTimeout(() => {
      setProgress(100);

      // Clear interval after completion
      if (interval) clearInterval(interval);

      // Reset after a brief pause
      setTimeout(() => setProgress(0), 500);
    }, 1000); // simulate 1s load time

    return () => {
      if (interval) clearInterval(interval);
      clearTimeout(completeTimeout);
    };
  }, [location.pathname]);

  return (
    <motion.div
      initial={{ width: "0%" }}
      animate={{ width: `${progress}%` }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      className="fixed top-0 left-0 h-[3px] bg-red-500 z-[9999]"
    />
  );
}
