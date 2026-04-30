/*
 * DESIGN: "Kamloops Workshop" — Mid-page CTA band.
 * Dark ink band with orange accent, used as a conversion stopper
 * between content sections.
 */
import { Link } from "wouter";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function CtaBand({
  eyebrow = "Bundle & save",
  title = "Move + Clean in one coordinated day.",
  body = "Book your move and your move-in or move-out clean together — one team, one quote, zero stress.",
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  body?: React.ReactNode;
}) {
  return (
    <section className="relative bg-[color:var(--color-ink)] text-white overflow-hidden">
      <div className="absolute inset-0 grain opacity-60 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-[520px] h-[520px] rounded-full bg-[color:var(--color-brand)]/10 blur-3xl" />
      <div className="container relative py-16 md:py-20 grid gap-8 md:grid-cols-[1.3fr_1fr] items-center">
        <div className="reveal">
          <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-brand)] mb-3">
            / {eyebrow}
          </div>
          <h3 className="font-display text-4xl md:text-5xl leading-[0.95]">
            {title}
          </h3>
          <p className="mt-4 max-w-xl text-white/75 leading-relaxed">
            {body}
          </p>
        </div>
        <div className="reveal flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 md:justify-end">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[color:var(--color-brand)] hover:bg-white hover:text-[color:var(--color-ink)] text-white font-semibold rounded-md transition-colors"
          >
            Get My Bundle Quote →
          </Link>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-white/20 hover:border-white/80 text-white font-semibold rounded-md transition-colors"
          >
            <Phone className="size-4" /> {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
