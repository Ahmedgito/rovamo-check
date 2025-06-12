import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Section3Work: React.FC = () => {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleCaseStudyClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (isNavigating) return;
    
    setIsNavigating(true);
    navigate(path);
    
    // Reset navigation state after a short delay
    setTimeout(() => {
      setIsNavigating(false);
    }, 500);
  };

  return (
    <>
      {/* Featured Work Section - adjusted spacing */}
      <section id="work" className="py-10 font-manrope md:ml-11 md:py-48">
        <div className="mx-[10%]">
          <div>
            {/* Section Header */}
            <div className="mb-3 md:mb-3">
              {/* Top Heading */}
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[84px] font-[300] leading-none text-blackPage.text">
                Explore <br /> our work
              </h2>

              {/* Medium gap */}
              <div className="h-3" />

              {/* Line + Subheading Layout */}
              <div className="flex flex-col md:flex-row md:items-start md:space-x-12">
                {/* Thick White Line */}
                <div className="w-44 h-[6px] bg-white mb-6 md:mb-0" />

                {/* Subheading Text */}
                <motion.div
                  className="max-w-3xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                </motion.div>
              </div>  
            </div>
            {/* Work Items - adjusted spacing */}
            <div className="space-y-16 md:space-y-32">
              {/* Work Item 1 */}
              <div className="work-item flex flex-col md:flex-row gap-8 md:gap-x-16 items-end mt-28">
                <div className="w-full md:w-[35%]">
                  <div className="max-w-xl">

                {/* Thick White Line */}
                <div className="w-[90%] h-[6px] bg-white mb-6 md:mb-8" />


                    <h3 className="text-[#C62828] text-sm mb-2 md:mb-4">Project 1</h3>
                    <h4 className="text-2xl md:text-3xl font-[300] text-white mb-4 md:mb-6">
                      Safeguarding first responders with next-level location services
                    </h4>
                    <p className="text-lg font-manrope md:text-lg font-[300] text-[#E9E9E9] mb-6 md:mb-8">
                      How TM designed a next-gen navigation system for first responders to reliably find each other within multi-story buildings—without using GPS
                    </p>
                    <button 
                      onClick={(e) => handleCaseStudyClick('/work/nextnav', e)}
                      className="inline-flex items-center text-white group"
                    >
                      <span className="mr-2">Read case study</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
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
              <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-x-16 items-end ">
                <div className="w-full md:w-[35%]">
                  <div className="max-w-xl">


                {/* Thick White Line */}
                <div className="w-[90%] h-[6px] bg-white mb-6 md:mb-8" />

                    <h3 className="text-[#0BBBA9] text-sm mb-2 md:mb-4">Project 2</h3>
                    <h4 className="text-2xl md:text-3xl font-[300] text-white mb-4 md:mb-6">
                      Reimagining emergency response for the digital age
                    </h4>
                    <p className="text-lg md:text-lg font-manrope font-extralight text-[#E9E9E9] mb-6 md:mb-8">
                      Designing a next-generation platform that helps emergency teams coordinate and respond faster in critical situations
                    </p>
                    <button 
                      onClick={(e) => handleCaseStudyClick('/work/emergency', e)}
                      className="inline-flex items-center text-white group"
                    >
                      <span className="mr-2">Read case study</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
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
              <div className="flex flex-col md:flex-row gap-8 md:gap-x-16 items-end ">
                <div className="w-full md:w-[35%]">
                  <div className="max-w-xl">


                {/* Thick White Line */}
                <div className="w-[90%] h-[6px] bg-white mb-6 md:mb-8" />


                    <h3 className="text-[#007BC9] text-sm mb-2 md:mb-4">Project 3</h3>
                    <h4 className="text-2xl md:text-3xl font-[300] text-white mb-4 md:mb-6">
                      Building the future of digital healthcare
                    </h4>
                    <p className="text-lg md:text-lg font-manrope font-extralight text-[#E9E9E9] mb-6 md:mb-8">
                      Creating an intuitive telehealth platform that connects patients with healthcare providers seamlessly
                    </p>
                    <button 
                      onClick={(e) => handleCaseStudyClick('/work/healthcare', e)}
                      className="inline-flex items-center text-white group"
                    >
                      <span className="mr-2">Read case study</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
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
              <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-x-16 items-end">
                <div className="w-full md:w-[35%]">
                  <div className="max-w-xl">


                {/* Thick White Line */}
                <div className="w-[90%] h-[6px] bg-white mb-6 md:mb-8" />


                    <h3 className="text-[#0093D7] text-sm mb-2 md:mb-4">Project 4</h3>
                    <h4 className="text-2xl md:text-3xl font-[300] text-white mb-4 md:mb-6">
                      Revolutionizing fintech user experience
                    </h4>
                    <p className="text-lg md:text-lg font-manrope font-extralight text-[#E9E9E9] mb-6 md:mb-8">
                      Developing an innovative financial platform that simplifies complex transactions for both consumers and businesses
                    </p>
                    <button 
                      onClick={(e) => handleCaseStudyClick('/work/fintech', e)}
                      className="inline-flex items-center text-white group"
                    >
                      <span className="mr-2">Read case study</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
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
};

export default Section3Work;
