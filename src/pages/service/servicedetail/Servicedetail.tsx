import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageTransition } from '../../../components/layout/page-transition';
import { Link } from 'react-router-dom';
import { MagnetLines } from '../../../components/ui/magnet-lines';
import Section4Testimonials from '../../home/section4/Section4';

const dummyProjectData = {
  title: 'Lorem Title',
  client: 'Lorem Client',
  type: 'Design & Development',
  year: '2025',
  technologies: ['React', 'Node.js', 'Tailwind', 'Framer Motion'],
  heroImage: 'https://via.placeholder.com/1200x600',
  objective:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut ligula tempor laoreet.',
  images: [
    {
      src: 'https://via.placeholder.com/800x450',
      alt: 'Image 1',
      caption: 'Caption for Image 1',
    },
    {
      src: 'https://via.placeholder.com/800x450',
      alt: 'Image 2',
      caption: 'Caption for Image 2',
    },
  ],
  results: [
    'Result point one goes here.',
    'Another result point for showcase.',
    'Significant outcome of this lorem project.',
  ],
};

const dummyNextProject = {
  title: 'Next Lorem Title',
  client: 'Next Client',
  heroImage: 'https://via.placeholder.com/400x600',
};

function CaseStudyPage() {
  const projectData = dummyProjectData;
  const nextProject = dummyNextProject;
  const nextProjectKey = 'dummy-next';

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#171717] text-[#E9E9E9]">
        <main className="relative z-0 md:ml-14">
          {/* Hero Section */}
          <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#171717]">
            <div className="mx-[2%]">
              <div className="px-4 md:px-[4rem] lg:px-[6rem] max-w-7xl">
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {projectData.title}
                </motion.h1>
                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="flex flex-wrap gap-4 text-[#E9E9E9]/60">
                    <span>{projectData.client}</span>
                    <span>•</span>
                    <span>{projectData.type}</span>
                    <span>•</span>
                    <span>{projectData.year}</span>
                  </div>
                </motion.div>
                <motion.div
                  className="mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={projectData.heroImage}
                      alt={projectData.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Project Info Section */}
          <section className="py-24 md:py-10">
            <div className="mx-[2%]">
              <div className="px-4 md:px-[4rem] lg:px-[6rem]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-zinc-800 pt-8">
                  <div>
                    <h3 className="text-sm text-[#0093D7] mb-2">Client</h3>
                    <p className="text-xl font-light">{projectData.client}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-[#0093D7] mb-2">Type</h3>
                    <p className="text-xl font-light">{projectData.type}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-[#0093D7] mb-2">Year</h3>
                    <p className="text-xl font-light">{projectData.year}</p>
                  </div>
                </div>

                <div className="mt-16 md:mt-32">
                  <div className="flex items-start gap-4 md:gap-8">
                    <div className="w-16 md:w-32 h-1 bg-white mt-4 shrink-0" />
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-8">
                        Technologies
                      </h2>
                      <div className="flex flex-wrap gap-4">
                        {projectData.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 border border-zinc-800 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Objective Section */}
          <section className="py-5 md:py-10">
            <div className="mx-[2%]">
              <div className="px-4 md:px-[4rem] lg:px-[6rem]">
                <div className="flex items-start gap-4 md:gap-8">
                  <div className="w-16 md:w-32 h-1 bg-white mt-4 shrink-0" />
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-8">
                      Objective
                    </h2>
                    <p className="text-lg md:text-xl font-light leading-relaxed">
                      {projectData.objective}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Project Images */}
          <section className="py-24 md:py-32">
            <div className="mx-[2%]">
              <div className="px-4 md:px-[4rem] lg:px-[6rem] space-y-32">
                {projectData.images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {image.caption && (
                      <p className="mt-4 text-sm text-[#E9E9E9]/60">
                        {image.caption}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="py-5 md:py-10">
            <div className="mx-[2%]">
              <div className="px-4 md:px-[4rem] lg:px-[6rem]">
                <div className="flex items-start gap-4 md:gap-8">
                  <div className="w-16 md:w-32 h-1 bg-white mt-4 shrink-0" />
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-8">
                      Results
                    </h2>
                    <ul className="space-y-6">
                      {projectData.results.map((result, index) => (
                        <li
                          key={index}
                          className="text-lg md:text-xl font-light leading-relaxed flex items-start gap-4"
                        >
                          <span className="w-2 h-2 bg-[#0093D7] rounded-full mt-2 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission-Critical CTA */}
          <section className="py-10 md:pt-28 md:pb-10">
            <div className="mx-[2%]">
              <div className="px-4 md:px-[4rem] lg:px-[6rem] grid md:grid-cols-4 gap-10 items-center">
                <div className="flex flex-col items-start md:col-span-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Have a mission-critical problem that needs solving?
                  </h2>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 text-base group"
                  >
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight className="w-4 h-4 text-black" />
                    </div>
                    <span>Contact Us</span>
                  </Link>
                </div>

                <div className="md:col-span-1">
                  <h2 className="text-5xl font-extrabold text-white mb-4">
                    See more
                  </h2>
                  <img
                    src={nextProject.heroImage}
                    alt={nextProject.title}
                    className="aspect-[11/16] object-cover rounded-xl"
                  />
                </div>

                <div className="flex flex-col justify-end">
                  <Link
                    to={`/work/${nextProjectKey}`}
                    className="text-[#FF3B3B] text-2xl font-bold mb-2 hover:underline"
                  >
                    {nextProject.client}
                  </Link>
                  <p className="text-white text-lg mb-2">
                    {nextProject.title}
                  </p>
                  <Link
                    to={`/work/${nextProjectKey}`}
                    className="text-white font-bold hover:underline text-base"
                  >
                    Read case study
                  </Link>
                </div>
              </div>
            </div>
          </section>

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
        </main>
      </div>
    </PageTransition>
  );
}

export default CaseStudyPage;
