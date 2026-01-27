import { useEffect } from "react";
import type { Resume } from "@/features/resumes/types/resume.type";
import {
  type ResumeEditorForms,
  ResumeEditorTab,
} from "../../types/contexts/resume-editor-context.type";
import {
  mapAchievementsToFormDefaults,
  mapEducationDetailsToFormDefaults,
  mapProjectsToFormDefaults,
  mapSkillsToFormDefaults,
  mapWorkExperiencesToFormDefaults,
} from "../../utils/forms/values.util";

export function useArrayFormReset(resume: Resume, forms: ResumeEditorForms) {
  useEffect(() => {
    forms[ResumeEditorTab.EDUCATION_DETAILS].form.reset({
      educationDetails: mapEducationDetailsToFormDefaults(
        resume.educationDetails,
      ),
    });
  }, [
    resume.educationDetails,
    forms[ResumeEditorTab.EDUCATION_DETAILS].form.reset,
  ]);

  useEffect(() => {
    forms[ResumeEditorTab.WORK_EXPERIENCES].form.reset({
      workExperiences: mapWorkExperiencesToFormDefaults(resume.workExperiences),
    });
  }, [
    resume.workExperiences,
    forms[ResumeEditorTab.WORK_EXPERIENCES].form.reset,
  ]);

  useEffect(() => {
    forms[ResumeEditorTab.PROJECTS].form.reset({
      projects: mapProjectsToFormDefaults(resume.projects),
    });
  }, [resume.projects, forms[ResumeEditorTab.PROJECTS].form.reset]);

  useEffect(() => {
    forms[ResumeEditorTab.SKILLS].form.reset({
      skills: mapSkillsToFormDefaults(resume.skills),
    });
  }, [resume.skills, forms[ResumeEditorTab.SKILLS].form.reset]);

  useEffect(() => {
    forms[ResumeEditorTab.ACHIEVEMENTS].form.reset({
      achievements: mapAchievementsToFormDefaults(resume.achievements),
    });
  }, [resume.achievements, forms[ResumeEditorTab.ACHIEVEMENTS].form.reset]);
}
