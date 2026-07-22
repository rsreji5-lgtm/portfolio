export interface Skill {
  name: string;
  level: number; // 0-100 percentage value for progress bars
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  imageSrc?: string;
  demoUrl?: string;
  comingSoon?: boolean;
  imagePrompt?: string; // Prompt for any mock design inside cards
}

export interface AchievementItem {
  label: string;
  value: number;
  suffix?: string;
}
