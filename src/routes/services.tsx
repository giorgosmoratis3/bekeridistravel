import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/page-shell";
import { FleetDialog } from "@/components/fleet-dialog";
import { useFleet, type FleetItem } from "@/data/fleet";
import { useT } from "@/lib/i18n";
import servicesBanner from "@/assets/services-banner.jpg";
import serviceBus from "@/assets/service-bus.jpg";
import serviceExcursions from "@/assets/service-excursions.jpg";
import serviceTrips from "@/assets/service-trips.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Υπηρεσίες — Bekeridis Travel" },
      { name: "description", content: "Οι υπηρεσίες μας: ενοικιάσεις λεωφορείων, οργανωμένες εκδρομές, πολυήμερα ταξίδια και προγράμματα για συλλόγους και σχολεία." },
      { property: "og:title", content: "Υπηρεσίες — Bekeridis Travel" },
      { property: "og:description", content: "Λεωφορεία, εκδρομές, ταξίδια — όλα από έναν αξιόπιστο συνεργάτη." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const t = useT();
  const FLEET = useFleet();
  const [activeFleet, setActiveFleet] = useState<FleetItem | null>(null);

  const SERVICES = [
    { img: serviceBus, title: t("Ενοικιάσεις Πούλμαν", "Coach Rentals"), desc: t("Διαθέτουμε σύγχρονο και πλήρως αδειοδοτημένο στόλο για κάθε ανάγκη μετακίνησης. Σχολικές εκδρομές, εταιρικά event, μεταφορές αθλητικών συλλόγων και ιδιωτικά γκρουπ. Άνεση, ασφάλεια και επαγγελματίες οδηγοί σε κάθε διαδρομή.", "We operate a modern, fully licensed fleet for every transport need. School trips, corporate events, sports club transfers and private groups. Comfort, safety and professional drivers on every route.") },
    { img: serviceExcursions, title: t("Οργανωμένες Εκδρομές", "Organized Excursions"), desc: t("Ημερήσιες και πολυήμερες εκδρομές σε επιλεγμένους προορισμούς της Ελλάδας. Μοναστήρια, ιστορικοί τόποι, παραδοσιακά χωριά, ορεινοί προορισμοί και θερμές πηγές. Πλήρες πρόγραμμα με ξεναγήσεις και διαμονή.", "Day and multi-day excursions to selected destinations in Greece. Monasteries, historic sites, traditional villages, mountain destinations and hot springs. Full program with guided tours and accommodation.") },
    { img: serviceTrips, title: t("Γραφείο Γενικού Τουρισμού", "General Tourism Office"), desc: t("Από τα ελληνικά νησιά μέχρι τα Βαλκάνια και την υπόλοιπη Ευρώπη — σχεδιάζουμε ταξίδια αναψυχής με προσοχή σε κάθε λεπτομέρεια. Ξενοδοχεία, ξεναγήσεις και ξεκούραστη διαμονή.", "From the Greek islands to the Balkans and the rest of Europe — we design leisure trips with attention to every detail. Hotels, guided tours and relaxing accommodation.") },
  ];

  const renderCard = (f: FleetItem, i: number) => (
    <button key={f.seats} type="button" onClick={() => setActiveFleet(f)} className="reveal group fleet-card text-left flex flex-col overflow-hidden" style={{ transitionDelay: `${i * 120}ms` }}>
      <div className="relative overflow-hidden bg-[hsl(var(--muted))]">
        <img src={f.img} alt={`${f.type} ${f.seats} ${t("θέσεων", "seats")}`} width={1024} height={640} loading="lazy" className="w-full h-64 md:h-80 object-contain object-center p-4 transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="p-6 md:p-7 flex flex-col flex-1">
        <div className="flex items-baseline justify-between mb-3">
          <span className="inline-flex items-center px-2.5 py-1 border border-ink/15 bg-white/60 backdrop-blur font-display text-[10px] tracking-[0.25em] text-ink">{f.type}</span>
          <div className="flex items-baseline gap-1">
            <span className="font-display text-4xl md:text-5xl font-bold text-ink leading-none">{f.seats}</span>
            <span className="font-display text-[10px] tracking-[0.25em] text-muted-foreground">{t("ΘΕΣΕΙΣ", "SEATS")}</span>
          </div>
        </div>
        <div className="h-px w-full bg-ink/10 mb-4" />
        <p className="text-sm text-ink/75 leading-relaxed mb-5">{f.desc}</p>
        <div className="mt-auto pt-4 border-t border-ink/10 flex items-center justify-between">
          <span className="font-display text-[10px] tracking-[0.3em] text-muted-foreground">{t("ΛΕΠΤΟΜΕΡΕΙΕΣ", "DETAILS")}</span>
          <span className="font-display text-[10px] tracking-[0.3em] text-brand transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </button>
  );

  return (
    <PageShell>
      <section className="relative min-h[45vh] md:min-h-[55vh] flex items-center justify-center overflow-hidden">
        <img src={servicesBanner} alt="" aria-hidden="true" loading="eager" fetchPriority="high" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/15" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-background/60 to-background" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/40 to-transparent" />
        <div className="relative z-10 w-full text-center min-h-[45vh] md:min-h-[55vh] flex flex-col items-center justify-center">
          <p className="font-display text-xs tracking-[0.4em] text-white/85 mb-4 animate-[fade-in-up_0.8s_ease-out_both]">
            {t("ΤΙ ΠΡΟΣΦΕΡΟΥΜΕ", "WHAT WE OFFER")}
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white tracking-wide animate-[fade-in-up_0.9s_cubic-bezier(0.22,1,0.36,1)_0.2s_both]">
            {t("ΥΠΗΡΕΣΙΕΣ", "SERVICES")}<span className="text-brand">.</span>
          </h1>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="mx-auto max-w-6xl space-y-28">
          {SERVICES.map((s, i) => (
            <article key={s.title} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
              <div className={i % 2 === 0 ? "reveal-left" : "reveal-right md:[direction:ltr]"}>
                <img src={s.img} alt={s.title} width={1024} height={768} loading="lazy" className="w-full h-auto shadow-soft hover:scale-[1.02] transition-transform duration-700" />
              </div>
              <div className={i % 2 === 0 ? "reveal-right" : "reveal-left md:[direction:ltr]"}>
                <div className="font-display text-xs tracking-[0.3em] text-brand mb-3">0{i + 1}</div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">{s.title}</h2>
                <p className="mt-6 text-ink/75 leading-relaxed text-base md:text-lg">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="fleet" className="scroll-mt-24 py-20 md:py-28 px-5 sm:px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16 reveal">
            <p className="font-display text-xs tracking-[0.4em] text-brand mb-3">{t("ΣΤΟΛΟΣ", "FLEET")}</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-ink tracking-wide">{t("ΤΑ ΟΧΗΜΑΤΑ ΜΑΣ", "OUR VEHICLES")}</h2>
            <div className="mx-auto mt-4 h-[2px] w-14 bg-brand" />
            <p className="mt-5 text-base md:text-lg text-ink/75 max-w-2xl mx-auto">
              {t("Σύγχρονα, ασφαλή και άνετα πούλμαν σε διαφορετικές χωρητικότητες. Πατήστε σε ένα όχημα για περισσότερες λεπτομέρειες.", "Modern, safe and comfortable coaches in various capacities. Tap a vehicle for more details.")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {FLEET.slice(0, 3).map((f, i) => renderCard(f, i))}
          </div>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-6 mt-5 md:mt-6 lg:max-w-[66.6667%] lg:mx-auto">
            {FLEET.slice(3).map((f, i) => renderCard(f, i + 3))}
          </div>
        </div>
      </section>

      <FleetDialog fleet={activeFleet} onClose={() => setActiveFleet(null)} />
    </PageShell>
  );
}
