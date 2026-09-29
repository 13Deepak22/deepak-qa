import { impactMetrics } from "@/data";

export function ImpactMetrics() {
  return (
    <div className="border-y border-line bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {impactMetrics.map((item) => (
            <li key={item.label} className="flex flex-col">
              <span className="font-serif text-3xl font-medium tracking-tight text-pass sm:text-4xl">
                {item.value}
              </span>
              <span className="mt-1 font-mono text-[0.72rem] tracking-[0.14em] text-ink uppercase">
                {item.label}
              </span>
              <span className="mt-0.5 text-xs text-muted">
                {item.aside}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
