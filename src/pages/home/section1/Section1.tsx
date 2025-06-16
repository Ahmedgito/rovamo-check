import React from "react";
import { motion } from "framer-motion";

const Section1Hero: React.FC = () => (
  <section className="relative h-screen md:min-h-[100vh]  pt-72 md:pt-72 md:mb-20">

    {/* Desktop Version (md and up) */}
    <div className="hidden md:flex relative z-10 w-full px-6 sm:px-10 md:px-[10%] flex-row items-start justify-between h-full">
      <div className="flex flex-col items-start md:ml-10 justify-center w-full max-w-full md:max-w-[50%]">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl leading-tight tracking-tight text-white mb-4 md:mb-8"
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
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#E9E9E9] mt-0 md:mt-4">
            We are a design-led technology company...
          </p>
        </motion.div>
      </div>
    </div>

    {/* Mobile Version (below md) */}
    <div className="md:hidden flex-1 flex flex-col justify-center px-4 py-10">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Future-proofing businesses
        <br />
        through design
      </motion.h1>
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="text-base sm:text-lg leading-relaxed text-[#E9E9E9]">
          We are a design-led technology company...
        </p>
      </motion.div>
    </div>
  </section>
);

export default Section1Hero;
