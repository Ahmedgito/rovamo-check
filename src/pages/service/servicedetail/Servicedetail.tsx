import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageTransition } from '../../../components/layout/page-transition';
import { Link } from 'react-router-dom';
import { MagnetLines } from '../../../components/ui/magnet-lines';
import Section4Testimonials from '../../home/section4/Section4';
import { servicesData, ServiceData } from '../../../data/servicesData';
import { MarqueeDemo } from '../../../components/ui/marquee-demo';

// Get all service IDs for navigation
const serviceIds = Object.keys(servicesData);

// Fallback data in case the service ID is not found
const defaultServiceData: ServiceData = {
  id: 'default',
  title: 'Service Not Found',
  client: 'N/A',
  type: 'N/A',
  year: 'N/A',
  technologies: [],
  heroImage: '',
  objective: 'The requested service could not be found.',
  description: 'Please check the URL or return to the services page.',
  features: [],
  images: [
    {
      src: 'https://th.bing.com/th/id/R.6c2caa5502acd8246e9e14cf7139cdcf?rik=PMCE2n4ACM4AQg&pid=ImgRaw&r=0',
      alt: 'Not Found',
      caption: 'Service not available',
    },
  ],
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const serviceData = serviceId && servicesData[serviceId]
    ? servicesData[serviceId]
    : defaultServiceData;

  // Get the next service for the "See more" section
  const getNextService = () => {
    if (!serviceId) return null;
    const currentIndex = serviceIds.indexOf(serviceId);
    const nextIndex = (currentIndex + 1) % serviceIds.length;
    const nextServiceId = serviceIds[nextIndex];
    return {
      id: nextServiceId,
      ...servicesData[nextServiceId]
    };
  };

  const nextProject = getNextService();
  const nextProjectKey = nextProject?.id;


  return (
    <PageTransition>
      <div className="min-h-screen md:ml-14 bg-[#171717] text-[#E9E9E9]">

        <section className="pt-32 pb-16 md:pt-40  md:pb-24 bg-[#171717]">
          <div className="mx-[2%]">
            <div className="px-4 md:px-[4rem] lg:px-[6rem] max-w-7xl">
              {/* Heading */}
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {serviceData.title}
              </motion.h1>

              {/* Sub Info */}
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex flex-wrap gap-4 text-[#E9E9E9]/60">
                  <span>{serviceData.client}</span>
                  <span>•</span>
                  <span>{serviceData.type}</span>
                  <span>•</span>
                  <span>{serviceData.year}</span>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={serviceData.heroImage}
                    alt={serviceData.title}
                    className="w-full h-full md:h-[600px] object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        {serviceData.stats && serviceData.stats.length > 0 && (
          <section className="bg-[#171717] max-w-7xl mx-auto border-t border-white/40">
            <div className="px-4 md:px-[4rem] lg:px-[6rem] max-w-7xl mx-auto py-12 md:py-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                {serviceData.stats.map((stat, index) => (
                  <div key={index}>
                    <h3 className="text-5xl font-bold text-white">{stat.value}</h3>
                    <p className="mt-2 text-white/80 text-sm sm:text-base">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}



        {/* Description Section */}
        <section className="bg-[#171717] max-w-7xl mx-auto px-4 md:px-[4rem] lg:px-[6rem] py-16 md:py-24">

          <h2 className="text-white text-4xl sm:text-5xl font-light mb-6">Description</h2>
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12">

            {/* Heading and line */}
            <div className="flex-shrink-0">
              <div className="w-24 h-1.5 mt-2 bg-white" />
            </div>

            {/* Text */}
            <p className="text-white/80 text-base sm:text-lg  leading-relaxed max-w-4xl">
              {serviceData.description}
            </p>
          </div>
        </section>

            

      {  serviceData.firstimages && serviceData.firstimages.length > 0 && (
      <section className=" max-w-7xl mx-auto mt-10 py-5 px-6 md:px-24 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
        
        {/* Text Content */}
        <div className="flex-1">
          <p className="text-lg leading-relaxed font-light">
          {serviceData.firstimages[0].text}
          </p>
        </div>

        {/* Image */}
        <div  className="flex-1">
          <img
          src={serviceData.firstimages[0].src}
            alt="AI Consulting"
            className="rounded-3xl md:h-[300px] shadow-lg w-full object-cover"
          />
        </div>

      </div>
    </section>
)}



        {serviceData.steps && serviceData.steps.length > 0 && (
          <section className="bg-[#171717] max-w-7xl mx-auto px-4 md:px-[4rem] lg:px-[6rem] py-16 md:py-24">
            {serviceData.steps.map((item, index) => (
              <div key={index} className="py-16">
                <h3 className="text-white text-2xl md:text-5xl font-light flex items-center gap-4">
                  <span className="text-white text-3xl md:text-5xl font-medium">{item.number}</span>
                  {item.title}
                </h3>

                <div className="flex flex-col md:flex-row mt-8 items-start gap-6 md:gap-12">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-1.5 mt-2 bg-white" />
                  </div>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-4xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </section>
        )}

        {serviceData.secondimages && serviceData.secondimages.length > 0 && (

          <section className="bg-[#171717] max-w-7xl mx-auto px-4 md:px-[4rem] py-5 md:py-5">
            {serviceData.secondimages.map((image, index) => (
              <div key={index} className="py-5 md:py-5">
                <img className='w-full h-full md:h-[450px] rounded-xl object-cover' src={image.src} alt={image.alt} />
              </div>
            ))}
          </section>

        )}



        {/* Mission-Critical CTA Section */}
        {nextProject && (
          <section className="py-10 md:pt-28 md:pb-10">
            <div className="mx-[2%]">
              <div className="px-4 sm:px-6 md:pl-[calc(4rem)] md:pr-[calc(4rem)] lg:pl-[calc(6rem)] lg:pr-[calc(6rem)]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-center">
                  {/* Left Grid */}
                  <div className="flex flex-col items-start md:col-span-2 w-full">
                    <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-white mb-6 sm:mb-8">
                      Have a mission-critical problem that needs solving?
                    </h2>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-3 text-base group mb-6 sm:mb-0 hover:text-[#FF3B3B] transition-colors"
                    >
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRight className="w-4 h-4 text-black" />
                      </div>
                      <span>Contact Us</span>
                    </Link>
                  </div>
                  {/* Next Project */}
                  <div className="flex flex-col items-start w-full md:col-span-2">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-extrabold leading-none text-white mb-4" style={{ lineHeight: 1 }}>
                      See more
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                      <Link to={`/service/${nextProjectKey}`} className="group relative block overflow-hidden rounded-xl">
                        <img
                          src={nextProject.heroImage}
                          alt={nextProject.title}
                          className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            <ArrowRight className="w-6 h-6 text-black" />
                          </div>
                        </div>
                      </Link>
                      <div className="flex flex-col justify-center">
                        <Link to={`/service/${nextProjectKey}`} className="text-[#FF3B3B] text-lg sm:text-2xl font-bold mb-2 hover:underline">
                          {nextProject.client}
                        </Link>
                        <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                          {nextProject.title}
                        </h3>
                        <p className="text-white/80 text-sm sm:text-base mb-4">
                          {nextProject.objective}
                        </p>
                        <Link
                          to={`/service/${nextProjectKey}`}
                          className="text-white font-bold hover:text-[#FF3B3B] transition-colors inline-flex items-center gap-2 group/readmore"
                        >
                          Next Service
                          <span className="inline-block transition-transform duration-300 group-hover/readmore:translate-x-1">
                            <ArrowRight size={18} />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="py-24 md:py-32">
          <div className="mx-[2%]">
            <div className="px-4 md:px-[4rem] lg:px-[6rem] flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="w-full md:w-3/5">
                <motion.h2
                  className="text-4xl md:text-5xl font-bold text-white mb-8"
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
                    <p className="text-xl font-extralight text-[#E9E9E9]">
                      Let’s discuss how we can help transform your business
                      through innovative design and technology solutions.
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
        </section>

        {/* Footer */}
        <Section4Testimonials />
      </div>
    </PageTransition>
  );
}

export default ServiceDetail;
