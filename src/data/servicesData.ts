export interface ServiceData {
  id: string;
  title: string;
  client: string;
  type: string;
  year: string;
  technologies: string[];
  heroImage: string;
  objective: string;
  firstimages: Array<{
    src: string;
    alt: string;
    caption: string;
    text: string;
  }>;
  secondimages: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
  stats: Array<{
    value: string;
    label: string;
  }>;
  steps?: Array<{
    number: string;
    title: string;
    description: string;
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
    stats: [
      { value: '7', label: 'Days Average Strategy Delivery' },
      { value: '54%', label: 'Implementation Success Rate' },
      { value: '120+', label: 'Successful AI Projects Delivered' }
    ],
    steps: [
      {
        number: '01.',
        title: 'AI Research & Analysis',
        description:
          'We conduct comprehensive AI readiness assessments, identify automation opportunities, analyze existing workflows, and evaluate technical infrastructure to determine optimal AI integration points for maximum business impact.'
      },
      {
        number: '02.',
        title: 'Strategy Development',
        description:
          'We create detailed AI implementation roadmaps, prioritize use cases by ROI potential, design automation workflows, and develop strategic plans that align AI capabilities with your specific business objectives.'
      },
      {
        number: '03.',
        title: 'Implementation',
        description:
          'We create detailed AI implementation roadmaps, prioritize use cases by ROI potential, design automation workflows, and develop strategic plans that align AI capabilities with your specific business objectives.'
      },
      {
        number: '04.',
        title: 'Implementation',
        description:
          'We create detailed AI implementation roadmaps, prioritize use cases by ROI potential, design automation workflows, and develop strategic plans that align AI capabilities with your specific business objectives.'
      },
    ],
    description: 'Our AI consulting services help businesses leverage artificial intelligence to solve complex problems and gain competitive advantages. We provide end-to-end AI solutions from strategy to deployment.',
    features: [
      'AI strategy and roadmap development',
      'Custom machine learning models',
      'Natural language processing solutions',
      'Computer vision applications',
      'AI-powered automation'
    ],

    firstimages: [
      {
        src: 'https://rovamo.vercel.app/_next/image?url=%2Fimages%2Fservices%2Fai-consulting.jpg&w=3840&q=75',
        alt: 'image ',
        caption: ' image',
        text: ' We offer a range of specialized AI consulting services designed to address your unique business challenges. Through innovative strategies and tailored solutions, our expertise ensures exceptional outcomes that drive competitive advantage and sustainable growth.'
      }
    ],
    secondimages: [
      {
        src: 'https://rovamo.vercel.app/_next/image?url=%2Fimages%2Fservices%2Fai-consulting.jpg&w=3840&q=75',
        alt: 'AI Strategy Session',
        caption: 'Strategic planning for AI implementation'
      },
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
    stats: [
      { value: '14', label: 'Days Average MVP Delivery' },
      { value: '95%', label: 'Project Success Rate' },
      { value: '250+', label: 'MVPs Successfully Launched' }
    ],
    description: 'We specialize in building MVPs that help validate your business idea with real users while minimizing development costs and time. Our agile approach ensures you get to market quickly with a product that addresses real user needs.',
    features: [
      '2-week MVP development cycle',
      'User-centered design',
      'Scalable architecture',
      'Analytics integration',
      'Iterative development'
    ],
    firstimages: [
      {
        src: 'https://rovamo.vercel.app/_next/image?url=%2Fimages%2Fservices%2Fai-consulting.jpg&w=3840&q=75',
        alt: 'image ',
        caption: ' image',
                text: ' We offer a range of specialized AI consulting services designed to address your unique business challenges. Through innovative strategies and tailored solutions, our expertise ensures exceptional outcomes that drive competitive advantage and sustainable growth.'
      }
    ],
    secondimages: [
      {
        src: 'https://rovamo.vercel.app/_next/image?url=%2Fimages%2Fservices%2Fai-consulting.jpg&w=3840&q=75',
        alt: 'AI Strategy Session',
        caption: 'Strategic planning for AI implementation'
      },
    ],
    steps: [
      {
        number: '01.',
        title: 'AI Research & Analysis',
        description:
          'We conduct comprehensive AI readiness assessments, identify automation opportunities, analyze existing workflows, and evaluate technical infrastructure to determine optimal AI integration points for maximum business impact.'
      },
      {
        number: '02.',
        title: 'Strategy Development',
        description:
          'We create detailed AI implementation roadmaps, prioritize use cases by ROI potential, design automation workflows, and develop strategic plans that align AI capabilities with your specific business objectives.'
      },
      {
        number: '03.',
        title: 'Implementation',
        description:
          'We create detailed AI implementation roadmaps, prioritize use cases by ROI potential, design automation workflows, and develop strategic plans that align AI capabilities with your specific business objectives.'
      },
      {
        number: '04.',
        title: 'Implementation',
        description:
          'We create detailed AI implementation roadmaps, prioritize use cases by ROI potential, design automation workflows, and develop strategic plans that align AI capabilities with your specific business objectives.'
      },
    ],

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
    stats: [
      { value: '5', label: 'Days Average Design Delivery' },
      { value: '98%', label: 'Client Satisfaction Rate' },
      { value: '150+', label: 'Design Projects Completed' }
    ],
    description: 'Our product design services focus on creating user-centered digital experiences that are both beautiful and functional. We combine research, strategy, and design to deliver products that users love.',
    features: [
      'User research & testing',
      'Wireframing & prototyping',
      'UI/UX design',
      'Design systems',
      'Interaction design'
    ],
    steps: [
      {
        number: '01.',
        title: 'AI Research & Analysis',
        description:
          'We conduct comprehensive AI readiness assessments, identify automation opportunities, analyze existing workflows, and evaluate technical infrastructure to determine optimal AI integration points for maximum business impact.'
      },
      {
        number: '02.',
        title: 'Strategy Development',
        description:
          'We create detailed AI implementation roadmaps, prioritize use cases by ROI potential, design automation workflows, and develop strategic plans that align AI capabilities with your specific business objectives.'
      },
      {
        number: '03.',
        title: 'Implementation',
        description:
          'We create detailed AI implementation roadmaps, prioritize use cases by ROI potential, design automation workflows, and develop strategic plans that align AI capabilities with your specific business objectives.'
      },
      {
        number: '04.',
        title: 'Implementation',
        description:
          'We create detailed AI implementation roadmaps, prioritize use cases by ROI potential, design automation workflows, and develop strategic plans that align AI capabilities with your specific business objectives.'
      },
    ],
    firstimages: [
      {
        src: 'https://rovamo.vercel.app/_next/image?url=%2Fimages%2Fservices%2Fai-consulting.jpg&w=3840&q=75',
        alt: 'image ',
        caption: ' image',
                text: ' We offer a range of specialized AI consulting services designed to address your unique business challenges. Through innovative strategies and tailored solutions, our expertise ensures exceptional outcomes that drive competitive advantage and sustainable growth.'
      }
    ],
    secondimages: [
      {
        src: 'https://rovamo.vercel.app/_next/image?url=%2Fimages%2Fservices%2Fai-consulting.jpg&w=3840&q=75',
        alt: 'AI Strategy Session',
        caption: 'Strategic planning for AI implementation'
      },
    ],
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
    stats: [
      { value: '12', label: 'Days Average Web Development' },
      { value: '98%', label: 'Client Satisfaction Rate' },
      { value: '200+', label: 'Web Projects Completed' }
    ],
    description: 'We develop custom web applications that are fast, secure, and scalable. Our full-stack development expertise ensures we can handle projects of any complexity while maintaining high standards of quality and performance.',
    features: [
      'Custom web applications',
      'E-commerce solutions',
      'API development',
      'Progressive Web Apps',
      'Performance optimization'
    ],
    steps: [
      {
        number: '01.',
        title: 'AI Research & Analysis',
        description:
          'We conduct comprehensive AI readiness assessments, identify automation opportunities, analyze existing workflows, and evaluate technical infrastructure to determine optimal AI integration points for maximum business impact.'
      },
      {
        number: '02.',
        title: 'Strategy Development',
        description:
          'We create detailed AI implementation roadmaps, prioritize use cases by ROI potential, design automation workflows, and develop strategic plans that align AI capabilities with your specific business objectives.'
      },
      {
        number: '03.',
        title: 'Implementation',
        description:
          'We create detailed AI implementation roadmaps, prioritize use cases by ROI potential, design automation workflows, and develop strategic plans that align AI capabilities with your specific business objectives.'
      },
      {
        number: '04.',
        title: 'Implementation',
        description:
          'We create detailed AI implementation roadmaps, prioritize use cases by ROI potential, design automation workflows, and develop strategic plans that align AI capabilities with your specific business objectives.'
      },
    ],
    firstimages: [
      {
        src: 'https://rovamo.vercel.app/_next/image?url=%2Fimages%2Fservices%2Fai-consulting.jpg&w=3840&q=75',
        alt: 'image ',
        caption: ' image',
                text: ' We offer a range of specialized AI consulting services designed to address your unique business challenges. Through innovative strategies and tailored solutions, our expertise ensures exceptional outcomes that drive competitive advantage and sustainable growth.'
      }
    ],
    secondimages: [
      {
        src: 'https://rovamo.vercel.app/_next/image?url=%2Fimages%2Fservices%2Fai-consulting.jpg&w=3840&q=75',
        alt: 'AI Strategy Session',
        caption: 'Strategic planning for AI implementation'
      },
    ],
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
    stats: [
      { value: '10', label: 'Days Average No-Code Development' },
      { value: '95%', label: 'Project Success Rate' },
      { value: '150+', label: 'No-Code Projects Completed' }
    ],
    description: 'Our no-code development services help you bring your ideas to life quickly and cost-effectively. We leverage the best no-code platforms to create powerful applications without the need for traditional software development.',
    features: [
      'Bubble applications',
      'Webflow websites',
      'Workflow automation',
      'Database design',
      'Third-party integrations'
    ],
    steps: [
      {
        number: '01.',
        title: 'AI Research & Analysis',
        description:
          'We conduct comprehensive AI readiness assessments, identify automation opportunities, analyze existing workflows, and evaluate technical infrastructure to determine optimal AI integration points for maximum business impact.'
      },
      {
        number: '02.',
        title: 'Strategy Development',
        description:
          'We create detailed AI implementation roadmaps, prioritize use cases by ROI potential, design automation workflows, and develop strategic plans that align AI capabilities with your specific business objectives.'
      },
      {
        number: '03.',
        title: 'Implementation',
        description:
          'We create detailed AI implementation roadmaps, prioritize use cases by ROI potential, design automation workflows, and develop strategic plans that align AI capabilities with your specific business objectives.'
      },
      {
        number: '04.',
        title: 'Implementation',
        description:
          'We create detailed AI implementation roadmaps, prioritize use cases by ROI potential, design automation workflows, and develop strategic plans that align AI capabilities with your specific business objectives.'
      },
    ],
    firstimages: [
      {
        src: 'https://rovamo.vercel.app/_next/image?url=%2Fimages%2Fservices%2Fai-consulting.jpg&w=3840&q=75',
        alt: 'image ',
        caption: ' image',
                text: ' We offer a range of specialized AI consulting services designed to address your unique business challenges. Through innovative strategies and tailored solutions, our expertise ensures exceptional outcomes that drive competitive advantage and sustainable growth.'
      }
    ],
    secondimages: [
      {
        src: 'https://rovamo.vercel.app/_next/image?url=%2Fimages%2Fservices%2Fai-consulting.jpg&w=3840&q=75',
        alt: 'AI Strategy Session',
        caption: 'Strategic planning for AI implementation'
      },
    ],
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
    stats: [
      { value: '5', label: 'Days Average Requirements Management' },
      { value: '98%', label: 'Client Satisfaction Rate' },
      { value: '150+', label: 'Requirements Management Projects Completed' }
    ],
    description: 'Our requirements management services help you define, document, and prioritize features to ensure your development efforts align with business goals. We bridge the gap between stakeholders and development teams to deliver successful projects.',
    features: [
      'Requirements gathering',
      'User story mapping',
      'Feature prioritization',
      'Roadmap planning',
      'Stakeholder alignment'
    ],
    steps: [
      {
        number: '01.',
        title: 'AI Research & Analysis',
        description:
          'We conduct comprehensive AI readiness assessments, identify automation opportunities, analyze existing workflows, and evaluate technical infrastructure to determine optimal AI integration points for maximum business impact.'
      },
      {
        number: '02.',
        title: 'Strategy Development',
        description:
          'We create detailed AI implementation roadmaps, prioritize use cases by ROI potential, design automation workflows, and develop strategic plans that align AI capabilities with your specific business objectives.'
      },
      {
        number: '03.',
        title: 'Implementation',
        description:
          'We create detailed AI implementation roadmaps, prioritize use cases by ROI potential, design automation workflows, and develop strategic plans that align AI capabilities with your specific business objectives.'
      },
      {
        number: '04.',
        title: 'Implementation',
        description:
          'We create detailed AI implementation roadmaps, prioritize use cases by ROI potential, design automation workflows, and develop strategic plans that align AI capabilities with your specific business objectives.'
      },
    ],
    firstimages: [
      {
        src: 'https://rovamo.vercel.app/_next/image?url=%2Fimages%2Fservices%2Fai-consulting.jpg&w=3840&q=75',
        alt: 'image ',
        caption: ' image',
                text: ' We offer a range of specialized AI consulting services designed to address your unique business challenges. Through innovative strategies and tailored solutions, our expertise ensures exceptional outcomes that drive competitive advantage and sustainable growth.'
      }
    ],
    secondimages: [
      {
        src: 'https://rovamo.vercel.app/_next/image?url=%2Fimages%2Fservices%2Fai-consulting.jpg&w=3840&q=75',
        alt: 'AI Strategy Session',
        caption: 'Strategic planning for AI implementation'
      },
    ],
  }
};
