/*
 * DESIGN: "Kamloops Workshop" — Footer
 * Deep ink background with brand orange accents. Multi-column layout
 * with quick links, service list, and contact block.
 */
import { Link } from "wouter";
import { Facebook, Instagram, Mail, MapPin, Phone, Star } from "lucide-react";
import { MOVING_SERVICES, CLEANING_SERVICES, SITE, IMG } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative mt-20 bg-[color:var(--color-ink)] text-white/85 overflow-hidden">
      <div className="absolute inset-0 grain opacity-50 pointer-events-none" />

      {/* Top CTA band */}
      <div className="border-b border-white/10">
        <div className="container py-10 md:py-14 grid md:grid-cols-[1.4fr_1fr] gap-6 items-center">
          <div>
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-[color:var(--color-brand)] mb-3">
              / Ready when you are
            </div>
            <h3 className="font-display text-3xl md:text-5xl text-white leading-[0.95]">
              Plan your Kamloops move <br className="hidden md:block" />
              or deep clean today.
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[color:var(--color-brand)] hover:bg-white hover:text-[color:var(--color-ink)] text-white font-semibold rounded-md transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-white/20 hover:border-white/60 text-white font-semibold rounded-md transition-colors"
            >
              <Phone className="size-4" /> {SITE.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="container py-12 md:py-16 grid gap-10 md:grid-cols-12">
        {/* Brand column */}
        <div className="md:col-span-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <img
              src={IMG.logo}
              alt="Thompson Aid"
              className="h-12 w-12 rounded-full bg-white object-contain"
            />
            <div>
              <div className="font-display text-xl text-white">THOMPSON AID</div>
              <div className="text-[10.5px] font-mono tracking-[0.2em] uppercase text-white/60">
                To Your Destination
              </div>
            </div>
          </Link>
          <p className="mt-4 text-sm text-white/70 max-w-sm leading-relaxed">
            Kamloops' trusted local team for professional moving and cleaning.
            Licensed, insured and ready to show up on time — every time.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-white/80">
            <div className="flex gap-0.5 text-[color:var(--color-brand)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-current" />
              ))}
            </div>
            4.9 avg · 87+ local reviews
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={SITE.socials.facebook}
              aria-label="Facebook"
              className="size-10 inline-flex items-center justify-center rounded-full border border-white/15 hover:bg-[color:var(--color-brand)] hover:border-[color:var(--color-brand)] transition-colors"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href={SITE.socials.instagram}
              aria-label="Instagram"
              className="size-10 inline-flex items-center justify-center rounded-full border border-white/15 hover:bg-[color:var(--color-brand)] hover:border-[color:var(--color-brand)] transition-colors"
            >
              <Instagram className="size-4" />
            </a>
          </div>
        </div>

        {/* Moving services */}
        <div className="md:col-span-2">
          <h5 className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/50 mb-4">
            / Moving
          </h5>
          <ul className="space-y-2 text-sm">
            {MOVING_SERVICES.slice(0, 6).map((s) => (
              <li key={s.code}>
                <Link
                  href="/services/moving"
                  className="text-white/75 hover:text-[color:var(--color-brand)] transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Cleaning services */}
        <div className="md:col-span-2">
          <h5 className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/50 mb-4">
            / Cleaning
          </h5>
          <ul className="space-y-2 text-sm">
            {CLEANING_SERVICES.slice(0, 6).map((s) => (
              <li key={s.code}>
                <Link
                  href="/services/cleaning"
                  className="text-white/75 hover:text-[color:var(--color-brand)] transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="md:col-span-2">
          <h5 className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/50 mb-4">
            / Company
          </h5>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="text-white/75 hover:text-[color:var(--color-brand)] transition-colors">About</Link></li>
            <li><Link href="/service-areas" className="text-white/75 hover:text-[color:var(--color-brand)] transition-colors">Service Areas</Link></li>
            <li><Link href="/blog" className="text-white/75 hover:text-[color:var(--color-brand)] transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="text-white/75 hover:text-[color:var(--color-brand)] transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-2">
          <h5 className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/50 mb-4">
            / Contact
          </h5>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2 text-white/80">
              <MapPin className="size-4 mt-0.5 text-[color:var(--color-brand)] shrink-0" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-[color:var(--color-brand)] shrink-0" />
              <a href={SITE.phoneHref} className="text-white/80 hover:text-white transition-colors">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-center gap-2 break-all">
              <Mail className="size-4 text-[color:var(--color-brand)] shrink-0" />
              <a href={SITE.emailHref} className="text-white/80 hover:text-white transition-colors">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <p>
            © {new Date().getFullYear()} Thompson Aid. All rights reserved.
            Proudly serving Kamloops and the Thompson region.
          </p>
          <p className="font-mono tracking-wider uppercase">
            Moving · Cleaning · Kamloops, BC
          </p>
        </div>
      </div>
    </footer>
  );
}
