import React from "react";
import Section1Hero from "./section1/Section1";
import Section2Agencies from "./section2/Section2";
import Section3Work from "./section3/Section3";
import Section4Testimonials from "./section4/Section4";

const Home: React.FC = () => {
  return (
    <main className="bg-[#171717] text-white">
      <Section1Hero />
      <Section2Agencies />
      <Section3Work />
      <Section4Testimonials />
    </main>
  );
};

export default Home;