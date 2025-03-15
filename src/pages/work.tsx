import React from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { MagnetLines } from "../components/ui/magnet-lines";
import { motion } from "framer-motion";
import { PageTransition } from '../components/layout/page-transition';
import { Link } from 'react-router-dom';

function WorkPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#171717] text-[#E9E9E9]">
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
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-white mb-8 md:mb-16"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      Our Work
                    </motion.h2>
                    <motion.div 
                      className="flex items-start gap-4 md:gap-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <div className="w-16 md:w-32 h-1 bg-white mt-4 shrink-0" />
                      <p className="text-base sm:text-lg md:text-xl font-extralight leading-relaxed text-[#E9E9E9] max-w-xs">
                        Explore our portfolio of innovative digital solutions that 
                        have helped businesses transform and grow in the digital age.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Work Section */}
          <section className="py-24 md:py-32">
            <div className="mx-[2%]">
              <div className="px-4 md:pl-[calc(4rem)] md:pr-[calc(4rem)] lg:pl-[calc(6rem)] lg:pr-[calc(6rem)]">
                {/* Work Items */}
                <div className="space-y-16 md:space-y-32">
                  {/* Work Item 1 */}
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-16 items-start">
                    <div className="w-full md:w-[40%] lg:w-[35%]">
                      <div className="max-w-xl">
                        <h3 className="text-[#C62828] text-sm mb-2 md:mb-4">Project 1</h3>
                        <h4 className="text-xl md:text-2xl lg:text-4xl font-bold text-white mb-4">
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
                    <div className="w-full md:w-[60%] lg:w-[65%]">
                      <div className="relative aspect-square md:aspect-[4/3] overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1559028012-481c04fa702d"
                          alt="NextNav Project" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Work Item 2 - Reversed */}
                  <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-12 lg:gap-16 items-start">
                    <div className="w-full md:w-[40%] lg:w-[35%]">
                      <div className="max-w-xl">
                        <h3 className="text-[#0BBBA9] text-sm mb-2 md:mb-4">Project 2</h3>
                        <h4 className="text-xl md:text-2xl lg:text-4xl font-bold text-white mb-4">
                          Reimagining emergency response for the digital age
                        </h4>
                        <p className="text-lg md:text-xl font-extralight text-[#E9E9E9] mb-6 md:mb-8">
                          Designing a next-generation platform that helps emergency teams coordinate and respond faster in critical situations
                        </p>
                        <Link to="/work/emergency-response" className="inline-flex items-center text-white group">
                          <span className="mr-2">Read case study</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                    <div className="w-full md:w-[60%] lg:w-[65%]">
                      <div className="relative aspect-square md:aspect-[4/3] overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                          alt="Emergency Response Project" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Work Item 3 */}
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-16 items-start">
                    <div className="w-full md:w-[40%] lg:w-[35%]">
                      <div className="max-w-xl">
                        <h3 className="text-[#007BC9] text-sm mb-2 md:mb-4">Project 3</h3>
                        <h4 className="text-xl md:text-2xl lg:text-4xl font-bold text-white mb-4">
                          Building the future of digital healthcare
                        </h4>
                        <p className="text-lg md:text-xl font-extralight text-[#E9E9E9] mb-6 md:mb-8">
                          Creating an intuitive telehealth platform that connects patients with healthcare providers seamlessly
                        </p>
                        <Link to="/work/digital-healthcare" className="inline-flex items-center text-white group">
                          <span className="mr-2">Read case study</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                    <div className="w-full md:w-[60%] lg:w-[65%]">
                      <div className="relative aspect-square md:aspect-[4/3] overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
                          alt="Healthcare Platform" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Work Item 4 - Reversed */}
                  <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-12 lg:gap-16 items-start">
                    <div className="w-full md:w-[40%] lg:w-[35%]">
                      <div className="max-w-xl">
                        <h3 className="text-[#0093D7] text-sm mb-2 md:mb-4">Project 4</h3>
                        <h4 className="text-xl md:text-2xl lg:text-4xl font-bold text-white mb-4">
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
                    <div className="w-full md:w-[60%] lg:w-[65%]">
                      <div className="relative aspect-square md:aspect-[4/3] overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1563986768609-322da13575f3"
                          alt="Fintech Platform" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Work Item 5 */}
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-16 items-start">
                    <div className="w-full md:w-[40%] lg:w-[35%]">
                      <div className="max-w-xl">
                        <h3 className="text-[#0BBBA9] text-sm mb-2 md:mb-4">Project 5</h3>
                        <h4 className="text-xl md:text-2xl lg:text-4xl font-bold text-white mb-4">
                          Transforming retail with AI-powered analytics
                        </h4>
                        <p className="text-lg md:text-xl font-extralight text-[#E9E9E9] mb-6 md:mb-8">
                          Building an intelligent retail analytics platform that helps businesses make data-driven decisions
                        </p>
                        <Link to="/work/retail-analytics" className="inline-flex items-center text-white group">
                          <span className="mr-2">Read case study</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                    <div className="w-full md:w-[60%] lg:w-[65%]">
                      <div className="relative aspect-square md:aspect-[4/3] overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
                          alt="Retail Analytics Platform" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Work Item 6 - Reversed */}
                  <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-12 lg:gap-16 items-start">
                    <div className="w-full md:w-[40%] lg:w-[35%]">
                      <div className="max-w-xl">
                        <h3 className="text-[#C62828] text-sm mb-2 md:mb-4">Project 6</h3>
                        <h4 className="text-xl md:text-2xl lg:text-4xl font-bold text-white mb-4">
                          Redefining smart home automation
                        </h4>
                        <p className="text-lg md:text-xl font-extralight text-[#E9E9E9] mb-6 md:mb-8">
                          Creating an intuitive IoT platform that brings seamless automation to modern homes
                        </p>
                        <Link to="/work/smart-home" className="inline-flex items-center text-white group">
                          <span className="mr-2">Read case study</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                    <div className="w-full md:w-[60%] lg:w-[65%]">
                      <div className="relative aspect-square md:aspect-[4/3] overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1558002038-1055907df827"
                          alt="Smart Home Platform" 
                          className="w-full h-full object-cover"
                        />
                      </div>
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
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                  {/* Left Column - Content */}
                  <div className="w-full md:w-3/5">
                    <motion.h2 
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      Ready to build something great together?
                    </motion.h2>
                    <motion.div
                      className="flex items-start gap-4 md:gap-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-16 md:w-32 h-1 bg-white mt-4 shrink-0" />
                      <div className="space-y-8">
                        <p className="text-lg md:text-xl font-extralight text-[#E9E9E9]">
                          Let's discuss how we can help transform your business through innovative design and technology solutions.
                        </p>
                        <Link 
                          to="/contact"
                          className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[#0BBBA9] hover:bg-[#0BBBA9]/90 transition-colors rounded-full group"
                        >
                          <span>Work with us</span>
                          <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Column - MagnetLines */}
                  <div className="w-full md:w-2/5 mt-8 md:mt-0">
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
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-zinc-800">
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
                        className="w-full bg-transparent border-b border-zinc-800 py-2 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                      />
                      <button className="absolute right-0 top-1/2 -translate-y-1/2">
                        <ArrowRight className="w-6 h-6" />
                      </button>
                    </div>
                    
                    {/* Address */}
                    <div className="mt-32">
                      <p className="text-[#E9E9E9] mb-2">3579 17th St</p>
                      <p className="text-[#E9E9E9] mb-6">San Francisco, CA 94110</p>
                      <a href="#directions" className="text-white hover:text-[#0093D7] transition-colors">
                        Get directions
                      </a>
                    </div>
                  </div>

                  {/* Right Column - Navigation */}
                  <div className="flex flex-col justify-between">
                    <nav className="space-y-6 text-right">
                      <Link to="/" className="block text-7xl font-bold text-white hover:text-[#0093D7] transition-colors">
                        Home
                      </Link>
                      <Link to="/services" className="block text-7xl font-bold text-white hover:text-[#0093D7] transition-colors">
                        Services
                      </Link>
                      <Link to="/work" className="block text-7xl font-bold text-white hover:text-[#0093D7] transition-colors">
                        Work
                      </Link>
                      <Link to="/about" className="block text-7xl font-bold text-white hover:text-[#0093D7] transition-colors">
                        About
                      </Link>
                    </nav>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-16 md:mt-32 pt-8 border-t border-zinc-800">
                  <p className="text-sm text-[#E9E9E9]">© Rovamo 2024. All rights reserved.</p>
                  <Link to="/privacy" className="text-sm text-[#E9E9E9] hover:text-white transition-colors mt-4 md:mt-0">
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

export default WorkPage; 