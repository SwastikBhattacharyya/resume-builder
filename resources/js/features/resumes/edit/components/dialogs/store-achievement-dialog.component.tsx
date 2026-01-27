import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type z from "zod";
import { achievementSchema } from "@/features/resumes/types/achievement.type";
import { useResumeEditor } from "../../contexts/resume-editor-context";
import { StoreDialogLayout } from "../../layouts/dialogs/store-dialog.layout";
import { StoreAchievementForm } from "../forms/store-achievement-form.component";

export function StoreAchievementDialog() {
  const { resume } = useResumeEditor();

  const form = useForm<z.infer<typeof achievementSchema>>({
    resolver: zodResolver(achievementSchema),
    defaultValues: {
      resumeId: resume.id,
      title: "",
      issuer: "",
      dateAwarded: "",
      description: "",
    },
    mode: "onChange",
  });

  return (
    <StoreDialogLayout form={form} resource="Achievement" route="/achievements">
      <StoreAchievementForm form={form} />
    </StoreDialogLayout>
  );
}
