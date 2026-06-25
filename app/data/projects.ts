export type Project = {
  name: string;
  description: string;
  language: string;
  repoUrl: string;
  demoUrl?: string;
  tags: string[];
  featured?: boolean;
  fork?: boolean;
  updatedAt: string;
  headline?: string;
  role?: string;
  stack?: string[];
  impact?: string;
  metric?: string;
  problem?: string;
  solution?: string;
  outcomes?: string[];
  preview?: 'livestock' | 'commerce' | 'wellness' | 'vision' | 'trading';
  screenshot?: string;
  screenshotAlt?: string;
};

export const projects: Project[] = [
  {
    name: 'LiveStocka',
    description:
      'Comprehensive cattle tracking and management system for livestock profiling, health records, production tracking, breeding data, and farm dashboards.',
    language: 'JavaScript',
    repoUrl: 'https://github.com/Muthiru/LiveStocka',
    demoUrl: 'https://livestocka.vercel.app',
    tags: ['featured', 'web', 'javascript'],
    featured: true,
    updatedAt: '2026-05-20',
    headline: 'Full-stack livestock platform for cattle records, production tracking, and farm dashboards.',
    role: 'Solo full-stack build',
    stack: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Edge Functions', 'Vercel'],
    metric: 'Full-stack SaaS-style build',
    problem: 'Farm data is often split across notebooks, spreadsheets, and memory, making animal history hard to audit or compare.',
    solution: 'Built a typed web platform with structured cattle profiles, health records, milk production, breeding detection, lineage, auth, and dashboard views.',
    impact: 'Turns scattered animal records into searchable health, production, breeding, lineage, and farm-management workflows.',
    outcomes: [
      'Designed a PostgreSQL schema with Row Level Security policies to isolate each farm account.',
      'Implemented OAuth 2.0 and email/password auth through Supabase.',
      'Built real-time dashboard views for cattle profiles, health events, milk production, breeding status, and genetic lineage.',
      'Validated the main data flows so records stay consistent across the platform.',
    ],
    preview: 'livestock',
    screenshot: '/Livestocka.png',
    screenshotAlt: 'LiveStocka dashboard screenshot',
  },
  {
    name: 'hot_dogg',
    description:
      'Algorithmic trading bot project with Python automation, live market data handling, and trading workflow logic.',
    language: 'Python',
    repoUrl: 'https://github.com/Muthiru/hot_dogg',
    tags: ['featured', 'python'],
    featured: true,
    updatedAt: '2025-11-18',
    headline: 'Python trading automation with live market data, risk controls, and performance logging.',
    role: 'Backend automation build',
    stack: ['Python', 'Deriv WebSocket API', 'Async/Await', 'GCP', 'CSV logging', 'Automation'],
    metric: '24/7 cloud workflow',
    problem: 'Manual trading logic is difficult to apply consistently when signals, limits, and live market data move quickly.',
    solution: 'Built a long-running Python bot with streamed market data, EMA-based trend filtering, DCA controls, trailing stops, session limits, and alerts.',
    impact: 'Shows comfort with long-running processes, live external data, and rule-based backend workflows.',
    outcomes: [
      'Implemented multi-timeframe signal logic with EMA-based trend filtering.',
      'Added a 5-layer DCA engine, trailing stops, profit targets, drawdown limits, and email alerts.',
      'Streamed live market data over WebSocket with caching and CSV performance logs.',
      'Deployed the workflow on Google Cloud Platform for continuous monitoring.',
    ],
    preview: 'trading',
  },
  {
    name: 'Ml-project',
    description:
      'Machine learning project focused on face recognition, emotion detection, validation tooling, and computer vision workflows.',
    language: 'Python',
    repoUrl: 'https://github.com/Muthiru/Ml-project',
    tags: ['featured', 'python', 'ai'],
    featured: true,
    updatedAt: '2025-12-11',
    headline: 'Computer vision desktop workflow for face recognition, emotion detection, and model validation.',
    role: 'AI / ML project build',
    stack: ['Python', 'DeepFace', 'TensorFlow', 'OpenCV', 'scikit-learn', 'PyQt5', 'Kaggle API'],
    metric: '415+ validation images',
    problem: 'Computer-vision demos can look convincing while hiding weak cases and unmeasured model behavior.',
    solution: 'Built a validation-focused desktop app with dataset integration, batch video annotation, reporting, and exported confidence results.',
    impact: 'Demonstrates practical AI integration with validation instead of only notebook experimentation.',
    outcomes: [
      'Validated gender classification across 415+ images with documented 95-100% accuracy in test runs.',
      'Generated confusion matrices and confidence-score CSVs for review.',
      'Delivered a PyQt5 desktop app with batch video annotation and performance reporting.',
      'Used Kaggle dataset integration to make the validation process repeatable.',
    ],
    preview: 'vision',
  },
  {
    name: 'Jamiejo',
    description: 'JavaScript web project deployed on Vercel.',
    language: 'JavaScript',
    repoUrl: 'https://github.com/Muthiru/Jamiejo',
    demoUrl: 'https://jamiejo.vercel.app',
    tags: ['web', 'javascript'],
    updatedAt: '2026-06-16',
    headline: 'Recent JavaScript web project with a live Vercel deployment.',
    role: 'Frontend build',
    stack: ['JavaScript', 'HTML', 'CSS', 'Vercel'],
    impact: 'Shows consistent shipping cadence and comfort deploying public web experiences.',
    outcomes: [
      'Built and deployed a public web interface.',
      'Kept the project live for quick review by recruiters and collaborators.',
      'Adds recent shipped web work to the portfolio timeline.',
    ],
    screenshot: '/Jamiejo.png',
    screenshotAlt: 'Jamiejo web project screenshot',
  },
  {
    name: 'SecureEcommercePayment',
    description: 'E-commerce payment security project with a deployed Vercel demo.',
    language: 'PHP',
    repoUrl: 'https://github.com/Muthiru/SecureEcommercePayment',
    demoUrl: 'https://secure-ecommerce-payment.vercel.app',
    tags: ['web', 'php'],
    updatedAt: '2026-06-01',
    headline: 'Payment-focused e-commerce security project with a live demo.',
    role: 'Security-minded web build',
    stack: ['PHP', 'Web security', 'Payments', 'Vercel'],
    impact: 'Highlights interest in secure transaction flows and the edge cases around checkout behavior.',
    outcomes: [
      'Built a deployed payment-security concept for e-commerce workflows.',
      'Focused the project around trust, validation, and transaction safety.',
      'Packaged the work as a reviewable live demo.',
    ],
    preview: 'commerce',
    screenshot: '/secure-ecommerce-payment.png',
    screenshotAlt: 'SecureEcommercePayment web project screenshot',
  },
  {
    name: 'Steny',
    description: 'JavaScript web application deployed on Vercel.',
    language: 'JavaScript',
    repoUrl: 'https://github.com/Muthiru/Steny',
    demoUrl: 'https://steny.vercel.app',
    tags: ['web', 'javascript'],
    updatedAt: '2026-04-27',
  },
  {
    name: 'student-wellness-app',
    description:
      'A mental health resource application for students at John Paul II Catholic University of Lublin.',
    language: 'TypeScript',
    repoUrl: 'https://github.com/Muthiru/student-wellness-app',
    tags: ['web', 'typescript'],
    updatedAt: '2025-05-15',
    headline: 'Student mental-health resource app for a university context.',
    role: 'Product-minded TypeScript build',
    stack: ['TypeScript', 'React', 'UX', 'Resource design'],
    impact: 'Shows ability to build for a real audience with sensitive needs, not just technical novelty.',
    outcomes: [
      'Organized student wellness resources into an approachable product experience.',
      'Used TypeScript to keep the app structure maintainable.',
      'Built around clarity, accessibility, and practical user needs.',
    ],
    preview: 'wellness',
  },
  {
    name: 'Marvel',
    description: 'HTML web project.',
    language: 'HTML',
    repoUrl: 'https://github.com/Muthiru/Marvel',
    tags: ['web', 'html'],
    updatedAt: '2026-01-19',
  },
  {
    name: 'Pokemon',
    description: 'HTML web project.',
    language: 'HTML',
    repoUrl: 'https://github.com/Muthiru/Pokemon',
    tags: ['web', 'html'],
    updatedAt: '2026-02-04',
  },
  {
    name: 'Amboseli-Trial',
    description: 'National park page project.',
    language: 'HTML',
    repoUrl: 'https://github.com/Muthiru/Amboseli-Trial',
    tags: ['web', 'html'],
    updatedAt: '2025-02-01',
  },
  {
    name: 'Daniel-Cipher',
    description: 'Custom cipher based on a Feistel cipher structure.',
    language: 'C++',
    repoUrl: 'https://github.com/Muthiru/Daniel-Cipher',
    tags: ['cpp'],
    updatedAt: '2025-02-01',
  },
  {
    name: 'Muthiru',
    description: 'GitHub profile repository.',
    language: 'Markdown',
    repoUrl: 'https://github.com/Muthiru/Muthiru',
    tags: ['profile'],
    updatedAt: '2026-06-21',
  },
  {
    name: 'Jarvis',
    description: 'Forked Python automation assistant project.',
    language: 'Python',
    repoUrl: 'https://github.com/Muthiru/Jarvis',
    tags: ['python', 'fork'],
    fork: true,
    updatedAt: '2026-06-11',
  },
  {
    name: 'MoneyPrinterTurbo',
    description: 'Forked AI video-generation project.',
    language: 'Unknown',
    repoUrl: 'https://github.com/Muthiru/MoneyPrinterTurbo',
    tags: ['ai', 'fork'],
    fork: true,
    updatedAt: '2026-06-02',
  },
  {
    name: 'jsoncpp',
    description: 'Forked C++ library for interacting with JSON.',
    language: 'C++',
    repoUrl: 'https://github.com/Muthiru/jsoncpp',
    tags: ['cpp', 'fork'],
    fork: true,
    updatedAt: '2024-12-05',
  },
];
