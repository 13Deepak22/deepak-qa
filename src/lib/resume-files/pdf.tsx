import { Document, Font, Page, StyleSheet, Text, View, renderToBuffer, Svg, Path, Circle, Rect } from "@react-pdf/renderer";
import { Children, type ReactNode } from "react";
import { ogColors as c } from "@/lib/og";
import type { ResumeDocument } from "@/lib/resume-document";

function IconRenderer({ type }: { type: string }) {
  const p = { fill: "none", stroke: c.pass, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (type) {
    case "map-pin":
      return (
        <Svg viewBox="0 0 24 24" width={9} height={9}>
          <Path {...p} d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
          <Circle {...p} cx={12} cy={10} r={3} />
        </Svg>
      );
    case "phone":
      return (
        <Svg viewBox="0 0 24 24" width={9} height={9}>
          <Path {...p} d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
        </Svg>
      );
    case "mail":
      return (
        <Svg viewBox="0 0 24 24" width={9} height={9}>
          <Path {...p} d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
          <Rect {...p} x={2} y={4} width={20} height={16} rx={2} ry={2} />
        </Svg>
      );
    case "globe":
      return (
        <Svg viewBox="0 0 24 24" width={9} height={9}>
          <Circle {...p} cx={12} cy={12} r={10} />
          <Path {...p} d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <Path {...p} d="M2 12h20" />
        </Svg>
      );
    case "linkedin":
      return (
        <Svg viewBox="0 0 24 24" width={9} height={9}>
          <Path {...p} d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <Rect {...p} x={2} y={9} width={4} height={12} />
          <Circle {...p} cx={4} cy={4} r={2} />
        </Svg>
      );
    case "github":
      return (
        <Svg viewBox="0 0 24 24" width={9} height={9}>
          <Path {...p} d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <Path {...p} d="M9 18c-4.51 2-5-2-7-2" />
        </Svg>
      );
    default:
      return null;
  }
}
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
            <View key={item.value} style={[s.contact, { flexDirection: "row", alignItems: "center" }]}>
              <View style={{ marginRight: 4 }}>
                <IconRenderer type={item.type} />
              </View>
              <Text style={{ transform: "translateY(1px)" }}>{item.value}</Text>
            </View>
          ))}
        </View>

        <Section title="Professional Summary">
          <Text>{doc.summary}</Text>
        </Section>

        <Section title="Professional Experience">
          {doc.experience.map((role, index) => (
            <View key={role.org} style={index ? { marginTop: 10 } : undefined}>
              <View style={s.roleHead} wrap={false}>
                <Text style={s.role}>{role.title}</Text>
                <Text style={s.period}>{role.period}</Text>
              </View>
              <View style={[s.row, { marginTop: 1, marginBottom: 4 }]} wrap={false}>
                <Text style={s.org}>{role.org}</Text>
                <Text style={[s.muted, { marginHorizontal: 4 }]}>|</Text>
                <Text style={s.muted}>{role.location}</Text>
              </View>
              {role.points.map((point) => (
                <Bullet key={point}>{point}</Bullet>
              ))}
            </View>
          ))}
        </Section>

        <Section title="Skills">
          {doc.skills.map((group) => (
            <View key={group.label} style={s.row} wrap={false}>
              <Text style={s.label}>{group.label}</Text>
              <Text style={s.grow}>{group.value}</Text>
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

        <Section title="Certifications">
          {doc.certifications.map((course) => (
            <Bullet key={course}>{course}</Bullet>
          ))}
        </Section>

      </Page>
    </Document>
  );
}

export function renderResumePdf(doc: ResumeDocument) {
  return renderToBuffer(<ResumePdf doc={doc} />);
}
