import { BaseTabLayout } from "@/features/resumes/edit/layouts/tabs/base.layout";
import { useResumeEditor } from "../../contexts/resume-editor-context";
import { AccordionTabLayout } from "../../layouts/tabs/accordion-tab.layout";
import { ResumeEditorTab } from "../../types/contexts/resume-editor-context.type";
import UpdateProjectAccordionItem from "../accordion-items/update-project-accordion-item.component";
import { StoreProjectDialog } from "../dialogs/store-project-dialog.component";

export function ProjectsTab() {
  const { forms, openAccordions, setOpenAccordions } = useResumeEditor();
  const form = forms[ResumeEditorTab.PROJECTS].form;
  const fieldArray = forms[ResumeEditorTab.PROJECTS].fieldArray;

  return (
    <BaseTabLayout title="Projects" subtitle="Edit your projects">
      <AccordionTabLayout
        form={form}
        openAccordions={openAccordions}
        setOpenAccordions={setOpenAccordions}
      >
        {fieldArray.fields.map((project, index) => (
          <UpdateProjectAccordionItem
            key={project.id}
            form={form}
            index={index}
          />
        ))}
        <StoreProjectDialog />
      </AccordionTabLayout>
    </BaseTabLayout>
  );
}
