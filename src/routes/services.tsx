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
import fleetNeoplan from "@/assets/fleet-neoplan-cityliner.jpg";
import fleetTourino from "@/assets/fleet-mercedes-tourino.jpg";
import fleetSetra from "@/assets/fleet-setra-315hd.jpg";
import fleetIveco from "@/assets/fleet-iveco-rapido.jpg";
import fleetAuwarter from "@/assets/fleet-mercedes-auwarter.jpg";

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
    desc: "Από τα ελληνικά νησιά μέχρι τα Βαλκάνια και την υπόλοιπη Ευρώπη — σχεδιάζουμε ταξίδια αναψυχής με προσοχή σε κάθε λεπτομέρεια. Εισιτήρια, ξενοδοχεία, ξεναγήσεις και ξεκούραστη διαμονή.",
  },
];

type FleetItem = {
  img: string;
  type: string;
  model: string;
  seats: string;
  desc: string;
  features: { icon: typeof Users; label: string }[];
  details: string;
  ideal: string[];
  specs: { icon: typeof Users; label: string; value: string }[];
};

const FLEET: FleetItem[] = [
  {
    img: fleetNeoplan,
    type: "BUS",
    model: "Neoplan Cityliner 2010",
    seats: "52",
    desc: "Πούλμαν μεγάλης χωρητικότητας — ιδανικό για σχολικές εκδρομές, συλλόγους και μεγάλα γκρουπ.",
    features: [
      { icon: Users, label: "52 θέσεις" },
      { icon: Snowflake, label: "Κλιματισμός" },
      { icon: Wifi, label: "Wi-Fi" },
      { icon: Briefcase, label: "Μεγάλος χώρος αποσκευών" },
      { icon: ShieldCheck, label: "Ζώνες ασφαλείας" },
    ],
    details:
      "Πολυτελές πούλμαν Neoplan Cityliner 52 θέσεων με ευρύχωρες, ανακλινόμενες θέσεις, διπλό κλιματισμό και πανοραμικά τζάμια. Ιδανικό για μεγάλα γκρουπ που ταξιδεύουν με άνεση σε μακρινούς προορισμούς.",
    ideal: [
      "Σχολικές εκδρομές",
      "Πολυήμερα ταξίδια",
      "Συλλογικές εκδηλώσεις",
      "Αθλητικές αποστολές",
    ],
    specs: [
      { icon: Users, label: "Θέσεις", value: "52" },
      { icon: Briefcase, label: "Αποσκευές", value: "Μεγάλος χώρος" },
      { icon: Gauge, label: "Μοντέλο", value: "Neoplan Cityliner 2010" },
      { icon: Music2, label: "Ψυχαγωγία", value: "Ηχοσύστημα · Μικρόφωνο" },
    ],
  },
  {
    img: fleetSetra,
    type: "BUS",
    model: "Setra S 315 HD",
    seats: "50",
    desc: "Κλασικό premium πούλμαν Setra — γερμανική ποιότητα και άνεση για πολυήμερα ταξίδια.",
    features: [
      { icon: Users, label: "50 θέσεις" },
      { icon: Snowflake, label: "Κλιματισμός" },
      { icon: Wifi, label: "Wi-Fi" },
      { icon: Briefcase, label: "Μεγάλος χώρος αποσκευών" },
      { icon: ShieldCheck, label: "Ζώνες ασφαλείας" },
    ],
    details:
      "Setra S 315 HD — εμβληματικό γερμανικό πούλμαν υψηλής κατηγορίας. Στιβαρή κατασκευή, αθόρυβη καμπίνα και άνετες θέσεις για ταξίδια μεγάλων αποστάσεων.",
    ideal: [
      "Πολυήμερα ταξίδια",
      "Εξωτερικό",
      "Συλλόγους",
      "Premium μετακινήσεις",
    ],
    specs: [
      { icon: Users, label: "Θέσεις", value: "50" },
      { icon: Briefcase, label: "Αποσκευές", value: "Μεγάλος χώρος" },
      { icon: Gauge, label: "Μοντέλο", value: "Setra S 315 HD" },
      { icon: Sparkles, label: "Εξοπλισμός", value: "Wi-Fi · Κλιματισμός" },
    ],
  },
  {
    img: fleetTourino,
    type: "BUS",
    model: "Mercedes Tourino 2010",
    seats: "35",
    desc: "Λευκό Mercedes Tourino μεσαίας χωρητικότητας — ευέλικτη επιλογή για εταιρικά event και ημερήσιες εκδρομές.",
    features: [
      { icon: Users, label: "35 θέσεις" },
      { icon: Snowflake, label: "Κλιματισμός" },
      { icon: Wifi, label: "Wi-Fi" },
      { icon: Briefcase, label: "Άνετος χώρος αποσκευών" },
      { icon: ShieldCheck, label: "Ζώνες ασφαλείας" },
    ],
    details:
      "Mercedes-Benz Tourino 35 θέσεων με αναβαθμισμένη άνεση και ευελιξία. Συνδυάζει χωρητικότητα και ευκολία στην οδήγηση, ιδανικό για μεσαία γκρουπ και ημερήσιες αποδράσεις.",
    ideal: [
      "Εταιρικά event",
      "Ημερήσιες εκδρομές",
      "Αθλητικούς συλλόγους",
      "Ιδιωτικές εκδηλώσεις",
    ],
    specs: [
      { icon: Users, label: "Θέσεις", value: "35" },
      { icon: Briefcase, label: "Αποσκευές", value: "Άνετος χώρος" },
      { icon: Gauge, label: "Μοντέλο", value: "Mercedes Tourino 2010" },
      { icon: Sparkles, label: "Εξοπλισμός", value: "Wi-Fi · Κλιματισμός" },
    ],
  },
  {
    img: fleetIveco,
    type: "MIDI BUS",
    model: "Iveco Rapido 2015",
    seats: "30",
    desc: "Iveco Rapido — σύγχρονο midi πούλμαν, ευέλικτο και άνετο για μεσαία γκρουπ.",
    features: [
      { icon: Users, label: "30 θέσεις" },
      { icon: Snowflake, label: "Κλιματισμός" },
      { icon: Briefcase, label: "Άνετος χώρος αποσκευών" },
      { icon: ShieldCheck, label: "Ζώνες ασφαλείας" },
    ],
    details:
      "Iveco Rapido 2015 — σύγχρονο midi λεωφορείο που συνδυάζει ευελιξία, οικονομία και άνεση. Ιδανικό για ημερήσιες εκδρομές και μετακινήσεις σε δύσβατες διαδρομές.",
    ideal: [
      "Μεσαία γκρουπ",
      "Ημερήσιες εκδρομές",
      "Εταιρικές μετακινήσεις",
      "Ορεινούς προορισμούς",
    ],
    specs: [
      { icon: Users, label: "Θέσεις", value: "30" },
      { icon: Briefcase, label: "Αποσκευές", value: "Άνετος χώρος" },
      { icon: Gauge, label: "Μοντέλο", value: "Iveco Rapido 2015" },
      { icon: Sparkles, label: "Εξοπλισμός", value: "Κλιματισμός" },
    ],
  },
  {
    img: fleetAuwarter,
    type: "MINI BUS",
    model: "Mercedes Auwärter 818",
    seats: "19",
    desc: "Μικρό Mercedes Auwärter 818 — ευέλικτο για VIP μετακινήσεις και μικρές παρέες.",
    features: [
      { icon: Users, label: "19 θέσεις" },
      { icon: Snowflake, label: "Κλιματισμός" },
      { icon: Briefcase, label: "Πρακτικός χώρος αποσκευών" },
      { icon: ShieldCheck, label: "Ζώνες ασφαλείας" },
    ],
    details:
      "Mercedes-Benz Auwärter 818 — ευέλικτο μίνι λεωφορείο που φτάνει εκεί που τα μεγάλα δεν μπορούν. Ιδανικό για ορεινές διαδρομές, στενά δρομάκια χωριών και μικρότερες παρέες.",
    ideal: [
      "Ορεινούς προορισμούς",
      "Παραδοσιακά χωριά",
      "Μικρές παρέες",
      "VIP μετακινήσεις",
    ],
    specs: [
      { icon: Users, label: "Θέσεις", value: "19" },
      { icon: Briefcase, label: "Αποσκευές", value: "Πρακτικός χώρος" },
      { icon: Gauge, label: "Μοντέλο", value: "Mercedes Auwärter 818" },
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
                  <div className="font-display text-sm font-semibold text-ink mb-2 leading-tight">
                    {f.model}
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

      {/* FLEET DETAILS — Liquid Glass */}
      <Dialog open={!!activeFleet} onOpenChange={(o) => !o && setActiveFleet(null)}>
        <DialogContent className="max-w-sm sm:max-w-md p-0 overflow-hidden border-0 bg-transparent shadow-none [&>button]:hidden">
          {activeFleet && (
            <div className="trip-glass relative overflow-hidden rounded-3xl max-h-[85vh] flex flex-col">
              {/* Blurred background image */}
              <img
                src={activeFleet.img}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/5" />
              <div className="absolute inset-0 bg-ink/55" />

              {/* Close */}
              <button
                type="button"
                onClick={() => setActiveFleet(null)}
                aria-label="Κλείσιμο"
                className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full border border-white/25 bg-white/10 backdrop-blur-xl text-white/90 hover:bg-white/20 transition-all flex items-center justify-center"
              >
                <span className="text-base leading-none">×</span>
              </button>

              <div className="relative z-10 p-5 sm:p-6 overflow-y-auto">
                <DialogHeader className="sr-only">
                  <DialogTitle>
                    {activeFleet.type} {activeFleet.seats} θέσεων
                  </DialogTitle>
                  <DialogDescription>{activeFleet.details}</DialogDescription>
                </DialogHeader>

                {/* Hero image */}
                <div className="relative h-32 sm:h-36 overflow-hidden rounded-xl border border-white/20 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.6)] bg-white/5">
                  <img
                    src={activeFleet.img}
                    alt={`${activeFleet.type} ${activeFleet.seats} θέσεων`}
                    className="absolute inset-0 w-full h-full object-contain p-2"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full border border-white/30 bg-white/15 backdrop-blur-md font-display text-[9px] tracking-[0.25em] text-white">
                    {activeFleet.type}
                  </div>
                </div>

                {/* Title */}
                <div className="mt-4 flex items-end justify-between gap-3">
                  <div>
                    <div className="font-display text-[9px] tracking-[0.3em] text-white/60">
                      ΧΩΡΗΤΙΚΟΤΗΤΑ
                    </div>
                    <h3 className="mt-1 font-display font-bold text-white text-xl sm:text-2xl tracking-tight">
                      {activeFleet.seats} θέσεων
                    </h3>
                  </div>
                  <span className="font-display text-4xl sm:text-5xl font-bold text-white/15 leading-none">
                    {activeFleet.seats}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-3 text-white/80 leading-relaxed text-[13px]">
                  {activeFleet.details}
                </p>

                {/* Specs */}
                <div className="mt-4 grid grid-cols-2 gap-1.5">
                  {activeFleet.specs.map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="rounded-lg border border-white/15 bg-white/8 backdrop-blur-md p-2.5"
                    >
                      <div className="flex items-center gap-1.5 text-white/60 text-[8px] tracking-[0.2em] font-display uppercase">
                        <Icon size={10} strokeWidth={1.8} />
                        {label}
                      </div>
                      <div className="mt-0.5 text-white text-[12px] font-medium">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="mt-4">
                  <div className="font-display text-[9px] tracking-[0.3em] text-white/60 mb-2">
                    ΕΞΟΠΛΙΣΜΟΣ
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeFleet.features.map(({ icon: Icon, label }) => (
                      <span
                        key={label}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[10px] text-white/90"
                      >
                        <Icon size={11} strokeWidth={1.8} />
                        {label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ideal for */}
                <div className="mt-4">
                  <div className="font-display text-[9px] tracking-[0.3em] text-white/60 mb-2">
                    ΙΔΑΝΙΚΟ ΓΙΑ
                  </div>
                  <ul className="grid grid-cols-2 gap-y-1 gap-x-3 text-white/85 text-[12px]">
                    {activeFleet.ideal.map((it) => (
                      <li key={it} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-brand" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider */}
                <div className="mt-4 h-px w-full bg-white/15" />

                {/* CTA */}
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-white/25 bg-white/15 backdrop-blur-xl text-white font-display text-[10px] tracking-[0.3em] hover:bg-white hover:text-ink transition-all"
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
