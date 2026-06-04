export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "Rutgers University — SAS IT",
    role: "Software Developer",
    period: "May 2024 – Jan 2026",
    description:
      "Built and deployed production instructional platforms with Node.js, React, Next.js, and PostgreSQL. Shipped a RAG chatbot with Llama 3.1, CI/CD on AWS EC2 with Traefik/SSL, and 100+ Java/SQL problem template engines for dynamic exam generation.",
    tech: [
      "Next.js",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "Docker",
      "RAG",
      "AWS",
    ],
  },
  {
    company: "LeapForWord",
    role: "Data Analyst",
    period: "Jan 2022 – Oct 2022",
    description:
      "Built Power BI dashboards and ETL workflows that increased analytics adoption by 65%, automated daily reporting (3 hrs/day saved), and delivered insights that raised call conversions by 20%.",
    tech: ["Power BI", "SQL", "DAX", "Power Query", "Excel"],
  },
  {
    company: "Rutgers University",
    role: "M.S. Statistics — Data Science",
    period: "Sept 2023 – Dec 2025",
    description:
      "Graduate training in statistical modeling, machine learning, and data science—applied to software engineering, analytics, and AI systems.",
    tech: ["Python", "Statistics", "ML", "Data Analysis"],
  },
  {
    company: "Manipal University",
    role: "B.Tech Computers & Communication Engineering",
    period: "Aug 2018 – May 2022",
    description:
      "Foundation in computer science, networking, and software engineering—preparing for full-stack and data-focused development.",
    tech: ["Java", "C#", "Algorithms", "Systems"],
  },
];
