import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
import { PageTransition } from '../components/layout/page-transition';
import { Link, useParams } from 'react-router-dom';
import { MagnetLines } from '../components/ui/magnet-lines';
import Section4Testimonials from './home/section4/Section4';

interface ProjectInfo {
  title: string;
  client: string;
  type: string;
  year: string;
  technologies: string[];
  heroImage: string;
  objective: string;
  description: string;
  results: string[];
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

// Add this type for our projects data
interface ProjectsData {
  [key: string]: ProjectInfo;
}

// Example projects data
const projectsData: ProjectsData = {
  nextnav: {
    title: "Safeguarding first responders with next-level location services",
    client: "NextNav",
    type: "UX/UI Design, Development",
    year: "2023",
    technologies: ["React", "Node.js", "WebGL", "Three.js", "AWS"],
    heroImage: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    objective: "Design and develop a next-generation navigation system that enables first responders to reliably locate each other within multi-story buildings without relying on GPS technology.",
    description: "In emergency situations, every second counts. Traditional GPS systems fall short in providing accurate vertical positioning, especially inside buildings. Our solution combines cutting-edge technology with intuitive design to solve this critical challenge.",
    results: [
      "50% reduction in response time",
      "98% accuracy in vertical positioning",
      "Successful deployment across 12 major cities"
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        alt: "Dashboard Interface",
        caption: "Real-time monitoring dashboard showing emergency personnel locations"
      },
      {
        src: "https://images.unsplash.com/photo-1586936893354-362ad6ae47ba",
        alt: "Mobile App",
        caption: "Mobile interface for field operations"
      }
    ]
  },
  emergency: {
    title: "Reimagining emergency response for the digital age",
    client: "EmergencyTech",
    type: "UX/UI Design, Development",
    year: "2023",
    technologies: ["React Native", "Node.js", "Firebase", "WebRTC"],
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    objective: "Design and develop a next-generation platform that helps emergency teams coordinate and respond faster in critical situations.",
    description: "Emergency response teams need real-time coordination and communication tools that work reliably under pressure. We created a platform that streamlines emergency response workflows and improves team coordination.",
    results: [
      "30% reduction in response coordination time",
      "95% user satisfaction rate",
      "Deployed across 8 emergency response units"
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        alt: "Emergency Response Dashboard",
        caption: "Real-time emergency response coordination dashboard"
      },
      {
        src: "https://images.unsplash.com/photo-1586936893354-362ad6ae47ba",
        alt: "Mobile Interface",
        caption: "Mobile app interface for field teams"
      }
    ]
  },
  healthcare: {
    title: "Building the future of digital healthcare",
    client: "HealthTech Inc",
    type: "UX/UI Design, Development",
    year: "2023",
    technologies: ["React", "Node.js", "WebRTC", "FHIR API"],
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    objective: "Create an intuitive telehealth platform that seamlessly connects patients with healthcare providers.",
    description: "The healthcare industry needed a modern solution for remote patient care. We developed a platform that makes virtual healthcare accessible and efficient for both providers and patients.",
    results: [
      "40% increase in patient engagement",
      "97% satisfaction rate among healthcare providers",
      "Reduced wait times by 60%"
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
        alt: "Healthcare Dashboard",
        caption: "Intuitive dashboard for healthcare providers"
      },
      {
        src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
        alt: "Patient Interface",
        caption: "User-friendly patient interface"
      }
    ]
  },
  fintech: {
    title: "Revolutionizing fintech user experience",
    client: "FinanceFlow",
    type: "UX/UI Design, Development",
    year: "2023",
    technologies: ["React", "Node.js", "GraphQL", "Stripe API"],
    heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    objective: "Develop an innovative financial platform that simplifies complex transactions for both consumers and businesses.",
    description: "Traditional financial platforms were complex and difficult to use. We created a modern solution that makes financial management intuitive and accessible.",
    results: [
      "45% increase in user adoption",
      "90% reduction in transaction errors",
      "Processed over $1B in transactions"
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
        alt: "Fintech Dashboard",
        caption: "Modern financial management dashboard"
      },
      {
        src: "https://images.unsplash.com/photo-1563986768494-4dee09f4813a",
        alt: "Mobile App",
        caption: "Mobile-first financial tools"
      }
    ]
  },
  // ... more projects
};

function CaseStudyPage() {
  const { projectId } = useParams();
  const projectData = projectsData[projectId || ''] || projectsData.nextnav;

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#171717] text-[#E9E9E9]">
        <main className="relative z-0 md:ml-14">
          {/* Hero Section */}
          {/* Hero Section */}
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
                  {projectData.title}
                </motion.h1>

                {/* Sub Info */}
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

                {/* Image */}
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
          <section className="py-24 md:py-32">
            <div className="mx-[2%]">
              <div className="px-4 md:pl-[calc(4rem)] md:pr-[calc(4rem)] lg:pl-[calc(6rem)] lg:pr-[calc(6rem)]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 border-t border-zinc-800 pt-8">
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
                      <h2 className="text-2xl md:text-3xl font-bold mb-8">Technologies</h2>
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
          <section className="py-5 md:py-5">
            <div className="mx-[2%]">
              <div className="px-4 md:pl-[calc(4rem)] md:pr-[calc(4rem)] lg:pl-[calc(6rem)] lg:pr-[calc(6rem)]">
                <div className="flex items-start gap-4 md:gap-8">
                  <div className="w-16 md:w-32 h-1 bg-white mt-4 shrink-0" />
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-8">Objective</h2>
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
              <div className="px-4 md:pl-[calc(4rem)] md:pr-[calc(4rem)] lg:pl-[calc(6rem)] lg:pr-[calc(6rem)]">
                <div className="space-y-32">
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
            </div>
          </section>

          {/* Results Section */}
          <section className="py-5 md:py-5">
            <div className="mx-[2%]">
              <div className="px-4 md:pl-[calc(4rem)] md:pr-[calc(4rem)] lg:pl-[calc(6rem)] lg:pr-[calc(6rem)]">
                <div className="flex items-start gap-4 md:gap-8">
                  <div className="w-16 md:w-32 h-1 bg-white mt-4 shrink-0" />
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-8">Results</h2>
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

          {/* CTA Section */}
          <section className="py-24 md:py-32">
            <div className="mx-[2%]">
              <div className="px-4 md:pl-[calc(4rem)] md:pr-[calc(4rem)] lg:pl-[calc(6rem)] lg:pr-[calc(6rem)]">
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                  {/* Left Column - Content */}
                  <div className="w-full md:w-3/5">
                    <motion.h2
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
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
                        <p className="text-lg md:text-xl font-extralight text-[#E9E9E9]">
                          Let's discuss how we can help transform your business through innovative design and technology solutions.
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

                  {/* Right Column - MagnetLines */}
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
            </div>
          </section>

          {/* Next Project CTA */}
          <section className="py-24 md:py-20">
            <div className="mx-[2%]">
              <div className="px-4 md:pl-[calc(4rem)] md:pr-[calc(4rem)] lg:pl-[calc(6rem)] lg:pr-[calc(6rem)]">
                <Link
                  to="/work/next-project"
                  className="group inline-flex items-center gap-4 text-2xl md:text-3xl font-bold hover:text-[#0093D7] transition-colors"
                >
                  <span>Next Project</span>
                  <ArrowRight className="w-8 h-8 transform group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </section>


        </main>

        {/* Footer */}
        <Section4Testimonials />
      </div>
    </PageTransition>
  );
}

export default CaseStudyPage; 