import { router } from "@inertiajs/react";
import { type UseFormReturn, useWatch } from "react-hook-form";
import type z from "zod";
import type { educationDetailsSchema } from "@/features/resumes/types/education-detail.type";
import { useResumeEditor } from "../../contexts/resume-editor-context";
import { UpdateAccordionItemLayout } from "../../layouts/accordion-items/update-accordion-item.layout";
import { DeleteDialog } from "../dialogs/delete-dialog.component";
import UpdateEducationDetailForm from "../forms/update-education-detail-form.component";

export default function UpdateEducationDetailAccordionItem({
  form,
  index,
}: {
  form: UseFormReturn<z.infer<typeof educationDetailsSchema>>;
  index: number;
}) {
  const { resume } = useResumeEditor();

  const degreeName = useWatch({
    control: form.control,
    name: `educationDetails.${index}.degree`,
  });

  return (
    <UpdateAccordionItemLayout
      display={degreeName ?? `Education Detail ${index + 1}`}
      value={`education-detail-${resume.educationDetails[index]?.id}`}
    >
      <UpdateEducationDetailForm form={form} index={index} />
      <DeleteDialog
        title="Delete Education Detail"
        description="Are you sure? This action will permanently delete the education detail."
        onSubmit={() =>
          router.delete(
            `/education-details/${resume.educationDetails[index]?.id}`,
          )
        }
      />
    </UpdateAccordionItemLayout>
  );
}
