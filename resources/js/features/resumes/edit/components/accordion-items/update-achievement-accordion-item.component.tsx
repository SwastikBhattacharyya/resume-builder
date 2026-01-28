import { router } from "@inertiajs/react";
import { type UseFormReturn, useWatch } from "react-hook-form";
import type z from "zod";
import type { achievementsSchema } from "@/features/resumes/types/achievement.type";
import { useResumeEditor } from "../../contexts/resume-editor-context";
import { UpdateAccordionItemLayout } from "../../layouts/accordion-items/update-accordion-item.layout";
import { DeleteDialog } from "../dialogs/delete-dialog.component";
import UpdateAchievementForm from "../forms/update-achievement-form.component";

export default function UpdateAchievementAccordionItem({
  form,
  index,
}: {
  form: UseFormReturn<z.infer<typeof achievementsSchema>>;
  index: number;
}) {
  const { resume } = useResumeEditor();

  const name = useWatch({
    control: form.control,
    name: `achievements.${index}.title`,
  });

  return (
    <UpdateAccordionItemLayout
      display={name ?? `Achievement ${index + 1}`}
      value={`achievement-${resume.achievements[index]?.id}`}
    >
      <UpdateAchievementForm form={form} index={index} />
      <DeleteDialog
        title="Delete Achievement"
        description="Are you sure? This action will permanently delete the achievement."
        onSubmit={() =>
          router.delete(`/achievements/${resume.achievements[index]?.id}`)
        }
      />
    </UpdateAccordionItemLayout>
  );
}
