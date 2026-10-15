import type { ToolLogo as ToolLogoName } from "@/data";
import { toolLogos } from "@/components/home/tool-logo-paths";
import { Skeleton } from "@/components/ui/skeleton";

export function ToolLogo({ name, className }: { name: ToolLogoName; className?: string }) {
  const logo = toolLogos[name];
  if (!logo) {
    return <Skeleton className={`rounded-sm ${className ?? "h-5 w-5"}`} />;
  }
  return (
    <svg viewBox={logo.viewBox} className={className} aria-hidden="true" focusable="false">
      {logo.paths.map((path) => (
        <path key={path.d.slice(0, 24)} d={path.d} fill={path.fill} />
      ))}
    </svg>
  );
}

export function SkeletonToolLogo({ className = "h-5 w-5" }: { className?: string }) {
  return <Skeleton className={`rounded-sm ${className}`} />;
}
