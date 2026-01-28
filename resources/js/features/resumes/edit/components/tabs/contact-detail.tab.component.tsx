import { router } from "@inertiajs/react";
import type z from "zod";
import { BaseTabLayout } from "@/features/resumes/edit/layouts/tabs/base.layout";
import { CardTabLayout } from "@/features/resumes/edit/layouts/tabs/card-tab.layout";
import type { contactDetailSchema } from "@/features/resumes/types/contact-detail.type";
import { useResumeEditor } from "../../contexts/resume-editor-context";
import { ResumeEditorTab } from "../../types/contexts/resume-editor-context.type";
import { ContactDetailForm } from "../forms/contact-detail-form.component";

export function ContactDetailTab() {
  const { resume, forms } = useResumeEditor();
  const form = forms[ResumeEditorTab.CONTACT_DETAILS].form;
  const onSubmit = (values: z.infer<typeof contactDetailSchema>) =>
    router.put(`/contact-details/${resume.contactDetail.id}`, values);

  return (
    <BaseTabLayout title="Contact Details" subtitle="Edit your contact details">
      <CardTabLayout form={form} onSubmit={onSubmit}>
        <ContactDetailForm form={form} />
      </CardTabLayout>
    </BaseTabLayout>
  );
}
