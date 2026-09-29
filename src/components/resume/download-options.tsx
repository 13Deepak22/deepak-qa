import { Download, FileImage, FileText, FileType } from "lucide-react";
import { type ResumeFormat, resumeFileName, resumeFormats } from "@/lib/resume-document";

const icons: Record<ResumeFormat, typeof Download> = { pdf: FileText, docx: FileType, jpg: FileImage };

export function DownloadOptions() {
  return (
    <div className="shrink-0">
      <p id="resume-download" className="flex items-center gap-2 font-mono text-[0.68rem] tracking-[0.16em] text-muted uppercase">
        <Download size={14} strokeWidth={1.75} aria-hidden="true" />
        Download resume
      </p>
      <ul aria-labelledby="resume-download" className="mt-2.5 grid grid-cols-3 border border-ink">
        {resumeFormats.map(({ format, label, hint }, index) => {
          const Icon = icons[format];
          return (
            <li key={format} className={index ? "border-l border-ink" : ""}>
              <a
                href={`/resume/download/${format}`}
                download={resumeFileName(format)}
                aria-label={`Download resume as ${label}`}
                data-cursor={hint}
                className={`press flex h-11 items-center justify-center gap-2 px-4 text-sm sm:px-5 ${
                  index ? "text-ink hover:bg-pass-fill hover:text-on-band" : "bg-ink text-paper hover:bg-ink-soft"
                }`}
              >
                <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
