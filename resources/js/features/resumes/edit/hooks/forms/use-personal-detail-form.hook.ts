import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type z from "zod";
import {
  type PersonalDetail,
  personalDetailSchema,
} from "@/features/resumes/types/personal-detail.type";

export function usePersonalDetailForm(personalDetail: PersonalDetail) {
  return useForm<z.infer<typeof personalDetailSchema>>({
    resolver: zodResolver(personalDetailSchema),
    mode: "onChange",
    defaultValues: {
      fullName: personalDetail.fullName ?? "",
      designation: personalDetail.designation ?? "",
      profile: personalDetail.profile ?? "",
    },
  });
}
