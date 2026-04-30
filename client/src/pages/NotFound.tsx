/* DESIGN: "Kamloops Workshop" — 404 page. */
import { Link } from "wouter";
import { Home, Truck } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center py-20">
      <div className="container max-w-xl text-center">
        <Truck className="mx-auto size-12 text-[color:var(--color-brand)] floaty" />
        <div className="mt-4 font-mono text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
          / Error 404
        </div>
        <h1 className="mt-3 font-display text-5xl md:text-6xl text-[color:var(--color-ink)] leading-[0.95]">
          Page took a wrong{" "}
          <span className="text-[color:var(--color-brand)]">turn.</span>
        </h1>
        <p className="mt-4 text-[color:var(--color-ink-soft)]">
          The page you're looking for doesn't exist — or has been moved. Let's
          get you back to somewhere useful.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[color:var(--color-brand)] hover:bg-[color:var(--color-brand-dark)] text-white font-semibold rounded-md shadow-warm"
          >
            <Home className="size-4" /> Back home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-border text-[color:var(--color-ink)] font-semibold rounded-md hover:border-[color:var(--color-ink)]"
          >
            Get a free quote
          </Link>
        </div>
      </div>
    </section>
  );
}
