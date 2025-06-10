import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Section2Work: React.FC = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);

  const handleCaseStudyClick = (path: string, imageUrl: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (isNavigating) return;
    
    setSelectedImage(imageUrl);
    setIsNavigating(true);
    
    // Start zoom animation
    setTimeout(() => {
      navigate(path);
      // Reset states after navigation
      setTimeout(() => {
        setSelectedImage(null);
        setIsNavigating(false);
      }, 1000);
    }, 1200);
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const containerVariants = {
    hidden: { 
      scale: 1,
      opacity: 0.8
    },
    visible: { 
      scale: 1.2,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: { 
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { 
      scale: 1,
      filter: "brightness(1)"
    },
    visible: { 
      scale: 1.5,
      filter: "brightness(1.1)",
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: { 
      scale: 0.5,
      filter: "brightness(0.8)",
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <>
      {/* Featured Work Section - adjusted spacing */}
      <section id="work" className="py-44 font-schibsted md:ml-11 md:py-48">
        <div className="mx-[10%]">
          <div>
            {/* Section Header */}
            <div className="mb-3  md:mb-3">
              {/* Top Heading */}
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[84px] font-bold leading-none text-blackPage.text">
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
              <div className="flex flex-col md:flex-row gap-8 md:gap-x-16 items-end mt-28">
                <div className="w-full md:w-[35%]">
                  <div className="max-w-xl">

                {/* Thick White Line */}
                <div className="w-[90%] h-[6px] bg-white mb-6 md:mb-8" />


                    <h3 className="text-[#C62828] text-sm mb-2 md:mb-4">Project 1</h3>
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                      Safeguarding first responders with next-level location services
                    </h4>
                    <p className="text-lg md:text-lg font-[300] text-[#E9E9E9] mb-6 md:mb-8">
                      How TM designed a next-gen navigation system for first responders to reliably find each other within multi-story buildings—without using GPS
                    </p>
                    <button 
                      onClick={(e) => handleCaseStudyClick('/work/nextnav', 'https://images.unsplash.com/photo-1559028012-481c04fa702d', e)}
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
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                      Reimagining emergency response for the digital age
                    </h4>
                    <p className="text-lg md:text-lg font-extralight text-[#E9E9E9] mb-6 md:mb-8">
                      Designing a next-generation platform that helps emergency teams coordinate and respond faster in critical situations
                    </p>
                    <button 
                      onClick={(e) => handleCaseStudyClick('/work/emergency', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f', e)}
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
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                      Building the future of digital healthcare
                    </h4>
                    <p className="text-lg md:text-lg font-extralight text-[#E9E9E9] mb-6 md:mb-8">
                      Creating an intuitive telehealth platform that connects patients with healthcare providers seamlessly
                    </p>
                    <button 
                      onClick={(e) => handleCaseStudyClick('/work/healthcare', 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d', e)}
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
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                      Revolutionizing fintech user experience
                    </h4>
                    <p className="text-lg md:text-lg font-extralight text-[#E9E9E9] mb-6 md:mb-8">
                      Developing an innovative financial platform that simplifies complex transactions for both consumers and businesses
                    </p>
                    <button 
                      onClick={(e) => handleCaseStudyClick('/work/fintech', 'https://images.unsplash.com/photo-1563986768609-322da13575f3', e)}
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

      {/* Enhanced Zoom Animation Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            style={{ pointerEvents: 'none' }}
          >
            <motion.img
              src={selectedImage}
              initial={{ scale: 1 }}
              animate={{ scale: 1.5 }}
              exit={{ scale: 0.5 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1
              }}
              className="max-w-[90%] max-h-[90vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Section2Work;
