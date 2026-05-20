import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Users,
  Snowflake,
  Wifi,
  ShieldCheck,
  Briefcase,
  Phone,
  Gauge,
  Sparkles,
  Music2,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { PageShell } from "@/components/page-shell";
import servicesBanner from "@/assets/services-banner.jpg";
import serviceBus from "@/assets/service-bus.jpg";
import serviceExcursions from "@/assets/service-excursions.jpg";
import serviceTrips from "@/assets/service-trips.jpg";
import fleetBus52 from "@/assets/fleet-bus-52.jpg";
import fleetBus35 from "@/assets/fleet-bus-35.jpg";
import fleetBus30 from "@/assets/fleet-bus-30.jpg";
import fleetBus26 from "@/assets/fleet-bus-26.jpg";

const PHONE_TEL = "+306977651811";
const PHONE_LABEL = "6977 651 811";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Υπηρεσίες — Bekeridis Travel" },
      {
        name: "description",
        content:
          "Οι υπηρεσίες μας: ενοικιάσεις λεωφορείων, οργανωμένες εκδρομές, πολυήμερα ταξίδια και προγράμματα για συλλόγους και σχολεία.",
      },
      { property: "og:title", content: "Υπηρεσίες — Bekeridis Travel" },
      {
        property: "og:description",
        content: "Λεωφορεία, εκδρομές, ταξίδια — όλα από έναν αξιόπιστο συνεργάτη.",
      },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    img: serviceBus,
    title: "Ενοικιάσεις Πούλμαν",
    desc: "Διαθέτουμε σύγχρονο και πλήρως αδειοδοτημένο στόλο για κάθε ανάγκη μετακίνησης. Σχολικές εκδρομές, εταιρικά event, μεταφορές αθλητικών συλλόγων και ιδιωτικά γκρουπ. Άνεση, ασφάλεια και επαγγελματίες οδηγοί σε κάθε διαδρομή.",
  },
  {
    img: serviceExcursions,
    title: "Οργανωμένες Εκδρομές",
    desc: "Ημερήσιες και πολυήμερες εκδρομές σε επιλεγμένους προορισμούς της Ελλάδας. Μοναστήρια, ιστορικοί τόποι, παραδοσιακά χωριά, ορεινοί προορισμοί και θερμές πηγές. Πλήρες πρόγραμμα με ξεναγήσεις και διαμονή.",
  },
  {
    img: serviceTrips,
    title: "Γραφείο Γενικού Τουρισμού",
    desc: "Από τα ελληνικά νησιά μέχρι τα Βαλκάνια και την υπόλοιπη Ευρώπη — σχεδιάζουμε ταξίδια αναψυχής με προσοχή σε κάθε λεπτομέρεια. Ξενοδοχεία, ξεναγήσεις και ξεκούραστη διαμονή.",
  },
];

type FleetItem = {
  img: string;
  type: string;
  seats: string;
  desc: string;
  features: { icon: typeof Users; label: string }[];
  details: string;
  ideal: string[];
  specs: { icon: typeof Users; label: string; value: string }[];
};

