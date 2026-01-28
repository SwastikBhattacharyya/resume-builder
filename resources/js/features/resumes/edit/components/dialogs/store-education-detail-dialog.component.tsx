import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type z from "zod";
import { educationDetailSchema } from "@/features/resumes/types/education-detail.type";
import { useResumeEditor } from "../../contexts/resume-editor-context";
import { StoreDialogLayout } from "../../layouts/dialogs/store-dialog.layout";
import { StoreEducationDetailForm } from "../forms/store-education-detail-form.component";

export function StoreEducationDetailDialog() {
  const { resume } = useResumeEditor();

  const form = useForm<z.infer<typeof educationDetailSchema>>({
    resolver: zodResolver(educationDetailSchema),
    defaultValues: {
      resumeId: resume.id,
      institution: "",
      degree: "",
      startDate: "",
      endDate: "",
      ongoing: false,
      description: "",
    },
    mode: "onChange",
  });

  return (
    <StoreDialogLayout
      form={form}
      resource="Education Detail"
      route="/education-details"
    >
      <StoreEducationDetailForm form={form} />
    </StoreDialogLayout>
  );
}
