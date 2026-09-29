import {
  AlignmentType,
  BorderStyle,
  Document,
  LevelFormat,
  Packer,
  Paragraph,
  TabStopType,
  TextRun,
} from "docx";
import { ogColors } from "@/lib/og";
import type { ResumeDocument } from "@/lib/resume-document";

const hex = (color: string) => color.replace("#", "");
const c = { ink: hex(ogColors.ink), soft: hex(ogColors.inkSoft), muted: hex(ogColors.muted), pass: hex(ogColors.pass), line: hex(ogColors.line) };
const RIGHT_TAB = 9906;

function heading(text: string) {
  return new Paragraph({
    spacing: { before: 280, after: 100 },
    border: { top: { style: BorderStyle.SINGLE, size: 4, color: c.line, space: 8 } },
    children: [new TextRun({ text: text.toUpperCase(), bold: true, size: 19, color: c.pass })],
  });
}

function titleRow(title: string, period: string, before = 0) {
  return new Paragraph({
    spacing: { before },
    keepNext: true,
    tabStops: [{ type: TabStopType.RIGHT, position: RIGHT_TAB }],
    children: [
      new TextRun({ text: title, bold: true, size: 23, color: c.ink }),
      new TextRun({ text: `\t${period}`, size: 19, color: c.muted }),
    ],
  });
}

const line = (text: string, options: { bold?: boolean; color?: string } = {}) =>
  new TextRun({ text, size: 20, color: options.color ?? c.soft, bold: options.bold });

const bullet = (children: TextRun[]) =>
  new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 40 }, children });

export function renderResumeDocx(doc: ResumeDocument) {
  const file = new Document({
    creator: doc.name,
    title: `${doc.name} — Resume`,
    description: doc.headline,
    styles: { default: { document: { run: { font: "Calibri" } } } },
    numbering: {
      config: [
        {
          reference: "bullets",
          levels: [
            {
              level: 0,
              format: LevelFormat.BULLET,
              text: "•",
              alignment: AlignmentType.LEFT,
              style: { paragraph: { indent: { left: 360, hanging: 240 } } },
            },
          ],
        },
      ],
    },
    sections: [
      {
        properties: { page: { margin: { top: 900, bottom: 900, left: 1000, right: 1000 } } },
        children: [
          new Paragraph({ children: [new TextRun({ text: doc.name, font: "Georgia", size: 48, color: c.ink })] }),
          new Paragraph({ spacing: { before: 60 }, children: [line(doc.headline, { bold: true, color: c.pass })] }),
          new Paragraph({ spacing: { before: 100 }, children: [line(doc.contacts.join("   |   "))] }),

          heading("Summary"),
          new Paragraph({ children: [line(doc.summary)] }),

          heading("Skills"),
          ...doc.skills.map(
            (group) =>
              new Paragraph({
                spacing: { after: 60 },
                children: [line(`${group.label}: `, { bold: true, color: c.ink }), line(group.value)],
              }),
          ),

          heading("Experience"),
          ...doc.experience.flatMap((role, index) => [
            titleRow(role.title, role.period, index ? 200 : 0),
            new Paragraph({ keepNext: true, spacing: { after: 60 }, children: [line(role.org, { bold: true, color: c.pass })] }),
            ...role.points.map((point) => bullet([line(point)])),
          ]),

          heading("Projects"),
          ...doc.projects.map((app) =>
            bullet([line(app.title, { bold: true, color: c.ink }), line(` (${app.domain})`, { color: c.muted }), line(`: ${app.detail}`)]),
          ),

          heading("Education"),
          titleRow(doc.education.degree, doc.education.period),
          new Paragraph({ children: [line(doc.education.school, { bold: true, color: c.pass })] }),

          heading("Certifications and Courses"),
          ...doc.certifications.map((item) => bullet([line(item)])),
        ],
      },
    ],
  });
  return Packer.toBuffer(file);
}
