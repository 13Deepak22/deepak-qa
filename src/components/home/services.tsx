import {
  Check,
  Compass,
  CreditCard,
  ListChecks,
  type LucideIcon,
  MousePointerClick,
  QrCode,
  ScanFace,
} from "lucide-react";
import { PracticeIcon } from "@/components/home/practice-icon";
import { ToolLogo } from "@/components/home/tool-logo";
import { type DomainIcon, type TestingTypeIcon, type ToolLogo as ToolLogoName, services } from "@/data";

const logoSize: Record<ToolLogoName, { large: string; small: string }> = {
  playwright: { large: "w-10", small: "w-8" },
  selenium: { large: "h-8 w-8", small: "h-6 w-6" },
  appium: { large: "h-8 w-8", small: "h-6 w-6" },
  postman: { large: "h-8 w-8", small: "h-6 w-6" },
  jmeter: { large: "w-12", small: "w-9" },
  jira: { large: "h-7 w-7", small: "h-5 w-5" },
  trello: { large: "h-7 w-7", small: "h-5 w-5" },
  razorpay: { large: "h-7 w-7", small: "h-5 w-5" },
};

const typeIcons: Record<TestingTypeIcon, LucideIcon> = {
  functional: ListChecks,
  exploratory: Compass,
  ux: MousePointerClick,
};

const domainIcons: Record<DomainIcon, LucideIcon> = {
  upi: QrCode,
  gateway: CreditCard,
  ekyc: ScanFace,
};

const automationStack: ToolLogoName[] = ["playwright", "selenium", "appium"];
const logoName = (name: ToolLogoName) => (name === "jmeter" ? "JMeter" : name[0].toUpperCase() + name.slice(1));

function LogoTile({ name, small = false }: { name: ToolLogoName; small?: boolean }) {
  return (
    <span
      className={`tool-tile inline-flex shrink-0 items-center justify-center border border-black/10 bg-[#fbfaf6] ${
        small ? "h-10 w-10" : "h-14 w-14"
      }`}
    >
      <ToolLogo name={name} className={logoSize[name][small ? "small" : "large"]} />
    </span>
  );
}

function IconTile({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-black/10 bg-[#fbfaf6] text-[#146c43]">
      <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
    </span>
  );
}

function Label({ children, aside }: { children: string; aside: string }) {
  return (
    <div className="flex flex-col gap-1.5 sm:flex-row sm:items-end sm:justify-between">
      <h3 className="font-mono text-[0.72rem] tracking-[0.16em] text-pass uppercase">{children}</h3>
      <p className="text-sm text-muted">{aside}</p>
    </div>
  );
}

function KeywordBand() {
  const words = services.types;
  return (
    <div aria-hidden="true" className="service-marquee band overflow-hidden border-y border-pass-fill bg-band text-on-band">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex items-center gap-x-8 gap-y-3 px-4 py-4 sm:px-6">
            {words.map((word) => (
              <li
                key={word}
                className="flex items-center gap-2.5 font-mono text-[0.72rem] tracking-[0.16em] whitespace-nowrap uppercase"
              >
                <Check className="h-3.5 w-3.5 text-pass" strokeWidth={2.5} />
                {word}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section id="practice" className="scroll-mt-20 border-t border-line bg-paper-deep">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-10 sm:px-6 sm:pt-20 lg:pt-28 lg:pb-12">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:items-end lg:gap-12">
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
              <span className="text-pass">01</span> / Testing services
            </p>
            <h2 className="mt-3 max-w-2xl font-serif text-4xl tracking-tight text-balance sm:text-5xl">
              How a release earns the right to ship.
            </h2>
          </div>
          <p className="leading-relaxed text-ink-soft">{services.lede}</p>
        </div>
      </div>

      <KeywordBand />

      <div className="mx-auto max-w-6xl px-4 pt-10 pb-16 sm:px-6 sm:pb-20 lg:pt-12 lg:pb-28">
        <div className="grid gap-4 lg:grid-cols-2">
          {services.featured.map((service, index) => (
            <article
              key={service.key}
              className="service-card band flex flex-col border border-pass-fill bg-band px-5 py-7 text-on-band sm:px-8 sm:py-9"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center border border-on-band/20">
                  <PracticeIcon name={service.key} />
                </span>
                <span className="font-mono text-[0.68rem] tracking-[0.16em] text-on-band/60 uppercase">
                  Service {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 font-serif text-3xl tracking-tight sm:text-4xl">{service.title}</h3>
              <p className="mt-2 font-serif text-lg text-pass italic">{service.tagline}</p>
              <p className="mt-4 max-w-xl leading-relaxed text-on-band/80">{service.body}</p>
              <ul className="mt-6 flex flex-wrap items-center gap-3" aria-label={`${service.title} focus`}>
                {service.key === "automation"
                  ? automationStack.map((name) => (
                      <li key={name} className="flex items-center gap-2.5">
                        <LogoTile name={name} small />
                        <span className="text-sm">{logoName(name)}</span>
                      </li>
                    ))
                  : service.highlights.map((item) => (
                      <li key={item.label} className="flex items-center gap-2.5">
                        <IconTile icon={typeIcons[item.icon]} />
                        <span className="text-sm">{item.label}</span>
                      </li>
                    ))}
              </ul>
              <ul className="mt-auto flex flex-wrap gap-2 pt-7" aria-label={`${service.title} coverage`}>
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="border border-on-band/20 px-2.5 py-1.5 font-mono text-[0.72rem] leading-none text-on-band/85"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <Label aside="Industry-standard tools, used on live fintech releases.">The toolkit behind it</Label>
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
        </div>

        <ul className="mt-3 grid gap-3 md:grid-cols-2">
          {services.support.map((item) => (
            <li key={item.key} className="tool-card flex flex-col border border-line bg-paper p-5 sm:p-6">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-line bg-card">
                  <PracticeIcon name={item.key} />
                </span>
                <h3 className="font-serif text-2xl tracking-tight">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              <ul className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3" aria-label={item.marksLabel}>
                {item.marks.map((mark) => (
                  <li key={mark.label} className="flex items-center gap-2.5">
                    {"logo" in mark ? <LogoTile name={mark.logo} small /> : <IconTile icon={domainIcons[mark.icon]} />}
                    <span className="text-sm font-medium text-ink">{mark.label}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-auto flex flex-wrap gap-2 pt-5" aria-label={`${item.title} keywords`}>
                {item.points.map((point) => (
                  <li key={point} className="border border-line px-2.5 py-1.5 font-mono text-[0.72rem] leading-none text-ink-soft">
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
