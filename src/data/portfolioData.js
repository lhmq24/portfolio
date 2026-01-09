import cvImage from '@/assets/images/anh_CV.jpg'

export const portfolioData = {
  // Personal Information
  personal: {
    name: 'Le Hoang Minh Quan',
    title: 'Backend Developer',
    email: 'lhmquan.dev@gmail.com',
    phone: '+84838258292',
    location: 'Can Tho, Vietnam',
    github: 'https://github.com/lhmq24',
    image: cvImage
  },

  // Objective/About
  objective: {
    title: 'About Me',
    description:
      'As a Backend Developer, I aim to obtain a Backend Developer position where I can apply my knowledge to build reliable backend services. I concentrate on hands-on experience with API development, database integration, and server-side logic while contributing to real-world projects. I am eager to learn industry practices, improve code quality, and support the engineering team.',
  },

  // Skills
  skills: [
    {
      category: 'Frontend',
      items: ['JavaScript (ES6+)', 'Vue.js 3 (Composition API)', 'ReactJs', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      items: ['Java (Java 21)', 'JavaScript', 'Nodejs + Express.js'],
    },
    {
      category: 'Database',
      items: ['PostgreSQL', 'MySQL'],
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub', 'Postman', 'Docker', 'Linux', 'Apache'],
    },
    {
      category: 'Other',
      items: ['RESTful API', 'JWT', 'API documentation (Swagger/OpenAPI)'],
    },
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
      link: null,
    },
    {
      type: 'certification',
      title: 'IELTS 7.0',
      date: '28-Dec-2025',
      issuer: 'IDP'
    },
  ],

  // Education
  education: [
    {
      degree: 'Engineer in Information Technology',
      institution: 'Can Tho University (CTU)',
      location: 'Can Tho, Vietnam',
      date: '08/2022 - Now',
      achievements: ['Major: Information Technology', 'Year: 4', 'GPA: 3.69'],
    },
  ],

  // Other Skills
  otherSkills: {
    languages: ['English (IELTS 7.0)', 'Japanese (Basic)', 'Vietnamese (Native)'],
    soft: ['Team Working', 'Public Speaking', 'Technical Writing'],
    interests: ['Open Source Contribution'],
  },
}
