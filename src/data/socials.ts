import { profile } from "@/data/profile";

export interface Social {
  name: string;
  url: string;
  icon: "Github" | "Linkedin";
}

export const socials: Social[] = [
  {
    name: "GitHub",
    url: profile.github,
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: profile.linkedin,
    icon: "Linkedin",
  },
];
