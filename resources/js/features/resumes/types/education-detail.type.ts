import z from "zod";

export const educationDetailSchema = z
  .object({
    resumeId: z.uuid(),
    institution: z
      .string("Institution must be a string")
      .min(3, "Institution must contain at least 3 characters")
      .max(255, "Institution must contain at most 255 characters")
      .optional()
      .or(z.literal("")),
    degree: z
      .string("Degree must be a string")
      .min(5, "Degree must contain at most 5 characters")
      .max(255, "Degree must contain at most 255 characters")
      .optional()
      .or(z.literal("")),
    startDate: z.string().optional().or(z.literal("")),
    endDate: z.string().optional().or(z.literal("")),
    ongoing: z.boolean().optional(),
    description: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.ongoing === false) return !!data.endDate;
      return true;
    },
    {
      message: "End date is required if the education is not ongoing",
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

export const educationDetailsSchema = z.object({
  educationDetails: z.array(educationDetailSchema),
});

export type EducationDetail = {
  id: string;
  resumeId: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  ongoing: boolean;
  description: string;
};
