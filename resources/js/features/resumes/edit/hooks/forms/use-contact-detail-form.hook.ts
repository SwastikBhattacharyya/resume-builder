import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type z from "zod";
import {
  type ContactDetail,
  contactDetailSchema,
} from "@/features/resumes/types/contact-detail.type";

export function useContactDetailForm(contactDetail: ContactDetail) {
  return useForm<z.infer<typeof contactDetailSchema>>({
    resolver: zodResolver(contactDetailSchema),
    mode: "onChange",
    defaultValues: {
      email: contactDetail.email ?? "",
      phone: contactDetail.phone ?? "",
      location: contactDetail.location ?? "",
      linkedin: contactDetail.linkedin ?? "",
      github: contactDetail.github ?? "",
      website: contactDetail.website ?? "",
    },
  });
}
