import React from "react";
import { motion } from "framer-motion";
import { BackgroundPaths } from "../../../components/ui/background-paths";

const Section1Hero: React.FC = () => (
  <section className="relative h-screen flex items-center justify-center pt-0 md:pt-32 mb-[10%]">
    <BackgroundPaths />
    <div className="relative z-10 w-full px-6 sm:px-10 md:px-[10%] flex flex-col md:flex-row items-start justify-between">
      <div className="flex flex-col items-start ml-10 justify-center w-full max-w-full md:max-w-[70%]">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-white mb-4 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Future-proofing businesses through design
        </motion.h1>
        <motion.div 
          className="flex flex-col w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-base sm:text-lg md:text-xl font-extralight leading-relaxed text-[#E9E9E9] mt-0 md:mt-4">
            We are a design-led technology company...
          </p>
        </motion.div>
      </div>
      <div className="w-full md:w-[30%]"></div>
    </div>
  </section>
);

export default Section1Hero;
