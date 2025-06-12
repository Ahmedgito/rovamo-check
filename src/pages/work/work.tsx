import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
import { PageTransition } from '../../components/layout/page-transition';
import { Link } from 'react-router-dom';
import { BackgroundPaths } from '../../components/ui/background-paths';
import Section4Testimonials from '../home/section4/Section4';
import Section1Work from './section1/Section1';
import Section2Work from './section2/Section2';

function WorkPage() {
  return (
      <main className="bg-[#171717] text-white">
      
      <Section2Work/>
      <Section4Testimonials />
    </main>
  );
}

export default WorkPage; 