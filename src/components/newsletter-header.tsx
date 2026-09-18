import maartenskliniekLogo from "@/assets/sint-maartenskliniek_logo.png.asset.json";

type FocusColor = "coral" | "mint" | "sun" | "sky" | "grape";

interface FocusArea {
  label: string;
  color: FocusColor;
}

interface NewsletterHeaderProps {
  issueLabel: string;
  issueNumber: string;
  tagline: string;
  focusAreas: FocusArea[];
}


const colorChipBg: Record<FocusColor, string> = {
  coral: "bg-coral/15",
  mint: "bg-mint/15",
  sun: "bg-sun/25",
  sky: "bg-sky/15",
  grape: "bg-grape/15",
};

export function NewsletterHeader({
  issueLabel,
  issueNumber,
  tagline,
  focusAreas,
}: NewsletterHeaderProps) {
  return (
    <header className="relative w-full overflow-hidden bg-cream text-ink font-body">
      {/* Floating color blobs */}
      <span className="float-a pointer-events-none absolute -left-16 -top-16 size-64 rounded-full bg-sun/30" />
      <span className="float-b pointer-events-none absolute -right-24 top-24 size-80 rounded-full bg-mint/25" />
      <span className="float-a pointer-events-none absolute right-1/4 -bottom-28 size-72 rounded-full bg-sky/20" />
      <span className="float-b pointer-events-none absolute right-24 top-32 size-4 rounded-full bg-coral" />
      <span className="float-a pointer-events-none absolute left-1/3 bottom-16 size-3 rounded-full bg-grape" />
      <span className="float-b pointer-events-none absolute left-8 top-1/2 size-5 rounded-full bg-sun" />

      {/* Top meta bar */}
      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-4 sm:px-8 sm:py-6 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-8">
        <div className="flex flex-wrap items-center gap-4 lg:gap-5">
          <img
            src={maartenskliniekLogo.url}
            alt="Sint Maartenskliniek"
            className="h-9 w-auto sm:h-11"
          />
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-ink px-4 py-2 text-xs font-semibold text-cream sm:text-sm">
            {issueLabel}
          </span>
          <span className="hidden rounded-full border-2 border-ink/15 px-4 py-2 text-xs font-semibold sm:inline-flex sm:text-sm">
            {issueNumber}
          </span>
        </div>
      </div>

      {/* Wordmark + intro */}
      <div className="relative mx-auto max-w-[1440px] px-5 pb-6 sm:px-8 lg:px-16 lg:pb-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div>
            <h1 className="font-display font-black leading-[0.85] tracking-tight">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                FAST
              </span>
              <span className="-mt-1 block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-sun">MOVERS</span>
              </span>
              <span className="mt-1.5 block text-2xl text-coral sm:text-3xl md:text-4xl lg:text-5xl">
                <span className="inline-block -rotate-2 rounded-xl bg-coral px-3 py-0.5 text-cream shadow-[0_8px_0_0_rgba(32,36,44,0.16)]">
                  TOP&nbsp;10
                </span>
              </span>
            </h1>
          </div>

          <div className="lg:ml-auto lg:max-w-md">
            <p className="text-sm font-medium leading-relaxed text-ink/80 sm:text-base">
              {tagline}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area.label}
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold text-ink ${colorChipBg[area.color]}`}
                >
                  {area.label}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-cream shadow-[0_8px_0_0_rgba(18,201,166,0.5)] sm:text-base">
                <span>Lees de nieuwsbrief</span>
                <span className="text-xl leading-none" aria-hidden="true">
                  →
                </span>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink/15 px-4 py-2.5 text-sm font-semibold">
                Abonneren
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
