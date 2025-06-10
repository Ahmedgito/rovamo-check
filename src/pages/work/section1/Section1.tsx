import React from "react";
import { motion } from "framer-motion";
import { BackgroundPaths } from "../../../components/ui/background-paths";

const Section1Work: React.FC = () => (
  <section className="relative h-[90vh] md:h-screen font-schibsted pt-0 md:pt-72 mb-20">
    <BackgroundPaths />

    {/* Desktop Version (md and up) */}
    <div className="hidden md:flex relative z-10 w-full px-6 sm:px-10 md:px-[10%] flex-row items-start justify-between h-full">
      <div className="flex flex-col items-start md:ml-10 justify-center w-full max-w-full md:max-w-[70%]">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold leading-tight tracking-tight text-white mb-4 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Work
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
    </div>

    {/* Mobile Version (below md) */}
    <div className="flex md:hidden flex-col  justify-center h-full text-center px-6 relative z-10">
      <motion.h1
        className="text-4xl sm:text-4xl font-bold leading-tight tracking-tight text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Future-proofing businesses
        <br />
        through design
      </motion.h1>
      <motion.p
        className="text-base sm:text-lg font-extralight leading-relaxed text-[#E9E9E9] mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
       <p className="">We are a design-led technology company...</p> 
      </motion.p>
    </div>
  </section>
);

export default Section1Work;
