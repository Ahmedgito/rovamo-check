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

  const navItems: NavItem[] = [
    { label: 'Home', path: '/', color: '#0093D7' },
    { label: 'Services', path: '/services', color: '#0093D7' },
    { label: 'Work', path: '/work', color: '#0BBBA9' },
    { label: 'Company', path: '/company', color: '#C62828' },
  ];

  return (
    <>
      {/* Header */}
 <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-neutral-800">
  <div className={`flex items-center justify-between px-4 md:px-8 py-4 ${themeClass}`}>
    {/* Logo on left */}
    <Link to="/" className="flex items-center space-x-2">
      <div className="w-10 h-10 md:w-12 md:h-12 border-2 rounded-full flex items-center justify-center hover:border-[#0093D7] transition-colors nav-border">
        <span className="text-xl font-bold nav-text">R</span>
      </div>
    </Link>

    {/* Desktop Navigation */}
    <nav className="hidden md:flex items-center space-x-10">
      {/* ... nav items as before ... */}
    </nav>

    {/* Hamburger on right on mobile */}
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


{/* Mobile Top Drawer */}
<div
  className={`fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-sm transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
>
  <div className="flex flex-col items-center justify-center min-h-screen px-6 py-8 space-y-6 relative">
    {/* Close Button */}
    <button
      className="absolute top-4 right-4 text-white"
      onClick={() => setIsOpen(false)}
    >
      <X className="w-6 h-6" />
    </button>

    {/* Nav Links */}
    <nav className="flex flex-col items-center space-y-6">
      {navItems.map((item, index) => (
        <Link
          key={item.path}
          to={item.path}
          className="text-white text-xl font-light text-center"
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
        className="inline-flex items-center space-x-2 text-lg text-white hover:text-[#0093D7]"
      >
        <span>Contact</span>
        <ArrowRight className="w-5 h-5" />
      </Link>
    </nav>
  </div>
</div>
    </>
  );
};
