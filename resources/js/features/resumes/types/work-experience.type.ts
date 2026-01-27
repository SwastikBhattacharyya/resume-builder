import z from "zod";

export const workExperienceSchema = z
  .object({
    resumeId: z.uuid(),
    companyName: z
      .string("Company Name must be a string")
      .min(5, "Company Name must contain at least 5 characters")
      .max(255, "Company Name must contain at most 255 characters")
      .optional()
      .or(z.literal("")),
    designation: z
      .string("Designation must be a string")
      .min(3, "Designation must contain at most 3 characters")
      .max(255, "Designation must contain at most 255 characters")
      .optional()
      .or(z.literal("")),
    startDate: z.string().optional().or(z.literal("")),
    endDate: z.string().optional().or(z.literal("")),
    isCurrent: z.boolean().optional(),
    description: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.isCurrent === false) return !!data.endDate;
      return true;
    },
    {
      message: "End date is required if the job is not current",
      path: ["endDate"],
    },
  )
  .refine(
    (data) => {
      if (!data.startDate || !data.endDate) return true;
      return new Date(data.endDate) >= new Date(data.startDate);
    },
    {
      message: "End date must be after or equal to start date",
      path: ["endDate"],
    },
  );

export const workExperiencesSchema = z.object({
  workExperiences: z.array(workExperienceSchema),
});

export type WorkExperience = {
  id: string;
  resumeId: string;
  companyName: string;
  designation: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string;
};
