import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Section3Work: React.FC = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  const handleCaseStudyClick = (path: string, imageUrl: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (isNavigating) return;

    // Get the clicked image's position and dimensions
    const clickedImage = e.currentTarget.closest('.work-item')?.querySelector('img');
    if (clickedImage) {
      const rect = clickedImage.getBoundingClientRect();
      setImagePosition({
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height
      });
    }
    
    setSelectedImage(imageUrl);
    setIsNavigating(true);
    
    // Start zoom animation
    setTimeout(() => {
      navigate(path);
      // Reset states after navigation
      setTimeout(() => {
        setSelectedImage(null);
        setIsNavigating(false);
      }, 1200);
    }, 1200);
  };

  return (
    <>
      {/* Featured Work Section - adjusted spacing */}
      <section id="work" className="py-10 font-schibsted md:ml-11 md:py-48">
        <div className="mx-[10%]">
          <div>
            {/* Section Header */}
            <div className="mb-3 md:mb-3">
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
              <div className="work-item flex flex-col md:flex-row gap-8 md:gap-x-16 items-end mt-28">
                <div className="w-full md:w-[35%]">
                  <div className="max-w-xl">

                {/* Thick White Line */}
                <div className="w-[90%] h-[6px] bg-white mb-6 md:mb-8" />


                    <h3 className="text-[#C62828] text-sm mb-2 md:mb-4">Project 1</h3>
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                      Safeguarding first responders with next-level location services
                    </h4>
                    <p className="text-lg font-hanken md:text-lg font-[300] text-[#E9E9E9] mb-6 md:mb-8">
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
                    <p className="text-lg md:text-lg font-hanken font-extralight text-[#E9E9E9] mb-6 md:mb-8">
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
                    <p className="text-lg md:text-lg font-hanken font-extralight text-[#E9E9E9] mb-6 md:mb-8">
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
                    <p className="text-lg md:text-lg font-hanken font-extralight text-[#E9E9E9] mb-6 md:mb-8">
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
      <AnimatePresence mode="wait">
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
              ref={imageRef}
              src={selectedImage}
              style={{
                position: 'absolute',
                top: 0,
                left: 0
              }}
              initial={{
                transform: `translate(${imagePosition.x}px, ${imagePosition.y}px)`,
                width: imagePosition.width,
                height: imagePosition.height
              }}
              animate={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90vw',
                height: '90vh'
              }}
              exit={{
                transform: `translate(${imagePosition.x}px, ${imagePosition.y}px)`,
                width: imagePosition.width,
                height: imagePosition.height,
                position: 'absolute',
                top: 0,
                left: 0
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
                duration: 1.2
              }}
              className="object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Section3Work;
