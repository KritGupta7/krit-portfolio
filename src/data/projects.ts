export interface Project {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  icon: string;
  url?: string;
}

export const projects: Project[] = [
  {
    title: "LLM Output Arbitration",
    description:
      "Multi-agent LLM evaluation with accuracy, logic, and completeness critics—disagreement detection, adjudication, FastAPI endpoints, Streamlit dashboard, and 37 pytest tests.",
    tech: ["Python", "FastAPI", "OpenAI", "Docker"],
    gradient: "from-cyan-500/20 to-blue-600/20",
    icon: "Scale",
    url: "https://github.com/KritGupta7/llm-arbitration",
  },
  {
    title: "Runbook AI",
    description:
      "AI incident assistant that analyzes support tickets, retrieves runbooks via RAG, recommends remediation, and escalates low-confidence cases to humans.",
    tech: ["Python", "FastAPI", "React", "RAG", "PostgreSQL"],
    gradient: "from-violet-500/20 to-indigo-600/20",
    icon: "Bot",
  },
  {
    title: "StackOverfaux API",
    description:
      "StackOverflow-style REST API for users, questions, answers, and profiles—Prisma schema, controller-service architecture, Docker Compose with migrations.",
    tech: ["TypeScript", "Express", "Prisma", "PostgreSQL"],
    gradient: "from-green-500/20 to-emerald-600/20",
    icon: "Server",
    url: "https://github.com/KritGupta7/backend-challenge",
  },
  {
    title: "RSG App",
    description:
      "TypeScript full-stack application with modern UI patterns and maintainable client–server structure.",
    tech: ["TypeScript", "React", "Full-Stack"],
    gradient: "from-purple-500/20 to-pink-600/20",
    icon: "Layout",
    url: "https://github.com/KritGupta7/rsg-app",
  },
  {
    title: "Twitter Search Application",
    description:
      "Jupyter-based data exploration and search workflows for social data retrieval, filtering, and analysis.",
    tech: ["Python", "Jupyter", "Data Analysis"],
    gradient: "from-orange-500/20 to-red-600/20",
    icon: "Search",
    url: "https://github.com/KritGupta7/Twitter-Search-Application",
  },
];
