"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerChildren, staggerItem } from "@/components/motion/stagger-children";
import { interestCards } from "@/data/blog";

export function Blog() {
  return (
    <section id="interests" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="// interests"
          title="What I'm Exploring"
          description="Themes that guide my learning across public health, AI, and software."
        />

        <StaggerChildren className="grid gap-6 md:grid-cols-2">
          {interestCards.map((card) => (
            <motion.div key={card.title} variants={staggerItem}>
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge variant="secondary" className="font-mono text-xs">
                      {card.tag}
                    </Badge>
                  </div>

                  <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {card.excerpt}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
