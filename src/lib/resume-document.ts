import { education, experience, profile, publicApps, resume, toolkit } from "@/data";

export type ResumeFormat = "pdf" | "jpg" | "docx";

export const resumeFormats: { format: ResumeFormat; label: string; hint: string; type: string }[] = [
  { format: "pdf", label: "PDF", hint: "Best for applications", type: "application/pdf" },
  {
    format: "docx",
    label: "Word",
    hint: "Editable .docx",
    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  },
  { format: "jpg", label: "JPG", hint: "Image to share", type: "image/jpeg" },
];

export const resumeFileName = (format: ResumeFormat) =>
  `${profile.name.toLowerCase().replace(/\s+/g, "-")}-resume.${format}`;

const bare = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
const range = (period: string) => period.replace(" — ", " – ");

/** Plain resume content shared by the PDF, Word, and JPG downloads. */
export function resumeDocument() {
  return {
    name: profile.name,
    headline: resume.headline,
    contacts: [
      `${profile.places}, ${profile.location}`,
      profile.phone,
      profile.email,
      bare(profile.linkedin),
      bare(profile.github),
    ],
    summary: resume.summary,
    skills: toolkit.map((group) => ({
      label: group.label,
      value: group.items.join(", ") + (group.label.includes("Exposure") ? ` (${resume.exposureNote})` : ""),
    })),
    experience: experience.map((role) => ({
      title: role.title,
      org: role.org,
      period: range(role.period),
      points: [...role.points],
    })),
    projects: publicApps.map((app) => ({ title: app.title, domain: app.domain, detail: app.detail })),
    education: { degree: education.degree, school: education.school, period: range(education.period) },
    certifications: [...education.courses],
  };
}

export type ResumeDocument = ReturnType<typeof resumeDocument>;
