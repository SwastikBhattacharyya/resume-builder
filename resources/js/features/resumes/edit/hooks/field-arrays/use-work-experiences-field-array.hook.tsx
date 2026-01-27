import { type UseFormReturn, useFieldArray } from "react-hook-form";
import type z from "zod";
import type { workExperiencesSchema } from "@/features/resumes/types/work-experience.type";

export function useWorkExperiencesFieldArray(
  form: UseFormReturn<z.infer<typeof workExperiencesSchema>>,
) {
  return useFieldArray({
    control: form.control,
    name: "workExperiences",
  });
}
