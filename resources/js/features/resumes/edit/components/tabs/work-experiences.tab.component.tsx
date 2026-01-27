import { BaseTabLayout } from "@/features/resumes/edit/layouts/tabs/base.layout";
import { useResumeEditor } from "../../contexts/resume-editor-context";
import { AccordionTabLayout } from "../../layouts/tabs/accordion-tab.layout";
import { ResumeEditorTab } from "../../types/contexts/resume-editor-context.type";
import UpdateWorkExperienceAccordionItem from "../accordion-items/update-work-experience-accordion-item.component";
import { StoreWorkExperienceDialog } from "../dialogs/store-work-experience-dialog.component";

export function WorkExperiencesTab() {
  const { forms, openAccordions, setOpenAccordions } = useResumeEditor();
  const form = forms[ResumeEditorTab.WORK_EXPERIENCES].form;
  const fieldArray = forms[ResumeEditorTab.WORK_EXPERIENCES].fieldArray;

  return (
    <BaseTabLayout
      title="Work Experiences"
      subtitle="Edit your work experiences"
    >
      <AccordionTabLayout
        form={form}
        openAccordions={openAccordions}
        setOpenAccordions={setOpenAccordions}
      >
        {fieldArray.fields.map((workExperience, index) => (
          <UpdateWorkExperienceAccordionItem
            key={workExperience.id}
            form={form}
            index={index}
          />
        ))}
        <StoreWorkExperienceDialog />
      </AccordionTabLayout>
    </BaseTabLayout>
  );
}
