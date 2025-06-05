
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { RadarAnimation } from "../../components/ui/radar-animation";
import { BackgroundPaths } from "../../components/ui/background-paths";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-[#171717] text-[#E9E9E9]">
      <main className="relative">
        {/* Hero Section */}
                 <section className="relative h-screen flex items-center justify-center pt-0 md:pt-32 mb-[10%]">
                   <BackgroundPaths />
                   <div className="relative z-10 w-full px-6 sm:px-10 md:px-[10%] flex flex-col md:flex-row items-start justify-between">
                     {/* Left Column - 70% */}
                     <div className="flex flex-col items-start ml-10 justify-center w-full max-w-full md:max-w-[70%]">
                       <motion.h1 
                         className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-white mb-4 md:mb-8"
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8 }}
                       >
                         Future-proofing businesses through design
                       </motion.h1>
                       <motion.div 
                         className="flex flex-col w-full"
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8, delay: 0.2 }}
                       >
                         <p className="text-base sm:text-lg md:text-xl font-extralight leading-relaxed text-[#E9E9E9] mt-0 md:mt-4">
                           We are a design-led technology company that builds 
                           transformative digital products and experiences. Our team combines 
                           strategy, design, and engineering to drive innovation.
                         </p>
                       </motion.div>
                     </div>
                     {/* Right Column - 30% */}
                     <div className="w-full md:w-[30%]"></div>
                   </div>
                 </section>
       
                 {/* Services Section - adjusted spacing */}
                 <section id="services" className="py-24 ml-10 md:py-32">
                   <div className="mx-[10%]">
                     <div>
                       {/* Section Header */}
                       <div className="mb-16 md:mb-32">
                         <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-8 md:mb-16">
                           Designing for
                           <br />
                           impact
                         </h2>
                         <motion.div 
                           className="flex flex-col w-full"
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.8, delay: 0.2 }}
                         >
                           <p className="text-lg md:text-xl font-extralight leading-relaxed text-[#E9E9E9] max-w-xs">
                             At Rovamo, we help organizations leverage business strategy, emerging technology, and 
                             UX design to engineer entirely new ways to realize real-world, immediate value.
                           </p>
                         </motion.div>
                       </div>
       
                       {/* Services Grid - adjusted for mobile */}
                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                         {/* Service 1 */}
                         <div className="group w-full">
                           <div className="mb-16 w-full">
                             <RadarAnimation color="#007BC9" />
                           </div>
                           <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                             Take new businesses from Zero to 1
                           </h3>
                           <p className="text-base md:text-lg font-extralight text-[#E9E9E9] mb-6">
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
                           <p className="text-base md:text-lg font-extralight text-[#E9E9E9] mb-6">
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
                           <p className="text-base md:text-lg font-extralight text-[#E9E9E9] mb-6">
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
       
                 {/* Footer - adjusted spacing */}
                 <footer className="border-t border-zinc-800">
                   <div className="mx-[10%]">
                     <div className="py-16 md:py-32">
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
                           <nav className="space-y-4 md:space-y-6 text-right">
                             <a href="/" className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white hover:text-[#0093D7] transition-colors">
                               Home
                             </a>
                             <a href="/services" className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white hover:text-[#0093D7] transition-colors">
                               Services
                             </a>
                             <a href="/work" className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white hover:text-[#0093D7] transition-colors">
                               Work
                             </a>
                             <a href="/about" className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white hover:text-[#0093D7] transition-colors">
                               About
                             </a>
                           </nav>
                         </div>
                       </div>
       
                       {/* Bottom Bar */}
                       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-16 md:mt-32 pt-8 border-t border-zinc-800">
                         <p className="text-sm text-[#E9E9E9]">© Rovamo 2024. All rights reserved.</p>
                         <a href="/privacy" className="text-sm text-[#E9E9E9] hover:text-white transition-colors mt-4 md:mt-0">
                           Privacy Policy
                         </a>
                       </div>
                     </div>
                   </div>
                 </footer>
      </main>
    </div>
  );
};

export default Home;
