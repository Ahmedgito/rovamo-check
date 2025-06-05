import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import { RadarAnimation } from "../../../components/ui/radar-animation";

const Section2Services: React.FC = () => (
    <>
  {/* Services Section - adjusted spacing */}
                 <section id="services" className="py-24 ml-10 md:py-32">
                   <div className="mx-[10%]">
                     <div>
                       {/* Section Header */}
                       <div className="mb-16 md:mb-32">
                         <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-8 md:mb-16">
                           Designing for
                           <br />
                           impact
                         </h2>
                         <motion.div 
                           className="flex flex-col w-full"
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.8, delay: 0.2 }}
                         >
                           <p className="text-lg md:text-xl font-extralight leading-relaxed text-[#E9E9E9] max-w-xs">
                             At Rovamo, we help organizations leverage business strategy, emerging technology, and 
                             UX design to engineer entirely new ways to realize real-world, immediate value.
                           </p>
                         </motion.div>
                       </div>
       
                       {/* Services Grid - adjusted for mobile */}
                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                         {/* Service 1 */}
                         <div className="group w-full">
                           <div className="mb-16 w-full">
                             <RadarAnimation color="#007BC9" />
                           </div>
                           <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                             Take new businesses from Zero to 1
                           </h3>
                           <p className="text-base md:text-lg font-extralight text-[#E9E9E9] mb-6">
                             Leading startups through the process of designing and launching a new product.
                           </p>
                           <a href="#" className="inline-flex items-center text-[#007BC9] group-hover:text-[#0093D7] transition-colors">
                             <span className="mr-2">Learn more</span>
                             <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                           </a>
                         </div>
       
                         {/* Service 2 */}
                         <div className="group w-full">
                           <div className="mb-16 w-full">
                             <RadarAnimation color="#0093D7" />
                           </div>
                           <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                             Reimagine an existing product for scale
                           </h3>
                           <p className="text-base md:text-lg font-extralight text-[#E9E9E9] mb-6">
                             Kickstarting growth through fully rearchitecting a design experience.
                           </p>
                           <a href="#" className="inline-flex items-center text-[#0093D7] group-hover:text-[#0BBBA9] transition-colors">
                             <span className="mr-2">Learn more</span>
                             <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                           </a>
                         </div>
       
                         {/* Service 3 */}
                         <div className="group w-full">
                           <div className="mb-16 w-full">
                             <RadarAnimation color="#0BBBA9" />
                           </div>
                           <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                             Innovate within an institution
                           </h3>
                           <p className="text-base md:text-lg font-extralight text-[#E9E9E9] mb-6">
                             Guiding the design of strategic initiatives within established businesses looking to modernize.
                           </p>
                           <a href="#" className="inline-flex items-center text-[#0BBBA9] group-hover:text-[#C62828] transition-colors">
                             <span className="mr-2">Learn more</span>
                             <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                           </a>
                         </div>
                       </div>
                     </div>
                   </div>
                 </section>
                 </>
);

export default Section2Services;
