import z from "zod";

export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  imageUrl: z.string(),
  link: z.string().url(),
  status: z.enum(["Active", "Developing", "Planning"]),
  info: z
    .object({
      problemStatement: z.string().optional(),
      solution: z.string().optional(),
      details: z.string().optional(),
      outcome: z.string().optional(),
      techStack: z.array(z.string()).optional(),
    })
    .optional(),
});
