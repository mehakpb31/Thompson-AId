/*
 * DESIGN: "Kamloops Workshop" — Service Areas page.
 * Editorial grid of coverage areas, annotated map image, and route line motif.
 */
import { Link } from "wouter";
import { ArrowRight, MapPin } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { IMG, SERVICE_AREAS } from "@/lib/site";

const neighbourhoods = [
  "Sahali",
  "Aberdeen",
  "Juniper Ridge",
  "Batchelor Heights",
  "North Shore",
  "Valleyview",
  "Westsyde",
  "Dallas",
  "Brocklehurst",
  "Dufferin",
  "Pineview Valley",
  "Rayleigh",
  "Lower Sahali",
  "Upper Sahali",
  "Barnhartvale",
];

export default function ServiceAreas() {
  useSeo({
    title: "Service Areas | Kamloops & Thompson Region Movers — Thompson Aid",
    description:
      "Thompson Aid serves Kamloops and the entire Thompson region — Sun Peaks, Logan Lake, Chase, Merritt, Barriere, Clearwater, and long-distance routes across BC.",
    image: IMG.kamloopsLandscape,
    path: "/service-areas",
  });

  return (
    <>
      <section className="relative bg-[color:var(--color-cream)] overflow-hidden">
        <div className="container pt-14 md:pt-20 pb-12 md:pb-16 grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
          <div className="reveal">
            <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-brand)] mb-4">
              / Service Areas
            </div>
            <h1 className="font-display text-[clamp(2.4rem,5.5vw,5rem)] text-[color:var(--color-ink)] leading-[0.92]">
              Kamloops, every{" "}
              <span className="text-[color:var(--color-brand)]">neighbourhood.</span>{" "}
              Plus the whole Thompson region.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-[color:var(--color-ink-soft)] leading-relaxed">
              From Sahali to Sun Peaks, Juniper Ridge to Juniper Beach — if it
              is on the map, we probably already know the shortcuts, the
              switchbacks, and the building managers.
            </p>
          </div>
          <div className="reveal aspect-[4/3] rounded-3xl overflow-hidden shadow-warm-lg ring-1 ring-black/5">
            <img
              src={IMG.kamloopsLandscape}
              alt="Aerial view of Kamloops, BC with the Thompson River"
              className="size-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container">
          <div className="reveal">
            <SectionHeading
              eyebrow="Kamloops city"
              title={
                <>
                  Every Kamloops{" "}
                  <span className="text-[color:var(--color-brand)]">neighbourhood</span> covered.
                </>
              }
              description="Same-day response, same-week booking where possible — all within city limits."
            />
          </div>
          <div className="reveal mt-10 flex flex-wrap gap-2.5">
            {neighbourhoods.map((n) => (
              <span
                key={n}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-border/70 text-sm text-[color:var(--color-ink)] font-medium shadow-warm hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)] transition-colors"
              >
                <MapPin className="size-3.5 text-[color:var(--color-brand)]" />
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-[color:var(--color-sand)]">
        <div className="container">
          <div className="reveal">
            <SectionHeading
              eyebrow="Regional routes"
              title={
                <>
                  Regional & <span className="text-[color:var(--color-brand)]">long-distance</span>{" "}
                  coverage.
                </>
              }
              description="Frequent routes we drive — plus custom long-distance trips across BC and Alberta."
            />
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {SERVICE_AREAS.map((a, i) => (
              <div
                key={a.name}
                className="reveal rounded-2xl bg-white border border-border/60 p-5 shadow-warm hover:shadow-warm-lg transition-all"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="flex items-start justify-between">
                  <MapPin className="size-5 text-[color:var(--color-brand)]" />
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                    / 0{i + 1}
                  </span>
                </div>
                <h4 className="mt-4 font-display text-xl text-[color:var(--color-ink)] leading-tight">
                  {a.name}
                </h4>
                <p className="mt-2 text-sm text-[color:var(--color-ink-soft)] leading-relaxed">
                  {a.note}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal mt-10 rounded-2xl bg-[color:var(--color-ink)] text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="max-w-2xl">
              <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-[color:var(--color-brand)]">
                / Long-distance
              </div>
              <h4 className="mt-2 font-display text-2xl md:text-3xl leading-tight">
                Moving to Vancouver, Kelowna or Calgary?
              </h4>
              <p className="mt-2 text-white/75">
                We do long-distance routes across BC and Alberta — including
                partial-load consolidations and storage-between-dates.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-[color:var(--color-brand)] hover:bg-white hover:text-[color:var(--color-ink)] text-white font-semibold rounded-md transition-colors shrink-0"
            >
              Long-distance quote <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
