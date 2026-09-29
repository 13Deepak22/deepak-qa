import { Bug, IndianRupee, ListChecks, Workflow, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  manual: ListChecks,
  automation: Workflow,
  defects: Bug,
  fintech: IndianRupee,
};

export function PracticeIcon({ name }: { name: string }) {
  const Icon = icons[name];
  if (!Icon) return null;
  return <Icon aria-hidden="true" strokeWidth={1.75} className="practice-icon" />;
}
