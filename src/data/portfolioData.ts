export interface Project {
  id: string;
  title: string;
  category: "Full Stack" | "Backend / System" | "Systems / C++" | "Research";
  period: string;
  tagline: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface CertificateItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  image: string;
  description: string;
  category: "Certification" | "Leadership" | "Academic" | "Sports";
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  badge?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  grade: string;
  details?: string;
}

export const personalData = {
  name: "Nirzor Das",
  role: "Full Stack Software Engineer & CSE Undergraduate",
  tagline: "Computer Science & Engineering student at AIUB (CGPA 3.78) building scalable web systems, distributed APIs, and data-driven solutions.",
  location: "Baridhara, Dhaka-1206, Bangladesh",
  email: "nirzordas12@gmail.com",
  phone: "+880 1785-744190",
  github: "https://github.com",
  linkedin: "https://linkedin.com/in/nirzordas",
  cvPath: "/Nirzor_Das_CV.pdf",
  profileImage: "/profile.jpg",
  availability: "Available for Software Engineering Roles & Internships",
  relocation: "Open to Remote & On-site Relocation",
  summary: `Undergraduate in Computer Science and Engineering at American International University-Bangladesh (AIUB) with a 3.78 CGPA. Experienced in developing full-stack applications and backend systems using Next.js, React, Node.js, NestJS, C# / ASP.NET, and modern relational databases. Proven research experience on Shannon entropy and information theory, coupled with foundational training in machine learning algorithms and systems architecture.`,
  reference: {
    name: "Mir Md. Kawsur",
    title: "Lecturer, Department of Computer Science",
    institution: "American International University-Bangladesh (AIUB)",
    email: "kawsur@aiub.edu",
    phone: "01518-917616"
  }
};

export const projectsData: Project[] = [
  {
    id: "crisis-connect",
    title: "Crisis Connect",
    category: "Full Stack",
    period: "08/2026",
    tagline: "Volunteer mobilization & humanitarian donation coordination platform",
    description: "An end-to-end disaster response management ecosystem connecting NGOs, volunteers, and donors with real-time operational workflows.",
    highlights: [
      "Engineered multi-role authentication and RBAC for volunteers, NGOs, donors, and system admins",
      "Built high-performance REST APIs in NestJS backed by PostgreSQL and tested comprehensively with Postman",
      "Crafted a responsive, minimal UI using Next.js App Router and Tailwind CSS for rapid mobile deployment in crisis zones",
      "Implemented task assignment algorithms to match volunteer skill sets with on-ground humanitarian relief requests"
    ],
    technologies: ["Next.js", "NestJS", "Node.js", "PostgreSQL", "Tailwind CSS", "TypeScript", "Postman"],
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
    featured: true
  },
  {
    id: "agriculture-management",
    title: "Agriculture Management System",
    category: "Full Stack",
    period: "01/2026",
    tagline: "Smart agricultural marketplace & equipment rental ecosystem",
    description: "A digital marketplace empowering farmers to bypass middlemen, publish harvests at market rates, lease heavy farming machinery, and receive direct buyer payments.",
    highlights: [
      "Architected product catalog and real-time inventory management for fresh harvests and farm inputs",
      "Designed an equipment rental scheduling system preventing double-booking of tractors and irrigation pumps",
      "Developed an administrative monitoring console to verify farmer seller listings and supervise transactions",
      "Utilized optimized SQL indexing to support quick searching across crops, locations, and pricing tiers"
    ],
    technologies: ["PHP", "JavaScript", "MySQL", "HTML5", "CSS3", "Tailwind CSS"],
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: "home-service",
    title: "Home Service Management System",
    category: "Backend / System",
    period: "12/2025",
    tagline: "On-demand domestic service booking and worker CV evaluation engine",
    description: "An enterprise service management application enabling clients to discover vetted domestic technicians while allowing workers to submit verified credentials.",
    highlights: [
      "Constructed secure customer booking and repeat-hire workflows categorized by specialized home trades",
      "Created an administrative vetting portal for processing worker CVs, background verifications, and approvals",
      "Integrated relational schemas and stored procedures in Microsoft SQL Server to enforce transactional integrity",
      "Built resilient backend business logic in C# and ASP.NET with rigorous input validation"
    ],
    technologies: ["C#", "ASP.NET", "Microsoft SQL Server", "Entity Framework", "Bootstrap"],
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: "tetris-game",
    title: "Tetris Arcade Engine",
    category: "Systems / C++",
    period: "05/2025",
    tagline: "Object-oriented terminal/graphical arcade puzzle engine in modern C++",
    description: "A fast, memory-conscious arcade game simulation built from scratch demonstrating object-oriented principles, matrix mathematics, and collision detection.",
    highlights: [
      "Implemented standard SRS (Super Rotation System) algorithms for 7 tetromino shapes on a 10x20 grid",
      "Engineered tick-based frame timing, wall kick validations, and instant hard-drop physics",
      "Built clean line-clear detection, dynamic gravity speed-up tiers, and local persistent high-score persistence",
      "Utilized zero external bloat, maintaining lightweight footprint and sub-millisecond input responsiveness"
    ],
    technologies: ["C++", "OOP", "Data Structures", "Algorithms", "Game Loop"],
    githubUrl: "https://github.com",
    featured: false
  },
  {
    id: "shannon-entropy-research",
    title: "Shannon Entropy & Data Distribution Analysis",
    category: "Research",
    period: "2025 – Present",
    tagline: "Journal research exploring statistical uncertainty & information density",
    description: "Academic investigation into Shannon entropy as a diagnostic metric for quantifying randomness, noise resilience, and feature selection in data-driven classification problems.",
    highlights: [
      "Formulated mathematical models assessing entropy distributions across heterogeneous dataset modalities",
      "Evaluated performance gains when using entropy thresholds to pre-filter high-variance features",
      "Conducted comparative benchmarks against classical machine learning classifiers (KNN, Random Forest, ANN)",
      "Authored academic findings and rigorous documentation for peer-reviewed journal submission"
    ],
    technologies: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Information Theory", "LaTeX"],
    featured: false
  }
];

