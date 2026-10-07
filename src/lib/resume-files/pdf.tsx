import { Document, Font, Page, StyleSheet, Text, View, renderToBuffer } from "@react-pdf/renderer";
import { Children, type ReactNode } from "react";
import { ogColors as c } from "@/lib/og";
import type { ResumeDocument } from "@/lib/resume-document";

// Hyphenated words ("man-agement") break keyword matching in applicant tracking systems.
Font.registerHyphenationCallback((word) => [word]);

const s = StyleSheet.create({
  page: { paddingVertical: 40, paddingHorizontal: 48, fontFamily: "Helvetica", fontSize: 9.5, lineHeight: 1.45, color: c.inkSoft },
  name: { fontFamily: "Times-Roman", fontSize: 26, lineHeight: 1.2, color: c.ink },
  headline: { marginTop: 2, fontFamily: "Helvetica-Bold", fontSize: 10.5, color: c.pass },
  contacts: { marginTop: 8, flexDirection: "row", flexWrap: "wrap", color: c.inkSoft },
  contact: { marginRight: 14 },
  section: { marginTop: 14, paddingTop: 10, borderTopWidth: 0.75, borderTopColor: c.line },
  heading: { marginBottom: 7, fontFamily: "Helvetica-Bold", fontSize: 9, color: c.pass },
  row: { flexDirection: "row", marginBottom: 3 },
  label: { width: 88, fontFamily: "Helvetica-Bold", color: c.ink },
  grow: { flex: 1 },
  roleHead: { flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" },
  role: { fontFamily: "Helvetica-Bold", fontSize: 11, color: c.ink },
  period: { color: c.muted },
  org: { fontFamily: "Helvetica-Bold", color: c.pass },
  bullet: { flexDirection: "row", marginTop: 2.5 },
  dot: { width: 10, color: c.muted },
  strong: { fontFamily: "Helvetica-Bold", color: c.ink },
  muted: { color: c.muted },
});

function Section({ title, children }: { title: string; children: ReactNode }) {
  const [first, ...rest] = Children.toArray(children);
  return (
    <View style={s.section}>
      <View wrap={false}>
        <Text style={s.heading}>{title.toUpperCase()}</Text>
        {first}
      </View>
      {rest}
    </View>
  );
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <View style={s.bullet} wrap={false}>
      <Text style={s.dot}>•</Text>
      <Text style={s.grow}>{children}</Text>
    </View>
  );
}

function ResumePdf({ doc }: { doc: ResumeDocument }) {
  return (
    <Document title={`${doc.name} — Resume`} author={doc.name} subject={doc.headline}>
      <Page size="A4" style={s.page}>
        <Text style={s.name}>{doc.name}</Text>
        <Text style={s.headline}>{doc.headline}</Text>
        <View style={s.contacts}>
          {doc.contacts.map((item) => (
            <Text key={item} style={s.contact}>
              {item}
            </Text>
          ))}
        </View>

        <Section title="Summary">
          <Text>{doc.summary}</Text>
        </Section>

        <Section title="Skills">
          {doc.skills.map((group) => (
            <View key={group.label} style={s.row} wrap={false}>
              <Text style={s.label}>{group.label}</Text>
              <Text style={s.grow}>{group.value}</Text>
            </View>
          ))}
        </Section>

        <Section title="Experience">
          {doc.experience.map((role, index) => (
            <View key={role.org} style={index ? { marginTop: 10 } : undefined}>
              <View style={s.roleHead} wrap={false}>
                <Text style={s.role}>{role.title}</Text>
                <Text style={s.period}>{role.period}</Text>
              </View>
              <Text style={s.org}>{role.org}</Text>
              {role.points.map((point) => (
                <Bullet key={point}>{point}</Bullet>
              ))}
            </View>
          ))}
        </Section>

        <Section title="Public Projects">
          {doc.projects.map((app) => (
            <Bullet key={app.title}>
              <Text style={s.strong}>{app.title}</Text>
              <Text style={s.muted}> ({app.domain})</Text>: {app.detail}
            </Bullet>
          ))}
        </Section>

        <Section title="Education">
          <View style={s.roleHead} wrap={false}>
            <Text style={s.role}>{doc.education.degree}</Text>
            <Text style={s.period}>{doc.education.period}</Text>
          </View>
          <Text style={s.org}>{doc.education.school}</Text>
        </Section>

        <Section title="Certifications and Courses">
          {doc.certifications.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </Section>
      </Page>
    </Document>
  );
}

export function renderResumePdf(doc: ResumeDocument) {
  return renderToBuffer(<ResumePdf doc={doc} />);
}
