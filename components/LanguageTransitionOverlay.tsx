"use client";

import { useLanguage } from "@/lib/language-context";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const spinVariants = {
  animate: (duration: number) => ({
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: duration,
      ease: "linear",
    },
  }),
};

const coreSpinVariants = {
  animate: {
    rotate: -360,
    transition: {
      repeat: Infinity,
      duration: 1.2, 
      ease: "easeInOut",
    },
  },
};

export function LanguageTransitionOverlay() {
  const { isChangingLanguage } = useLanguage();

  return (
    <AnimatePresence>
      {isChangingLanguage && (
        <motion.div
          key="language-transition-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-zinc-950/90 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="relative flex items-center justify-center w-64 h-64" // Spinnerning umumiy hajmi
          >
            <motion.div
              variants={spinVariants}
              custom={5} // duration=5s
              animate="animate"
              className="absolute w-64 h-64 rounded-full border-4 border-transparent border-t-purple-500 border-r-blue-500 opacity-50"
            />

            <motion.div
              variants={spinVariants}
              custom={3.5} // duration=3.5s
              animate="animate"
              style={{ rotate: 180 }}
              className="absolute w-52 h-52 rounded-full border-4 border-transparent border-b-cyan-400 border-l-purple-400 opacity-70"
            />

            <motion.div
              variants={spinVariants}
              custom={2} // duration=2s
              animate="animate"
              className="absolute w-40 h-40 rounded-full border-4 border-transparent border-t-blue-500 opacity-90"
            />

            <motion.div
              variants={coreSpinVariants}
              animate="animate"
              className="absolute w-12 h-12 rounded-full border-4 border-transparent border-t-pink-500 border-r-yellow-300 shadow-neon"
              style={{
                filter: "drop-shadow(0 0 5px rgba(255, 100, 255, 0.8))",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
