import cvImage from '@/assets/images/anh_CV.jpg'

export const portfolioData = {
  // Personal Information
  personal: {
    name: 'Le Hoang Minh Quan',
    title: 'DevOps Engineer',
    email: 'lhmquan.dev@gmail.com',
    phone: '+84838258292',
    location: 'Can Tho, Vietnam',
    github: 'https://github.com/lhmq24',
    image: cvImage,
  },

  // Objective/About
  objective: {
    title: 'About Me',
    description:
      "I'm a DevSecOps engineer with a strong interest in building and shipping reliable, scalable, and user-focused systems. I have basic experience working with the Infrastructure as Code (IaC), CI/CD pipelines, CloudOps and System Administration. I am passionate about learning new technologies and tools to improving my skills in DevSecOps practices.",
  },

  // Skills
  skills: [
    {
      category: 'Frontend',
      items: [
        'JavaScript (ES6+)',
        'Vue.js 3 (Composition API)',
        'ReactJs',
        'NextJs',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
      ],
    },
    {
      category: 'Backend',
      items: ['JavaScript', 'Nodejs + Express.js'],
    },
    {
      category: 'DevSecOps',
      items: [
        'AWS',
        'GCP',
        'Terraform',
        'Linux',
        'Kubernetes',
        'CI/CD',
        'Monitoring & Logging (Prometheus, Grafana, Opentelemetry)',
        'SIEM (Wazuh)',
      ],
    },
    {
      category: 'Database',
      items: ['PostgreSQL', 'MySQL', 'MariaDB', 'Firebase Firestore'],
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub', 'Postman', 'Apache', 'Nginx', 'Prometheus', 'Grafana', 'Opentelemetry', 'Wazuh'],
    },
    // {
    //   category: 'Other',
    //   items: ['RESTful API', 'JWT', 'API documentation (Swagger/OpenAPI)'],
    // },
  ],

  // Projects
  projects: [
    {
      period: '05/2025 - 10/2025',
      title: 'Longan Variant Classification Android App',
      roles: ['Frontend Developer', 'Backend Developer'],
      teamSize: 5,
      description:
        'An Android application for longan variant classification using Firebase services and on-device AI inference.',
      technologies: ['Java 21', 'Firebase', 'TensorFlow Lite', 'Firestore', 'Cloud Storage'],
      highlights: [
        'Implemented Firebase App Check, Authentication, Firestore, and Cloud Storage',
        'Integrated on-device AI inference using TensorFlow Lite',
        'Built classification history and user profile management',
        'Deployed to Google Play (Closed Testing)',
      ],
      link: 'https://github.com/LeHoangMinhQuan/longan_variant_detect_app.git',
    },
    {
      period: '02/2025 - 04/2025',
      title: 'Coffee Shop Order App For Staff',
      roles: ['Frontend Developer', 'Backend Developer'],
      teamSize: 1,
      description:
        'An Android application designed for staff to manage orders and tables in a coffee shop.',
      technologies: ['Java 11', 'MySQL', 'Retrofit', 'JWT', 'Material Components'],
      highlights: [
        'Implemented JWT-based authentication',
        'Built table management and order management features',
        'Developed receipt review functionality',
        'Designed UI using Material Components',
      ],
      link: 'https://github.com/lhmq24/Coffee_Order_App.git',
    },
  ],

  // Experience
  experiences: [
    {
      period: '12/2025 - 4/2026',
      title: 'Frontend Developer Intern',
      company: 'UTA Solution',
      location: 'Hybrid (Remote + On-site)',
      description:
        "Contributed to the debugging and development processes, improved performance and scalability of customer's website.",
      technologies: ['ReactJS', 'TailwindCSS', 'NextJS'],
      highlights: [
        'Developed and quality-checked a web application for medical professionals, focusing on usability, robustness and responsive design.',
        'Optimized application performance by implementing debounced form validation, data caching and client-side generated Metadata for better SEO.',
        'Investigated and resolved frontend and backend issues, including API errors and UI rendering problems.',
        'Collaborated with backend developers by troubleshooting and fixing issues related to Django server endpoints.',
      ],
      link: 'https://medmcr.com/',
    },
    {
      period: '05/2026 - Now',
      title: 'DevSecOps Engineer',
      company: 'NextEdge Co., Ltd',
      location: 'Full-time (On-site)',
      description:
        "Responsible for designing, implementing and maintaining the infrastructure and deployment pipelines for the company's client applications.",
      technologies: ['AWS', 'GCP', 'Terraform', 'Linux', 'Kubernetes', 'CI/CD', 'Monitoring & Logging (Prometheus, Grafana, Opentelemetry)', 'SIEM (Wazuh)'],
      highlights: [
        'Implemented CI/CD pipelines using Azure DevOps/GitHub Actions for automated SAST, DAST, Testing, and GitOps deployment of applications.',
        'Managed Kubernetes system for deploying and patching',
        'Implemented monitoring and logging solutions using Prometheus, Grafana, and Opentelemetry for real-time insights into system performance and health.',
        'Implemented SIEM solution using Wazuh for security monitoring and threat detection.',
        'Provided Infrastructure as Code (IaC) solutions using Terraform for consistent and repeatable infrastructure provisioning.',
      ],
      link: null,
    },
  ],

  // Publications & Certifications
  publicationsAndCerts: [
    {
      type: 'publication',
      title:
        'Longan Cultivar Identification from Leaves: A Benchmark of Efficient Backbones and Training Protocols',
      authors: 'Vi Duong-The et al.',
      publisher: "FTNCT'08 Conference, Procedia Computer Science (Elsevier), 2025.",
      year: '2025',
      status: 'Accepted',
      link: 'https://www.sciencedirect.com/science/article/pii/S1877050926015280',
    },
    {
      type: 'certification',
      title: 'IELTS 7.0',
      date: '28-Dec-2025',
      issuer: 'IDP',
    },
  ],

  // Education
  education: [
    {
      degree: 'Engineer in Information Technology',
      institution: 'Can Tho University (CTU)',
      location: 'Can Tho, Vietnam',
      date: '08/2022 - 10/2026',
      achievements: ['Major: Information Technology (High Quality Program)', 'GPA: 3.70'],
    },
  ],

  // Other Skills
  otherSkills: {
    languages: ['English (IELTS 7.0)', 'Japanese (Basic)', 'Vietnamese (Native)'],
    soft: ['Team Working', 'Public Speaking', 'Technical Writing'],
    interests: ['Open Source Contribution'],
  },
}
