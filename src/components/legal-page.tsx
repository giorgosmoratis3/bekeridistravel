import { ReactNode } from "react";
import { PageShell } from "@/components/page-shell";
import legalBanner from "@/assets/legal-banner.jpg";
import { useT, useLang } from "@/lib/i18n";

type Section = { heading: string; body: ReactNode };

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
  const t = useT();
  const { lang } = useLang();
  return (
    <PageShell>
      <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center justify-center overflow-hidden">
        <img src={legalBanner} alt="" aria-hidden="true" loading="eager" fetchPriority="high" decoding="async" width={1920} height={1088} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/35" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-background/60 to-background" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/40 to-transparent" />
        <div className="relative z-10 w-full text-center px-5 sm:px-6 pt-10">
          <p className="font-display text-xs tracking-[0.4em] text-white/85 mb-4 animate-[fade-in-up_0.7s_ease-out_both]">{eyebrow}</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white tracking-wide animate-[fade-in-up_0.9s_cubic-bezier(0.22,1,0.36,1)_0.15s_both]">
            {title}<span className="text-brand">.</span>
          </h1>
          <div className="mx-auto mt-5 h-[2px] w-14 bg-brand" />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24 px-5 sm:px-6">
        <div className="mx-auto max-w-3xl">
          {intro && <div className="text-ink/75 text-base md:text-lg leading-relaxed mb-12 reveal">{intro}</div>}

          <div className="space-y-12 md:space-y-14">
            {sections.map((s, i) => (
              <article key={s.heading} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="font-display text-xs tracking-[0.3em] text-brand mb-3">{String(i + 1).padStart(2, "0")}</div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-ink tracking-wide">{s.heading}</h2>
                <div className="mt-3 h-[2px] w-12 bg-brand" />
                <div className="mt-6 text-ink/75 leading-relaxed text-base md:text-lg space-y-4">{s.body}</div>
              </article>
            ))}
          </div>

          <p className="mt-16 text-sm text-muted-foreground border-t border-ink/10 pt-6">
            {t("Τελευταία ενημέρωση:", "Last updated:")}{" "}
            {new Date().toLocaleDateString(lang === "en" ? "en-GB" : "el-GR", {
              day: "2-digit", month: "long", year: "numeric",
            })}. {t("Για διευκρινίσεις επικοινωνήστε μαζί μας στο", "For clarifications contact us at")}{" "}
            <a href="mailto:bekeridistravel@yahoo.gr" className="text-brand hover:underline">bekeridistravel@yahoo.gr</a>.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
