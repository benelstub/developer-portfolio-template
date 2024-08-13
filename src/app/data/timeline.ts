import { z } from "zod";

export const timelineElementSchema = z.object({
  title: z.string(),
  date: z.string(),
  description: z.string(),
});

export type TimelineElement = z.infer<typeof timelineElementSchema>;

//TODO: Complete your timeline of events

export const timelineData: TimelineElement[] = [
  {
    title: "Launched a successful SaaS product",
    date: "Aug 2024",
    description:
      "After lots of hard work and dedication, I finally launched my own SaaS product, helping businesses streamline their operations and achieve their goals.",
  },
  {
    title: "Became a Senior Developer at a leading tech company",
    date: "Jun 2024",
    description:
      "Recognized for my expertise and leadership, I was promoted to Senior Developer, leading a team of talented engineers and contributing to the company's growth.",
  },
  {
    title: "Presented at a major tech conference",
    date: "Apr 2024",
    description:
      "Shared my knowledge and insights on building scalable web applications at a prestigious tech conference, inspiring other developers and expanding my network.",
  },
  {
    title: "Completed a personal project",
    date: "",
    description:
      "Successfully delivered a personal project using the latest technologies, demonstrating my ability to adapt to new tools and solve complex problems.",
  },
  {
    title: "Joined a dynamic startup as a Developer",
    date: "Oct 2023",
    description:
      "Joined a fast-growing startup as a Developer, contributing to the development of innovative products and experiencing the excitement of a rapidly evolving environment.",
  },
  {
    title: "Completed a bootcamp",
    date: "Aug 2023",
    description:
      "Immersed myself in a coding bond building a portfolio of projects.",
  },
  {
    title: "Started learning to code",
    date: "",
    description:
      "Embarked on my coding journey, driven by a desire to create and solve problems. I quickly realized my passion for software development and dedicated myself to mastering the craft.",
  },
];
