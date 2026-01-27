import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type z from "zod";
import {
  type WorkExperience,
  workExperiencesSchema,
} from "@/features/resumes/types/work-experience.type";
import { mapWorkExperiencesToFormDefaults } from "../../utils/forms/values.util";

export function useWorkExperiencesForm(workExperiences: WorkExperience[]) {
  return useForm<z.infer<typeof workExperiencesSchema>>({
    resolver: zodResolver(workExperiencesSchema),
    mode: "onChange",
    defaultValues: {
      workExperiences: mapWorkExperiencesToFormDefaults(workExperiences),
    },
  });
}
