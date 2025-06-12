import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import { ArrowRight, X } from 'lucide-react';

interface NavItem {
  label: string;
  path: string;
  color: string;
}

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  const isLightTheme = ['/services', '/company'].includes(location.pathname);
  const themeClass = isLightTheme ? 'light-theme' : 'dark-theme';

  const navTextColor = isLightTheme ? 'text-black' : 'text-white';
  const navAccentColor = isLightTheme ? '#000' : '#fff';

  const navItems: NavItem[] = [
    { label: 'Home', path: '/', color: navAccentColor },
    { label: 'Services', path: '/services', color: navAccentColor },
    { label: 'Work', path: '/work', color: navAccentColor },
    { label: 'Company', path: '/company', color: navAccentColor },
  ];

  return (
    <>
      {/* Header */}
      <header className="fixed top-0  pt-2 left-0 right-0 z-50 backdrop-blur-sm border-b border-neutral-800">
        <div className={`flex items-center justify-between px-4 md:px-8 py-4 ${themeClass}`}>
          {/* Left side: Logo + Nav links */}
          <div className="flex items-center flex-grow space-x-8">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 md:w-12 md:h-12 border-2 rounded-full flex items-center justify-center hover:border-[#b7b9b9] transition-colors nav-border">
                <span className="text-xl font-bold nav-text">R</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex font-manrope font-[300] items-center  space-x-10">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group ml-20 relative text-base ${navTextColor} hover:text-[#b7b9b9] transition-colors`}
                >
                  <span className="text-xs font-manrope font-extralight block" style={{ color: item.color }}>
                    0{index + 1}.
                  </span>
                  <span>{item.label}</span>

                  {/* Bottom-border hover line at navbar edge */}
                  <span
                    className="pointer-events-none absolute left-0 -bottom-[1px] h-[3px] w-0 group-hover:w-full transition-all duration-300 ease-in-out"
                    style={{ backgroundColor: item.color }}
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Button (far right) */}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={`md:inline-flex hidden items-center gap-3 text-base ${navTextColor} hover:text-[#b7b9b9] group`}
          >
            <span>Contact</span>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4 text-black" />
            </div>
          </Link>


          {/* Hamburger for mobile */}
          <div className="md:hidden z-[101]">
            <HamburgerMenu
              isOpen={isOpen}
              menuClicked={() => setIsOpen(!isOpen)}
              width={24}
              height={18}
              strokeWidth={2}
              rotate={0}
              color="white"
              borderRadius={0}
              animationDuration={0.4}
            />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-sm transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-8 space-y-6 relative">
          {/* Close Button */}
          <button className="absolute top-4 right-4 text-white" onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6" />
          </button>

          {/* Mobile Nav Links */}
          <nav className="flex flex-col items-center space-y-6">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${navTextColor} text-xl font-light text-center`}
                onClick={() => setIsOpen(false)}
              >
                <span className="block text-sm" style={{ color: item.color }}>
                  0{index + 1}.
                </span>
                {item.label}
              </Link>
            ))}

            {/* Contact */}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`inline-flex items-center space-x-2 text-lg ${navTextColor} hover:text-[#0093D7] bg-transparent`}
            >
              <span>Contact</span>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-black" />
              </div>
            </Link>

          </nav>
        </div>
      </div>
    </>
  );
};
