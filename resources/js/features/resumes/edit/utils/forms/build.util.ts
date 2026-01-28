import type { Resume } from "@/features/resumes/types/resume.type";
import { useAchievementsFieldArray } from "../../hooks/field-arrays/use-achievements-field-array.hook";
import { useEducationDetailsFieldArray } from "../../hooks/field-arrays/use-education-details-field-array.hook";
import { useProjectsFieldArray } from "../../hooks/field-arrays/use-projects-field-array.hook";
import { useSkillsFieldArray } from "../../hooks/field-arrays/use-skills-field-array.hook";
import { useWorkExperiencesFieldArray } from "../../hooks/field-arrays/use-work-experiences-field-array.hook";
import { useAchievementsForm } from "../../hooks/forms/use-achievements-form.hook";
import { useContactDetailForm } from "../../hooks/forms/use-contact-detail-form.hook";
import { useEducationDetailsForm } from "../../hooks/forms/use-education-details-form.hook";
import { usePersonalDetailForm } from "../../hooks/forms/use-personal-detail-form.hook";
import { useProjectsForm } from "../../hooks/forms/use-projects-form.hook";
import { useSkillsForm } from "../../hooks/forms/use-skills-form.hook";
import { useWorkExperiencesForm } from "../../hooks/forms/use-work-experiences-form.hook";
import { savedResumeToast } from "../../toasts/saved.toast";
import {
  type ResumeEditorForms,
  ResumeEditorTab,
} from "../../types/contexts/resume-editor-context.type";
import { submitArrayForm, submitForm } from "./submit.util";

export function buildResumeEditorForms(resume: Resume): ResumeEditorForms {
  const personalDetailForm = usePersonalDetailForm(resume.personalDetail);
  const contactDetailForm = useContactDetailForm(resume.contactDetail);
  const educationDetailsForm = useEducationDetailsForm(resume.educationDetails);
  const workExperiencesForm = useWorkExperiencesForm(resume.workExperiences);
  const projectsForm = useProjectsForm(resume.projects);
  const skillsForm = useSkillsForm(resume.skills);
  const achievementsForm = useAchievementsForm(resume.achievements);

  const educationDetailsFieldArray =
    useEducationDetailsFieldArray(educationDetailsForm);
  const workExperiencesFieldArray =
    useWorkExperiencesFieldArray(workExperiencesForm);
  const projectsFieldArray = useProjectsFieldArray(projectsForm);
  const skillsFieldArray = useSkillsFieldArray(skillsForm);
  const achievementsFieldArray = useAchievementsFieldArray(achievementsForm);

  return {
    [ResumeEditorTab.PERSONAL_DETAILS]: {
      form: personalDetailForm,
      submit: () =>
        submitForm({
          form: personalDetailForm,
          route: `/personal-details/${resume.personalDetail.id}`,
          onSuccess: savedResumeToast,
        }),
    },
    [ResumeEditorTab.CONTACT_DETAILS]: {
      form: contactDetailForm,
      submit: () =>
        submitForm({
          form: contactDetailForm,
          route: `/contact-details/${resume.contactDetail.id}`,
          onSuccess: savedResumeToast,
        }),
    },
    [ResumeEditorTab.EDUCATION_DETAILS]: {
      form: educationDetailsForm,
      fieldArray: educationDetailsFieldArray,
      submit: () =>
        submitArrayForm({
          form: educationDetailsForm,
          fieldName: "educationDetails",
          route: (index) =>
            `/education-details/${resume.educationDetails[index]?.id}`,
          onSuccess: savedResumeToast,
        }),
    },
    [ResumeEditorTab.WORK_EXPERIENCES]: {
      form: workExperiencesForm,
      fieldArray: workExperiencesFieldArray,
      submit: () =>
        submitArrayForm({
          form: workExperiencesForm,
          fieldName: "workExperiences",
          route: (index) =>
            `/work-experiences/${resume.workExperiences[index]?.id}`,
          onSuccess: savedResumeToast,
        }),
    },
    [ResumeEditorTab.PROJECTS]: {
      form: projectsForm,
      fieldArray: projectsFieldArray,
      submit: () =>
        submitArrayForm({
          form: projectsForm,
          fieldName: "projects",
          route: (index) => `/projects/${resume.projects[index]?.id}`,
          onSuccess: savedResumeToast,
        }),
    },
    [ResumeEditorTab.SKILLS]: {
      form: skillsForm,
      fieldArray: skillsFieldArray,
      submit: () =>
        submitArrayForm({
          form: skillsForm,
          fieldName: "skills",
          route: (index) => `/skills/${resume.skills[index]?.id}`,
          onSuccess: savedResumeToast,
        }),
    },
    [ResumeEditorTab.ACHIEVEMENTS]: {
      form: achievementsForm,
      fieldArray: achievementsFieldArray,
      submit: () =>
        submitArrayForm({
          form: achievementsForm,
          fieldName: "achievements",
          route: (index) => `/achievements/${resume.achievements[index]?.id}`,
          onSuccess: savedResumeToast,
        }),
    },
  };
}
