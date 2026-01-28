import z from "zod";

export const projectSchema = z
  .object({
    resumeId: z.uuid(),
    name: z
      .string("Name must be a string")
      .min(5, "Name must contain at least 5 characters")
      .max(255, "Name must contain at most 255 characters")
      .optional()
      .or(z.literal("")),
    role: z
      .string("Role must be a string")
      .min(3, "Role must contain at most 3 characters")
      .max(255, "Role must contain at most 255 characters")
      .optional()
      .or(z.literal("")),
    startDate: z.string().optional().or(z.literal("")),
    endDate: z.string().optional().or(z.literal("")),
    ongoing: z.boolean(),
    description: z.string().optional(),
    url: z.url().optional().or(z.literal("")),
  })
  .refine(
    (data) => {
      if (data.ongoing === false) return !!data.endDate;
      return true;
    },
    {
      message: "End date is required if the project is not ongoing",
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

export const projectsSchema = z.object({
  projects: z.array(projectSchema),
});

export type Project = {
  id: string;
  resumeId: string;
  name: string;
  role: string;
  startDate: string;
  endDate: string;
  ongoing: boolean;
  description: string;
  url: string;
};
