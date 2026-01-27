import { useResumeEditor } from "../../contexts/resume-editor-context";
import { AccordionTabLayout } from "../../layouts/tabs/accordion-tab.layout";
import { BaseTabLayout } from "../../layouts/tabs/base.layout";
import { ResumeEditorTab } from "../../types/contexts/resume-editor-context.type";
import UpdateAchievementAccordionItem from "../accordion-items/update-achievement-accordion-item.component";
import { StoreAchievementDialog } from "../dialogs/store-achievement-dialog.component";

export function AchievementsTab() {
  const { forms, openAccordions, setOpenAccordions } = useResumeEditor();
  const form = forms[ResumeEditorTab.ACHIEVEMENTS].form;
  const fieldArray = forms[ResumeEditorTab.ACHIEVEMENTS].fieldArray;

  return (
    <BaseTabLayout title="Achievements" subtitle="Edit your achievements">
      <AccordionTabLayout
        form={form}
        openAccordions={openAccordions}
        setOpenAccordions={setOpenAccordions}
      >
        {fieldArray.fields.map((workExperience, index) => (
          <UpdateAchievementAccordionItem
            key={workExperience.id}
            form={form}
            index={index}
          />
        ))}
        <StoreAchievementDialog />
      </AccordionTabLayout>
    </BaseTabLayout>
  );
}
