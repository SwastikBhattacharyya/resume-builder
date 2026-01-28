import { z } from "zod";

export const contactDetailSchema = z.object({
  email: z
    .email("Email must be a valid email address")
    .max(255, "Email must contain at most 255 characters")
    .optional()
    .or(z.literal("")),
  phone: z
    .string("Phone must be a string")
    .min(7, "Phone must contain at least 7 characters")
    .max(20, "Phone must contain at most 20 characters")
    .optional()
    .or(z.literal("")),
  location: z
    .string("Location must be a string")
    .min(5, "Location must contain at least 5 characters")
    .max(255, "Location must contain at most 255 characters")
    .optional()
    .or(z.literal("")),
  linkedin: z
    .url("LinkedIn must be a valid URL")
    .max(255, "LinkedIn must contain at most 255 characters")
    .optional()
    .or(z.literal("")),
  github: z
    .url("GitHub must be a valid URL")
    .max(255, "GitHub must contain at most 255 characters")
    .optional()
    .or(z.literal("")),
  website: z
    .url("Website must be a valid URL")
    .max(255, "Website must contain at most 255 characters")
    .optional()
    .or(z.literal("")),
});

export type ContactDetail = {
  id: string;
  resumeId: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  website: string;
};
