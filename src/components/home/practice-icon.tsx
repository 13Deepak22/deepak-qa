import {
  Bug,
  Gauge,
  IndianRupee,
  ListChecks,
  Webhook,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Functional: ListChecks,
  API: Webhook,
  Automation: Workflow,
  Load: Gauge,
  Defects: Bug,
  Fintech: IndianRupee,
};

export function PracticeIcon({ name }: { name: string }) {
  const Icon = icons[name];
  if (!Icon) return null;
  return <Icon aria-hidden="true" strokeWidth={1.75} className="practice-icon" />;
}
