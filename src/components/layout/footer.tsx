import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
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
                <Link to="/" className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white hover:text-[#0093D7] transition-colors">
                  Home
                </Link>
                <Link to="/services" className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white hover:text-[#0093D7] transition-colors">
                  Services
                </Link>
                <Link to="/work" className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white hover:text-[#0093D7] transition-colors">
                  Work
                </Link>
                <Link to="/about" className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white hover:text-[#0093D7] transition-colors">
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
  );
};

export default Footer; 