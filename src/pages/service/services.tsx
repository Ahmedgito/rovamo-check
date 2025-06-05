import React from 'react';
import { ArrowRight } from 'lucide-react';
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
          <section className="relative h-screen flex items-center justify-center pt-0 md:pt-32 mb-[10%]">
            <div className="relative z-10 w-full px-6 sm:px-10 md:px-[10%] flex flex-col md:flex-row items-start justify-between">
              {/* Left Column - 70% */}
              <div className="flex flex-col items-start justify-center w-full max-w-full md:max-w-[70%]">
                <motion.h2 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-[#000000] mb-4 md:mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Our Services
                </motion.h2>
                <motion.div 
                  className="flex flex-col w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <p className="text-base sm:text-lg md:text-xl font-extralight leading-relaxed text-[#171717] mt-0 md:mt-4">
                    We combine strategy, design, and engineering to create 
                    transformative digital experiences that drive real business value.
                  </p>
                </motion.div>
              </div>
              {/* Right Column - 30% */}
              <div className="w-full md:w-[30%]"></div>
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