import { Project, SkillCategory, ExperienceItem, Certification, EducationItem } from '../types.ts';

export const personalInfo = {
  name: "Darshan K S",
  title: "Artificial Intelligence & Data Science Engineer",
  location: "Kumbarahalli (V), Belur, Hassan — 573115, Karnataka, India",
  phone: "+91 8971638339",
  email: "dharshanks98@gmail.com",
  github: "https://github.com/darshem-21",
  githubUsername: "darshem-21",
  linkedin: "https://linkedin.com/in/darshan-ks-5678a830b",
  credly: "https://www.credly.com/users/darshan-ks.acb1033d/badges/credly",
  bio: "Artificial Intelligence and Data Science undergraduate with hands-on experience in Android, Flutter, Full-Stack Development, Machine Learning, Generative AI, and Data Analytics. Experienced with Kotlin, Jetpack Compose, Python, SQL, JavaScript, HTML, CSS, REST APIs, Firebase, and Gemini AI. Developed applications during a 3-month internship with a focus on practical and user-friendly solutions.",
  availability: "Available for Full-time Roles & Internships (2026 Batch)",
  degree: "B.E. in Artificial Intelligence & Data Science",
  college: "Srinivas Institute of Technology, Mangaluru",
  graduationYear: "2026",
  cgpa: "7.3 / 10",
};

export const projectsData: Project[] = [
  {
    id: "kashta-kala",
    title: "Kashta-Kala Android Application",
    subtitle: "AI-Powered Woodwork & Carpentry Commerce Suite",
    category: "mobile",
    tags: ["Kotlin", "Jetpack Compose", "Gemini AI", "Room Database", "MVVM", "Firebase"],
    description: "Production Android application engineered end-to-end during the MindMatrix internship. Built with a reactive Jetpack Compose interface and robust MVVM architecture, incorporating Gemini AI for generative pricing and automated material estimation in low-connectivity rural environments.",
    highlights: [
      "Designed and implemented 4 core modules: Design Catalog, Material Estimator, Price Quote Generator, and Artisan Portfolio.",
      "Integrated Firebase and Google Gemini AI to generate customized project proposals and accurate lumber cut-lists based on customer specifications.",
      "Engineered an offline-first caching layer utilizing Room Database, enabling seamless quotation generation even in low-bandwidth or remote workshop locations.",
      "Utilized Android Studio and Git version control for strict architectural isolation and continuous feature iterations."
    ],
    metrics: [
      { label: "Core Modules", value: "4 Modules" },
      { label: "Architecture", value: "MVVM + Clean" },
      { label: "AI Integration", value: "Gemini AI" },
      { label: "Data Cache", value: "Offline-First Room" }
    ],
    liveUrl: "https://github.com/darshem-21/kashta-kala",
    githubUrl: "https://github.com/darshem-21/kashta-kala",
    hasInteractiveDemo: true,
    demoType: "price-estimator"
  },
  {
    id: "farmers-marketplace",
    title: "Marketplace for Farmers",
    subtitle: "Direct-to-Consumer Agricultural Commerce Platform",
    category: "mobile",
    tags: ["Flutter", "Dart", "Supabase", "Geoapify", "OpenRouter AI", "REST API"],
    description: "A comprehensive cross-platform mobile and web application empowering local agricultural producers to sell crops and produce directly to consumers and bulk buyers, bypassing exploitative middlemen.",
    highlights: [
      "Engineered a reactive Flutter frontend with state management, connecting directly to a Supabase PostgreSQL backend.",
      "Implemented real-time product inventory updates, authenticated farmer profiles, and instant order transactions.",
      "Integrated Geoapify geospatial APIs for automated geolocation tracking, radius-based local farm discovery, and delivery route estimates.",
      "Integrated Generative AI via OpenRouter API to automatically generate multilingual, enticing produce descriptions from raw harvested crop photos."
    ],
    metrics: [
      { label: "Target Audience", value: "Farmers & Consumers" },
      { label: "Backend", value: "Supabase" },
      { label: "Geolocation", value: "Geoapify" },
      { label: "AI Engine", value: "OpenRouter AI" }
    ],
    liveUrl: "https://errors-hack.github.io/",
    githubUrl: "https://github.com/darshem-21/farmers-marketplace",
    hasInteractiveDemo: true,
    demoType: "produce-gen"
  },
  {
    id: "fake-review-detection",
    title: "Spam & Fake Review Detection System",
    subtitle: "NLP Machine Learning Classification Pipeline",
    category: "ai-ml",
    tags: ["Python", "Scikit-Learn", "NLP", "TF-IDF", "Pandas", "Jupyter Notebook"],
    description: "An end-to-end Natural Language Processing system that parses online consumer reviews and predicts fraudulent, incentivized, or machine-generated text using supervised classification algorithms.",
    highlights: [
      "Built text preprocessing pipelines including tokenization, stop-word removal, lemmatization, and n-gram TF-IDF vectorization.",
      "Trained and evaluated multiple classification models (Naive Bayes, Logistic Regression, Support Vector Classifiers) in Jupyter Notebook.",
      "Evaluated performance using Confusion Matrix, ROC-AUC curves, Precision-Recall trade-offs, and F1-score optimization.",
      "Designed an inference module capable of providing confidence scoring and pinpointing suspicious syntactical indicators."
    ],
    metrics: [
      { label: "F1-Score", value: "93.4%" },
      { label: "Pipeline", value: "TF-IDF + Scikit" },
      { label: "Domain", value: "NLP / Fraud Detection" },
      { label: "Runtime", value: "Python 3" }
    ],
    liveUrl: "https://github.com/darshem-21/fake-review-detection",
    githubUrl: "https://github.com/darshem-21/fake-review-detection",
    hasInteractiveDemo: true,
    demoType: "review-classifier"
  },
  {
    id: "data-analytics-bi",
    title: "Customer Intelligence & Sales Analytics",
    subtitle: "Enterprise Business Intelligence & Churn Analysis",
    category: "fullstack",
    tags: ["Power BI", "SQL", "Python", "Pandas", "Data Analytics", "Excel"],
    description: "Interactive data analytics suite for business decision-makers, synthesizing multi-year customer transactional data into actionable predictive insights and executive dashboards.",
    highlights: [
      "Extracted, cleaned, and transformed large-scale tabular datasets using SQL queries and Python Pandas scripts.",
      "Developed high-impact Power BI executive dashboards tracking regional revenues, conversion funnels, and retention rates.",
      "Segmented customers by Recency, Frequency, and Monetary (RFM) metrics to isolate high-risk churn clusters.",
      "Presented quantifiable insights into customer lifetime value and product margin distribution."
    ],
    metrics: [
      { label: "Tooling", value: "Power BI + SQL" },
      { label: "Analysis", value: "RFM & Churn" },
      { label: "Data Scale", value: "50k+ Records" },
      { label: "Reporting", value: "Executive Dashboards" }
    ],
    liveUrl: "https://github.com/darshem-21",
    githubUrl: "https://github.com/darshem-21",
    hasInteractiveDemo: false
  }
];

