/*
 * DESIGN: "Kamloops Workshop" — Section heading primitive.
 * Pairs a mono eyebrow label with a display headline.
 */
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-[color:var(--color-brand)] mb-3">
          / {eyebrow}
        </div>
      )}
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[color:var(--color-ink)] leading-[0.95]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
