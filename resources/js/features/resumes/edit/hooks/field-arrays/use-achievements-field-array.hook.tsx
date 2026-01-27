import { type UseFormReturn, useFieldArray } from "react-hook-form";
import type z from "zod";
import type { achievementsSchema } from "@/features/resumes/types/achievement.type";

export function useAchievementsFieldArray(
  form: UseFormReturn<z.infer<typeof achievementsSchema>>,
) {
  return useFieldArray({
    control: form.control,
    name: "achievements",
  });
}
