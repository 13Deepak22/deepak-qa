import { PracticeIcon } from "@/components/home/practice-icon";
import { ToolLogo } from "@/components/home/tool-logo";
import { type ToolLogo as ToolLogoName, services } from "@/data";

const logoSize: Record<ToolLogoName, { large: string; small: string }> = {
  playwright: { large: "w-10", small: "w-8" },
  selenium: { large: "h-8 w-8", small: "h-6 w-6" },
  appium: { large: "h-8 w-8", small: "h-6 w-6" },
  postman: { large: "h-8 w-8", small: "h-6 w-6" },
  jmeter: { large: "w-12", small: "w-9" },
};

const automationStack: ToolLogoName[] = ["playwright", "selenium", "appium"];

function LogoTile({ name, small = false }: { name: ToolLogoName; small?: boolean }) {
  return (
    <span
      className={`tool-tile inline-flex shrink-0 items-center justify-center border border-black/10 bg-[#fbfaf6] ${
        small ? "h-11 w-11" : "h-14 w-14"
      }`}
    >
      <ToolLogo name={name} className={logoSize[name][small ? "small" : "large"]} />
    </span>
  );
}

export function Services() {
  return (
    <>
      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {services.featured.map((service, index) => {
          const automation = service.key === "automation";
          return (
            <article
              key={service.key}
              className={`service-card flex flex-col border px-5 py-7 sm:px-8 sm:py-9 ${
                automation ? "band border-pass-fill bg-band text-on-band" : "border-line bg-paper"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center border ${
                    automation ? "border-on-band/20" : "border-line bg-card"
                  }`}
                >
                  <PracticeIcon name={service.key} />
                </span>
                <span
                  className={`font-mono text-[0.68rem] tracking-[0.16em] uppercase ${automation ? "text-on-band/60" : "text-muted"}`}
                >
                  Service {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 font-serif text-3xl tracking-tight sm:text-4xl">{service.title}</h3>
              <p className="mt-2 font-serif text-lg text-pass italic">{service.tagline}</p>
              <p className={`mt-4 max-w-xl leading-relaxed ${automation ? "text-on-band/80" : "text-ink-soft"}`}>
                {service.body}
              </p>
              {automation ? (
                <ul className="mt-6 flex flex-wrap items-center gap-3" aria-label="Automation stack">
                  {automationStack.map((name) => (
                    <li key={name} className="flex items-center gap-2.5">
                      <LogoTile name={name} small />
                      <span className="text-sm capitalize">{name}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              <ul className="mt-auto flex flex-wrap gap-2 pt-7" aria-label={`${service.title} coverage`}>
                {service.points.map((point) => (
                  <li
                    key={point}
                    className={`border px-2.5 py-1.5 font-mono text-[0.72rem] leading-none ${
                      automation ? "border-on-band/20 text-on-band/85" : "border-line text-ink-soft"
                    }`}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <div className="mt-14 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h3 className="font-mono text-[0.72rem] tracking-[0.16em] text-pass uppercase">The toolkit behind it</h3>
        <p className="text-sm text-muted">Industry-standard tools, used on live fintech releases.</p>
      </div>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {services.tools.map((tool) => (
          <li
            key={tool.name}
            className="tool-card flex items-start gap-4 border border-line bg-paper p-4 sm:p-5 sm:max-lg:last:col-span-2 lg:flex-col lg:gap-0"
          >
            <LogoTile name={tool.logo} />
            <div className="min-w-0">
              <p className="font-mono text-[0.64rem] tracking-[0.14em] text-pass uppercase lg:mt-5">{tool.category}</p>
              <h4 className="mt-1 font-serif text-xl tracking-tight sm:text-2xl lg:mt-1.5">{tool.name}</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft lg:mt-2">{tool.use}</p>
            </div>
          </li>
        ))}
      </ul>

      <ul className="mt-3 grid gap-3 md:grid-cols-2">
        {services.support.map((item) => (
          <li key={item.key} className="flex items-start gap-4 border border-line bg-paper p-5">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-line bg-card">
              <PracticeIcon name={item.key} />
            </span>
            <div>
              <h3 className="font-serif text-xl tracking-tight">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
