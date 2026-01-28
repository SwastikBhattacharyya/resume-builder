import { BaseTabLayout } from "@/features/resumes/edit/layouts/tabs/base.layout";
import { useResumeEditor } from "../../contexts/resume-editor-context";
import { AccordionTabLayout } from "../../layouts/tabs/accordion-tab.layout";
import { ResumeEditorTab } from "../../types/contexts/resume-editor-context.type";
import UpdateSkillAccordionItem from "../accordion-items/update-skill-accordion-item.component";
import { StoreSkillDialog } from "../dialogs/store-skill-dialog.component";

export function SkillsTab() {
  const { forms, openAccordions, setOpenAccordions } = useResumeEditor();
  const form = forms[ResumeEditorTab.SKILLS].form;
  const fieldArray = forms[ResumeEditorTab.SKILLS].fieldArray;

  return (
    <BaseTabLayout title="Skills" subtitle="Edit your skills">
      <AccordionTabLayout
        form={form}
        openAccordions={openAccordions}
        setOpenAccordions={setOpenAccordions}
      >
        {fieldArray.fields.map((skill, index) => (
          <UpdateSkillAccordionItem key={skill.id} form={form} index={index} />
        ))}
        <StoreSkillDialog />
      </AccordionTabLayout>
    </BaseTabLayout>
  );
}
