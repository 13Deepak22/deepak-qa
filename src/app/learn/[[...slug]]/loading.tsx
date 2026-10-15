import { SkeletonDocViewer } from "@/components/ui/skeleton";

export default function LearnDocLoading() {
  return (
    <main id="content" tabIndex={-1} className="outline-none" aria-label="Loading document content">
      <SkeletonDocViewer />
    </main>
  );
}
