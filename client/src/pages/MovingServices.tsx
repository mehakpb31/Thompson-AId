/*
 * DESIGN: "Kamloops Workshop" — Moving services detail page.
 * Service hero with hero imagery, numbered service deck, process,
 * and CTA band.
 */
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Phone, Truck } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { IMG, MOVING_SERVICES, SITE } from "@/lib/site";

export default function MovingServices() {
  useSeo({
    title: "Kamloops Moving Services | Local & Long-Distance Movers — Thompson Aid",
    description:
      "Professional moving services in Kamloops, BC. Local and long-distance moves, packing, loading, furniture assembly, storage and commercial relocations. Licensed & insured. Free quote.",
    image: IMG.longDistance,
    path: "/services/moving",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Moving services",
      provider: { "@type": "MovingCompany", name: "Thompson Aid" },
      areaServed: { "@type": "City", name: "Kamloops" },
      description:
        "Local and long-distance moves, packing, loading, furniture assembly, storage and commercial relocations across Kamloops, BC.",
      offers: MOVING_SERVICES.map((s) => ({
        "@type": "Offer",
        name: s.title,
        description: s.summary,
      })),
    },
  });

  return (
    <>
      <ServiceHero />
      <ServiceGrid />
      <ProcessStrip />
      <CtaBand
        eyebrow="Ready to move"
        title="Your Kamloops move, stress-tested."
        body="Tell us your dates and we'll put together a written, itemised quote today."
      />
    </>
  );
}

function ServiceHero() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--color-cream)]">
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-cream)] via-white to-[color:var(--color-sand)]" />
      <div className="container relative pt-14 md:pt-20 pb-12 md:pb-16 grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
        <div className="reveal">
          <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-brand)] mb-4">
            / Division 01 — Moving
          </div>
          <h1 className="font-display text-[clamp(2.4rem,5.5vw,4.8rem)] text-[color:var(--color-ink)] leading-[0.92]">
            Kamloops <span className="text-[color:var(--color-brand)]">movers</span> who
            show up on time.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-[color:var(--color-ink-soft)] leading-relaxed">
            Residential, commercial, local and long-distance — handled by a
            trained local crew with their own trucks, dollies, floor runners,
            moving blankets and decades of combined experience.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-[color:var(--color-brand)] hover:bg-[color:var(--color-brand-dark)] text-white font-semibold rounded-md shadow-warm-lg transition-all active:translate-y-px"
            >
              Get Moving Quote
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-white border border-border text-[color:var(--color-ink)] font-semibold rounded-md hover:border-[color:var(--color-ink)] transition-colors"
            >
              <Phone className="size-4" /> {SITE.phone}
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[color:var(--color-ink-soft)]">
            {[
              "Cargo + liability insurance",
              "Own fleet, own team",
              "Floor & door protection included",
            ].map((i) => (
              <li key={i} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-[color:var(--color-moss)]" /> {i}
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-warm-lg ring-1 ring-black/5">
            <img
              src={IMG.longDistance}
              alt="Orange Thompson Aid moving truck driving through Kamloops BC"
              className="size-full object-cover"
            />
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider">
              <Truck className="size-3.5 text-[color:var(--color-brand)]" />
              Fleet: 17 ft · 20 ft · 26 ft
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceGrid() {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="reveal">
          <SectionHeading
            eyebrow="The full menu"
            title={
              <>
                Every move we handle —{" "}
                <span className="text-[color:var(--color-brand)]">in detail.</span>
              </>
            }
            description="Mix and match. Need only loading help? A packing-only service? Long-distance with storage in between? We can quote any combination."
          />
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {MOVING_SERVICES.map((s, i) => (
            <article
              key={s.code}
              className="reveal group relative rounded-2xl bg-white border border-border/60 p-6 shadow-warm hover:shadow-warm-lg hover:-translate-y-1 transition-all"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-brand)]">
                  / {s.code}
                </div>
                <div className="size-10 rounded-full bg-[color:var(--color-brand)]/10 text-[color:var(--color-brand)] flex items-center justify-center font-display">
                  0{i + 1}
                </div>
              </div>
              <h3 className="mt-4 font-display text-2xl leading-tight text-[color:var(--color-ink)]">
                {s.title}
              </h3>
              <p className="mt-2 text-[color:var(--color-ink-soft)] leading-relaxed">
                {s.summary}
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-[color:var(--color-moss)] mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStrip() {
  const img = IMG.furnitureAssembly;
  return (
    <section className="py-20 md:py-24 bg-[color:var(--color-sand)]">
      <div className="container grid gap-10 lg:grid-cols-[1fr_1.2fr] items-center">
        <div className="reveal aspect-[4/5] rounded-3xl overflow-hidden shadow-warm-lg ring-1 ring-black/5">
          <img src={img} alt="Furniture assembly during a Kamloops move" className="size-full object-cover" />
        </div>
        <div className="reveal">
          <SectionHeading
            eyebrow="Day-of move"
            title={
              <>
                What actually{" "}
                <span className="text-[color:var(--color-brand)]">happens</span> on move day.
              </>
            }
          />
          <ol className="mt-8 space-y-5">
            {[
              ["Arrival", "Crew arrives on time with tools, materials, and floor protection."],
              ["Walk-through", "Project lead walks the home with you, confirms priority items and fragile handling."],
              ["Protect", "Floors, doorways, corners and banisters covered before anything moves."],
              ["Wrap & load", "Furniture wrapped in blankets + plastic. Boxes labelled by room and counted."],
              ["Transport", "Careful driving through Kamloops — we know the hills and the switchbacks."],
              ["Unload & place", "Boxes to their labelled rooms. Furniture placed, beds reassembled."],
              ["Walk-through", "Final check, signed inventory, any touch-ups done before we leave."],
            ].map(([t, d], i) => (
              <li key={`${i}-${t}`} className="flex gap-4">
                <div className="shrink-0 size-10 rounded-full bg-white border-2 border-[color:var(--color-brand)] text-[color:var(--color-brand)] font-display flex items-center justify-center">
                  {i + 1}
                </div>
                <div>
                  <div className="font-display text-lg text-[color:var(--color-ink)]">{t}</div>
                  <p className="text-[color:var(--color-ink-soft)]">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