const FLEET: FleetItem[] = [
  {
    img: fleetBus52,
    type: "BUS",
    seats: "52",
    desc: "Λεωφορείο μεγάλης χωρητικότητας — ιδανικό για σχολικές εκδρομές, συλλόγους και μεγάλα γκρουπ.",
    features: [
      { icon: Users, label: "52 θέσεις" },
      { icon: Snowflake, label: "Κλιματισμός" },
      { icon: Wifi, label: "Wi-Fi" },
      { icon: Briefcase, label: "Μεγάλος χώρος αποσκευών" },
      { icon: ShieldCheck, label: "Ζώνες ασφαλείας" },
    ],
    details:
      "Πολυτελές πούλμαν 52 θέσεων με ευρύχωρες, ανακλινόμενες θέσεις, διπλό κλιματισμό και πανοραμικά τζάμια. Ιδανικό για μεγάλα γκρουπ που ταξιδεύουν με άνεση σε μακρινούς προορισμούς.",
    ideal: [
      "Σχολικές εκδρομές",
      "Πολυήμερα ταξίδια",
      "Συλλογικές εκδηλώσεις",
      "Αθλητικές αποστολές",
    ],
    specs: [
      { icon: Users, label: "Θέσεις", value: "52" },
      { icon: Briefcase, label: "Αποσκευές", value: "Μεγάλος χώρος" },
      { icon: Gauge, label: "Κατηγορία", value: "Premium Coach" },
      { icon: Music2, label: "Ψυχαγωγία", value: "Ηχοσύστημα · Μικρόφωνο" },
    ],
  },
  {
    img: fleetBus35,
    type: "BUS",
    seats: "35",
    desc: "Λεωφορείο μεσαίας χωρητικότητας — ευέλικτη επιλογή για εταιρικά event, αθλητικούς συλλόγους και ημερήσιες εκδρομές.",
    features: [
      { icon: Users, label: "35 θέσεις" },
      { icon: Snowflake, label: "Κλιματισμός" },
      { icon: Wifi, label: "Wi-Fi" },
      { icon: Briefcase, label: "Άνετος χώρος αποσκευών" },
      { icon: ShieldCheck, label: "Ζώνες ασφαλείας" },
    ],
    details:
      "Σύγχρονο λεωφορείο 35 θέσεων με αναβαθμισμένη άνεση και ευελιξία. Συνδυάζει χωρητικότητα και ευκολία στην οδήγηση, ιδανικό για μεσαία γκρουπ και ημερήσιες αποδράσεις.",
    ideal: [
      "Εταιρικά event",
      "Ημερήσιες εκδρομές",
      "Αθλητικούς συλλόγους",
      "Ιδιωτικές εκδηλώσεις",
    ],
    specs: [
      { icon: Users, label: "Θέσεις", value: "35" },
      { icon: Briefcase, label: "Αποσκευές", value: "Άνετος χώρος" },
      { icon: Gauge, label: "Κατηγορία", value: "Comfort Coach" },
      { icon: Sparkles, label: "Εξοπλισμός", value: "Wi-Fi · Κλιματισμός" },
    ],
  },
  {
    img: fleetBus26,
    type: "MINI BUS",
    seats: "26",
    desc: "Μίνι λεωφορείο για μικρότερα γκρουπ — ευέλικτο σε στενούς δρόμους και ορεινούς προορισμούς.",
    features: [
      { icon: Users, label: "26 θέσεις" },
      { icon: Snowflake, label: "Κλιματισμός" },
      { icon: Briefcase, label: "Πρακτικός χώρος αποσκευών" },
      { icon: ShieldCheck, label: "Ζώνες ασφαλείας" },
    ],
    details:
      "Ευέλικτο μίνι λεωφορείο 26 θέσεων που φτάνει εκεί που τα μεγάλα δεν μπορούν. Ιδανικό για ορεινές διαδρομές, στενά δρομάκια χωριών και μικρότερες παρέες που θέλουν προσωπική εξυπηρέτηση.",
    ideal: [
      "Ορεινούς προορισμούς",
      "Παραδοσιακά χωριά",
      "Μικρές παρέες",
      "VIP μετακινήσεις",
    ],
    specs: [
      { icon: Users, label: "Θέσεις", value: "26" },
      { icon: Briefcase, label: "Αποσκευές", value: "Πρακτικός χώρος" },
      { icon: Gauge, label: "Κατηγορία", value: "Mini Coach" },
      { icon: Sparkles, label: "Εξοπλισμός", value: "Κλιματισμός" },
    ],
  },
];

