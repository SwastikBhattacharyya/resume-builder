import {
  Document,
  Font,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import type { ResumeEditorFormsData } from "@/features/resumes/edit/types/hooks/editor-forms-data.type";
import { formatUrl } from "../../utils/url.util";

Font.register({
  family: "Montserrat",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/montserrat/v31/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Ew-.ttf",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/montserrat/v31/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM70w-.ttf",
      fontWeight: 700,
    },
  ],
});

export const styles = StyleSheet.create({
  page: {
    padding: 32,
    fontFamily: "Montserrat",
    color: "#1c1917",
    backgroundColor: "#ffffff",
  },

  header: {
    marginBottom: 20,
    rowGap: 8,
  },

  name: {
    fontSize: 36,
    fontWeight: 700,
    letterSpacing: 1,
  },

  designation: {
    fontSize: 18,
    color: "#57534d",
  },

  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 24,
    rowGap: 4,
    fontSize: 12,
    lineHeight: 1.333333,
    color: "#44403c",
  },

  content: {
    flexDirection: "column",
    rowGap: 12,
  },

  section: {
    flexDirection: "column",
    rowGap: 8,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  profileSection: {
    borderLeftWidth: 4,
    borderLeftColor: "#d6d3d1",
    paddingLeft: 16,
    rowGap: 4,
  },

  bodyText: {
    fontSize: 14,
    lineHeight: 1.428571,
  },

  inlineList: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 24,
    rowGap: 8,
  },

  inlineItem: {
    fontSize: 12,
    lineHeight: 1.625,
  },

  timelineRow: {
    flexDirection: "row",
    columnGap: 24,
  },

  timelineDate: {
    width: 120,
    fontSize: 10,
    color: "#78716c",
    lineHeight: 1.4,
  },

  timelineContent: {
    flex: 1,
    rowGap: 2,
  },

  entryTitle: {
    fontSize: 12,
    fontWeight: 700,
  },

  entrySubtitle: {
    fontSize: 11,
    color: "#57534d",
    marginBottom: 2,
  },

  bulletRow: {
    flexDirection: "row",
    marginTop: 2,
  },

  bulletSymbol: {
    width: 10,
    fontSize: 10,
    lineHeight: 1.4,
  },

  bulletText: {
    flex: 1,
    fontSize: 10,
    lineHeight: 1.4,
  },

  achievement: {
    rowGap: 2,
  },

  smallText: {
    fontSize: 10,
    lineHeight: 1.4,
  },
});

export function ChronicleTemplatePdf({
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
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View>
            <Text style={styles.name}>{personalDetail.fullName}</Text>
            <Text style={styles.designation}>{personalDetail.designation}</Text>
          </View>

          <View style={styles.contactRow}>
            {contactDetail.email && <Text>{contactDetail.email}</Text>}
            {contactDetail.phone && <Text>{contactDetail.phone}</Text>}
            {contactDetail.location && <Text>{contactDetail.location}</Text>}
            {contactDetail.linkedin && (
              <Link href={contactDetail.linkedin}>
                <Text>{formatUrl(contactDetail.linkedin)}</Text>
              </Link>
            )}
            {contactDetail.github && (
              <Link href={contactDetail.github}>
                {formatUrl(contactDetail.github)}
              </Link>
            )}
            {contactDetail.website && (
              <Link href={contactDetail.website}>
                {formatUrl(contactDetail.website)}
              </Link>
            )}
          </View>
        </View>

        <View style={styles.content}>
          {personalDetail.profile && (
            <View style={styles.profileSection}>
              <Text style={styles.sectionTitle}>Profile</Text>
              <Text style={styles.bodyText}>{personalDetail.profile}</Text>
            </View>
          )}

          {skills.skills.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Skills</Text>
              <View style={styles.inlineList}>
                {skills.skills.map((skill) => (
                  <Text key={skill.name} style={styles.inlineItem}>
                    {skill.name}
                  </Text>
                ))}
              </View>
            </View>
          )}

          {workExperiences.workExperiences.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Work Experience</Text>

              {workExperiences.workExperiences.map((work, index) => (
                <View key={index} style={styles.timelineRow}>
                  <View style={styles.timelineDate}>
                    <Text>{work.startDate}</Text>
                    <Text>{work.isCurrent ? "Present" : work.endDate}</Text>
                  </View>

                  <View style={styles.timelineContent}>
                    <Text style={styles.entryTitle}>{work.companyName}</Text>
                    <Text style={styles.entrySubtitle}>{work.designation}</Text>

                    <View>
                      {work.description
                        ?.split("\n")
                        .filter(Boolean)
                        .map((line, i) => (
                          <View key={i} style={styles.bulletRow}>
                            <Text style={styles.bulletSymbol}>•</Text>
                            <Text style={styles.bulletText}>{line}</Text>
                          </View>
                        ))}
                    </View>
                  </View>
                </View>
              ))}
            </View>
          )}

          {projects.projects.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Projects</Text>

              {projects.projects.map((project, index) => (
                <View key={index} style={styles.timelineRow}>
                  <View style={styles.timelineDate}>
                    <Text>{project.startDate}</Text>
                    <Text>{project.ongoing ? "Present" : project.endDate}</Text>
                  </View>

                  <View style={styles.timelineContent}>
                    <Text style={styles.entryTitle}>{project.name}</Text>
                    <Text style={styles.entrySubtitle}>{project.role}</Text>

                    <View>
                      {project.description
                        ?.split("\n")
                        .filter(Boolean)
                        .map((line, i) => (
                          <View key={i} style={styles.bulletRow}>
                            <Text style={styles.bulletSymbol}>•</Text>
                            <Text style={styles.bulletText}>{line}</Text>
                          </View>
                        ))}
                    </View>
                  </View>
                </View>
              ))}
            </View>
          )}

          {educationDetails.educationDetails.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Education</Text>

              {educationDetails.educationDetails.map((edu, index) => (
                <View key={index} style={styles.timelineRow}>
                  <View style={styles.timelineDate}>
                    <Text>{edu.startDate}</Text>
                    <Text>{edu.ongoing ? "Present" : edu.endDate}</Text>
                  </View>

                  <View style={styles.timelineContent}>
                    <Text style={styles.entryTitle}>{edu.degree}</Text>
                    <Text style={styles.entrySubtitle}>{edu.institution}</Text>

                    {edu.description && (
                      <Text style={styles.smallText}>{edu.description}</Text>
                    )}
                  </View>
                </View>
              ))}
            </View>
          )}

          {achievements.achievements.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Achievements</Text>

              {achievements.achievements.map((a, index) => (
                <View key={index} style={styles.achievement}>
                  <Text style={styles.entryTitle}>{a.title}</Text>
                  <Text style={styles.entrySubtitle}>
                    {a.issuer} · {a.dateAwarded}
                  </Text>
                  {a.description && (
                    <Text style={styles.smallText}>{a.description}</Text>
                  )}
                </View>
              ))}
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
}
