import type { ToolLogo as ToolLogoName } from "@/data";
import { toolLogos } from "@/components/home/tool-logo-paths";

export function ToolLogo({ name, className }: { name: ToolLogoName; className?: string }) {
  const logo = toolLogos[name];
  return (
    <svg viewBox={logo.viewBox} className={className} aria-hidden="true" focusable="false">
      {logo.paths.map((path) => (
        <path key={path.d.slice(0, 24)} d={path.d} fill={path.fill} />
      ))}
    </svg>
  );
}
