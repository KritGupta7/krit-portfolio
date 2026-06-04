export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "AI & Agentic Systems",
    icon: "Brain",
    skills: [
      { name: "LLMs & Prompt Engineering", level: 88 },
      { name: "RAG & Tool Use", level: 85 },
      { name: "Multi-Agent Orchestration", level: 82 },
      { name: "Hugging Face / OpenAI APIs", level: 84 },
      { name: "FastAPI for AI Services", level: 80 },
    ],
  },
  {
    category: "Full-Stack Development",
    icon: "Globe",
    skills: [
      { name: "TypeScript / React / Next.js", level: 88 },
      { name: "Node.js / Express", level: 85 },
      { name: "REST APIs & Prisma ORM", level: 86 },
      { name: "PostgreSQL / SQLite", level: 84 },
      { name: "Docker & CI/CD", level: 82 },
    ],
  },
  {
    category: "Data & Cloud",
    icon: "Database",
    skills: [
      { name: "Python & SQL", level: 90 },
      { name: "AWS EC2 / S3", level: 78 },
      { name: "Power BI & ETL", level: 80 },
      { name: "Pandas / Scikit-learn", level: 82 },
      { name: "Git & Testing (pytest)", level: 88 },
    ],
  },
];
