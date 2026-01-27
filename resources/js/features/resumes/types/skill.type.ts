import z from "zod";

export const skillSchema = z.object({
  resumeId: z.uuid(),
  name: z
    .string("Name must be a string")
    .min(2, "Name must contain at least 2 characters")
    .max(255, "Name must contain at most 255 characters")
    .optional()
    .or(z.literal("")),
});

export const skillsSchema = z.object({
  skills: z.array(skillSchema),
});

export type Skill = {
  id: string;
  resumeId: string;
  name: string;
};
