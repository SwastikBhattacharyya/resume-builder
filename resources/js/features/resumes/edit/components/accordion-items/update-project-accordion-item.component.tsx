import { router } from "@inertiajs/react";
import { type UseFormReturn, useWatch } from "react-hook-form";
import type z from "zod";
import type { projectsSchema } from "@/features/resumes/types/project.type";
import { useResumeEditor } from "../../contexts/resume-editor-context";
import { UpdateAccordionItemLayout } from "../../layouts/accordion-items/update-accordion-item.layout";
import { DeleteDialog } from "../dialogs/delete-dialog.component";
import UpdateProjectForm from "../forms/update-project-form.component";

export default function UpdateProjectAccordionItem({
  form,
  index,
}: {
  form: UseFormReturn<z.infer<typeof projectsSchema>>;
  index: number;
}) {
  const { resume } = useResumeEditor();

  const name = useWatch({
    control: form.control,
    name: `projects.${index}.name`,
  });

  return (
    <UpdateAccordionItemLayout
      display={name ?? `Project ${index + 1}`}
      value={`project-${resume.projects[index]?.id}`}
    >
      <UpdateProjectForm form={form} index={index} />
      <DeleteDialog
        title="Delete Project"
        description="Are you sure? This action will permanently delete the project."
        onSubmit={() =>
          router.delete(`/projects/${resume.projects[index]?.id}`)
        }
      />
    </UpdateAccordionItemLayout>
  );
}
