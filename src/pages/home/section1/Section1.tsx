import React from "react";
import { motion } from "framer-motion";
import { BackgroundPaths } from "../../../components/ui/background-paths";
import Spline from '@splinetool/react-spline';

const Section1Hero: React.FC = () => (
  <section className="relative min-h-[60vh] md:h-screen font-schibsted pt-20 md:pt-72 mb-20">
    <BackgroundPaths />

    {/* Desktop Version (md and up) */}
    <div className="hidden md:flex relative z-10 w-full px-6 sm:px-10 md:px-[10%] flex-row items-start justify-between h-full">
      <div className="flex flex-col items-start md:ml-10 justify-center w-full max-w-full md:max-w-[50%]">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold leading-tight tracking-tight text-white mb-4 md:mb-8"
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

      {/* Spline Scene */}
      <motion.div
        className="w-full md:w-[45%] -mt-10 h-[500px] overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="h-[600px] -mb-[100px]">
          <Spline scene="https://prod.spline.design/PdFHbBePLEj5OIEd/scene.splinecode" />
        </div>
      </motion.div>
    </div>

    {/* Mobile Version (below md) */}
    <div className="md:hidden flex flex-col px-6 sm:px-10 relative z-10 min-h-[60vh]">
      <div className="flex-1 flex flex-col justify-center">
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
          <p className="text-base sm:text-lg font-extralight leading-relaxed text-[#E9E9E9]">
            We are a design-led technology company...
          </p>
        </motion.div>
        
      </div>
    </div>
  </section>
);

export default Section1Hero;
