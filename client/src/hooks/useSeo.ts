/**
 * DESIGN: "Kamloops Workshop" — Per-page SEO management.
 * Updates document title, description, canonical, og:*, and optional
 * structured-data JSON-LD script.
 */
import { useEffect } from "react";

export interface SeoOptions {
  title: string;
  description?: string;
  image?: string;
  path?: string; // e.g. "/blog/..."
  type?: "website" | "article";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  if (!content) return;
  let el = document.head.querySelector(
    `meta[${attr}="${key}"]`
  ) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector(
    'link[rel="canonical"]'
  ) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSeo(opts: SeoOptions) {
  useEffect(() => {
    const {
      title,
      description = "",
      image = "",
      path = window.location.pathname,
      type = "website",
      jsonLd,
    } = opts;

    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    if (image) setMeta("property", "og:image", image);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    if (image) setMeta("name", "twitter:image", image);

    const canonical = `${window.location.origin}${path}`;
    setCanonical(canonical);
    setMeta("property", "og:url", canonical);

    // Page-specific JSON-LD
    const existing = document.getElementById("page-jsonld");
    if (existing) existing.remove();
    if (jsonLd) {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.id = "page-jsonld";
      s.text = JSON.stringify(jsonLd);
      document.head.appendChild(s);
    }

    return () => {
      const s = document.getElementById("page-jsonld");
      if (s) s.remove();
    };
  }, [opts]);
}
