import { renderResumeDocx } from "@/lib/resume-files/docx";
import { renderResumeJpg } from "@/lib/resume-files/jpg";
import { renderResumePdf } from "@/lib/resume-files/pdf";
import { type ResumeFormat, resumeDocument, resumeFileName, resumeFormats } from "@/lib/resume-document";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return resumeFormats.map(({ format }) => ({ format }));
}

const renderers: Record<ResumeFormat, (doc: ReturnType<typeof resumeDocument>) => Promise<Buffer>> = {
  pdf: renderResumePdf,
  docx: renderResumeDocx,
  jpg: renderResumeJpg,
};

export async function GET(_request: Request, { params }: { params: Promise<{ format: string }> }) {
  const { format } = await params;
  const entry = resumeFormats.find((item) => item.format === format);
  if (!entry) return new Response("Not found", { status: 404 });

  const body = await renderers[entry.format](resumeDocument());
  return new Response(new Uint8Array(body), {
    headers: {
      "Content-Type": entry.type,
      "Content-Disposition": `attachment; filename="${resumeFileName(entry.format)}"`,
      "X-Robots-Tag": "noindex",
    },
  });
}
