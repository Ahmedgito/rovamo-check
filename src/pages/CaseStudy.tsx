import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
import { PageTransition } from '../components/layout/page-transition';
import { Link, useParams } from 'react-router-dom';
import { MagnetLines } from '../components/ui/magnet-lines';

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

function CaseStudy() {
  const { projectId } = useParams();
  const projectData = projectsData[projectId || ''] || projectsData.nextnav;

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#171717] text-[#E9E9E9]">
        <main className="relative z-0">
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src={projectData.heroImage}
                alt={projectData.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full mx-[2%]">
              <div className="px-4 md:pl-[calc(4rem)] md:pr-[calc(4rem)] lg:pl-[calc(6rem)] lg:pr-[calc(6rem)]">
                <div className="max-w-4xl">
                  <motion.h1 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-white max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {projectData.title}
                  </motion.h1>
                  <motion.div 
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="flex flex-wrap gap-4">
                      <span className="text-[#E9E9E9]/60">{projectData.client}</span>
                      <span className="text-[#E9E9E9]/60">•</span>
                      <span className="text-[#E9E9E9]/60">{projectData.type}</span>
                      <span className="text-[#E9E9E9]/60">•</span>
                      <span className="text-[#E9E9E9]/60">{projectData.year}</span>
                    </div>
                  </motion.div>
                </div>
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

          {/* ... Rest of the case study page content (remaining sections) ... */}
          
          {/* Footer */}
          <footer className="border-t border-zinc-800">
            <div className="mx-[10%]">
              <div className="py-16 md:py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                  {/* Left Column - Newsletter */}
                  <div>
                    <h3 className="text-2xl font-light mb-8">Sign up for our newsletter</h3>
                    <div className="relative max-w-md">
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="w-full bg-transparent border-b border-zinc-800 py-2 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                      />
                      <button className="absolute right-0 top-1/2 -translate-y-1/2">
                        <ArrowRight className="w-6 h-6" />
                      </button>
                    </div>
                    
                    {/* Address */}
                    <div className="mt-32">
                      <p className="text-[#E9E9E9] mb-2">3579 17th St</p>
                      <p className="text-[#E9E9E9] mb-6">San Francisco, CA 94110</p>
                      <a href="#directions" className="text-white hover:text-[#0093D7] transition-colors">
                        Get directions
                      </a>
                    </div>
                  </div>

                  {/* Right Column - Navigation */}
                  <div className="flex flex-col justify-between">
                    <nav className="space-y-4 md:space-y-6 text-right">
                      <a href="/" className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white hover:text-[#0093D7] transition-colors">
                        Home
                      </a>
                      <a href="/services" className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white hover:text-[#0093D7] transition-colors">
                        Services
                      </a>
                      <a href="/work" className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white hover:text-[#0093D7] transition-colors">
                        Work
                      </a>
                      <a href="/about" className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white hover:text-[#0093D7] transition-colors">
                        About
                      </a>
                    </nav>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-16 md:mt-32 pt-8 border-t border-zinc-800">
                  <p className="text-sm text-[#E9E9E9]">© Rovamo 2024. All rights reserved.</p>
                  <a href="/privacy" className="text-sm text-[#E9E9E9] hover:text-white transition-colors mt-4 md:mt-0">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </PageTransition>
  );
}

export default CaseStudy; 