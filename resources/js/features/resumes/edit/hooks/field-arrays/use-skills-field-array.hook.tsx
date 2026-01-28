import { type UseFormReturn, useFieldArray } from "react-hook-form";
import type z from "zod";
import type { skillsSchema } from "@/features/resumes/types/skill.type";

export function useSkillsFieldArray(
  form: UseFormReturn<z.infer<typeof skillsSchema>>,
) {
  return useFieldArray({
    control: form.control,
    name: "skills",
  });
}
