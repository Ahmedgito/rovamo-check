import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import { RadarAnimation } from "../../../components/ui/radar-animation";

const Section2Services: React.FC = () => (
  <>
    {/* Services Section - adjusted spacing */}
    <section id="services" className="py-10 font-schibsted  md:ml-11 md:py-20">
      <div className="mx-[10%]">
        <div>
          {/* Section Header */}
          <div className="mb-16 md:mb-32">
            {/* Top Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[84px] font-bold leading-none text-blackPage.text">
              Designing for
              <br />
              impact
            </h2>

            {/* Medium gap */}
            <div className="h-10" />

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
                <p className="text-lg font-hanken md:text-lg font-light leading-relaxed text-[#E9E9E9]">
                  We help organizations leverage business strategy, emerging technology, and UX design to engineer entirely new ways to realize real-world, immediate value. Our clients span healthcare, cybersecurity, transportation, government, enterprise applications, financial services, consumer products, and other industries. Whether a pre-launch startup or a modernizing institution—organizations we work with are looking to reimagine themselves through emerging technology as a way to take control of their future and growth.
                </p>
              </motion.div>
            </div>
          </div>


          {/* Services Grid - adjusted for mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Service 1 */}
            <div className="group w-full">
              <div className=" w-full">
                <RadarAnimation color="#007BC9" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Take new businesses from Zero to 1
              </h3>
              <p className="text-base font-hanken md:text-lg font-extralight text-[#E9E9E9] mb-6">
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
              <p className="text-base font-hanken md:text-lg font-extralight text-[#E9E9E9] mb-6">
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
              <p className="text-base font-hanken md:text-lg font-extralight text-[#E9E9E9] mb-6">
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
