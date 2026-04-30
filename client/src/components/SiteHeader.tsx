/*
 * DESIGN: "Kamloops Workshop" — Header
 * Sticky nav with warm cream backdrop-blur, small-caps meta, brand
 * orange CTA, and hamburger drawer on mobile.
 */
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, Phone, X } from "lucide-react";
import { NAV, SITE, IMG } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(18,21,26,0.06)]"
          : "bg-background/60 backdrop-blur-sm"
      )}
    >
      {/* Top bar */}
      <div className="hidden md:block border-b border-border/60 bg-[color:var(--color-ink)] text-white/90">
        <div className="container flex items-center justify-between py-1.5 text-[11px] font-mono tracking-wider uppercase">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-[color:var(--color-brand)]" />
              Licensed & Insured
            </span>
            <span className="opacity-40">/</span>
            <span>Locally-operated in Kamloops, BC</span>
            <span className="opacity-40">/</span>
            <span>Est. {SITE.established}</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={SITE.phoneHref}
              className="hover:text-[color:var(--color-brand)] transition-colors"
            >
              {SITE.phone}
            </a>
            <span className="opacity-40">/</span>
            <span>{SITE.hours.weekdays}</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src={IMG.logo}
            alt="Thompson Aid"
            className="h-11 w-11 rounded-full object-contain bg-white shadow-warm"
          />
          <div className="leading-tight">
            <div className="font-display text-[19px] text-[color:var(--color-ink)] group-hover:text-[color:var(--color-brand)] transition-colors">
              THOMPSON AID
            </div>
            <div className="text-[10.5px] font-mono tracking-[0.2em] uppercase text-muted-foreground">
              To Your Destination
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => {
            const active =
              location === item.href ||
              (item.href !== "/" && location.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  active
                    ? "text-[color:var(--color-brand)]"
                    : "text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)]"
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-[color:var(--color-brand)] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            className="hidden xl:inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-brand)] transition-colors"
          >
            <Phone className="size-4" />
            {SITE.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[color:var(--color-brand)] hover:bg-[color:var(--color-brand-dark)] text-white text-sm font-semibold rounded-md shadow-warm transition-all hover:shadow-warm-lg active:translate-y-px"
          >
            Free Quote
            <span className="hidden lg:inline font-mono text-[10px] opacity-80">→</span>
          </Link>
        </div>

        <button
          className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300",
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container pb-5 flex flex-col gap-1 border-t border-border/70 pt-3">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-3 rounded-md hover:bg-secondary text-[color:var(--color-ink)] font-medium"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-2">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-secondary text-[color:var(--color-ink)] font-semibold rounded-md"
            >
              <Phone className="size-4" /> {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[color:var(--color-brand)] text-white font-semibold rounded-md"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
