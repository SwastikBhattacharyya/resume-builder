import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type z from "zod";
import { workExperienceSchema } from "@/features/resumes/types/work-experience.type";
import { useResumeEditor } from "../../contexts/resume-editor-context";
import { StoreDialogLayout } from "../../layouts/dialogs/store-dialog.layout";
import { StoreWorkExperienceForm } from "../forms/store-work-experience-form.component";

export function StoreWorkExperienceDialog() {
  const { resume } = useResumeEditor();

  const form = useForm<z.infer<typeof workExperienceSchema>>({
    resolver: zodResolver(workExperienceSchema),
    defaultValues: {
      resumeId: resume.id,
      companyName: "",
      designation: "",
      startDate: "",
      endDate: "",
      isCurrent: false,
      description: "",
    },
    mode: "onChange",
  });

  return (
    <StoreDialogLayout
      form={form}
      resource="Work Experience"
      route="/work-experiences"
    >
      <StoreWorkExperienceForm form={form} />
    </StoreDialogLayout>
  );
}