export const skillsCategories = [
  {
    title: "Frontend Engineering",
    skills: [
      { name: "Next.js (App Router)", level: "Advanced" },
      { name: "React", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "HTML5 & Modern CSS", level: "Advanced" }
    ]
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "NestJS", level: "Intermediate" },
      { name: "C# / ASP.NET", level: "Intermediate" },
      { name: "PHP", level: "Intermediate" },
      { name: "RESTful API Design", level: "Advanced" },
      { name: "Authentication & RBAC", level: "Intermediate" }
    ]
  },
  {
    title: "Databases & Storage",
    skills: [
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "Microsoft SQL Server", level: "Intermediate" },
      { name: "Oracle Database", level: "Familiar" },
      { name: "Relational Modeling", level: "Advanced" }
    ]
  },
  {
    title: "Languages & Core",
    skills: [
      { name: "C++", level: "Advanced" },
      { name: "C#", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
      { name: "Java", level: "Intermediate" },
      { name: "SQL", level: "Advanced" },
      { name: "Data Structures & Algos", level: "Advanced" }
    ]
  },
  {
    title: "Machine Learning & Research",
    skills: [
      { name: "Shannon Entropy Analysis", level: "Specialized" },
      { name: "Neural Networks (ANN)", level: "Intermediate" },
      { name: "Random Forest & Ensemble", level: "Intermediate" },
      { name: "KNN & Naive Bayes", level: "Intermediate" },
      { name: "Boosting & Stacking", level: "Intermediate" }
    ]
  },
  {
    title: "Tools & Environment",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Postman API Suite", level: "Advanced" },
      { name: "VS Code & Visual Studio", level: "Advanced" },
      { name: "Linux / Windows CLI", level: "Intermediate" },
      { name: "Vercel Deployment", level: "Advanced" }
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "American International University-Bangladesh (AIUB)",
    period: "Enrolled – Present",
    location: "Dhaka, Bangladesh",
    grade: "CGPA: 3.78 / 4.00",
    details: "Focusing on software architecture, data structures, backend engineering, and computational intelligence. Active researcher in information theory and entropy modeling."
  },
  {
    degree: "Higher Secondary Certificate (HSC) — Science",
    institution: "BEPZA Public School & College",
    period: "2020 – 2022",
    location: "Chattogram, Bangladesh",
    grade: "GPA: 4.33 / 5.00",
    details: "Concentration in Higher Mathematics, Physics, Chemistry, and Information Technology."
  },
  {
    degree: "Secondary School Certificate (SSC) — Science",
    institution: "Nasirabad Government High School",
    period: "2018 – 2020",
    location: "Chattogram, Bangladesh",
    grade: "GPA: 4.56 / 5.00",
    details: "Graduated with honors in science curriculum; active in Science Club and youth leadership."
  }
];

