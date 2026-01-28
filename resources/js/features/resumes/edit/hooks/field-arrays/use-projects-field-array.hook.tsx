import { type UseFormReturn, useFieldArray } from "react-hook-form";
import type z from "zod";
import type { projectsSchema } from "@/features/resumes/types/project.type";

export function useProjectsFieldArray(
  form: UseFormReturn<z.infer<typeof projectsSchema>>,
) {
  return useFieldArray({
    control: form.control,
    name: "projects",
  });
}
