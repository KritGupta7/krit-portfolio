"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          label="// contact"
          title="Let's Connect"
          description="Interested in AI engineering, full-stack roles, or collaborating on a project? I'd love to hear from you."
        />

        <FadeIn>
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="mb-8 space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 text-lg font-mono text-primary transition-colors hover:text-foreground"
                >
                  <Mail className="h-5 w-5" />
                  {profile.email}
                  <ArrowUpRight className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <p className="text-sm text-muted-foreground">
                  {profile.location}
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ size: "lg" })}
                >
                  Download Resume
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  <GithubIcon className="mr-2 h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  <LinkedinIcon className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
