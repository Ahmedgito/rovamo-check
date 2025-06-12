import React from "react";
import { motion } from "framer-motion";

const Section1Service: React.FC = () => (
    <section className="block min-h-[10vh] z-20 font-manrope font-[300] md:h-screen py-64 md:pt-72  bg-[#E9E9E9]">
     
        {/* Desktop Version (md and up) */}
        <div className="hidden md:flex z-20 w-full font-manrope font-[300] px-6 sm:px-10 md:px-[10%] flex-row items-start justify-between">
            <div className="flex flex-col items-start md:ml-10 justify-center w-full max-w-full md:max-w-[70%]">
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-manrope font-[300]  leading-tight tracking-tight text-black mb-4 md:mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Our Services
                </motion.h1>
                <motion.div
                    className="flex flex-col w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="sm:text-lg md:text-xl font-manrope font-[300] leading-relaxed text-[#171717] mt-0 md:mt-4">
                        We combine strategy, design, and engineering to create transformative digital experiences that drive real business value.
                    </p>
                </motion.div>
            </div>
        </div>

        {/* Mobile Version (below md) */}
        <div className="flex md:hidden flex-col justify-center text-center px-6 z-10 bg-[#E9E9E9] pt-12">
            <motion.h1
                className="text-4xl sm:text-4xl font-bold leading-tight tracking-tight text-black mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Our Services
            </motion.h1>
            <motion.p
                className="text-base sm:text-lg font-extralight leading-relaxed text-[#171717] mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                We combine strategy, design, and engineering to create transformative digital experiences that drive real business value.
            </motion.p>
        </div>

        {/* Services Grid 1 */}
        <div className="w-full px-6 sm:px-10 md:px-[12%] mt-12 md:mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-flow-col-dense gap-y-10 md:gap-y-12 gap-x-0">
                <div className="flex flex-col items-start text-left">
                    <svg width="36" height="36" fill="none" stroke="#171717" strokeWidth="2" className="mb-3 md:mb-4"><circle cx="18" cy="18" r="10" strokeDasharray="4 2" /><line x1="28" y1="28" x2="36" y2="36" /></svg>
                    <h3 className="text-lg md:text-xl font-base mb-2 text-black">Research</h3>
                    <ul className="text-md md:text-md text-[#171717] font-light space-y-1">
                        <li>· Qualitative and quantitative user research</li>
                        <li>· User journey design</li>
                        <li>· Rapid prototyping</li>
                    </ul>
                </div>

                <div className="flex flex-col items-start text-left">
                    <svg width="36" height="36" fill="none" stroke="#171717" strokeWidth="2" className="mb-3 md:mb-4"><circle cx="20" cy="20" r="12" strokeDasharray="4 2" /><circle cx="20" cy="20" r="4" /><line x1="20" y1="8" x2="20" y2="4" /><line x1="20" y1="32" x2="20" y2="36" /><line x1="8" y1="20" x2="4" y2="20" /><line x1="32" y1="20" x2="36" y2="20" /></svg>
                    <h3 className="text-lg md:text-xl font-base mb-2 text-black">Strategy</h3>
                    <ul className="text-md md:text-md text-[#171717] font-light space-y-1">
                        <li>· Product strategy</li>
                        <li>· Business strategy</li>
                        <li>· Systems design</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Services Grid 2 */}
        <div className="w-full px-6 sm:px-10 md:px-[12%] mt-12 md:mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-flow-col gap-y-10 md:gap-y-12 gap-x-0">
                <div className="flex flex-col items-start text-left">
                    <svg width="36" height="36" fill="none" stroke="#171717" strokeWidth="2" className="mb-3 md:mb-4"><polygon points="10,20 20,10 30,20 20,30 10,20" strokeDasharray="4 2" /><polygon points="12,22 20,14 28,22 20,30 12,22" /></svg>
                    <h3 className="text-lg md:text-xl font-base mb-2 text-black">Product design</h3>
                    <ul className="text-md md:text-md text-[#171717] font-light space-y-1">
                        <li>· Platform architecture</li>
                        <li>· Information architecture</li>
                        <li>· Customer experience design</li>
                    </ul>
                </div>

                <div className="flex flex-col items-start text-left">
                    <svg width="36" height="36" fill="none" stroke="#171717" strokeWidth="2" className="mb-3 md:mb-4"><polygon points="20,6 34,14 34,30 20,38 6,30 6,14 20,6" strokeDasharray="4 2" /><polygon points="20,10 30,16 30,28 20,34 10,28 10,16 20,10" /></svg>
                    <h3 className="text-lg md:text-xl font-base mb-2 text-black">Visual design</h3>
                    <ul className="text-md md:text-md text-[#171717] font-light space-y-1">
                        <li>· Data visualization</li>
                        <li>· Internal proposal strategy</li>
                        <li>· Communication design</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

export default Section1Service;