function ServicesPage() {
  const [activeFleet, setActiveFleet] = useState<FleetItem | null>(null);

  return (
    <PageShell>
      <section className="relative min-h-[45vh] md:min-h-[55vh] flex items-center justify-center overflow-hidden">
        <img
          src={servicesBanner}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/15" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-background/60 to-background" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/40 to-transparent" />
        <div className="relative z-10 w-full text-center">
          <p className="font-display text-xs tracking-[0.4em] text-white/85 mb-4 animate-[fade-in-up_0.8s_ease-out_both]">
            ΤΙ ΠΡΟΣΦΕΡΟΥΜΕ
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white tracking-wide animate-[fade-in-up_0.9s_cubic-bezier(0.22,1,0.36,1)_0.2s_both]">
            ΥΠΗΡΕΣΙΕΣ<span className="text-brand">.</span>
          </h1>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="mx-auto max-w-6xl space-y-28">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div
                className={i % 2 === 0 ? "reveal-left" : "reveal-right md:[direction:ltr]"}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="w-full h-auto shadow-soft hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div
                className={
                  i % 2 === 0 ? "reveal-right" : "reveal-left md:[direction:ltr]"
                }
              >
                <div className="font-display text-xs tracking-[0.3em] text-brand mb-3">
                  0{i + 1}
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
                  {s.title}
                </h2>
                <p className="mt-6 text-ink/75 leading-relaxed text-base md:text-lg">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className="scroll-mt-24 py-20 md:py-28 px-5 sm:px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16 reveal">
            <p className="font-display text-xs tracking-[0.4em] text-brand mb-3">
              ΣΤΟΛΟΣ
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-ink tracking-wide">
              ΤΑ ΟΧΗΜΑΤΑ ΜΑΣ
            </h2>
            <div className="mx-auto mt-4 h-[2px] w-14 bg-brand" />
            <p className="mt-5 text-base md:text-lg text-ink/75 max-w-2xl mx-auto">
              Σύγχρονα, ασφαλή και άνετα πούλμαν σε διαφορετικές χωρητικότητες.
              Πατήστε σε ένα όχημα για περισσότερες λεπτομέρειες.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {FLEET.map((f, i) => (
              <button
                key={f.seats}
                type="button"
                onClick={() => setActiveFleet(f)}
                className="reveal group fleet-card text-left flex flex-col overflow-hidden"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="relative overflow-hidden bg-[hsl(var(--muted))]">
                  <img
                    src={f.img}
                    alt={`${f.type} ${f.seats} θέσεων`}
                    width={1024}
                    height={640}
                    loading="lazy"
                    className="w-full h-48 md:h-52 object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="inline-flex items-center px-2.5 py-1 border border-ink/15 bg-white/60 backdrop-blur font-display text-[10px] tracking-[0.25em] text-ink">
                      {f.type}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-4xl md:text-5xl font-bold text-ink leading-none">
                        {f.seats}
                      </span>
                      <span className="font-display text-[10px] tracking-[0.25em] text-muted-foreground">
                        ΘΕΣΕΙΣ
                      </span>
                    </div>
                  </div>
                  <div className="h-px w-full bg-ink/10 mb-4" />
                  <p className="text-sm text-ink/75 leading-relaxed mb-5">
                    {f.desc}
                  </p>
                  <div className="mt-auto pt-4 border-t border-ink/10 flex items-center justify-between">
                    <span className="font-display text-[10px] tracking-[0.3em] text-muted-foreground">
                      ΛΕΠΤΟΜΕΡΕΙΕΣ
                    </span>
                    <span className="font-display text-[10px] tracking-[0.3em] text-brand transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET DETAILS */}
      <Dialog open={!!activeFleet} onOpenChange={(o) => !o && setActiveFleet(null)}>
        <DialogContent className="max-w-sm sm:max-w-md p-0 overflow-hidden border border-ink/10 bg-white shadow-2xl rounded-2xl [&>button]:hidden">
          {activeFleet && (
            <div className="relative max-h-[85vh] flex flex-col">
              {/* Close */}
              <button
                type="button"
                onClick={() => setActiveFleet(null)}
                aria-label="Κλείσιμο"
                className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full border border-ink/15 bg-white text-ink/70 hover:bg-ink hover:text-white transition-all flex items-center justify-center"
              >
                <span className="text-base leading-none">×</span>
              </button>

              <div className="p-5 sm:p-6 overflow-y-auto">
                <DialogHeader className="sr-only">
                  <DialogTitle>
                    {activeFleet.type} {activeFleet.seats} θέσεων
                  </DialogTitle>
                  <DialogDescription>{activeFleet.details}</DialogDescription>
                </DialogHeader>

                {/* Hero image */}
                <div className="relative h-36 sm:h-44 overflow-hidden rounded-xl border border-ink/10 bg-ink/5">
                  <img
                    src={activeFleet.img}
                    alt={`${activeFleet.type} ${activeFleet.seats} θέσεων`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-brand font-display text-[9px] tracking-[0.25em] text-brand-foreground">
                    {activeFleet.type}
                  </div>
                </div>

                {/* Title */}
                <div className="mt-4 flex items-end justify-between gap-3">
                  <div>
                    <div className="font-display text-[9px] tracking-[0.3em] text-brand">
                      ΧΩΡΗΤΙΚΟΤΗΤΑ
                    </div>
                    <h3 className="mt-1 font-display font-bold text-ink text-xl sm:text-2xl tracking-tight">
                      {activeFleet.seats} θέσεων
                    </h3>
                  </div>
                  <span className="font-display text-4xl sm:text-5xl font-bold text-ink/10 leading-none">
                    {activeFleet.seats}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-3 text-ink/75 leading-relaxed text-[13px]">
                  {activeFleet.details}
                </p>

                {/* Specs */}
                <div className="mt-4 grid grid-cols-2 gap-1.5">
                  {activeFleet.specs.map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="rounded-lg border border-ink/10 bg-ink/[0.03] p-2.5"
                    >
                      <div className="flex items-center gap-1.5 text-ink/55 text-[8px] tracking-[0.2em] font-display uppercase">
                        <Icon size={10} strokeWidth={1.8} />
                        {label}
                      </div>
                      <div className="mt-0.5 text-ink text-[12px] font-medium">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="mt-4">
                  <div className="font-display text-[9px] tracking-[0.3em] text-brand mb-2">
                    ΕΞΟΠΛΙΣΜΟΣ
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeFleet.features.map(({ icon: Icon, label }) => (
                      <span
                        key={label}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-ink/15 bg-white text-[10px] text-ink/80"
                      >
                        <Icon size={11} strokeWidth={1.8} />
                        {label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ideal for */}
                <div className="mt-4">
                  <div className="font-display text-[9px] tracking-[0.3em] text-brand mb-2">
                    ΙΔΑΝΙΚΟ ΓΙΑ
                  </div>
                  <ul className="grid grid-cols-2 gap-y-1 gap-x-3 text-ink/80 text-[12px]">
                    {activeFleet.ideal.map((it) => (
                      <li key={it} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-brand" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider */}
                <div className="mt-4 h-px w-full bg-ink/10" />

                {/* CTA */}
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-brand text-brand-foreground font-display text-[10px] tracking-[0.3em] hover:bg-ink transition-all"
                >
                  <Phone size={12} strokeWidth={2} />
                  {PHONE_LABEL}
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </PageShell>
  );
}
