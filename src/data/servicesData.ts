export interface ServiceData {
  id: string;
  title: string;
  client: string;
  type: string;
  year: string;
  technologies: string[];
  heroImage: string;
  objective: string;
  images: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
  description: string;
  features: string[];
}

export const servicesData: Record<string, ServiceData> = {
  'ai-consulting': {
    id: 'ai-consulting',
    title: 'AI Consulting & Implementation',
    client: 'Various Enterprises',
    type: 'AI Strategy & Development',
    year: '2025',
    technologies: ['Machine Learning', 'Computer Vision', 'NLP', 'Python', 'TensorFlow'],
    heroImage: 'https://rovamo.vercel.app/_next/image?url=%2Fimages%2Fservices%2Fai-consulting.jpg&w=3840&q=75',
    objective: 'Deliver strategic AI implementation roadmaps and automation workflows that unlock business potential with intelligent solutions.',
    description: 'Our AI consulting services help businesses leverage artificial intelligence to solve complex problems and gain competitive advantages. We provide end-to-end AI solutions from strategy to deployment.',
    features: [
      'AI strategy and roadmap development',
      'Custom machine learning models',
      'Natural language processing solutions',
      'Computer vision applications',
      'AI-powered automation'
    ],
    images: [
      {
        src: 'https://via.placeholder.com/800x450',
        alt: 'AI Strategy Session',
        caption: 'Strategic planning for AI implementation'
      },
      {
        src: 'https://via.placeholder.com/800x450',
        alt: 'AI Model Training',
        caption: 'Training custom machine learning models'
      }
    ]
  },
  'mvp-development': {
    id: 'mvp-development',
    title: 'MVP Development',
    client: 'Startups & Enterprises',
    type: 'Rapid Prototyping',
    year: '2025',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    heroImage: 'https://rovamo.vercel.app/_next/image?url=%2Fimages%2Fservices%2Fmvp.jpg&w=3840&q=75',
    objective: 'Rapidly develop and launch minimum viable products to validate business ideas and accelerate time-to-market.',
    description: 'We specialize in building MVPs that help validate your business idea with real users while minimizing development costs and time. Our agile approach ensures you get to market quickly with a product that addresses real user needs.',
    features: [
      '2-week MVP development cycle',
      'User-centered design',
      'Scalable architecture',
      'Analytics integration',
      'Iterative development'
    ],
    images: [
      {
        src: 'https://via.placeholder.com/800x450',
        alt: 'MVP Development Process',
        caption: 'Our streamlined MVP development workflow'
      },
      {
        src: 'https://via.placeholder.com/800x450',
        alt: 'MVP Launch',
        caption: 'Successful MVP deployment and user testing'
      }
    ]
  },
  'product-design': {
    id: 'product-design',
    title: 'Product Design',
    client: 'Various Clients',
    type: 'UI/UX Design',
    year: '2025',
    technologies: ['Figma', 'Sketch', 'Adobe XD', 'Framer'],
    heroImage: 'https://rovamo.vercel.app/_next/image?url=%2Fimages%2Fservices%2Fproduct-design-header.jpg&w=3840&q=75',
    objective: 'Create beautiful, intuitive user experiences that drive engagement and conversion.',
    description: 'Our product design services focus on creating user-centered digital experiences that are both beautiful and functional. We combine research, strategy, and design to deliver products that users love.',
    features: [
      'User research & testing',
      'Wireframing & prototyping',
      'UI/UX design',
      'Design systems',
      'Interaction design'
    ],
    images: [
      {
        src: 'https://via.placeholder.com/800x450',
        alt: 'UI Design',
        caption: 'Modern and intuitive interface designs'
      },
      {
        src: 'https://via.placeholder.com/800x450',
        alt: 'User Flow',
        caption: 'Optimized user journeys and flows'
      }
    ]
  },
  'web-development': {
    id: 'web-development',
    title: 'Web Development',
    client: 'Businesses of All Sizes',
    type: 'Full-Stack Development',
    year: '2025',
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    heroImage: 'https://rovamo.vercel.app/_next/image?url=%2Fimages%2Fservices%2Fweb-dev.jpg&w=3840&q=75',
    objective: 'Build high-performance, scalable web applications with modern technologies.',
    description: 'We develop custom web applications that are fast, secure, and scalable. Our full-stack development expertise ensures we can handle projects of any complexity while maintaining high standards of quality and performance.',
    features: [
      'Custom web applications',
      'E-commerce solutions',
      'API development',
      'Progressive Web Apps',
      'Performance optimization'
    ],
    images: [
      {
        src: 'https://via.placeholder.com/800x450',
        alt: 'Web Application',
        caption: 'Custom web application development'
      },
      {
        src: 'https://via.placeholder.com/800x450',
        alt: 'E-commerce',
        caption: 'E-commerce platform implementation'
      }
    ]
  },
  'no-code-development': {
    id: 'no-code-development',
    title: 'No-Code Development',
    client: 'Non-Tech Founders & Businesses',
    type: 'Rapid Development',
    year: '2025',
    technologies: ['Bubble', 'Webflow', 'Zapier', 'Airtable'],
    heroImage: 'https://rovamo.vercel.app/_next/image?url=%2Fimages%2Fservices%2Fno-code-header.jpg&w=3840&q=75',
    objective: 'Build and deploy applications quickly without traditional coding using no-code platforms.',
    description: 'Our no-code development services help you bring your ideas to life quickly and cost-effectively. We leverage the best no-code platforms to create powerful applications without the need for traditional software development.',
    features: [
      'Bubble applications',
      'Webflow websites',
      'Workflow automation',
      'Database design',
      'Third-party integrations'
    ],
    images: [
      {
        src: 'https://via.placeholder.com/800x450',
        alt: 'No-Code Platform',
        caption: 'Building on no-code platforms'
      },
      {
        src: 'https://via.placeholder.com/800x450',
        alt: 'Workflow Automation',
        caption: 'Automating business processes'
      }
    ]
  },
  'requirements-management': {
    id: 'requirements-management',
    title: 'Requirements Management',
    client: 'Product Teams',
    type: 'Business Analysis',
    year: '2025',
    technologies: ['Jira', 'Confluence', 'Miro', 'Figma'],
    heroImage: 'https://rovamo.vercel.app/_next/image?url=%2Fimages%2Fservices%2Frequirments.jpg&w=3840&q=75',
    objective: 'Define clear requirements and roadmaps that align technical capabilities with business objectives.',
    description: 'Our requirements management services help you define, document, and prioritize features to ensure your development efforts align with business goals. We bridge the gap between stakeholders and development teams to deliver successful projects.',
    features: [
      'Requirements gathering',
      'User story mapping',
      'Feature prioritization',
      'Roadmap planning',
      'Stakeholder alignment'
    ],
    images: [
      {
        src: 'https://via.placeholder.com/800x450',
        alt: 'Requirements Workshop',
        caption: 'Collaborative requirements gathering sessions'
      },
      {
        src: 'https://via.placeholder.com/800x450',
        alt: 'Product Roadmap',
        caption: 'Strategic product planning and roadmapping'
      }
    ]
  }
};
