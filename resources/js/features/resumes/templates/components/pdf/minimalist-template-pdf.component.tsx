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

const styles = StyleSheet.create({
  page: {
    padding: 32,
    color: "#292524",
    fontFamily: "Montserrat",
  },

  header: {
    flexDirection: "column",
    rowGap: 12,
    borderBottomWidth: 1,
    paddingBottom: 24,
  },

  name: {
    fontSize: 36,
    lineHeight: 1.11,
    fontWeight: 700,
    textTransform: "uppercase",
  },

  designation: {
    fontSize: 20,
    lineHeight: 1.4,
    color: "#57534d",
    textTransform: "uppercase",
  },

  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 24,
    rowGap: 8,
    fontSize: 12,
    lineHeight: 1.333333,
  },

  contactItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  content: {
    marginTop: 8,
    rowGap: 12,
  },

  section: {
    rowGap: 4,
  },

  sectionTitle: {
    fontSize: 20,
    lineHeight: 1.4,
    fontWeight: 700,
    textTransform: "uppercase",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  entryTitle: {
    fontWeight: 700,
  },

  entrySubtitle: {
    fontSize: 14,
    lineHeight: 1.428571,
    color: "#57534d",
  },

  entryMeta: {
    fontSize: 14,
    lineHeight: 1.428571,
    color: "#79716b",
  },

  bodyText: {
    fontSize: 14,
    lineHeight: 1.625,
  },

  smallText: {
    fontSize: 12,
    lineHeight: 1.33,
  },

  bulletRow: {
    flexDirection: "row",
  },

  bulletSymbol: {
    width: 10,
    fontSize: 12,
    lineHeight: 1.33,
  },

  bulletText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 1.33,
  },

  skillList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  skillChip: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: "#e7e5e4",
    borderRadius: 4,
  },

  skillText: {
    fontSize: 12,
  },
});

export function MinimalistTemplatePdf({
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

          {(contactDetail.email ||
            contactDetail.phone ||
            contactDetail.location ||
            contactDetail.linkedin ||
            contactDetail.github ||
            contactDetail.website) && (
            <View style={styles.contactRow}>
              {contactDetail.email && (
                <View style={styles.contactItem}>
                  <Text>{contactDetail.email}</Text>
                </View>
              )}

              {contactDetail.phone && (
                <View style={styles.contactItem}>
                  <Text>{contactDetail.phone}</Text>
                </View>
              )}

              {contactDetail.location && (
                <View style={styles.contactItem}>
                  <Text>{contactDetail.location}</Text>
                </View>
              )}

              {contactDetail.linkedin && (
                <View style={styles.contactItem}>
                  <Link href={contactDetail.linkedin}>
                    {formatUrl(contactDetail.linkedin)}
                  </Link>
                </View>
              )}

              {contactDetail.github && (
                <View style={styles.contactItem}>
                  <Link href={contactDetail.github}>
                    {formatUrl(contactDetail.github)}
                  </Link>
                </View>
              )}

              {contactDetail.website && (
                <View style={styles.contactItem}>
                  <Link href={contactDetail.website}>
                    {formatUrl(contactDetail.website)}
                  </Link>
                </View>
              )}
            </View>
          )}
        </View>

        <View style={styles.content}>
          {personalDetail.profile && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Profile</Text>
              <Text style={styles.bodyText}>{personalDetail.profile}</Text>
            </View>
          )}

          {workExperiences.workExperiences.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Work Experience</Text>

              {workExperiences.workExperiences.map((work, index) => (
                <View key={index} style={styles.section}>
                  <View style={styles.rowBetween}>
                    <View>
                      <Text style={styles.entryTitle}>{work.companyName}</Text>
                      <Text style={styles.entrySubtitle}>
                        {work.designation}
                      </Text>
                    </View>
                    <Text style={styles.entryMeta}>
                      {work.startDate} -{" "}
                      {work.isCurrent ? "Present" : work.endDate}
                    </Text>
                  </View>

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
              ))}
            </View>
          )}

          {projects.projects.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Projects</Text>

              {projects.projects.map((project, index) => (
                <View key={index} style={styles.section}>
                  <View style={styles.rowBetween}>
                    <View>
                      <Text style={styles.entryTitle}>{project.name}</Text>
                      <Text style={styles.entrySubtitle}>{project.role}</Text>
                    </View>
                    <Text style={styles.entryMeta}>
                      {project.startDate} -{" "}
                      {project.ongoing ? "Present" : project.endDate}
                    </Text>
                  </View>

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
              ))}
            </View>
          )}

          {educationDetails.educationDetails.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Education</Text>

              {educationDetails.educationDetails.map((edu, index) => (
                <View key={index} style={styles.section}>
                  <View style={styles.rowBetween}>
                    <View>
                      <Text style={styles.entryTitle}>{edu.degree}</Text>
                      <Text style={styles.entrySubtitle}>
                        {edu.institution}
                      </Text>
                    </View>
                    <Text style={styles.entryMeta}>
                      {edu.startDate} - {edu.ongoing ? "Present" : edu.endDate}
                    </Text>
                  </View>

                  {edu.description && (
                    <Text style={styles.smallText}>{edu.description}</Text>
                  )}
                </View>
              ))}
            </View>
          )}

          {skills.skills.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Skills</Text>
              <View style={styles.skillList}>
                {skills.skills.map((skill) => (
                  <View key={skill.name} style={styles.skillChip}>
                    <Text style={styles.skillText}>{skill.name}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {achievements.achievements.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Achievements</Text>

              {achievements.achievements.map((a, index) => (
                <View key={index} style={styles.section}>
                  <Text style={styles.entrySubtitle}>
                    <Text
                      style={{
                        ...styles.entryTitle,
                        ...{
                          color: "black",
                        },
                      }}
                    >
                      {a.title}
                    </Text>
                    {a.issuer && ` · ${a.issuer}`}
                    {a.dateAwarded && ` · ${a.dateAwarded}`}
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
