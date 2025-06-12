import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Section4Testimonials: React.FC = () => (
  <>
    {/* Footer - adjusted spacing */}
    <motion.footer className="md:ml-11" {...fadeInUp}>
      <div className="mx-[10%]">
        <motion.div className="py-16 md:py-10" {...fadeInUp}>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32" {...fadeInUp}>
            {/* Left Column - Newsletter */}
            <motion.div {...fadeInUp}>
              <motion.h3 className="text-2xl mb-8" {...fadeInUp}>
                Sign up for our newsletter
              </motion.h3>
              <motion.div className="relative max-w-md" {...fadeInUp}>
                <motion.input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-transparent border-b border-zinc-800 py-2 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  {...fadeInUp}
                />
                <motion.button className="absolute right-0 top-2 -translate-y-1/2" {...fadeInUp}>
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
              </motion.div>

              {/* Address */}
              <motion.div className="mt-8" {...fadeInUp}>
                <motion.p className="text-[#E9E9E9] mb-2" {...fadeInUp}>3579 17th St</motion.p>
                <motion.p className="text-[#E9E9E9] mb-6" {...fadeInUp}>San Francisco, CA 94110</motion.p>
                <motion.a
                  href="#directions"
                  className="text-white hover:text-[#0093D7] transition-colors"
                  {...fadeInUp}
                >
                  Get directions
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Column - Navigation */}
            <motion.div className="flex flex-col justify-between" {...fadeInUp}>
              <motion.nav className="space-y-4 md:space-y-2 md:mt-0 text-left" {...fadeInUp}>
                {["Home", "Services", "Work", "About"].map((label, idx) => (
                  <motion.a
                    key={label}
                    href={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                    className="block text-4xl sm:text-5xl md:text-7xl lg:text-7xl text-white hover:text-[#0093D7] transition-colors"
                    {...fadeInUp}
                    transition={{ duration: 0.6, delay: 0.1 * idx }}
                  >
                    {label}
                  </motion.a>
                ))}
              </motion.nav>
            </motion.div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-16 md:mt-10 pt-8 border-t border-zinc-800" {...fadeInUp}>
            <motion.p className="text-sm text-[#E9E9E9]" {...fadeInUp}>
              © Rovamo 2024. All rights reserved.
            </motion.p>
            <motion.a
              href="/privacy"
              className="text-sm text-[#E9E9E9] hover:text-white transition-colors mt-4 md:mt-0"
              {...fadeInUp}
            >
              Privacy Policy
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  </>
);

export default Section4Testimonials;
