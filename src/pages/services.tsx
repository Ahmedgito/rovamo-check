import React from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { MagnetLines } from "../components/ui/magnet-lines";
import { motion } from "framer-motion";
import { PageTransition } from '../components/layout/page-transition';
import { Link } from 'react-router-dom';

function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#E9E9E9] text-[#171717]">
        <main className="relative z-0">
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center pt-24 md:pt-32">
            <div className="relative z-10 w-full mx-[2%]">
              <div className="flex flex-col md:flex-row pl-4 pr-4 md:pl-[calc(4rem)] md:pr-[calc(4rem)] lg:pl-[calc(6rem)] lg:pr-[calc(6rem)]">
                {/* MagnetLines - Shows first on mobile */}
                <div className="w-full md:w-2/5 order-1 md:order-2 flex items-center">
                  <MagnetLines 
                    rows={6}
                    columns={6}
                    containerSize="100%"
                    lineColor="#0BBBA9"
                    lineWidth="1.2vmin"
                    lineHeight="4vmin"
                    baseAngle={-45}
                    className="w-full h-64 md:h-80 lg:h-96"
                  />
                </div>
                
                {/* Content Column - Below animation on mobile, left side on desktop (60%) */}
                <div className="w-full md:w-3/5 flex items-center order-2 md:order-1 mt-12 md:mt-0">
                  <div>
                    <motion.h2 
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-[#000000] mb-8 md:mb-16"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      Our Services
                    </motion.h2>
                    <motion.div 
                      className="flex items-start gap-4 md:gap-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <div className="w-16 md:w-32 h-1 bg-[#343434] mt-4 shrink-0" />
                      <p className="text-base sm:text-lg md:text-xl font-extralight leading-relaxed text-[#171717] max-w-xs">
                        We combine strategy, design, and engineering to create 
                        transformative digital experiences that drive real business value.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Additional sections will go here */}
        </main>

        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-50">
            {/* Mobile menu content */}
          </div>
        )}
      </div>
    </PageTransition>
  );
}

export default ServicesPage; 