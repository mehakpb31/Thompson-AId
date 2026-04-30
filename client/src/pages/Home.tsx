/*
 * DESIGN: "Kamloops Workshop" — Home page
 * Asymmetric split hero with a layered photo collage (truck image
 * overlapped by a quote chip and stats). Content uses signature
 * numbered service tickers, dotted route lines between steps, and a
 * warm cream surface throughout.
 */
import { Link } from "wouter";
import {
  ArrowRight,
  BadgeCheck,
  Box,
  Clock,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";
import { useSeo } from "@/hooks/useSeo";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import {
  CLEANING_SERVICES,
  FAQ,
  IMG,
  MOVING_SERVICES,
  SITE,
  TESTIMONIALS,
} from "@/lib/site";

export default function Home() {
  useSeo({
    title: "Thompson Aid — Kamloops Moving & Cleaning Services | Free Quote",
    description:
      "Kamloops' trusted local moving and cleaning company. Licensed & insured. Local & long-distance moves, packing, deep cleaning, move-in/out. Free quotes.",
    image: IMG.heroTruck,
    path: "/",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Thompson Aid",
      url: window.location.origin,
      potentialAction: {
        "@type": "SearchAction",
        target: `${window.location.origin}/?s={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  });

  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesOverview />
      <WhyUs />
      <ProcessTimeline />
      <CtaBand />
      <Testimonials />
      <StatsBand />
      <FaqTeaser />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* HERO                                                               */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background shapes */}
      <div className="absolute inset-0 bg-[color:var(--color-cream)]" />
      <div className="absolute top-20 -right-24 w-[520px] h-[520px] rounded-full bg-[color:var(--color-brand)]/10 blur-3xl" />
      <div className="absolute top-60 -left-32 w-[420px] h-[420px] rounded-full bg-[color:var(--color-moss)]/10 blur-3xl" />

      <div className="container relative pt-10 md:pt-16 pb-14 md:pb-24 grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
        {/* Left copy */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border/70 text-xs font-mono tracking-wider uppercase text-[color:var(--color-ink-soft)] shadow-warm">
            <span className="size-1.5 rounded-full bg-[color:var(--color-brand)] animate-pulse" />
            Bookings Open · Kamloops, BC
          </div>

          <h1 className="font-display text-[clamp(2.6rem,6vw,5.4rem)] text-[color:var(--color-ink)] mt-5 leading-[0.92]">
            Moving <span className="text-[color:var(--color-brand)]">&</span>
            <br />
            Cleaning.{" "}
            <span className="highlight-mark">Done right.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base md:text-lg text-[color:var(--color-ink-soft)] leading-relaxed">
            Thompson Aid is Kamloops' trusted local team for professional moves
            and deep cleaning — licensed, insured, and punctual. From a
            studio on the North Shore to a four-bedroom in Aberdeen, we handle
            every box and every baseboard.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-5 py-3.5 bg-[color:var(--color-brand)] hover:bg-[color:var(--color-brand-dark)] text-white font-semibold rounded-md shadow-warm-lg transition-all active:translate-y-px"
            >
              Get a Free Quote
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-white border border-border text-[color:var(--color-ink)] font-semibold rounded-md hover:border-[color:var(--color-ink)] transition-colors"
            >
              <Phone className="size-4" /> {SITE.phone}
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
            {[
              { v: "4.9★", l: "Google + Facebook" },
              { v: "87+", l: "Local reviews" },
              { v: "On-time", l: "Guarantee" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl bg-white border border-border/60 p-3 shadow-warm">
                <dt className="font-display text-2xl text-[color:var(--color-ink)]">
                  {s.v}
                </dt>
                <dd className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-0.5">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right collage */}
        <div className="relative z-10">
          <div className="relative aspect-[4/5] lg:aspect-[5/6] w-full max-w-md mx-auto">
            {/* main photo */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-warm-lg ring-1 ring-black/5">
              <img
                src={IMG.heroTruck}
                alt="Thompson Aid movers loading an orange truck in Kamloops"
                className="size-full object-cover"
                loading="eager"
              />
            </div>

            {/* floating cleaning photo */}
            <div className="absolute -bottom-8 -left-8 w-44 md:w-56 aspect-[4/3] rounded-2xl overflow-hidden shadow-warm-lg ring-1 ring-black/5 floaty bg-white">
              <img
                src={IMG.cleaningKitchen}
                alt="Cleaner wiping a Kamloops kitchen countertop"
                className="size-full object-cover"
              />
            </div>

            {/* quote pill */}
            <div className="absolute -top-6 -right-4 md:-right-10 bg-white rounded-2xl shadow-warm-lg border border-border/70 p-4 w-60">
              <div className="flex items-center gap-1 text-[color:var(--color-brand)] mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="text-sm leading-snug text-[color:var(--color-ink)]">
                "Moved us from Westsyde to Aberdeen in a single day.
                Nothing scratched."
              </p>
              <p className="mt-1 text-[10.5px] font-mono uppercase tracking-wider text-muted-foreground">
                Jessica R. · Aberdeen
              </p>
            </div>

            {/* route sticker */}
            <div className="absolute -top-6 md:-top-10 -left-4 md:-left-10 z-20 bg-[color:var(--color-ink)] text-white px-4 py-3 rounded-xl shadow-warm-lg rotate-[-5deg]">
              <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-brand)]">
                Route · MV-07
              </div>
              <div className="font-display text-lg leading-tight mt-0.5">
                Westsyde → Aberdeen
              </div>
              <div className="mt-2 route-line h-0.5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* TRUST STRIP                                                        */
/* ------------------------------------------------------------------ */
function TrustStrip() {
  const items = [
    { icon: ShieldCheck, label: "Licensed & Insured" },
    { icon: Clock, label: "On-Time Guarantee" },
    { icon: BadgeCheck, label: "Background-Checked Crew" },
    { icon: Sparkles, label: "Satisfaction Guarantee" },
    { icon: Truck, label: "Own Fleet, Own Team" },
    { icon: Box, label: "Materials Supplied" },
  ];
  return (
    <section className="border-y border-border/60 bg-white">
      <div className="container py-5 overflow-hidden">
        <div className="flex items-center gap-8 md:gap-12 whitespace-nowrap animate-[ticker_35s_linear_infinite]">
          {[...items, ...items].map((it, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-[color:var(--color-ink-soft)]"
            >
              <it.icon className="size-4 text-[color:var(--color-brand)]" />
              <span className="text-sm font-medium">{it.label}</span>
              <span className="text-border">/</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SERVICES OVERVIEW                                                  */
/* ------------------------------------------------------------------ */
function ServicesOverview() {
  const cards = [
    {
      tag: "DIV 01",
      title: "Moving Services",
      desc: "Local & long-distance moves, full-service packing, furniture assembly, storage coordination, and commercial relocations.",
      img: IMG.longDistance,
      href: "/services/moving",
      items: MOVING_SERVICES.slice(0, 4),
    },
    {
      tag: "DIV 02",
      title: "Cleaning Services",
      desc: "Move-in/out deep cleans, post-renovation cleaning, recurring home cleaning, kitchen detailing, and commercial spaces.",
      img: IMG.deepCleaningBathroom,
      href: "/services/cleaning",
      items: CLEANING_SERVICES.slice(0, 4),
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Two services,{" "}
                <span className="text-[color:var(--color-brand)]">one crew</span> —
                coordinated day one.
              </>
            }
            description="Most of our clients book moving and cleaning together. We send one project lead, one invoice, and one accountable team."
          />
          <Link
            href="/services/moving"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-ink)] hover:text-[color:var(--color-brand)] transition-colors self-start md:self-end"
          >
            Explore services
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <Link
              href={c.href}
              key={c.title}
              className="reveal group relative rounded-3xl overflow-hidden bg-white border border-border/60 shadow-warm hover:shadow-warm-lg transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-brand)] mb-2">
                  / {c.tag}
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-[color:var(--color-ink)] leading-[0.95]">
                  {c.title}
                </h3>
                <p className="mt-3 text-[color:var(--color-ink-soft)] leading-relaxed">
                  {c.desc}
                </p>

                <ul className="mt-5 grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                  {c.items.map((it) => (
                    <li key={it.code} className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-[color:var(--color-brand)]" />
                      <span>{it.title}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 inline-flex items-center gap-2 font-semibold text-[color:var(--color-ink)] group-hover:text-[color:var(--color-brand)] transition-colors">
                  Explore {c.title.split(" ")[0].toLowerCase()}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* WHY US                                                             */
/* ------------------------------------------------------------------ */
function WhyUs() {
  const reasons = [
    {
      title: "Local — and we act like it",
      desc: "We live in Kamloops. We know that summer moves out of Sahali mean early starts, that Juniper Ridge stairs matter, and that winter driveways need salt the night before.",
    },
    {
      title: "Fixed, itemised quotes",
      desc: "No mystery surcharges. Every quote is written, itemised and includes travel, labour, materials, and insurance.",
    },
    {
      title: "One team, two services",
      desc: "Bundle your move and your clean for a single coordinated day — fewer vendors, one point of contact.",
    },
    {
      title: "Re-clean & satisfaction guarantee",
      desc: "If something on our move-out clean is flagged in the first 24 hours, we come back and fix it. No charge, no drama.",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-[color:var(--color-sand)] overflow-hidden">
      <div className="absolute inset-0 grain opacity-70 pointer-events-none" />
      <div className="container relative grid gap-10 lg:grid-cols-[1fr_1.2fr] items-center">
        <div className="relative reveal">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-warm-lg ring-1 ring-black/5">
            <img
              src={IMG.team}
              alt="Thompson Aid team portrait with moving truck in Kamloops"
              className="size-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-2xl shadow-warm-lg p-5 w-60 border border-border/70">
            <div className="font-display text-4xl text-[color:var(--color-ink)]">
              4.9<span className="text-[color:var(--color-brand)]">★</span>
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-1">
              From 87 local reviews
            </div>
          </div>
        </div>

        <div className="reveal">
          <SectionHeading
            eyebrow="Why Thompson Aid"
            title={
              <>
                Built on the boring{" "}
                <span className="text-[color:var(--color-brand)]">fundamentals.</span>
              </>
            }
            description="No gimmicks. Show up on time, protect the floors, wrap the furniture, clean the baseboards, send a clear invoice."
          />

          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <li
                key={r.title}
                className="rounded-2xl bg-white border border-border/60 p-5 shadow-warm"
              >
                <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-brand)]">
                  / 0{i + 1}
                </div>
                <h4 className="mt-2 font-display text-xl leading-tight text-[color:var(--color-ink)]">
                  {r.title}
                </h4>
                <p className="mt-2 text-sm text-[color:var(--color-ink-soft)] leading-relaxed">
                  {r.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* PROCESS TIMELINE                                                   */
/* ------------------------------------------------------------------ */
function ProcessTimeline() {
  const steps = [
    { n: "01", title: "Free quote", desc: "Share your dates and details in 60 seconds. We confirm scope and price." },
    { n: "02", title: "Plan & confirm", desc: "Truck size, crew size, materials and timing locked in writing." },
    { n: "03", title: "Move & clean day", desc: "We show up on time, protect surfaces, wrap furniture, label boxes." },
    { n: "04", title: "Final walk-through", desc: "You inspect, we touch up anything flagged — no invoice surprises." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="reveal">
          <SectionHeading
            eyebrow="How it works"
            title={
              <>
                A simple <span className="text-[color:var(--color-brand)]">4-step</span> process.
              </>
            }
            description="From the first call to the final walk-through — clear, honest, and written down."
          />
        </div>
        <div className="mt-12 grid md:grid-cols-4 gap-6 md:gap-0 relative">
          <div className="hidden md:block absolute left-[12.5%] right-[12.5%] top-8 h-0.5 route-line" />
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="reveal relative md:px-4"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="relative size-16 mx-auto rounded-full bg-white border-2 border-[color:var(--color-brand)] text-[color:var(--color-brand)] font-display text-xl flex items-center justify-center shadow-warm">
                {s.n}
              </div>
              <h4 className="mt-5 text-center font-display text-xl text-[color:var(--color-ink)]">
                {s.title}
              </h4>
              <p className="mt-2 text-sm text-center text-muted-foreground leading-relaxed max-w-[240px] mx-auto">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* TESTIMONIALS                                                       */
/* ------------------------------------------------------------------ */
function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[color:var(--color-cream)]">
      <div className="container">
        <div className="reveal max-w-3xl">
          <SectionHeading
            eyebrow="Reviews"
            title={
              <>
                Kamloops{" "}
                <span className="text-[color:var(--color-brand)]">says it best.</span>
              </>
            }
            description="A small sample of what our neighbours across town have said after their move or clean."
          />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className="reveal rounded-2xl bg-white border border-border/60 p-6 shadow-warm hover:shadow-warm-lg transition-all"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center gap-1 text-[color:var(--color-brand)] mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-[color:var(--color-ink)] leading-relaxed">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-4 pt-4 border-t border-border/60 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-[color:var(--color-ink)]">
                    {t.name}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    {t.area}
                  </div>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[color:var(--color-brand)]">
                  Verified
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* STATS                                                              */
/* ------------------------------------------------------------------ */
function StatsBand() {
  const stats = [
    { v: "500+", l: "Moves completed" },
    { v: "1,200+", l: "Homes cleaned" },
    { v: "100%", l: "Licensed & insured" },
    { v: "24h", l: "Avg. quote response" },
  ];
  return (
    <section className="py-16 bg-white border-y border-border/60">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.l} className="reveal text-center md:text-left">
            <div className="font-display text-5xl md:text-6xl text-[color:var(--color-ink)] leading-none">
              {s.v}
            </div>
            <div className="mt-2 font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ TEASER                                                         */
/* ------------------------------------------------------------------ */
function FaqTeaser() {
  const top = FAQ.slice(0, 5);
  return (
    <section className="py-20 md:py-28">
      <div className="container grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div className="reveal">
          <SectionHeading
            eyebrow="Questions"
            title={
              <>
                Things people ask <br />
                <span className="text-[color:var(--color-brand)]">before booking.</span>
              </>
            }
            description="A short list of the most common questions. Don't see yours? Get in touch — we are happy to help."
          />
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-[color:var(--color-ink)] text-white font-semibold rounded-md hover:bg-[color:var(--color-brand)] transition-colors"
          >
            Ask a question
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="reveal divide-y divide-border/60 bg-white border border-border/60 rounded-3xl shadow-warm overflow-hidden">
          {top.map((f) => (
            <details key={f.q} className="group p-5 md:p-6">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                <span className="font-display text-lg md:text-xl text-[color:var(--color-ink)] leading-tight">
                  {f.q}
                </span>
                <span className="shrink-0 size-8 rounded-full bg-[color:var(--color-brand)]/10 text-[color:var(--color-brand)] flex items-center justify-center transition-transform group-open:rotate-45 text-xl leading-none pb-0.5">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[color:var(--color-ink-soft)] leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
