import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="page-transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 bg-black"
        style={{ 
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#000000",
          zIndex: 0
        }}
      >
        <div 
          className="h-full w-full overflow-y-auto bg-black"
          style={{ 
            backgroundColor: "#000000",
            position: "relative",
            zIndex: 1
          }}
        >
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 