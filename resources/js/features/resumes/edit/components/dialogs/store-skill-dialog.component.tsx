import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type z from "zod";
import { skillSchema } from "@/features/resumes/types/skill.type";
import { useResumeEditor } from "../../contexts/resume-editor-context";
import { StoreDialogLayout } from "../../layouts/dialogs/store-dialog.layout";
import { StoreSkillForm } from "../forms/store-skill-form.component";

export function StoreSkillDialog() {
  const { resume } = useResumeEditor();

  const form = useForm<z.infer<typeof skillSchema>>({
    resolver: zodResolver(skillSchema),
    defaultValues: {
      resumeId: resume.id,
      name: "",
    },
    mode: "onChange",
  });

  return (
    <StoreDialogLayout form={form} resource="Skill" route="/skills">
      <StoreSkillForm form={form} />
    </StoreDialogLayout>
  );
}
