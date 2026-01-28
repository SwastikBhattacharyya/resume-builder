import type z from "zod";
import type {
  Achievement,
  achievementSchema,
} from "@/features/resumes/types/achievement.type";
import type {
  EducationDetail,
  educationDetailSchema,
} from "@/features/resumes/types/education-detail.type";
import type {
  Project,
  projectSchema,
} from "@/features/resumes/types/project.type";
import type { Skill, skillSchema } from "@/features/resumes/types/skill.type";
import type {
  WorkExperience,
  workExperienceSchema,
} from "@/features/resumes/types/work-experience.type";

export function mapEducationDetailsToFormDefaults(
  educationDetails: EducationDetail[],
): z.infer<typeof educationDetailSchema>[] {
  return educationDetails.map((educationDetail) => ({
    resumeId: educationDetail.resumeId,
    institution: educationDetail.institution ?? "",
    degree: educationDetail.degree ?? "",
    startDate: educationDetail.startDate ?? "",
    endDate: educationDetail.endDate ?? "",
    ongoing: educationDetail.ongoing ?? false,
    description: educationDetail.description ?? "",
  }));
}

export function mapWorkExperiencesToFormDefaults(
  workExperiences: WorkExperience[],
): z.infer<typeof workExperienceSchema>[] {
  return workExperiences.map((workExperience) => ({
    resumeId: workExperience.resumeId,
    companyName: workExperience.companyName ?? "",
    designation: workExperience.designation ?? "",
    startDate: workExperience.startDate ?? "",
    endDate: workExperience.endDate ?? "",
    isCurrent: workExperience.isCurrent ?? false,
    description: workExperience.description ?? "",
  }));
}

export function mapProjectsToFormDefaults(
  projects: Project[],
): z.infer<typeof projectSchema>[] {
  return projects.map((project) => ({
    resumeId: project.resumeId,
    name: project.name ?? "",
    role: project.role ?? "",
    startDate: project.startDate ?? "",
    endDate: project.endDate ?? "",
    ongoing: project.ongoing ?? false,
    description: project.description ?? "",
    url: project.url ?? "",
  }));
}

export function mapAchievementsToFormDefaults(
  achievements: Achievement[],
): z.infer<typeof achievementSchema>[] {
  return achievements.map((achievement) => ({
    resumeId: achievement.resumeId,
    title: achievement.title ?? "",
    issuer: achievement.issuer ?? "",
    dateAwarded: achievement.dateAwarded ?? "",
    description: achievement.description ?? "",
  }));
}

export function mapSkillsToFormDefaults(
  skills: Skill[],
): z.infer<typeof skillSchema>[] {
  return skills.map((skill) => ({
    resumeId: skill.resumeId,
    name: skill.name,
  }));
}
