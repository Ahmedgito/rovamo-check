import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#171717] transition-colors duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-white">Home</Link>
        <Link to="/services" className="text-white">Services</Link>
        <Link to="/work" className="text-white">Work</Link>
        <Link to="/company" className="text-white">Company</Link>
      </div>
    </nav>
  );
};

export default Navbar; 