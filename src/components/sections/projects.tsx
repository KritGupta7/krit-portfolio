"use client";

import { motion } from "framer-motion";
import {
  Scale,
  Layout,
  Server,
  Search,
  Bot,
  Code,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechBadge } from "@/components/ui/tech-badge";
import { StaggerChildren, staggerItem } from "@/components/motion/stagger-children";
import { projects } from "@/data/projects";

const iconMap: Record<string, React.ElementType> = {
  Scale,
  Layout,
  Server,
  Search,
  Bot,
  Code,
};

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="// projects"
          title="What I've Built"
          description="Selected work from my GitHub—LLM experiments, full-stack apps, and data projects."
        />

        <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = iconMap[project.icon] ?? Code;
            const content = (
              <Card className="group relative h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:neon-glow">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <CardContent className="relative p-6">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-background/50">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                    </div>
                    {project.url && (
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                    )}
                  </div>

                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <TechBadge key={t}>{t}</TechBadge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );

            return (
              <motion.div key={project.title} variants={staggerItem}>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </motion.div>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
