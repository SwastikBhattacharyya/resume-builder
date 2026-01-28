import { type UseFormReturn, useFieldArray } from "react-hook-form";
import type z from "zod";
import type { educationDetailsSchema } from "@/features/resumes/types/education-detail.type";

export function useEducationDetailsFieldArray(
  form: UseFormReturn<z.infer<typeof educationDetailsSchema>>,
) {
  return useFieldArray({
    control: form.control,
    name: "educationDetails",
  });
}
