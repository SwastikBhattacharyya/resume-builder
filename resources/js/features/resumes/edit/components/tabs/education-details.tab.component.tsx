import { BaseTabLayout } from "@/features/resumes/edit/layouts/tabs/base.layout";
import { useResumeEditor } from "../../contexts/resume-editor-context";
import { AccordionTabLayout } from "../../layouts/tabs/accordion-tab.layout";
import { ResumeEditorTab } from "../../types/contexts/resume-editor-context.type";
import UpdateEducationDetailAccordionItem from "../accordion-items/update-education-detail-accordion-item.component";
import { StoreEducationDetailDialog } from "../dialogs/store-education-detail-dialog.component";

export function EducationDetailsTab() {
  const { forms, openAccordions, setOpenAccordions } = useResumeEditor();
  const form = forms[ResumeEditorTab.EDUCATION_DETAILS].form;
  const fieldArray = forms[ResumeEditorTab.EDUCATION_DETAILS].fieldArray;

  return (
    <BaseTabLayout
      title="Education Details"
      subtitle="Edit your education details"
    >
      <AccordionTabLayout
        form={form}
        openAccordions={openAccordions}
        setOpenAccordions={setOpenAccordions}
      >
        {fieldArray.fields.map((educationDetail, index) => (
          <UpdateEducationDetailAccordionItem
            key={educationDetail.id}
            form={form}
            index={index}
          />
        ))}
        <StoreEducationDetailDialog />
      </AccordionTabLayout>
    </BaseTabLayout>
  );
}
