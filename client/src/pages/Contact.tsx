/*
 * DESIGN: "Kamloops Workshop" — Contact page.
 * Split layout: rich contact info + quote form card.
 */
import { Clock, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";
import { QuoteForm } from "@/components/QuoteForm";
import { SITE } from "@/lib/site";

export default function Contact() {
  useSeo({
    title: "Contact Thompson Aid | Free Quote — Kamloops Movers & Cleaners",
    description:
      "Get in touch with Thompson Aid for a free moving or cleaning quote in Kamloops, BC. Call +1 778-522-1667 or send us a note online.",
    path: "/contact",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      mainEntity: {
        "@type": "MovingCompany",
        name: "Thompson Aid",
        telephone: SITE.phone,
        email: SITE.email,
      },
    },
  });

  return (
    <>
      <section className="bg-[color:var(--color-cream)]">
        <div className="container pt-14 md:pt-20 pb-8 md:pb-10 max-w-3xl reveal">
          <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-brand)] mb-4">
            / Get in touch
          </div>
          <h1 className="font-display text-[clamp(2.4rem,5.5vw,5rem)] text-[color:var(--color-ink)] leading-[0.92]">
            Let's plan your move or clean.{" "}
            <span className="text-[color:var(--color-brand)]">Free quote.</span>
          </h1>
          <p className="mt-5 text-lg text-[color:var(--color-ink-soft)] leading-relaxed">
            Send a quick note below and we will reach out within 24 hours with
            a written, itemised estimate. Prefer to talk? Call us any weekday.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="reveal space-y-6">
            <div className="rounded-2xl bg-white border border-border/60 p-6 shadow-warm">
              <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-brand)] mb-4">
                / Reach us
              </div>
              <ul className="space-y-5">
                <li className="flex gap-3">
                  <div className="size-10 rounded-full bg-[color:var(--color-brand)]/10 text-[color:var(--color-brand)] flex items-center justify-center shrink-0">
                    <Phone className="size-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Phone</div>
                    <a href={SITE.phoneHref} className="font-display text-xl text-[color:var(--color-ink)] hover:text-[color:var(--color-brand)] transition-colors">
                      {SITE.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="size-10 rounded-full bg-[color:var(--color-brand)]/10 text-[color:var(--color-brand)] flex items-center justify-center shrink-0">
                    <Mail className="size-4" />
                  </div>
                  <div className="break-all">
                    <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Email</div>
                    <a href={SITE.emailHref} className="font-display text-xl text-[color:var(--color-ink)] hover:text-[color:var(--color-brand)] transition-colors">
                      {SITE.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="size-10 rounded-full bg-[color:var(--color-brand)]/10 text-[color:var(--color-brand)] flex items-center justify-center shrink-0">
                    <MapPin className="size-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Address</div>
                    <p className="text-[color:var(--color-ink)]">{SITE.address}</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="size-10 rounded-full bg-[color:var(--color-brand)]/10 text-[color:var(--color-brand)] flex items-center justify-center shrink-0">
                    <Clock className="size-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Hours</div>
                    <p className="text-[color:var(--color-ink)]">
                      {SITE.hours.weekdays}
                      <br />
                      {SITE.hours.weekends}
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="size-10 rounded-full bg-[color:var(--color-brand)]/10 text-[color:var(--color-brand)] flex items-center justify-center shrink-0">
                    <Facebook className="size-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Social</div>
                    <a
                      href={SITE.socials.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[color:var(--color-ink)] hover:text-[color:var(--color-brand)] transition-colors"
                    >
                      facebook.com/thompsonaid
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border/60 shadow-warm">
              <iframe
                title="Thompson Aid — Kamloops location map"
                src="https://www.google.com/maps?q=Kamloops%2C%20BC&output=embed"
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="reveal rounded-3xl bg-white border border-border/60 p-6 md:p-8 shadow-warm-lg">
            <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-brand)] mb-2">
              / Free quote form
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-[color:var(--color-ink)] leading-tight">
              Tell us about your move or clean
            </h2>
            <p className="mt-2 text-[color:var(--color-ink-soft)]">
              Takes about a minute. We'll reply within 24 hours.
            </p>
            <div className="mt-6">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
