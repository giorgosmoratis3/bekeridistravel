import { ReactNode } from "react";
import { PageShell } from "@/components/page-shell";

type Section = {
  heading: string;
  body: ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  sections: Section[];
}) {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 px-5 sm:px-6 bg-ink text-white overflow-hidden">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display text-xs tracking-[0.4em] text-brand mb-4 animate-[fade-in-up_0.7s_ease-out_both]">
            {eyebrow}
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-wide animate-[fade-in-up_0.9s_cubic-bezier(0.22,1,0.36,1)_0.15s_both]">
            {title}
            <span className="text-brand">.</span>
          </h1>
          <div className="mx-auto mt-5 h-[2px] w-14 bg-brand" />
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 md:py-24 px-5 sm:px-6">
        <div className="mx-auto max-w-3xl">
          {intro && (
            <div className="text-ink/75 text-base md:text-lg leading-relaxed mb-12 reveal">
              {intro}
            </div>
          )}

          <div className="space-y-12 md:space-y-14">
            {sections.map((s, i) => (
              <article
                key={s.heading}
                className="reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="font-display text-xs tracking-[0.3em] text-brand mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-ink tracking-wide">
                  {s.heading}
                </h2>
                <div className="mt-3 h-[2px] w-12 bg-brand" />
                <div className="mt-6 text-ink/75 leading-relaxed text-base md:text-lg space-y-4">
                  {s.body}
                </div>
              </article>
            ))}
          </div>

          <p className="mt-16 text-sm text-muted-foreground border-t border-ink/10 pt-6">
            Τελευταία ενημέρωση: {new Date().toLocaleDateString("el-GR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}. Για διευκρινίσεις επικοινωνήστε μαζί μας στο{" "}
            <a
              href="mailto:bekeridistravel@yahoo.gr"
              className="text-brand hover:underline"
            >
              bekeridistravel@yahoo.gr
            </a>
            .
          </p>
        </div>
      </section>
    </PageShell>
  );
}
