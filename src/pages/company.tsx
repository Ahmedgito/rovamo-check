import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MagnetLines } from "../components/ui/magnet-lines";
import { motion } from "framer-motion";
import { PageTransition } from '../components/layout/page-transition';
import { Link } from 'react-router-dom';

function CompanyPage() {
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
                      className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-[#171717] mb-8 md:mb-16"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      We specialize in
                      <br />
                      problem solving
                    </motion.h2>
                    <motion.div 
                      className="flex items-start gap-4 md:gap-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <div className="w-16 md:w-32 h-1 bg-[#171717] mt-4 shrink-0" />
                      <p className="text-base sm:text-lg md:text-xl font-extralight leading-relaxed text-[#171717] max-w-xs">
                        We're a team of strategists, designers, and engineers who are passionate about 
                        solving complex problems through innovative digital solutions.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-24 md:py-32">
            <div className="mx-[2%]">
              <div className="px-4 md:pl-[calc(4rem)] md:pr-[calc(4rem)] lg:pl-[calc(6rem)] lg:pr-[calc(6rem)]">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 md:mb-24">Our Values</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                  {/* Value Card 1 */}
                  <motion.div 
                    className="border border-[#343434] p-8 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-[#0093D7] text-sm mb-4">01</h3>
                    <h4 className="text-xl font-bold mb-4">Innovation First</h4>
                    <p className="text-base font-light leading-relaxed">
                      We push boundaries and embrace new technologies to create cutting-edge solutions.
                    </p>
                  </motion.div>

                  {/* Value Card 2 */}
                  <motion.div 
                    className="border border-[#343434] p-8 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-[#0BBBA9] text-sm mb-4">02</h3>
                    <h4 className="text-xl font-bold mb-4">User-Centered</h4>
                    <p className="text-base font-light leading-relaxed">
                      Every decision we make is focused on creating value for our users.
                    </p>
                  </motion.div>

                  {/* Value Card 3 */}
                  <motion.div 
                    className="border border-[#343434] p-8 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-[#C62828] text-sm mb-4">03</h3>
                    <h4 className="text-xl font-bold mb-4">Quality Driven</h4>
                    <p className="text-base font-light leading-relaxed">
                      We maintain the highest standards in everything we deliver.
                    </p>
                  </motion.div>

                  {/* Value Card 4 */}
                  <motion.div 
                    className="border border-[#343434] p-8 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-[#007BC9] text-sm mb-4">04</h3>
                    <h4 className="text-xl font-bold mb-4">Collaborative Spirit</h4>
                    <p className="text-base font-light leading-relaxed">
                      We believe great ideas come from diverse perspectives working together.
                    </p>
                  </motion.div>

                  {/* Value Card 5 */}
                  <motion.div 
                    className="border border-[#343434] p-8 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-[#0093D7] text-sm mb-4">05</h3>
                    <h4 className="text-xl font-bold mb-4">Continuous Learning</h4>
                    <p className="text-base font-light leading-relaxed">
                      We're always evolving, learning, and improving our craft.
                    </p>
                  </motion.div>

                  {/* Value Card 6 */}
                  <motion.div 
                    className="border border-[#343434] p-8 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-[#0BBBA9] text-sm mb-4">06</h3>
                    <h4 className="text-xl font-bold mb-4">Impact Focused</h4>
                    <p className="text-base font-light leading-relaxed">
                      We measure success by the real-world impact of our solutions.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Founder Section */}
          <section className="py-24 md:py-32">
            <div className="mx-[2%]">
              <div className="px-4 md:pl-[calc(4rem)] md:pr-[calc(4rem)] lg:pl-[calc(6rem)] lg:pr-[calc(6rem)]">
                <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
                  <div className="w-full md:w-1/2">
                    <div className="aspect-[4/5] overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                        alt="Founder" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-[#0093D7] text-sm mb-4">Founder</h3>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">John Smith</h2>
                    <p className="text-lg font-light leading-relaxed mb-8">
                      With over 15 years of experience in digital product design and technology, 
                      John has led numerous successful projects for Fortune 500 companies and 
                      innovative startups alike. His vision for Rovamo stems from a deep belief 
                      that thoughtful design and technology can solve complex business challenges 
                      while creating meaningful user experiences.
                    </p>
                    <div className="flex gap-6">
                      <a href="#linkedin" className="text-[#0093D7] hover:text-[#007BC9] transition-colors">LinkedIn</a>
                      <a href="#twitter" className="text-[#0093D7] hover:text-[#007BC9] transition-colors">Twitter</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 md:py-32">
            <div className="mx-[2%]">
              <div className="px-4 md:pl-[calc(4rem)] md:pr-[calc(4rem)] lg:pl-[calc(6rem)] lg:pr-[calc(6rem)]">
                <div className="max-w-4xl">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#171717] mb-8">
                    Ready to build something great together?
                  </h2>
                  <p className="text-lg md:text-xl font-extralight text-[#171717] mb-12 max-w-2xl">
                    Let's discuss how we can help transform your business through innovative design and technology solutions.
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[#0093D7] hover:bg-[#007BC9] transition-colors rounded-full group"
                  >
                    <span>Work with us</span>
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-[#343434]">
            <div className="mx-[2%]">
              <div className="px-4 md:pl-[calc(4rem)] md:pr-[calc(4rem)] lg:pl-[calc(6rem)] lg:pr-[calc(6rem)] py-16 md:py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                  {/* Left Column - Newsletter */}
                  <div>
                    <h3 className="text-2xl font-light mb-8">Sign up for our newsletter</h3>
                    <div className="relative max-w-md">
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="w-full bg-transparent border-b border-[#343434] py-2 pr-12 text-[#171717] placeholder-gray-500 focus:outline-none focus:border-[#171717] transition-colors"
                      />
                      <button className="absolute right-0 top-1/2 -translate-y-1/2">
                        <ArrowRight className="w-6 h-6 text-[#171717]" />
                      </button>
                    </div>
                    
                    {/* Address */}
                    <div className="mt-32">
                      <p className="text-[#171717] mb-2">3579 17th St</p>
                      <p className="text-[#171717] mb-6">San Francisco, CA 94110</p>
                      <a href="#directions" className="text-[#171717] hover:text-[#0093D7] transition-colors">
                        Get directions
                      </a>
                    </div>
                  </div>

                  {/* Right Column - Navigation */}
                  <div className="flex flex-col justify-between">
                    <nav className="space-y-4 md:space-y-6 text-right">
                      <Link to="/" className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#171717] hover:text-[#0093D7] transition-colors">
                        Home
                      </Link>
                      <Link to="/services" className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#171717] hover:text-[#0093D7] transition-colors">
                        Services
                      </Link>
                      <Link to="/work" className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#171717] hover:text-[#0093D7] transition-colors">
                        Work
                      </Link>
                      <Link to="/company" className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#171717] hover:text-[#0093D7] transition-colors">
                        Company
                      </Link>
                    </nav>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-16 md:mt-32 pt-8 border-t border-[#343434]">
                  <p className="text-sm text-[#171717]">© Rovamo 2024. All rights reserved.</p>
                  <Link to="/privacy" className="text-sm text-[#171717] hover:text-[#0093D7] transition-colors mt-4 md:mt-0">
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </PageTransition>
  );
}

export default CompanyPage; 