export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'all' | 'ai-ml' | 'mobile' | 'fullstack';
  tags: string[];
  description: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl: string;
  hasInteractiveDemo?: boolean;
  demoType?: 'review-classifier' | 'price-estimator' | 'produce-gen';
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: string; note?: string }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  keyPoints: string[];
  technologies: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
  badgeUrl?: string;
  verificationUrl: string;
  skillsCovered: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  details: string[];
}
