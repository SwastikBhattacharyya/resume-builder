import { router } from "@inertiajs/react";
import { type UseFormReturn, useWatch } from "react-hook-form";
import type z from "zod";
import type { workExperiencesSchema } from "@/features/resumes/types/work-experience.type";
import { useResumeEditor } from "../../contexts/resume-editor-context";
import { UpdateAccordionItemLayout } from "../../layouts/accordion-items/update-accordion-item.layout";
import { DeleteDialog } from "../dialogs/delete-dialog.component";
import UpdateWorkExperienceForm from "../forms/update-work-experience-form.component";

export default function UpdateWorkExperienceAccordionItem({
  form,
  index,
}: {
  form: UseFormReturn<z.infer<typeof workExperiencesSchema>>;
  index: number;
}) {
  const { resume } = useResumeEditor();

  const companyName = useWatch({
    control: form.control,
    name: `workExperiences.${index}.companyName`,
  });

  return (
    <UpdateAccordionItemLayout
      display={companyName ?? `Work Experience ${index + 1}`}
      value={`work-experience-${resume.workExperiences[index]?.id}`}
    >
      <UpdateWorkExperienceForm form={form} index={index} />
      <DeleteDialog
        title="Delete Work Experience"
        description="Are you sure? This action will permanently delete the work experience."
        onSubmit={() =>
          router.delete(
            `/work-experiences/${resume.workExperiences[index]?.id}`,
          )
        }
      />
    </UpdateAccordionItemLayout>
  );
}
