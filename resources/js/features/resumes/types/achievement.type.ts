import { z } from "zod";

export const achievementSchema = z.object({
  resumeId: z.uuid(),
  title: z
    .string("Title must be a string")
    .min(5, "Title must contain at least 5 characters")
    .max(255, "Title must contain at most 255 characters")
    .optional()
    .or(z.literal("")),
  issuer: z
    .string("Issuer must be a string")
    .min(5, "Issuer must contain at least 5 characters")
    .max(255, "Issuer must contain at most 255 characters")
    .optional()
    .or(z.literal("")),
  dateAwarded: z.string().optional().or(z.literal("")),
  description: z
    .string("Description must be a string")
    .optional()
    .or(z.literal("")),
});

export const achievementsSchema = z.object({
  achievements: z.array(achievementSchema),
});

export type Achievement = {
  id: string;
  resumeId: string;
  title: string;
  issuer: string;
  dateAwarded: string;
  description: string;
};
