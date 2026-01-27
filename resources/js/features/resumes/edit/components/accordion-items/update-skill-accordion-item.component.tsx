import { router } from "@inertiajs/react";
import { type UseFormReturn, useWatch } from "react-hook-form";
import type z from "zod";
import type { skillsSchema } from "@/features/resumes/types/skill.type";
import { useResumeEditor } from "../../contexts/resume-editor-context";
import { UpdateAccordionItemLayout } from "../../layouts/accordion-items/update-accordion-item.layout";
import { DeleteDialog } from "../dialogs/delete-dialog.component";
import UpdateSkillForm from "../forms/update-skill-form.component";

export default function UpdateSkillAccordionItem({
  form,
  index,
}: {
  form: UseFormReturn<z.infer<typeof skillsSchema>>;
  index: number;
}) {
  const { resume } = useResumeEditor();

  const name = useWatch({
    control: form.control,
    name: `skills.${index}.name`,
  });

  return (
    <UpdateAccordionItemLayout
      display={name ?? `Skill ${index + 1}`}
      value={`skill-${resume.skills[index]?.id}`}
    >
      <UpdateSkillForm form={form} index={index} />
      <DeleteDialog
        title="Delete Skill"
        description="Are you sure? This action will permanently delete the skill."
        onSubmit={() => router.delete(`/skills/${resume.skills[index]?.id}`)}
      />
    </UpdateAccordionItemLayout>
  );
}
