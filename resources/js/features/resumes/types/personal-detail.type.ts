import { z } from "zod";

export const personalDetailSchema = z.object({
  fullName: z
    .string("Full Name must be a string")
    .min(2, "Full name must contain at least 2 characters")
    .max(255, "Full name must contain at most 255 characters")
    .optional()
    .or(z.literal("")),
  designation: z
    .string("Designation must be a string")
    .min(4, "Designation must contain at least 4 characters")
    .max(255, "Designation must contain at most 255 characters")
    .optional()
    .or(z.literal("")),
  profile: z
    .string("Profile must be a string")
    .min(8, "Profile must contain at least 8 characters")
    .optional()
    .or(z.literal("")),
});

export interface PersonalDetail {
  id: string;
  resumeId: string;
  fullName: string;
  designation: string;
  profile: string;
}
