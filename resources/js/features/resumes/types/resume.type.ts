import type { Achievement } from "./achievement.type";
import type { ContactDetail } from "./contact-detail.type";
import type { EducationDetail } from "./education-detail.type";
import type { PersonalDetail } from "./personal-detail.type";
import type { Project } from "./project.type";
import type { Skill } from "./skill.type";
import type { WorkExperience } from "./work-experience.type";

export type Resume = {
  id: string;
  title: string;
  personalDetail: PersonalDetail;
  contactDetail: ContactDetail;
  educationDetails: EducationDetail[];
  workExperiences: WorkExperience[];
  projects: Project[];
  skills: Skill[];
  achievements: Achievement[];
  createdAt: Date;
  updatedAt: Date;
};
