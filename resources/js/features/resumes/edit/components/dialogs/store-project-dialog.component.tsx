import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type z from "zod";
import { projectSchema } from "@/features/resumes/types/project.type";
import { useResumeEditor } from "../../contexts/resume-editor-context";
import { StoreDialogLayout } from "../../layouts/dialogs/store-dialog.layout";
import { StoreProjectForm } from "../forms/store-project-form.component";

export function StoreProjectDialog() {
  const { resume } = useResumeEditor();

  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      resumeId: resume.id,
      name: "",
      role: "",
      startDate: "",
      endDate: "",
      ongoing: false,
      description: "",
      url: "",
    },
    mode: "onChange",
  });

  return (
    <StoreDialogLayout form={form} resource="Project" route="/projects">
      <StoreProjectForm form={form} />
    </StoreDialogLayout>
  );
}
