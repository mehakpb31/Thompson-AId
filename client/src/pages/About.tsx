/*
 * DESIGN: "Kamloops Workshop" — About page.
 * Editorial layout with narrative columns, values grid, and team photo.
 */
import { Link } from "wouter";
import { ArrowRight, Handshake, Heart, ShieldCheck, Sparkles } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { IMG } from "@/lib/site";

export default function About() {
  useSeo({
    title: "About Thompson Aid | Local Kamloops Moving & Cleaning Company",
    description:
      "Thompson Aid is a family-run, locally-operated moving and cleaning company serving Kamloops and the Thompson region. Meet the team and the standards we live by.",
    image: IMG.team,
    path: "/about",
  });

  return (
    <>
      <section className="relative bg-[color:var(--color-cream)] overflow-hidden">
        <div className="container pt-14 md:pt-20 pb-12 md:pb-20 grid gap-10 lg:grid-cols-[1.05fr_1fr] items-center">
          <div className="reveal">
            <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-brand)] mb-4">
              / About Thompson Aid
            </div>
            <h1 className="font-display text-[clamp(2.4rem,5.5vw,5rem)] text-[color:var(--color-ink)] leading-[0.92]">
              Built in Kamloops.{" "}
              <span className="text-[color:var(--color-brand)]">Built for Kamloops.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-[color:var(--color-ink-soft)] leading-relaxed">
              We are a local, family-run moving and cleaning company based in
              Kamloops, BC. We started Thompson Aid because we got tired of
              hearing the same stories — late trucks, vague invoices, shoddy
              cleans. So we built the opposite.
            </p>
          </div>
          <div className="reveal aspect-[4/5] rounded-3xl overflow-hidden shadow-warm-lg ring-1 ring-black/5">
            <img
              src={IMG.team}
              alt="Thompson Aid team posing in front of their Kamloops moving truck"
              className="size-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="reveal">
            <SectionHeading
              eyebrow="Our story"
              title={
                <>
                  A small company with <br />
                  <span className="text-[color:var(--color-brand)]">high standards.</span>
                </>
              }
            />
          </div>
          <div className="reveal space-y-5 text-[color:var(--color-ink-soft)] leading-relaxed text-lg">
            <p>
              Thompson Aid was founded in Kamloops in 2023 to be a single
              trusted source for two services that almost always come together:
              moving and cleaning. The name comes from the Thompson River — the
              backbone of our city — and the idea that, on what is often one of
              the most stressful weeks of someone's year, our job is to be an
              aid.
            </p>
            <p>
              Today, we are a small local team serving hundreds of Kamloops
              households and businesses. We are licensed, insured, and proud
              to be the company our past customers refer their friends and
              family to.
            </p>
            <p>
              Every job is run by a named project lead. Every quote is in
              writing. Every floor is covered. And every invoice matches what
              we quoted you — no "unforeseen" fees.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-[color:var(--color-sand)] relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-70 pointer-events-none" />
        <div className="container relative">
          <div className="reveal">
            <SectionHeading
              eyebrow="What we stand for"
              title={
                <>
                  Four values we <span className="text-[color:var(--color-brand)]">refuse</span> to compromise on.
                </>
              }
            />
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Handshake,
                t: "Punctuality",
                d: "On time, every time. If we are running late, you get a call — not an excuse at the door.",
              },
              {
                icon: ShieldCheck,
                t: "Care",
                d: "Floors protected, furniture wrapped, corners padded. Your stuff goes in the way it came out.",
              },
              {
                icon: Sparkles,
                t: "Detail",
                d: "We finish the small things — baseboards, switch plates, under the bed, behind the fridge.",
              },
              {
                icon: Heart,
                t: "Honesty",
                d: "Written quotes, matching invoices. If we misquote something, we own it — not you.",
              },
            ].map((v, i) => (
              <div
                key={v.t}
                className="reveal rounded-2xl bg-white border border-border/60 p-6 shadow-warm"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="size-11 rounded-xl bg-[color:var(--color-brand)]/10 text-[color:var(--color-brand)] flex items-center justify-center">
                  <v.icon className="size-5" />
                </div>
                <h4 className="mt-4 font-display text-2xl text-[color:var(--color-ink)]">{v.t}</h4>
                <p className="mt-2 text-[color:var(--color-ink-soft)] leading-relaxed">
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
          <div className="reveal">
            <SectionHeading
              eyebrow="Join the route"
              title={
                <>
                  Hundreds of Kamloops neighbours later —{" "}
                  <span className="text-[color:var(--color-brand)]">still going.</span>
                </>
              }
              description="From a studio on the North Shore to a full-house move to Sun Peaks, we treat every job like it is the one someone is going to tell their friends about."
            />
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 px-5 py-3.5 bg-[color:var(--color-ink)] text-white font-semibold rounded-md hover:bg-[color:var(--color-brand)] transition-colors"
            >
              Get a free quote <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="reveal aspect-[4/3] rounded-3xl overflow-hidden shadow-warm-lg ring-1 ring-black/5">
            <img
              src={IMG.kamloopsLandscape}
              alt="Kamloops valley landscape with the Thompson River"
              className="size-full object-cover"
            />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
