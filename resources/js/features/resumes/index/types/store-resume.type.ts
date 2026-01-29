import z from "zod";

export const storeResumeSchema = z.object({
  title: z
    .string("Title must be a string")
    .nonempty("Title is required")
    .min(8, "Title must contain at least 8 characters")
    .max(255, "Title must contain at most 255 characters"),
});
