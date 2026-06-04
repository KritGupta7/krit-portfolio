"use client";

import Image from "next/image";
import profilePic from "../../../public/images/profile-pic.png";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/profile";

const stats = [
  { label: "GitHub Repos", value: "5+" },
  { label: "Years Building", value: "3+" },
  { label: "Tech Stack", value: "25+" },
  { label: "Based In", value: "NJ" },
];

export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="// about"
          title="AI Systems & Full-Stack"
          description="From production platforms at Rutgers to agentic LLM tools on GitHub."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="left">
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-2xl border border-border/50 neon-glow">
        <Image
          src={profilePic}
          alt={profile.name}
          width={600}
          height={600}
          className="w-full aspect-square object-cover"
          priority
        />
              </div>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/70" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                    <div className="h-3 w-3 rounded-full bg-green-500/70" />
                    <span className="ml-2 font-mono text-xs text-muted-foreground">
                      terminal
                    </span>
                  </div>
                  <pre className="font-mono text-xs leading-relaxed text-muted-foreground">
                    <code>
{`$ whoami
> krit_gupta

$ cat focus.txt
> agentic AI, RAG pipelines,
> full-stack, data science

$ echo $LOCATION
> ${profile.location}`}
                    </code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m {profile.name}, a software developer based in{" "}
                  {profile.location}. I recently built production instructional
                  platforms at Rutgers SAS IT—shipping Next.js apps, RAG
                  chatbots with Llama 3.1, AWS deployments, and CI/CD pipelines
                  that teams rely on every day.
                </p>
                <p>
                  My work centers on agentic AI and full-stack engineering:
                  multi-agent LLM arbitration, runbook retrieval systems, and
                  TypeScript APIs backed by PostgreSQL and Docker. I hold an
                  M.S. in Statistics (Data Science) from Rutgers and a B.Tech in
                  Computers & Communication Engineering from Manipal University.
                </p>
                <p>
                  I&apos;m open to roles where I can ship reliable software—
                  combining strong fundamentals in data, testing, and cloud with
                  hands-on experience building AI products that work in
                  production, not just demos.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-4 text-center">
                        <p className="text-2xl font-bold gradient-text">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-xs font-mono text-muted-foreground">
                          {stat.label}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
