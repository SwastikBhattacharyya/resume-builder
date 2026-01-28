import type { Dispatch, SetStateAction } from "react";
import type { UseFieldArrayReturn, UseFormReturn } from "react-hook-form";
import type z from "zod";
import type { achievementsSchema } from "@/features/resumes/types/achievement.type";
import type { contactDetailSchema } from "@/features/resumes/types/contact-detail.type";
import type { educationDetailsSchema } from "@/features/resumes/types/education-detail.type";
import type { personalDetailSchema } from "@/features/resumes/types/personal-detail.type";
import type { projectsSchema } from "@/features/resumes/types/project.type";
import type { Resume } from "@/features/resumes/types/resume.type";
import type { skillsSchema } from "@/features/resumes/types/skill.type";
import type { workExperiencesSchema } from "@/features/resumes/types/work-experience.type";
import type { ResumeEditorFormsData } from "../hooks/editor-forms-data.type";

export enum ResumeEditorTab {
  PERSONAL_DETAILS = 0,
  CONTACT_DETAILS = 1,
  EDUCATION_DETAILS = 2,
  WORK_EXPERIENCES = 3,
  PROJECTS = 4,
  SKILLS = 5,
  ACHIEVEMENTS = 6,
}

export const MAX_TAB_INDEX = ResumeEditorTab.ACHIEVEMENTS;
export const MIN_TAB_INDEX = ResumeEditorTab.PERSONAL_DETAILS;

export type ResumeEditorTabAction =
  | { type: "NEXT_TAB" }
  | { type: "PREVIOUS_TAB" }
  | { type: "SET_TAB"; payload: ResumeEditorTab };

export type ResumeEditorForms = {
  [ResumeEditorTab.PERSONAL_DETAILS]: {
    form: UseFormReturn<z.infer<typeof personalDetailSchema>>;
    submit: () => void;
  };
  [ResumeEditorTab.CONTACT_DETAILS]: {
    form: UseFormReturn<z.infer<typeof contactDetailSchema>>;
    submit: () => void;
  };
  [ResumeEditorTab.EDUCATION_DETAILS]: {
    form: UseFormReturn<z.infer<typeof educationDetailsSchema>>;
    fieldArray: UseFieldArrayReturn<z.infer<typeof educationDetailsSchema>>;
    submit: () => void;
  };
  [ResumeEditorTab.WORK_EXPERIENCES]: {
    form: UseFormReturn<z.infer<typeof workExperiencesSchema>>;
    fieldArray: UseFieldArrayReturn<z.infer<typeof workExperiencesSchema>>;
    submit: () => void;
  };
  [ResumeEditorTab.PROJECTS]: {
    form: UseFormReturn<z.infer<typeof projectsSchema>>;
    fieldArray: UseFieldArrayReturn<z.infer<typeof projectsSchema>>;
    submit: () => void;
  };
  [ResumeEditorTab.SKILLS]: {
    form: UseFormReturn<z.infer<typeof skillsSchema>>;
    fieldArray: UseFieldArrayReturn<z.infer<typeof skillsSchema>>;
    submit: () => void;
  };
  [ResumeEditorTab.ACHIEVEMENTS]: {
    form: UseFormReturn<z.infer<typeof achievementsSchema>>;
    fieldArray: UseFieldArrayReturn<z.infer<typeof achievementsSchema>>;
    submit: () => void;
  };
};

export type ResumeEditorContext = {
  resume: Resume;
  forms: ResumeEditorForms;
  formsData: ResumeEditorFormsData;
  openAccordions: string[];
  setOpenAccordions: Dispatch<SetStateAction<string[]>>;
  currentTab: ResumeEditorTab;
  nextTab: () => void;
  previousTab: () => void;
  setTab: (tab: ResumeEditorTab) => void;
};
