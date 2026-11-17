export const site = {
  // TODO: replace with your real domain after deploying (Vercel/Netlify)
  url: 'https://umermehboobkhan.vercel.app',
  name: 'Umer Mehboob Khan',
  role: 'Associate Software Engineer',
  email: 'malik.umerkhan97@gmail.com',
  phone: '+923318889902',
  whatsapp: '923318889902',
  linkedin: 'https://www.linkedin.com/in/umer-khan123/',
  github: 'https://github.com/Malik-Umer-Mehboob',
  resume:
    'https://drive.google.com/file/d/1yFk-kGkDHchhHAgQHzCnkjd2TQPCLd4_/view?usp=sharing',
  location: 'Karachi, Pakistan',
  summary:
    'Associate Software Engineer building end-to-end web applications with the MERN stack and TypeScript, from RESTful APIs to responsive React interfaces, including AI-integrated tools and real-time platforms.',
};

export const skills = [
  {
    title: 'Frontend Development',
    description:
      'Crafting modern, responsive, and interactive user interfaces using the latest frontend libraries and frameworks.',
    items: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Angular',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Bootstrap',
      'GSAP',
    ],
  },
  {
    title: 'Backend Development',
    description:
      'Building secure, scalable, and high-performance server-side applications and RESTful APIs.',
    items: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'WebSockets',
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'PHP',
      'Python',
    ],
  },
  {
    title: 'Developer Tools & Others',
    description:
      'Leveraging essential developer tools and platforms to streamline workflow, collaboration, and deployment.',
    items: [
      'Git',
      'GitHub',
      'Vercel',
      'Postman',
      'VS Code',
      'Netlify',
      'Docker',
      'CI/CD',
    ],
  },
];

export const experience = [
  {
    role: 'Associate Software Engineer',
    company: 'TechHive Solutions',
    period: 'Sep 2026 – Present',
    highlights: [
      'Built a Smart OCR tool in Python that reads handwritten ID tags and auto-sorts them into batch folders.',
      'Contributed to Attiya, a real-time blood donor–patient matching platform with CNIC verification.',
    ],
    technologies: ['Python', 'React', 'TypeScript', 'Supabase', 'Docker'],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'TechHive Solutions',
    period: 'Apr 2026 – Jun 2026',
    highlights: [
      'Delivered end-to-end features across 3+ core modules, streamlining the release process.',
      'Resolved 20+ critical bugs through structured test plans, cutting production incidents.',
    ],
  },
  {
    role: 'MERN Stack Developer',
    company: 'Coderatory Revolution in Innovation',
    period: 'Aug 2025 – Sep 2025',
    highlights: [
      'Architected RESTful APIs with JWT authentication and role-based access across 4 permission levels.',
      'Converted 10+ UI/UX wireframes into responsive, pixel-perfect React components.',
    ],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
  },
  {
    role: 'MERN Stack Developer',
    company: '3 Digitals Mind',
    period: 'Jul 2024 – Dec 2024',
    highlights: [
      'Launched 4 client-facing dashboards with cross-browser and mobile-first support.',
      'Structured and indexed MongoDB schemas, improving query performance.',
    ],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
  },
];

export const education = [
  {
    degree: 'Bachelor of Science (BS), Computer Science',
    school: 'Iqra University, Karachi',
    period: '2022 – 2026',
    text: 'Built a strong foundation in programming, software development, and core computer science principles. Key courses included Data Structures, Algorithms, OOP, DBMS, Web Development, and Software Engineering.',
  },
  {
    degree: 'XII, Pre-Engineering',
    school: 'Green House Grammar College, Karachi',
    period: '2020 – 2021',
    text: 'Completed Class 12 under the Sindh Board, studying Physics, Chemistry, and Mathematics.',
  },
  {
    degree: 'X, Computer Science',
    school: 'Green House Grammar Higher Secondary School, Karachi',
    period: '2018 – 2019',
    text: 'Completed Class 10 under the Sindh Board with a focus on Science and Computer.',
  },
];

// Cover images live in /public/projects. Swap them for real screenshots any time
// (same file name, or update `image`). Add `live` for a live demo URL.
export const projects = [
  {
    title: 'Namaa: Saudi E-Invoicing & Subscription Platform',
    category: 'Full Stack · SaaS · ZATCA',
    year: 2026,
    featured: true,
    image: 'namaa.webp',
    desc: 'Multi-company SaaS (formerly Mash POS) for Saudi businesses: ZATCA Fatoora Phase 1 & 2 e-invoicing, bilingual Arabic/English RTL interface, contracts, commissions, subscriptions and Moyasar online payments.',
    tech: ['PHP', 'MySQL', 'ZATCA Fatoora', 'Moyasar', 'Arabic RTL'],
    code: 'https://github.com/Malik-Umer-Mehboob/pos_saudia',
  },
  {
    title: 'Attiya: Blood Donation Platform',
    category: 'Full Stack · Real-time',
    image: 'attiya.webp',
    desc: 'Peer-to-peer blood donation platform: real-time donor–patient matching by blood group and location, CNIC verification, AI-moderated in-app chat and email/push notifications.',
    tech: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Vite', 'Docker'],
    code: 'https://github.com/Malik-Umer-Mehboob/Attiya-App',
  },
  {
    title: 'ShopPro: Multi-Vendor E-Commerce',
    category: 'Full Stack · E-commerce',
    image: 'shoppro.webp',
    desc: 'Multi-vendor marketplace with admin, seller, customer, support and rider panels, a full order lifecycle, and a Laravel 11 REST API with Sanctum auth and role-based access.',
    tech: ['React', 'Next.js', 'Laravel', 'MySQL', 'Redis', 'Sanctum'],
    code: 'https://github.com/Malik-Umer-Mehboob/e-commerce-shoppro',
    backend: 'https://github.com/Malik-Umer-Mehboob/shoppro-backend',
  },
  {
    title: 'TechHive Website',
    category: 'Frontend · Business Website',
    image: 'techhive-website.webp',
    desc: 'Marketing website for TechHive Solutions with brochure content and a working contact form, built with a modern React and Tailwind CSS stack.',
    tech: ['React', 'TanStack Start', 'Tailwind CSS', 'Zod'],
    code: 'https://github.com/Malik-Umer-Mehboob/Techhive-Website',
  },
  {
    title: 'Web Scraping Bot',
    category: 'Full Stack · Automation',
    image: 'web-scraping-bot.webp',
    desc: 'Web scraping tool with sign-in, full DOM scraping, selector-helper filters, an interactive mouse mode to pick elements by hand, and CSV export.',
    tech: ['Next.js', 'Tailwind CSS', 'Playwright', 'NextAuth.js', 'MongoDB'],
    code: 'https://github.com/Malik-Umer-Mehboob/Web-scraping-bot',
  },
  {
    title: 'AI-Based Adaptive Learning Platform',
    category: 'Full Stack · AI · Final Year Project',
    image: 'adaptive-learning-platform.webp',
    desc: 'AI-powered learning platform with dynamic quiz generation, real-time performance analytics and personalized content recommendations. Uses the ChatGPT API to detect weak areas and suggest study plans.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'ChatGPT API', 'HTML', 'CSS'],
  },
];