export const experienceData: ExperienceItem[] = [
  {
    role: "Android App Development using Generative AI (Intern)",
    company: "MindMatrix",
    location: "Bengaluru, Karnataka, India",
    period: "Feb 2026 — May 2026",
    type: "Internship",
    description: "Led mobile engineering for the Kashta-Kala Android application, designing modular architecture and integrating generative artificial intelligence for production mobile experiences.",
    keyPoints: [
      "Developed the Kashta-Kala Android application end-to-end utilizing Kotlin, Jetpack Compose, Room Database, and MVVM architecture.",
      "Built four core functional modules: Design Catalog, Material Estimator, Price Quote Generator, and Portfolio, streamlining artisan business workflows.",
      "Integrated Firebase and Google Gemini AI to enable automatic generative quote generation and material specifications tailored to client dimensions.",
      "Optimized the application with an offline-first architecture to guarantee reliable performance in low-connectivity rural regions.",
      "Maintained disciplined Git version control and collaborative code reviews using Android Studio."
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Gemini AI", "Room DB", "Firebase", "MVVM", "Android Studio", "Git"]
  }
];

export const certificationsData: Certification[] = [
  {
    name: "IT Specialist – Artificial Intelligence",
    issuer: "Certiport (Pearson VUE)",
    year: "2024",
    verificationUrl: "https://www.credly.com/users/darshan-ks.acb1033d/badges/credly",
    skillsCovered: ["Artificial Intelligence Foundations", "Machine Learning Concepts", "Neural Networks", "Ethics in AI"]
  },
  {
    name: "AWS Academy Graduate – Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    year: "2024",
    verificationUrl: "https://www.credly.com/users/darshan-ks.acb1033d/badges/credly",
    skillsCovered: ["AWS Cloud Architecture", "Compute & S3 Storage", "IAM Security", "Cloud Economics"]
  },
  {
    name: "Google Cloud Data Analytics Certificate",
    issuer: "Google Cloud",
    year: "2024",
    verificationUrl: "https://www.credly.com/users/darshan-ks.acb1033d/badges/credly",
    skillsCovered: ["BigQuery", "Data Preparation", "Data Warehousing", "Cloud Analytics Pipelines"]
  },
  {
    name: "Machine Learning with Python",
    issuer: "IBM",
    year: "2024",
    verificationUrl: "https://www.credly.com/users/darshan-ks.acb1033d/badges/credly",
    skillsCovered: ["Supervised Learning", "Regression & Classification", "Clustering", "Scikit-Learn"]
  },
  {
    name: "Deep Learning with TensorFlow",
    issuer: "IBM",
    year: "2024",
    verificationUrl: "https://www.credly.com/users/darshan-ks.acb1033d/badges/credly",
    skillsCovered: ["TensorFlow 2.x", "Convolutional Neural Nets", "Recurrent Networks", "Model Optimization"]
  },
  {
    name: "Oracle Cloud Infrastructure Foundations Associate",
    issuer: "Oracle",
    year: "2024",
    verificationUrl: "https://www.credly.com/users/darshan-ks.acb1033d/badges/credly",
    skillsCovered: ["OCI Core Services", "Autonomous Database", "Security & Governance", "VCN Networking"]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Engineering (B.E.) in Artificial Intelligence & Data Science",
    institution: "Srinivas Institute of Technology",
    location: "Mangaluru, Karnataka",
    period: "2022 — 2026",
    score: "CGPA: 7.3 / 10",
    details: [
      "Specialized in Machine Learning, Deep Learning, Cloud Computing, Database Management Systems, and Mobile Architecture.",
      "Active participant in hackathons, technical conferences, and student engineering development circles.",
      "Applied academic theoretical AI/DS foundations to real-world industrial projects during internship."
    ]
  },
  {
    degree: "Pre-University Course (PCMB)",
    institution: "B.G.S Science PU College",
    location: "Karnataka, India",
    period: "2020 — 2022",
    score: "66%",
    details: [
      "Rigorous pre-engineering foundation in Physics, Chemistry, Mathematics, and Biology.",
      "Developed foundational analytical thinking, calculus, and logical problem-solving skills."
    ]
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Sarvodaya Education Trust",
    location: "Karnataka, India",
    period: "2020",
    score: "72%",
    details: [
      "Completed secondary education with strong fundamentals in Mathematics and Science.",
      "Participated in school science exhibitions and foundational computing workshops."
    ]
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    category: "Languages & Core",
    skills: [
      { name: "Python", level: "Advanced", note: "ML, Pandas, Scikit-learn, APIs" },
      { name: "Kotlin", level: "Proficient", note: "Android, Jetpack Compose, Coroutines" },
      { name: "Dart", level: "Proficient", note: "Flutter, Cross-Platform apps" },
      { name: "SQL", level: "Proficient", note: "PostgreSQL, MySQL, Complex Queries" },
      { name: "JavaScript", level: "Intermediate", note: "ES6+, DOM, REST integrations" },
      { name: "HTML5 / CSS3", level: "Proficient", note: "Semantic Web, Tailwind CSS" }
    ]
  },
  {
    category: "Mobile Engineering",
    skills: [
      { name: "Jetpack Compose", level: "Proficient", note: "Declarative UI, State & Animations" },
      { name: "Flutter", level: "Proficient", note: "Cross-platform mobile & web" },
      { name: "MVVM Architecture", level: "Advanced", note: "Separation of concerns, clean code" },
      { name: "Room Database", level: "Proficient", note: "Offline-first SQLite abstraction" },
      { name: "Android Studio", level: "Advanced", note: "Profiling, debugging, layout inspector" },
      { name: "REST APIs", level: "Advanced", note: "Retrofit, HTTP clients, JSON parsing" }
    ]
  },
  {
    category: "AI, ML & Generative AI",
    skills: [
      { name: "Google Gemini AI", level: "Proficient", note: "LLM integration, multimodal prompts" },
      { name: "Scikit-Learn", level: "Proficient", note: "Classification, regression, evaluation" },
      { name: "TensorFlow", level: "Intermediate", note: "Deep learning & neural networks" },
      { name: "NLP", level: "Proficient", note: "TF-IDF, Tokenization, Text Mining" },
      { name: "Pandas & NumPy", level: "Advanced", note: "Data wrangling, matrix computation" },
      { name: "OpenRouter API", level: "Proficient", note: "Multi-model AI inference pipeline" }
    ]
  },
  {
    category: "Databases, Cloud & Analytics",
    skills: [
      { name: "Supabase", level: "Proficient", note: "Auth, Postgres, Realtime listeners" },
      { name: "Firebase", level: "Proficient", note: "Firestore, Authentication, Cloud storage" },
      { name: "Google Cloud Platform", level: "Certified", note: "BigQuery, Cloud Storage, Analytics" },
      { name: "AWS Cloud", level: "Certified", note: "Cloud foundations, S3, EC2" },
      { name: "Power BI", level: "Proficient", note: "Interactive visual reporting, DAX" },
      { name: "Git & GitHub", level: "Advanced", note: "Branching, PRs, version control" }
    ]
  }
];
