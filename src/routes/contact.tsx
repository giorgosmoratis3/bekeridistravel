import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { OfficesSection } from "@/components/offices-section";
import { ContactForm } from "@/components/contact-form";
import contactBanner from "@/assets/contact-banner.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Επικοινωνία — Bekeridis Travel | Λαμία & Δομοκός" },
      {
        name: "description",
        content:
          "Επικοινωνήστε με την Bekeridis Travel σε Λαμία & Δομοκό. Δομοκός: 22320 22255, Λαμία: 22310 69197, Κινητό: 6977 651 811.",
      },
      { property: "og:title", content: "Επικοινωνία — Bekeridis Travel" },
      {
        property: "og:description",
        content:
          "Βρείτε μας σε Λαμία & Δομοκό ή επικοινωνήστε μαζί μας τηλεφωνικά.",
      },
      { property: "og:url", content: "https://bekeridistravel.lovable.app/contact" },
    ],
    links: [
      { rel: "canonical", href: "https://bekeridistravel.lovable.app/contact" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <section className="relative min-h-[45vh] md:min-h-[55vh] flex items-center justify-center overflow-hidden">
        <img
          src={contactBanner}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/15" />
        <div className="pointer-events-none absolute inset-x-0 -bottom-px h-64 bg-gradient-to-b from-transparent via-white/75 to-white" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/40 to-transparent" />
        <div className="relative z-10 w-full text-center">
          <p className="font-display text-xs tracking-[0.4em] text-white/85 mb-4 animate-[fade-in-up_0.8s_ease-out_both]">
            ΕΙΜΑΣΤΕ ΕΔΩ ΓΙΑ ΕΣΑΣ
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white tracking-wide animate-[fade-in-up_0.9s_cubic-bezier(0.22,1,0.36,1)_0.2s_both]">
            ΕΠΙΚΟΙΝΩΝΙΑ<span className="text-brand">.</span>
          </h1>
        </div>
      </section>

      <OfficesSection eyebrow="ΤΑ ΓΡΑΦΕΙΑ ΜΑΣ" title="ΕΠΙΚΟΙΝΩΝΙΑ" />
      <ContactForm />
    </PageShell>
  );
}
