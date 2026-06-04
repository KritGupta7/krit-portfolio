export interface InterestCard {
  title: string;
  excerpt: string;
  tag: string;
}

export const interestCards: InterestCard[] = [
  {
    title: "Agentic AI & Multi-Model Workflows",
    excerpt:
      "Designing systems where critic agents, adjudicators, and tool use produce reliable outputs—not one-shot prompts.",
    tag: "AI",
  },
  {
    title: "RAG & Production LLM Apps",
    excerpt:
      "From runbook retrieval to instructional chatbots: grounding models in real data with confidence scoring and human escalation.",
    tag: "RAG",
  },
  {
    title: "Full-Stack & DevOps",
    excerpt:
      "Shipping Next.js and FastAPI services with Prisma, Docker Compose, Traefik, SSL, and automated test pipelines.",
    tag: "Engineering",
  },
  {
    title: "Data Science & Analytics",
    excerpt:
      "Turning messy multi-source data into dashboards and insights—Power BI, SQL, and statistical modeling from my Rutgers MS.",
    tag: "Data",
  },
];
