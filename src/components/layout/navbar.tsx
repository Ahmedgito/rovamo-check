import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  
  // Check if we're on a light theme page
  const isLightTheme = ['/services', '/company'].includes(location.pathname);
  
  // Theme-specific classes
  const themeClasses = {
    border: isLightTheme ? 'border-[#343434]' : 'border-zinc-800',
    background: isLightTheme ? 'bg-[#E9E9E9]/80' : 'bg-[#171717]/80',
    text: isLightTheme ? 'text-[#171717]' : 'text-white',
    borderColor: isLightTheme ? 'border-[#171717]' : 'border-white',
    mobileBackground: isLightTheme ? 'bg-[#E9E9E9]' : 'bg-[#171717]',
    separator: isLightTheme ? 'bg-[#343434]' : 'bg-zinc-800'
  };

  return (
    <>
      {/* Header */}
      <header className="fixed w-full z-[100] pt-4 md:pt-8">
        <div className={`mx-[2%] border ${themeClasses.border} ${themeClasses.background} backdrop-blur-sm`}>
          <div className="flex items-center justify-between px-4 md:px-6 py-4">
            {/* Logo and Separator - Left Side */}
            <div className="flex items-center">
              <Link to="/">
                <div className={`w-10 h-10 md:w-12 md:h-12 border-2 ${themeClasses.borderColor} rounded-full flex items-center justify-center hover:border-[#0093D7] transition-colors`}>
                  <span className={`text-xl font-bold ${themeClasses.text}`}>R</span>
                </div>
              </Link>
              <div className={`h-8 w-px ${themeClasses.separator} mx-6 md:mx-12 hidden md:block`} />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-between flex-1">
              <nav className="flex space-x-8 lg:space-x-16">
                <Link to="/" className="group relative">
                  <span className="text-[#007BC9] text-xs block">01.</span>
                  <span className={`text-base ${themeClasses.text} hover:text-[#0093D7] transition-colors relative`}>
                    Home
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#0093D7] group-hover:w-full transition-all duration-300 ease-in-out" />
                  </span>
                </Link>
                <Link to="/services" className="group relative">
                  <span className="text-[#0093D7] text-xs block">02.</span>
                  <span className={`text-base ${themeClasses.text} hover:text-[#0093D7] transition-colors relative`}>
                    Services
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#0093D7] group-hover:w-full transition-all duration-300 ease-in-out" />
                  </span>
                </Link>
                <Link to="/work" className="group relative">
                  <span className="text-[#0BBBA9] text-xs block">03.</span>
                  <span className={`text-base ${themeClasses.text} hover:text-[#0BBBA9] transition-colors relative`}>
                    Work
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#0BBBA9] group-hover:w-full transition-all duration-300 ease-in-out" />
                  </span>
                </Link>
                <Link to="/company" className="group relative">
                  <span className="text-[#C62828] text-xs block">04.</span>
                  <span className={`text-base ${themeClasses.text} hover:text-[#C62828] transition-colors relative`}>
                    Company
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#C62828] group-hover:w-full transition-all duration-300 ease-in-out" />
                  </span>
                </Link>
              </nav>

              {/* Contact Button */}
              <div className="mr-2">
                <Link to="/contact" className={`group relative inline-flex items-center space-x-2 text-base ${themeClasses.text} hover:text-[#0093D7] transition-colors`}>
                  <span className="relative">
                    Contact
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#0093D7] group-hover:w-full transition-all duration-300 ease-in-out" />
                  </span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
            
            {/* Mobile menu button - moved to right */}
            <button 
              className={`md:hidden ${themeClasses.text}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - centered content */}
      {mobileMenuOpen && (
        <div className={`md:hidden fixed inset-0 z-[90] ${themeClasses.mobileBackground}`}>
          <div className="min-h-screen flex flex-col items-center justify-center px-6">
            <nav className="flex flex-col space-y-8">
              <Link to="/" className="group text-center" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-[#007BC9] text-xs block">01.</span>
                <span className={`text-3xl font-light ${themeClasses.text}`}>Home</span>
              </Link>
              <Link to="/services" className="group text-center" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-[#0093D7] text-xs block">02.</span>
                <span className={`text-3xl font-light ${themeClasses.text}`}>Services</span>
              </Link>
              <Link to="/work" className="group text-center" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-[#0BBBA9] text-xs block">03.</span>
                <span className={`text-3xl font-light ${themeClasses.text}`}>Work</span>
              </Link>
              <Link to="/company" className="group text-center" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-[#C62828] text-xs block">04.</span>
                <span className={`text-3xl font-light ${themeClasses.text}`}>Company</span>
              </Link>
            </nav>
            <div className="mt-12 text-center">
              <Link to="/contact" className={`inline-flex items-center space-x-2 text-xl ${themeClasses.text}`}>
                <span>Contact</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 