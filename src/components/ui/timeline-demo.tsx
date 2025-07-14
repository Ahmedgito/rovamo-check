// React import is used for JSX transformation
import { Timeline } from "./timeline";
export function TimelineDemo() {
  const data = [
    {
      title: "AI Consulting",
      content: (
        <div>
          <h2 className="text-neutral-800  text-sm md:text-xl font-bold mt-2 mb-8">Strategic Implementation</h2>
          <p className="text-neutral-800  text-xs md:text-base font-normal mb-8">
            We deliver strategic AI implementation roadmaps, use case identification, and automation workflows that unlock business potential with intelligent solutions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <a href="/service/ai-consulting">
              <img
                src="https://rovamo.vercel.app/_next/image?url=%2Fimages%2Fservices%2Fai-consulting.jpg&w=3840&q=75"
                alt="AI Consulting"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] cursor-pointer hover:opacity-90 transition-opacity"
              />
            </a>
            <a href="/service/ai-consulting">
              <img
                src="https://th.bing.com/th/id/OIP.KNrtdhxTPb8VGmXApgnJuwHaEO?w=292&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                alt="AI Consulting"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] cursor-pointer hover:opacity-90 transition-opacity"
              />
            </a>

          </div>
        </div>
      ),
    },
    {
      title: "MVP Development",
      content: (
        <div>
          <h2 className="text-neutral-800  text-sm md:text-xl font-bold mt-2 mb-8">Rapid Prototyping</h2>
          <p className="text-neutral-800  text-xs md:text-base font-normal mb-8">
            We create rapid prototyping and development of minimum viable products that validate concepts and accelerate time-to-market within 48 hours.          </p>
          <div className="grid grid-cols-2 gap-4">
            <a href="/service/mvp-development">
              <img
                src="https://rovamo.vercel.app/_next/image?url=%2Fimages%2Fservices%2Fmvp.jpg&w=3840&q=75"
                alt="MVP Development"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] cursor-pointer hover:opacity-90 transition-opacity"
              />
              
            </a>

            <a href="/service/mvp-development">
              <img
                src="https://rovamo.vercel.app/_next/image?url=%2Fimages%2Fservices%2Fmvp.jpg&w=3840&q=75"
                alt="MVP Development"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] cursor-pointer hover:opacity-90 transition-opacity"
              />
              
            </a>
          </div>
        </div>
      ),
    }, {
      title: "Product Design",
      content: (
        <div>
          <h2 className="text-neutral-800  text-sm md:text-xl font-bold mt-2 mb-8">UI/UX Excellence</h2>
          <p className="text-neutral-800  text-xs md:text-base font-normal mb-8">

            We design user-centered experiences that blend beautiful interfaces with intuitive functionality, optimized for conversion and engagement delivery.          </p>
          <div className="grid grid-cols-2 gap-4">
            <a href="/service/product-design">
              <img
                src="https://rovamo.vercel.app/_next/image?url=%2Fimages%2Fservices%2Fproduct-design-header.jpg&w=3840&q=75"
                alt="Product Design"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] cursor-pointer hover:opacity-90 transition-opacity"
              />
            </a>
            <a href="/service/product-design">
              <img
                src="https://th.bing.com/th/id/OIP.UdO3FEiw7Q4IXLB4qHscSwHaD4?w=290&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                alt="Product Design"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] cursor-pointer hover:opacity-90 transition-opacity"
              />
            </a>

          </div>
        </div>
      ),
    }, {
      title: "Web Development",
      content: (
        <div>
          <h2 className="text-neutral-800  text-sm md:text-xl font-bold mt-2 mb-8">Full-Stack Solutions</h2>
          <p className="text-neutral-800  text-xs md:text-base font-normal mb-8">
            We build full-stack web applications with modern technologies, scalable architecture, and performance-first development practices delivered efficiently.          </p>
          <div className="grid grid-cols-2 gap-4">
            <a href="/service/web-development">
              <img
                src="https://rovamo.vercel.app/_next/image?url=%2Fimages%2Fservices%2Fweb-dev.jpg&w=3840&q=75"
                alt="Web Development"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] cursor-pointer hover:opacity-90 transition-opacity"
              />
            </a>
            <a href="/service/web-development">
              <img
                src="https://th.bing.com/th/id/OIP.oCVZofTUQjfjOqNcBfN6KwHaEK?w=305&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                alt="Web Development"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] cursor-pointer hover:opacity-90 transition-opacity"
              />
            </a>

          </div>
        </div>
      ),
    }, {
      title: "No-Code Development",
      content: (
        <div>
          <h2 className="text-neutral-800  text-sm md:text-xl font-bold mt-2 mb-8">Rapid Deployment</h2>
          <p className="text-neutral-800  text-xs md:text-base font-normal mb-8">
          We create Bubble applications, Webflow sites, and automation workflows without traditional coding timelines, deployed rapidly for fast results.          </p>
          <div className="grid grid-cols-2 gap-4">
            <a href="/service/no-code-development">
              <img
                src="https://rovamo.vercel.app/_next/image?url=%2Fimages%2Fservices%2Fno-code-header.jpg&w=3840&q=75"
                alt="No-Code Development"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] cursor-pointer hover:opacity-90 transition-opacity"
              />
            </a>
          </div>
        </div>
      ),
    }, {
      title: "Requirements Management",
      content: (
        <div>
          <h2 className="text-neutral-800  text-sm md:text-xl font-bold mt-2 mb-8">Strategic Planning</h2>
          <p className="text-neutral-800  text-xs md:text-sm font-normal mb-8">
          We provide business analysis, scope definition, and strategic roadmaps that align technical capabilities with business objectives effectively.          </p>
          <div className="grid grid-cols-2 gap-4">
            <a href="/service/requirements-management" className="group relative block overflow-hidden rounded-lg h-full">
              <div className="relative h-full">
                <div className="absolute inset-0 z-10 transition-all duration-300 opacity-0 group-hover:opacity-100 bg-black/30 flex items-center justify-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center transform transition-all duration-300 scale-90 group-hover:scale-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                <img
                  src="https://rovamo.vercel.app/_next/image?url=%2Fimages%2Fservices%2Frequirments.jpg&w=3840&q=75"
                  alt="Requirements Management"
                  className="w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </a>
            <a href="/service/requirements-management" className="group relative block overflow-hidden rounded-lg h-full">
              <div className="relative h-full">
                <div className="absolute inset-0 z-10 transition-all duration-300 opacity-0 group-hover:opacity-100 bg-black/30 flex items-center justify-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center transform transition-all duration-300 scale-90 group-hover:scale-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                <img
                  src="https://ts3.mm.bing.net/th?id=OIP.HVO6ZUOIPxCh47oh-UqbgAHaE7&pid=15.1"
                  alt="Requirements Management"
                  className="w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </a>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
} 