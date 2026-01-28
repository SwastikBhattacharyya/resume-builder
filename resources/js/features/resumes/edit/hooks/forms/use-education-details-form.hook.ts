import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type z from "zod";
import {
  type EducationDetail,
  educationDetailsSchema,
} from "@/features/resumes/types/education-detail.type";
import { mapEducationDetailsToFormDefaults } from "../../utils/forms/values.util";

export function useEducationDetailsForm(educationDetails: EducationDetail[]) {
  return useForm<z.infer<typeof educationDetailsSchema>>({
    resolver: zodResolver(educationDetailsSchema),
    mode: "onChange",
    defaultValues: {
      educationDetails: mapEducationDetailsToFormDefaults(educationDetails),
    },
  });
}
