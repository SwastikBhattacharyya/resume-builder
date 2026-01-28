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

export function MinimalistTemplatePreview({
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
    <div className="min-h-210.5 w-148.75 p-8 text-stone-800">
      <div className="flex flex-col gap-y-3 border-b pb-6">
        <div>
          <div className="font-bold text-4xl uppercase">
            {personalDetail.fullName}
          </div>
          <div className="text-stone-600 text-xl uppercase">
            {personalDetail.designation}
          </div>
        </div>

        {(contactDetail.email ||
          contactDetail.phone ||
          contactDetail.location ||
          contactDetail.linkedin ||
          contactDetail.github ||
          contactDetail.website) && (
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
            {contactDetail.email && (
              <div className="flex items-center gap-x-2">
                <LucideMail size={16} />
                <span>{contactDetail.email}</span>
              </div>
            )}
            {contactDetail.phone && (
              <div className="flex items-center gap-x-2">
                <LucidePhone size={16} />
                <span>{contactDetail.phone}</span>
              </div>
            )}
            {contactDetail.location && (
              <div className="flex items-center gap-x-2">
                <LucideMapPin size={16} />
                <span>{contactDetail.location}</span>
              </div>
            )}
            {contactDetail.linkedin && (
              <div className="flex items-center gap-x-2">
                <LucideLinkedin size={16} />
                <span className="text-blue-700">
                  {formatUrl(contactDetail.linkedin)}
                </span>
              </div>
            )}
            {contactDetail.github && (
              <div className="flex items-center gap-x-2">
                <LucideGithub size={16} />
                <span className="text-blue-700">
                  {formatUrl(contactDetail.github)}
                </span>
              </div>
            )}
            {contactDetail.website && (
              <div className="flex items-center gap-x-2 text-blue-700">
                <LucideGlobe size={16} />
                <span className="text-blue-700">
                  {formatUrl(contactDetail.website)}
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="mt-2 flex flex-col gap-y-3">
        {personalDetail.profile && (
          <section className="flex flex-col gap-y-1">
            <div className="font-bold text-xl uppercase">Profile</div>
            <p className="text-sm leading-relaxed">{personalDetail.profile}</p>
          </section>
        )}

        {workExperiences.workExperiences.length > 0 && (
          <section className="flex flex-col gap-y-1">
            <div className="font-bold text-xl uppercase">Work Experience</div>
            {workExperiences.workExperiences.map((work, index) => (
              <div key={index} className="flex flex-col gap-y-1">
                <div className="flex justify-between">
                  <div>
                    <div className="font-bold">{work.companyName}</div>
                    <div className="text-sm text-stone-600">
                      {work.designation}
                    </div>
                  </div>
                  <div className="text-sm text-stone-500">
                    {work.startDate} –{" "}
                    {work.isCurrent ? "Present" : work.endDate}
                  </div>
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
            ))}
          </section>
        )}

        {projects.projects.length > 0 && (
          <section className="flex flex-col gap-y-1">
            <div className="font-bold text-xl uppercase">Projects</div>
            {projects.projects.map((project, index) => (
              <div key={index} className="flex flex-col gap-y-1">
                <div className="flex justify-between">
                  <div>
                    <div className="font-bold">{project.name}</div>
                    <div className="text-sm text-stone-600">{project.role}</div>
                  </div>
                  <div className="text-sm text-stone-500">
                    {project.startDate} –{" "}
                    {project.ongoing ? "Present" : project.endDate}
                  </div>
                </div>
                <ul className="list-disc pl-5 text-xs">
                  {project.description
                    ?.split("\n")
                    .filter(Boolean)
                    .map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {educationDetails.educationDetails.length > 0 && (
          <section className="flex flex-col gap-y-1">
            <div className="font-bold text-xl uppercase">Education</div>
            {educationDetails.educationDetails.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <div>
                    <div className="font-bold">{edu.degree}</div>
                    <div className="text-sm text-stone-600">
                      {edu.institution}
                    </div>
                  </div>
                  <div className="text-sm text-stone-500">
                    {edu.startDate} – {edu.ongoing ? "Present" : edu.endDate}
                  </div>
                </div>
                {edu.description && (
                  <div className="text-xs">{edu.description}</div>
                )}
              </div>
            ))}
          </section>
        )}

        {skills.skills.length > 0 && (
          <section className="flex flex-col gap-y-1">
            <div className="font-bold text-xl uppercase">Skills</div>
            <div className="flex flex-wrap gap-2">
              {skills.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-md bg-stone-200 px-3 py-1 text-xs"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </section>
        )}

        {achievements.achievements.length > 0 && (
          <section className="flex flex-col gap-y-2">
            <div className="font-bold text-xl uppercase">Achievements</div>
            {achievements.achievements.map((a, index) => (
              <div key={index}>
                <div>
                  <span className="font-bold">{a.title}</span> · {a.issuer} ·{" "}
                  {a.dateAwarded}
                </div>
                {a.description && (
                  <div className="text-xs">{a.description}</div>
                )}
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
