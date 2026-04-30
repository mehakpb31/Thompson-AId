/*
 * DESIGN: "Kamloops Workshop" — Quote form.
 * Posts to Web3Forms (same access key as the original site).
 */
import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { toast } from "sonner";

const WEB3FORMS_KEY = "8e92b9da-2539-433d-a721-875b529ade47";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("access_key", WEB3FORMS_KEY);
    data.set("subject", "New Quote Request — Thompson Aid Website");
    data.set("from_name", "Thompson Aid Website");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setDone(true);
        form.reset();
        toast.success("Thanks! We'll get back to you within 24 hours.");
      } else {
        toast.error("Something went wrong. Please call us instead.");
      }
    } catch {
      toast.error("Network error — please call us at +1 778-522-1667.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-2xl bg-[color:var(--color-moss)]/10 border border-[color:var(--color-moss)]/30 p-8 text-center">
        <CheckCircle2 className="mx-auto size-12 text-[color:var(--color-moss)]" />
        <h3 className="font-display text-2xl mt-3">Request received</h3>
        <p className="mt-2 text-muted-foreground">
          Thank you — we will reach out within 24 hours with your custom quote.
          For urgent jobs, please call <a href="tel:+17785221667" className="text-[color:var(--color-brand)] underline">+1 778-522-1667</a>.
        </p>
        <button
          onClick={() => setDone(false)}
          className="mt-5 text-sm font-mono uppercase tracking-wider text-[color:var(--color-brand)] hover:underline"
        >
          Submit another request →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
      <div className={compact ? "grid grid-cols-1 gap-4" : "grid md:grid-cols-2 gap-4"}>
        <Field label="Full name" required>
          <input
            name="name"
            required
            autoComplete="name"
            className="w-full px-4 py-3 rounded-md bg-white border border-border focus:border-[color:var(--color-brand)] focus:ring-2 focus:ring-[color:var(--color-brand)]/20 outline-none transition"
          />
        </Field>
        <Field label="Phone" required>
          <input
            name="phone"
            required
            type="tel"
            autoComplete="tel"
            className="w-full px-4 py-3 rounded-md bg-white border border-border focus:border-[color:var(--color-brand)] focus:ring-2 focus:ring-[color:var(--color-brand)]/20 outline-none transition"
          />
        </Field>
      </div>
      <Field label="Email">
        <input
          name="email"
          type="email"
          autoComplete="email"
          className="w-full px-4 py-3 rounded-md bg-white border border-border focus:border-[color:var(--color-brand)] focus:ring-2 focus:ring-[color:var(--color-brand)]/20 outline-none transition"
        />
      </Field>
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Service needed">
          <select
            name="service"
            defaultValue=""
            className="w-full px-4 py-3 rounded-md bg-white border border-border focus:border-[color:var(--color-brand)] focus:ring-2 focus:ring-[color:var(--color-brand)]/20 outline-none transition"
          >
            <option value="">Select a service…</option>
            <optgroup label="Moving">
              <option>Local / Regional Move</option>
              <option>Long-Distance Move</option>
              <option>Packing Only</option>
              <option>Commercial / Office Move</option>
              <option>Furniture Assembly</option>
            </optgroup>
            <optgroup label="Cleaning">
              <option>Move-In / Move-Out Clean</option>
              <option>Deep Clean</option>
              <option>Post-Renovation Clean</option>
              <option>Recurring Cleaning</option>
              <option>Commercial Cleaning</option>
            </optgroup>
            <option>Bundle — Moving + Cleaning</option>
            <option>Other</option>
          </select>
        </Field>
        <Field label="Preferred date">
          <input
            name="date"
            type="date"
            className="w-full px-4 py-3 rounded-md bg-white border border-border focus:border-[color:var(--color-brand)] focus:ring-2 focus:ring-[color:var(--color-brand)]/20 outline-none transition"
          />
        </Field>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="From (address or area)">
          <input
            name="from"
            placeholder="e.g. Sahali, Kamloops"
            className="w-full px-4 py-3 rounded-md bg-white border border-border focus:border-[color:var(--color-brand)] focus:ring-2 focus:ring-[color:var(--color-brand)]/20 outline-none transition"
          />
        </Field>
        <Field label="To (address or area)">
          <input
            name="to"
            placeholder="e.g. Aberdeen, Kamloops"
            className="w-full px-4 py-3 rounded-md bg-white border border-border focus:border-[color:var(--color-brand)] focus:ring-2 focus:ring-[color:var(--color-brand)]/20 outline-none transition"
          />
        </Field>
      </div>
      <Field label="Details">
        <textarea
          name="details"
          rows={4}
          placeholder="Rooms, specialty items (piano, safe), parking notes, cleaning focus, etc."
          className="w-full px-4 py-3 rounded-md bg-white border border-border focus:border-[color:var(--color-brand)] focus:ring-2 focus:ring-[color:var(--color-brand)]/20 outline-none transition resize-y"
        />
      </Field>
      <button
        type="submit"
        disabled={submitting}
        className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-[color:var(--color-ink)] hover:bg-[color:var(--color-brand)] text-white font-semibold rounded-md transition-colors disabled:opacity-60"
      >
        {submitting ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Request My Free Quote
            <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>
      <p className="text-xs text-muted-foreground">
        By submitting, you agree to be contacted about your request. We never share your info.
      </p>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
        {label} {required && <span className="text-[color:var(--color-brand)]">*</span>}
      </span>
      {children}
    </label>
  );
}
