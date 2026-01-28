import type { ReactNode } from "react";
import { useResumeEditor } from "../../contexts/resume-editor-context";
import { ResumeEditorTab } from "../../types/contexts/resume-editor-context.type";
import { AchievementsTab } from "./achievements.tab.component";
import { ContactDetailTab } from "./contact-detail.tab.component";
import { EducationDetailsTab } from "./education-details.tab.component";
import { PersonalDetailTab } from "./personal-detail.tab.component";
import { ProjectsTab } from "./projects.tab.component";
import { SkillsTab } from "./skills.tab.component";
import { WorkExperiencesTab } from "./work-experiences.tab.component";

export default function Tabs() {
  const forms: Record<ResumeEditorTab, ReactNode> = {
    [ResumeEditorTab.PERSONAL_DETAILS]: <PersonalDetailTab />,
    [ResumeEditorTab.CONTACT_DETAILS]: <ContactDetailTab />,
    [ResumeEditorTab.EDUCATION_DETAILS]: <EducationDetailsTab />,
    [ResumeEditorTab.WORK_EXPERIENCES]: <WorkExperiencesTab />,
    [ResumeEditorTab.PROJECTS]: <ProjectsTab />,
    [ResumeEditorTab.SKILLS]: <SkillsTab />,
    [ResumeEditorTab.ACHIEVEMENTS]: <AchievementsTab />,
  };
  const { currentTab } = useResumeEditor();
  return forms[currentTab];
}
