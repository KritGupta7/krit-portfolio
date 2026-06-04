/** Production: https://kritgupta.com — set NEXT_PUBLIC_SITE_URL in Vercel Environment Variables */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

export const profile = {
  siteUrl,
  name: "Krit Shreeram Gupta",
  firstName: "Krit",
  lastName: "Gupta",
  handle: "krit_gupta",
  role: "AI & Agentic Systems Engineer · Full-Stack Developer",
  location: "New Brunswick, NJ",
  email: "kritgupta1@gmail.com",
  github: "https://github.com/KritGupta7/",
  linkedin: "https://www.linkedin.com/in/kritguptaa/",
  resumeUrl: "/resume.pdf",
  availability: "Open to opportunities",
  tagline:
    "I build production full-stack systems and agentic AI tools—RAG pipelines, multi-agent LLM workflows, and APIs that ship with tests, Docker, and CI/CD.",
  siteTitle: "Krit Shreeram Gupta | AI & Full-Stack Portfolio",
  siteDescription:
    "Portfolio of Krit Shreeram Gupta—software developer focused on agentic AI systems, RAG, and full-stack engineering in New Brunswick, NJ.",
} as const;
