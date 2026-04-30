/*
 * DESIGN: "Kamloops Workshop" — Blog post detail page.
 * Editorial long-form article layout with cover image, meta strip,
 * markdown rendered content and a related-posts footer.
 */
import { Link, useRoute } from "wouter";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { Streamdown } from "streamdown";
import { useSeo } from "@/hooks/useSeo";
import NotFound from "./NotFound";
import { BLOG_POSTS, IMG } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";

export default function BlogPost() {
  const [, params] = useRoute<{ slug: string }>("/blog/:slug");
  const slug = params?.slug ?? "";
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  // Always call hooks unconditionally — give safe defaults when missing.
  useSeo({
    title: post
      ? `${post.title} | Thompson Aid Kamloops Blog`
      : "Post not found | Thompson Aid",
    description: post?.excerpt ?? "",
    image: post?.cover ?? IMG.blogChecklist,
    path: `/blog/${slug}`,
    type: "article",
    jsonLd: post
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          datePublished: post.date,
          author: { "@type": "Organization", name: "Thompson Aid" },
          publisher: {
            "@type": "Organization",
            name: "Thompson Aid",
            logo: {
              "@type": "ImageObject",
              url: IMG.logo,
            },
          },
          image: post.cover,
          keywords: post.tags.join(", "),
          articleSection: post.category,
        }
      : undefined,
  });

  if (!post) return <NotFound />;

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="pt-10 md:pt-14">
        <div className="container max-w-3xl">
          <Link
            href="/blog"
            className="reveal inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-muted-foreground hover:text-[color:var(--color-brand)] transition-colors"
          >
            <ArrowLeft className="size-3.5" /> All posts
          </Link>
          <div className="reveal mt-6 flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-muted-foreground">
            <span className="text-[color:var(--color-brand)]">{post.category}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Calendar className="size-3.5" /> {formatDate(post.date)}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock className="size-3.5" /> {post.readMinutes} min read</span>
          </div>
          <h1 className="reveal font-display text-[clamp(2.2rem,5vw,4.4rem)] text-[color:var(--color-ink)] mt-4 leading-[0.95]">
            {post.title}
          </h1>
          <p className="reveal mt-5 text-lg text-[color:var(--color-ink-soft)] leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        <div className="container max-w-4xl mt-10 md:mt-14 reveal">
          <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-warm-lg ring-1 ring-black/5">
            <img src={post.cover} alt={post.title} className="size-full object-cover" />
          </div>
        </div>

        <div className="container max-w-3xl mt-12 md:mt-16">
          <div
            className="reveal prose prose-lg max-w-none
              prose-headings:font-display prose-headings:text-[color:var(--color-ink)] prose-headings:leading-tight
              prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-[color:var(--color-ink-soft)] prose-p:leading-relaxed
              prose-strong:text-[color:var(--color-ink)]
              prose-a:text-[color:var(--color-brand)] prose-a:no-underline hover:prose-a:underline
              prose-ul:my-4 prose-ol:my-4 prose-li:my-1
              prose-hr:my-10"
          >
            <Streamdown>{post.body}</Streamdown>
          </div>

          <div className="reveal mt-12 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-full bg-[color:var(--color-sand)] text-xs font-mono uppercase tracking-wider text-[color:var(--color-ink-soft)]"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>
      </article>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="reveal flex items-end justify-between mb-8">
            <div>
              <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-brand)] mb-2">
                / Keep reading
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-[color:var(--color-ink)]">
                Related guides
              </h3>
            </div>
            <Link
              href="/blog"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-ink)] hover:text-[color:var(--color-brand)] transition-colors"
            >
              All posts <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((p, i) => (
              <Link
                href={`/blog/${p.slug}`}
                key={p.slug}
                className="reveal group rounded-2xl bg-white border border-border/60 overflow-hidden shadow-warm hover:shadow-warm-lg transition-all"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[color:var(--color-brand)]">
                    {p.category}
                  </div>
                  <h4 className="mt-1.5 font-display text-xl leading-tight text-[color:var(--color-ink)] group-hover:text-[color:var(--color-brand)] transition-colors">
                    {p.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
