import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Section3Work: React.FC = () => (
    <>
  {/* Featured Work Section - adjusted spacing */}
                 <section id="work" className="py-24 md:py-32">
                   <div className="mx-[10%]">
                     <div>
                       {/* Section Header */}
                       <div className="mb-16 md:mb-32">
                         <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-8 md:mb-16">
                           Explore our work
                         </h2>
                         <motion.div 
                           className="flex flex-col w-full"
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.8, delay: 0.2 }}
                         >
                           <p className="text-lg md:text-xl font-extralight leading-relaxed text-[#E9E9E9] max-w-xs">
                             How TM designed a next-gen navigation system for first responders to reliably find each other within multi-story buildings—without using GPS
                           </p>
                         </motion.div>
                       </div>
       
                       {/* Work Items - adjusted spacing */}
                       <div className="space-y-16 md:space-y-32">
                         {/* Work Item 1 */}
                         <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start min-h-screen">
                           <div className="w-full md:w-[35%]">
                             <div className="max-w-xl">
                               <h3 className="text-[#C62828] text-sm mb-2 md:mb-4">Project 1</h3>
                               <h4 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                                 Safeguarding first responders with next-level location services
                               </h4>
                               <p className="text-lg md:text-xl font-extralight text-[#E9E9E9] mb-6 md:mb-8">
                                 How TM designed a next-gen navigation system for first responders to reliably find each other within multi-story buildings—without using GPS
                               </p>
                               <Link to="/work/nextnav" className="inline-flex items-center text-white group">
                                 <span className="mr-2">Read case study</span>
                                 <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                               </Link>
                             </div>
                           </div>
                           <div className="w-full md:w-[65%]">
                             <div className="relative aspect-[4/3] overflow-hidden">
                               <img 
                                 src="https://images.unsplash.com/photo-1559028012-481c04fa702d"
                                 alt="NextNav Project" 
                                 className="w-full h-full object-cover"
                               />
                             </div>
                           </div>
                         </div>
       
                         {/* Work Item 2 - Reversed */}
                         <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-16 items-start min-h-screen">
                           <div className="w-full md:w-[35%]">
                             <div className="max-w-xl">
                               <h3 className="text-[#0BBBA9] text-sm mb-2 md:mb-4">Project 2</h3>
                               <h4 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                                 Reimagining emergency response for the digital age
                               </h4>
                               <p className="text-lg md:text-xl font-extralight text-[#E9E9E9] mb-6 md:mb-8">
                                 Designing a next-generation platform that helps emergency teams coordinate and respond faster in critical situations
                               </p>
                               <Link to="/work/emergency" className="inline-flex items-center text-white group">
                                 <span className="mr-2">Read case study</span>
                                 <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                               </Link>
                             </div>
                           </div>
                           <div className="w-full md:w-[65%]">
                             <div className="relative aspect-[4/3] overflow-hidden">
                               <img 
                                 src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                                 alt="Emergency Response Project" 
                                 className="w-full h-full object-cover"
                               />
                             </div>
                           </div>
                         </div>
       
                         {/* Work Item 3 */}
                         <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start min-h-screen">
                           <div className="w-full md:w-[35%]">
                             <div className="max-w-xl">
                               <h3 className="text-[#007BC9] text-sm mb-2 md:mb-4">Project 3</h3>
                               <h4 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                                 Building the future of digital healthcare
                               </h4>
                               <p className="text-lg md:text-xl font-extralight text-[#E9E9E9] mb-6 md:mb-8">
                                 Creating an intuitive telehealth platform that connects patients with healthcare providers seamlessly
                               </p>
                               <Link to="/work/healthcare" className="inline-flex items-center text-white group">
                                 <span className="mr-2">Read case study</span>
                                 <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                               </Link>
                             </div>
                           </div>
                           <div className="w-full md:w-[65%]">
                             <div className="relative aspect-[4/3] overflow-hidden">
                               <img 
                                 src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
                                 alt="Healthcare Platform" 
                                 className="w-full h-full object-cover"
                               />
                             </div>
                           </div>
                         </div>
       
                         {/* Work Item 4 - Reversed */}
                         <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-16 items-start min-h-screen">
                           <div className="w-full md:w-[35%]">
                             <div className="max-w-xl">
                               <h3 className="text-[#0093D7] text-sm mb-2 md:mb-4">Project 4</h3>
                               <h4 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                                 Revolutionizing fintech user experience
                               </h4>
                               <p className="text-lg md:text-xl font-extralight text-[#E9E9E9] mb-6 md:mb-8">
                                 Developing an innovative financial platform that simplifies complex transactions for both consumers and businesses
                               </p>
                               <Link to="/work/fintech" className="inline-flex items-center text-white group">
                                 <span className="mr-2">Read case study</span>
                                 <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                               </Link>
                             </div>
                           </div>
                           <div className="w-full md:w-[65%]">
                             <div className="relative aspect-[4/3] overflow-hidden">
                               <img 
                                 src="https://images.unsplash.com/photo-1563986768609-322da13575f3"
                                 alt="Fintech Platform" 
                                 className="w-full h-full object-cover"
                               />
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </section>
       </>
);

export default Section3Work;