export const volunteerData: ExperienceItem[] = [
  {
    role: "Child Researcher",
    organization: "National Children's Task Force (NCTF)",
    period: "01/2020 – 11/2022",
    location: "Chattogram, Bangladesh",
    description: "Conducted field surveys and demographic research assessing child rights, access to digital literacy, and community welfare in urban and peri-urban sectors."
  },
  {
    role: "Training Department Chief",
    organization: "Bangladesh Red Crescent Society — Nasirabad Unit",
    period: "2016 – 2019",
    location: "Chattogram, Bangladesh",
    description: "Led first aid, emergency disaster response, and volunteer readiness training. Awarded best branch recognition across Chittagong under divisional leadership.",
    badge: "Best Unit Award"
  },
  {
    role: "Cadet",
    organization: "Bangladesh National Cadet Corps (BNCC) — Karnaphuli Regiment",
    period: "2016 – 2019",
    location: "Chattogram, Bangladesh",
    description: "Underwent rigorous military discipline drills, survival leadership exercises, and participated actively in the 12 BNCC Battalion Training Camp."
  }
];

export const certificatesData: CertificateItem[] = [
  {
    id: "cisco-it-essentials",
    title: "Cisco IT Essentials: PC Hardware & Software",
    organization: "Cisco Networking Academy — AIUB",
    year: "June 2023",
    image: "/certificates/hsc-certificate.png",
    description: "Comprehensive credential covering hardware diagnostics, networking protocols, OS security, and systems troubleshooting.",
    category: "Certification"
  },
  {
    id: "red-crescent-trophy",
    title: "Best Unit Training Chief Leadership Trophy",
    organization: "Bangladesh Red Crescent Society",
    year: "2018 – 2019",
    image: "/certificates/red-crescent-trophy.png",
    description: "Honorary leadership crest awarded to the Nasirabad Unit for outstanding disaster training and humanitarian volunteer mobilization.",
    category: "Leadership"
  },
  {
    id: "bncc-karnaphuli",
    title: "BNCC Karnaphuli Regiment Training Certification",
    organization: "Bangladesh National Cadet Corps",
    year: "May 2015",
    image: "/certificates/bncc-karnaphuli.png",
    description: "Cadet 15221713 official military discipline and regiment training completion at Battalion ATE.",
    category: "Leadership"
  },
  {
    id: "bncc-camp-2018",
    title: "12 BNCC Battalion Camp 2018 Participation",
    organization: "Bangladesh National Cadet Corps",
    year: "Dec 2018",
    image: "/certificates/bncc-camp-2018.png",
    description: "Recognized for active participation and successful completion of all tactical, survival, and drills events.",
    category: "Leadership"
  },
  {
    id: "red-crescent-conf",
    title: "5th Red Crescent Youth Conference Recognition",
    organization: "Bangladesh Red Crescent Society, Chattogram",
    year: "July 2018",
    image: "/certificates/red-crescent-conf-2018.png",
    description: "Dedicated service certificate for advancing humanitarian initiatives and emergency response advocacy.",
    category: "Leadership"
  },
  {
    id: "science-fair-2018",
    title: "Nasirabad Govt High School Science Fair Award",
    organization: "NGHS Science Club",
    year: "2018",
    image: "/certificates/science-fair-2018.png",
    description: "Presented competitive science project in regional inter-school exhibition showcasing applied technology principles.",
    category: "Academic"
  },
  {
    id: "maizbhandari-science",
    title: "Maizbhandari Academy Science Fair Award",
    organization: "Maizbhandari Academy, Chattogram",
    year: "Jan 2019",
    image: "/certificates/maizbhandari-science-fair.png",
    description: "Special commendation certificate for scientific inquiry and youth project presentation.",
    category: "Academic"
  },
  {
    id: "route-to-fortune",
    title: "Route to Fortune 2.0 Leadership & Presentation",
    organization: "Surge Foundation & Bangladesh Shishu Academy",
    year: "May 2018",
    image: "/certificates/route-to-fortune.png",
    description: "Skill certification for demonstrated excellence in Teamwork, Leadership, Presentation, and Volunteerism.",
    category: "Leadership"
  },
  {
    id: "sports-medal",
    title: "Athletics & Team Sports Championship Medal",
    organization: "Inter-school Athletics / Tournament",
    year: "Tournament Award",
    image: "/certificates/sports-medal.png",
    description: "Competitive achievement in team sports and football championship demonstrating perseverance and team coordination.",
    category: "Sports"
  }
];
