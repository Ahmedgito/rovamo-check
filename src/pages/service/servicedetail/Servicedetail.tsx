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
      <div className="min-h-screen md:ml-11 bg-[#171717] text-[#E9E9E9]">
        {/* Hero Section */}
        <section className="w-full">
          <div className="bg-[#171717] pt-40 py-10 text-center text-white px-4">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              {serviceData.title}
            </h1>
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-[#E9E9E9]/80">
              {serviceData.objective}
            </p>
          </div>

          <div className="md:h-[60vh] md:min-h-[500px] rounded-xl max-w-[80%] justify-center mx-auto overflow-hidden">
            <img
              src={serviceData.heroImage}
              alt={serviceData.title}
              className="h-full w-full object-cover object-center"
            />
          </div>

        </section>



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
