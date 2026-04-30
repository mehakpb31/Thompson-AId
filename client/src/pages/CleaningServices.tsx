/*
 * DESIGN: "Kamloops Workshop" — Cleaning services detail page.
 * Parallel structure to Moving page for consistency.
 */
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Phone, Sparkles } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { CLEANING_SERVICES, IMG, SITE } from "@/lib/site";

export default function CleaningServices() {
  useSeo({
    title: "Kamloops Cleaning Services | Move-Out, Deep & Post-Reno — Thompson Aid",
    description:
      "Professional cleaning services in Kamloops, BC. Move-in / move-out, deep cleaning, post-renovation, recurring home cleaning and commercial. Licensed & insured. Free quote.",
    image: IMG.deepCleaningBathroom,
    path: "/services/cleaning",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Cleaning services",
      provider: { "@type": "MovingCompany", name: "Thompson Aid" },
      areaServed: { "@type": "City", name: "Kamloops" },
      description:
        "Move-in/out, deep, post-renovation, recurring and commercial cleaning in Kamloops, BC.",
      offers: CLEANING_SERVICES.map((s) => ({
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
      <Checklist />
      <CtaBand
        eyebrow="Sparkle guaranteed"
        title="A clean that passes the white-glove test."
        body="Move-out inspection? Open house? Post-reno mess? Tell us the scope — we'll handle the rest."
      />
    </>
  );
}

function ServiceHero() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--color-cream)]">
      <div className="absolute inset-0 bg-gradient-to-bl from-[color:var(--color-cream)] via-white to-[color:var(--color-sand)]" />
      <div className="container relative pt-14 md:pt-20 pb-12 md:pb-16 grid gap-10 lg:grid-cols-[1fr_1.1fr] items-center">
        <div className="reveal order-2 lg:order-1">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-warm-lg ring-1 ring-black/5">
            <img
              src={IMG.cleaningKitchen}
              alt="Professional cleaner polishing kitchen countertops in a Kamloops home"
              className="size-full object-cover"
            />
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider">
              <Sparkles className="size-3.5 text-[color:var(--color-brand)]" />
              Eco-friendly option
            </div>
          </div>
        </div>
        <div className="reveal order-1 lg:order-2">
          <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-brand)] mb-4">
            / Division 02 — Cleaning
          </div>
          <h1 className="font-display text-[clamp(2.4rem,5.5vw,4.8rem)] text-[color:var(--color-ink)] leading-[0.92]">
            Kamloops cleaning that{" "}
            <span className="text-[color:var(--color-brand)]">passes inspection.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-[color:var(--color-ink-soft)] leading-relaxed">
            From move-out deep cleans that get your deposit back to weekly home
            cleaning that actually stays consistent — our crews are trained,
            insured and bring their own supplies.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-[color:var(--color-brand)] hover:bg-[color:var(--color-brand-dark)] text-white font-semibold rounded-md shadow-warm-lg transition-all active:translate-y-px"
            >
              Get Cleaning Quote <ArrowRight className="size-4" />
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
              "Pet & kid-safe products",
              "24h re-clean guarantee",
              "Same team when possible",
            ].map((i) => (
              <li key={i} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-[color:var(--color-moss)]" /> {i}
              </li>
            ))}
          </ul>
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
                Every clean we do —{" "}
                <span className="text-[color:var(--color-brand)]">dialed in.</span>
              </>
            }
            description="Choose the scope that matches your property and timing. We'll quote transparently and confirm in writing."
          />
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CLEANING_SERVICES.map((s, i) => (
            <article
              key={s.code}
              className="reveal group rounded-2xl bg-white border border-border/60 p-6 shadow-warm hover:shadow-warm-lg hover:-translate-y-1 transition-all"
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

function Checklist() {
  const rooms = [
    {
      room: "Kitchen",
      items: [
        "Inside oven, racks, drawer",
        "Range hood filter & exterior",
        "Inside fridge & freezer",
        "Inside dishwasher, microwave",
        "Cabinets — inside & out",
        "Backsplash, counters, sink, taps",
        "Floors swept & mopped",
      ],
    },
    {
      room: "Bathrooms",
      items: [
        "Descale taps, glass, tile",
        "Scrub & disinfect toilet",
        "Clean exhaust fan cover",
        "Mirror, vanity, drawers",
        "Tub & shower detail",
        "Floor washed",
      ],
    },
    {
      room: "Living areas & bedrooms",
      items: [
        "Dust every surface",
        "Switch plates, door frames",
        "Baseboards wiped",
        "Blinds, light fixtures",
        "Windows (interior) & sills",
        "Carpet vacuumed edge-to-edge",
        "Hard floors damp-mopped",
      ],
    },
  ];
  return (
    <section className="py-20 md:py-24 bg-[color:var(--color-sand)] relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-70 pointer-events-none" />
      <div className="container relative">
        <div className="reveal">
          <SectionHeading
            eyebrow="Move-out checklist"
            title={
              <>
                What's included in a{" "}
                <span className="text-[color:var(--color-brand)]">move-out clean.</span>
              </>
            }
            description="This is the same checklist our crews execute. If your lease has extras (carpet shampoo, patio power-wash, window exteriors), we add them as line items."
          />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {rooms.map((r, i) => (
            <div
              key={r.room}
              className="reveal rounded-2xl bg-white border border-border/60 p-6 shadow-warm"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-brand)]">
                / Area 0{i + 1}
              </div>
              <h4 className="mt-2 font-display text-2xl text-[color:var(--color-ink)]">{r.room}</h4>
              <ul className="mt-4 space-y-2 text-sm">
                {r.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-[color:var(--color-moss)] mt-0.5 shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
