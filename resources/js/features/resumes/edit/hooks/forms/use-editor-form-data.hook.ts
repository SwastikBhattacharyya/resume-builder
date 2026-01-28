import {
  type ResumeEditorForms,
  ResumeEditorTab,
} from "@/features/resumes/edit/types/contexts/resume-editor-context.type";

export function useEditorFormsData(forms: ResumeEditorForms) {
  const personalDetail = forms[ResumeEditorTab.PERSONAL_DETAILS].form.watch();
  const contactDetail = forms[ResumeEditorTab.CONTACT_DETAILS].form.watch();
  const educationDetails =
    forms[ResumeEditorTab.EDUCATION_DETAILS].form.watch();
  const workExperiences = forms[ResumeEditorTab.WORK_EXPERIENCES].form.watch();
  const projects = forms[ResumeEditorTab.PROJECTS].form.watch();
  const skills = forms[ResumeEditorTab.SKILLS].form.watch();
  const achievements = forms[ResumeEditorTab.ACHIEVEMENTS].form.watch();

  return {
    personalDetail,
    contactDetail,
    educationDetails,
    workExperiences,
    projects,
    skills,
    achievements,
  };
}
