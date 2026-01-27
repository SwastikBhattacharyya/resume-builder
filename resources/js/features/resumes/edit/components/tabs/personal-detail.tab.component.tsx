import { router } from "@inertiajs/react";
import type z from "zod";
import { BaseTabLayout } from "@/features/resumes/edit/layouts/tabs/base.layout";
import { CardTabLayout } from "@/features/resumes/edit/layouts/tabs/card-tab.layout";
import type { personalDetailSchema } from "@/features/resumes/types/personal-detail.type";
import { useResumeEditor } from "../../contexts/resume-editor-context";
import { ResumeEditorTab } from "../../types/contexts/resume-editor-context.type";
import { PersonalDetailForm } from "../forms/personal-detail-form.component";

export function PersonalDetailTab() {
  const { resume, forms } = useResumeEditor();
  const form = forms[ResumeEditorTab.PERSONAL_DETAILS].form;
  const onSubmit = (values: z.infer<typeof personalDetailSchema>) =>
    router.put(`/personal-details/${resume.personalDetail.id}`, values);

  return (
    <BaseTabLayout
      title="Personal Details"
      subtitle="Edit your personal details"
    >
      <CardTabLayout form={form} onSubmit={onSubmit}>
        <PersonalDetailForm form={form} />
      </CardTabLayout>
    </BaseTabLayout>
  );
}
