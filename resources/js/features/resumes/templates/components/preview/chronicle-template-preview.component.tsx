import {
  LucideGithub,
  LucideGlobe,
  LucideLinkedin,
  LucideMail,
  LucideMapPin,
  LucidePhone,
} from "lucide-react";
import type { ResumeEditorFormsData } from "@/features/resumes/edit/types/hooks/editor-forms-data.type";
import { formatUrl } from "../../utils/url.util";

export function ChronicleTemplatePreview({
  data,
}: {
  data: ResumeEditorFormsData;
}) {
  const {
    personalDetail,
    contactDetail,
    educationDetails,
    workExperiences,
    projects,
    skills,
    achievements,
  } = data;

  return (
    <div className="min-h-210.5 w-148.75 bg-white p-8 text-stone-900">
      <div className="mb-5 flex flex-col gap-y-2">
        <div>
          <div className="font-extrabold text-4xl tracking-wide">
            {personalDetail.fullName}
          </div>
          <div className="text-lg text-stone-600">
            {personalDetail.designation}
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-1 text-stone-700 text-xs">
          {contactDetail.email && (
            <div className="flex items-center gap-x-2">
              <LucideMail size={14} />
              <span>{contactDetail.email}</span>
            </div>
          )}
          {contactDetail.phone && (
            <div className="flex items-center gap-x-2">
              <LucidePhone size={14} />
              <span>{contactDetail.phone}</span>
            </div>
          )}
          {contactDetail.location && (
            <div className="flex items-center gap-x-2">
              <LucideMapPin size={14} />
              <span>{contactDetail.location}</span>
            </div>
          )}
          {contactDetail.linkedin && (
            <div className="flex items-center gap-x-2">
              <LucideLinkedin size={14} />
              <span className="text-blue-700">
                {formatUrl(contactDetail.linkedin)}
              </span>
            </div>
          )}
          {contactDetail.github && (
            <div className="flex items-center gap-x-2">
              <LucideGithub size={14} />
              <span className="text-blue-700">
                {formatUrl(contactDetail.github)}
              </span>
            </div>
          )}
          {contactDetail.website && (
            <div className="flex items-center gap-x-2">
              <LucideGlobe size={14} />
              <span className="text-blue-700">
                {formatUrl(contactDetail.website)}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-y-3">
        {personalDetail.profile && (
          <section className="border-stone-300 border-l-4 pl-6">
            <div className="font-bold text-lg uppercase tracking-wide">
              Profile
            </div>
            <p className="text-sm leading-relaxed">{personalDetail.profile}</p>
          </section>
        )}

        {skills.skills.length > 0 && (
          <section>
            <div className="font-bold text-lg uppercase tracking-wide">
              Skills
            </div>
            <div className="flex flex-row flex-wrap gap-x-6 gap-y-2">
              {skills.skills.map((skill) => (
                <div key={skill.name} className="text-xs">
                  {skill.name}
                </div>
              ))}
            </div>
          </section>
        )}

        {workExperiences.workExperiences.length > 0 && (
          <section>
            <div className="font-bold text-lg uppercase tracking-wide">
              Work Experience
            </div>
            <div className="flex flex-col gap-y-2">
              {workExperiences.workExperiences.map((work, index) => (
                <div key={index} className="grid grid-cols-[120px_1fr] gap-x-6">
                  <div className="text-sm text-stone-500">
                    {work.startDate}
                    <br />
                    {work.isCurrent ? "Present" : work.endDate}
                  </div>
                  <div>
                    <div className="font-bold">{work.companyName}</div>
                    <div className="text-sm text-stone-600">
                      {work.designation}
                    </div>
                    <ul className="list-disc pl-5 text-xs">
                      {work.description
                        ?.split("\n")
                        .filter(Boolean)
                        .map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {projects.projects.length > 0 && (
          <section>
            <div className="font-bold text-lg uppercase tracking-wide">
              Projects
            </div>
            <div className="flex flex-col gap-y-2">
              {projects.projects.map((project, index) => (
                <div key={index} className="grid grid-cols-[120px_1fr] gap-x-6">
                  <div className="text-sm text-stone-500">
                    {project.startDate}
                    <br />
                    {project.ongoing ? "Present" : project.endDate}
                  </div>
                  <div>
                    <div className="font-bold">{project.name}</div>
                    <div className="text-sm text-stone-600">{project.role}</div>
                    <ul className="list-disc pl-5 text-xs">
                      {project.description
                        ?.split("\n")
                        .filter(Boolean)
                        .map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {educationDetails.educationDetails.length > 0 && (
          <section>
            <div className="font-bold text-lg uppercase tracking-wide">
              Education
            </div>
            <div className="flex flex-col gap-y-2">
              {educationDetails.educationDetails.map((edu, index) => (
                <div key={index} className="grid grid-cols-[120px_1fr] gap-x-6">
                  <div className="text-sm text-stone-500">
                    {edu.startDate}
                    <br />
                    {edu.ongoing ? "Present" : edu.endDate}
                  </div>
                  <div>
                    <div className="font-bold">{edu.degree}</div>
                    <div className="text-sm text-stone-600">
                      {edu.institution}
                    </div>
                    {edu.description && (
                      <div className="mt-1 text-xs">{edu.description}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {achievements.achievements.length > 0 && (
          <section>
            <div className="font-bold text-lg uppercase tracking-wide">
              Achievements
            </div>
            <div className="flex flex-col gap-y-3">
              {achievements.achievements.map((a, index) => (
                <div key={index}>
                  <div className="font-semibold">{a.title}</div>
                  <div className="text-sm text-stone-600">
                    {a.issuer} · {a.dateAwarded}
                  </div>
                  {a.description && (
                    <div className="text-xs">{a.description}</div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
