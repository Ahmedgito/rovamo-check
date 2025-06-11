import React from "react";
import Section1Service from "./section1/Section1";
import OurProcess from "./section2/Section2";


const Services: React.FC = () => {
  return (
    <main className="bg-[#E9E9E9] min-h-screen text-[#171717]">
      <Section1Service/>
      <OurProcess/>
    </main>
  );
};

export default Services;