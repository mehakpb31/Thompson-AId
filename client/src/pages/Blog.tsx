/*
 * DESIGN: "Kamloops Workshop" — Blog index.
 * Featured post + magazine grid layout for remaining posts.
 */
import { Link } from "wouter";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";
import { SectionHeading } from "@/components/SectionHeading";
import { BLOG_POSTS, IMG } from "@/lib/site";

export default function Blog() {
  useSeo({
    title: "Kamloops Moving & Cleaning Blog | Tips & Guides — Thompson Aid",
    description:
      "Local moving and cleaning advice from Kamloops' trusted team. Checklists, cost guides, winter moving tips, eco-cleaning, commercial relocations and more.",
    image: IMG.blogChecklist,
    path: "/blog",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Thompson Aid Blog",
      about: "Kamloops moving and cleaning advice",
      blogPost: BLOG_POSTS.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        datePublished: p.date,
        image: p.cover,
      })),
    },
  });

  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <section className="bg-[color:var(--color-cream)]">
        <div className="container pt-14 md:pt-20 pb-8 md:pb-12 max-w-3xl reveal">
          <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-brand)] mb-4">
            / Journal
          </div>
          <h1 className="font-display text-[clamp(2.4rem,5.5vw,5rem)] text-[color:var(--color-ink)] leading-[0.92]">
            Local guides for Kamloops{" "}
            <span className="text-[color:var(--color-brand)]">moves & cleans.</span>
          </h1>
          <p className="mt-5 text-lg text-[color:var(--color-ink-soft)] leading-relaxed">
            Practical advice from our crews — checklists, cost breakdowns,
            winter moving tricks, and the exact standards we hold ourselves to.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="pb-12">
        <div className="container">
          <Link
            href={`/blog/${featured.slug}`}
            className="reveal group grid gap-8 md:grid-cols-[1.1fr_1fr] items-center rounded-3xl bg-white border border-border/60 p-4 md:p-6 shadow-warm hover:shadow-warm-lg transition-all"
          >
            <div className="aspect-[4/3] md:aspect-[5/4] rounded-2xl overflow-hidden">
              <img
                src={featured.cover}
                alt={featured.title}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="px-2 md:px-4 py-4">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                <span className="text-[color:var(--color-brand)]">/ Featured</span>
                <span>·</span>
                <span>{featured.category}</span>
              </div>
              <h2 className="mt-3 font-display text-3xl md:text-5xl text-[color:var(--color-ink)] leading-[0.95]">
                {featured.title}
              </h2>
              <p className="mt-4 text-[color:var(--color-ink-soft)] leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                <span className="flex items-center gap-1.5"><Calendar className="size-3.5" /> {formatDate(featured.date)}</span>
                <span className="flex items-center gap-1.5"><Clock className="size-3.5" /> {featured.readMinutes} min read</span>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 font-semibold text-[color:var(--color-ink)] group-hover:text-[color:var(--color-brand)] transition-colors">
                Read the guide <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24">
        <div className="container">
          <div className="reveal">
            <SectionHeading
              eyebrow="All posts"
              title={
                <>
                  More from the <span className="text-[color:var(--color-brand)]">journal.</span>
                </>
              }
            />
          </div>
          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="reveal group rounded-2xl bg-white border border-border/60 overflow-hidden shadow-warm hover:shadow-warm-lg transition-all"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                    <span className="text-[color:var(--color-brand)]">{p.category}</span>
                    <span>·</span>
                    <span>{p.readMinutes} min</span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl leading-tight text-[color:var(--color-ink)] group-hover:text-[color:var(--color-brand)] transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-[color:var(--color-ink-soft)] leading-relaxed">
                    {p.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Calendar className="size-3.5" /> {formatDate(p.date)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
