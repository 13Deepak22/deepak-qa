import { education, experience, profile, publicApps, resume, resumeSkills } from "@/data";

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

const bare = (url?: string) => (url ? url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") : "");
const range = (period: string) => period.replace(" — ", " – ");

/** Plain resume content shared by the PDF, Word, and JPG downloads. */
export function resumeDocument() {
  return {
    name: profile.name,
    headline: resume.headline,
    contacts: [
      { label: "Location", type: "map-pin", value: profile.places },
      { label: "Phone", type: "phone", value: profile.phone },
      { label: "Email", type: "mail", value: profile.email },
      ...(profile.website ? [{ label: "Website", type: "globe", value: bare(profile.website)! }] : []),
      { label: "LinkedIn", type: "linkedin", value: bare(profile.linkedin)! },
      { label: "GitHub", type: "github", value: bare(profile.github)! },
    ],
    summary: resume.summary,
    skills: resumeSkills.map((group) => ({
      label: group.category,
      value: group.items,
    })),
    experience: experience.map((role) => ({
      title: role.title,
      org: role.org,
      location: role.org === "Exude Vincom" ? "Noida, India (Fintech & Lending)" : "Chandigarh, India (Fintech & Payments)",
      period: range(role.period),
      points: [...role.points],
    })),
    projects: publicApps.map((app) => ({ title: app.title, domain: app.domain, detail: app.detail })),
    education: { degree: education.degree, school: education.school, period: range(education.period) },
    certifications: [...education.courses],
  };
}

export type ResumeDocument = ReturnType<typeof resumeDocument>;
