import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import servicesBanner from "@/assets/services-banner.jpg";
import meteora from "@/assets/destination-meteora.jpg";
import island from "@/assets/destination-island.jpg";
import athens from "@/assets/destination-athens.jpg";
import village from "@/assets/destination-village.jpg";
import serviceTrips from "@/assets/service-trips.jpg";
import serviceExcursions from "@/assets/service-excursions.jpg";

const PHONE_TEL = "+306977651811";
const PHONE_LABEL = "6977 651 811";

type Excursion = {
  img: string;
  name: string;
  tag: string;
  duration: string;
  location: string;
  description: string;
};

const EXCURSIONS: Excursion[] = [
  {
    img: meteora,
    name: "Μετέωρα",
    tag: "Ημερήσια Εκδρομή",
    duration: "1 ημέρα",
    location: "Καλαμπάκα",
    description:
      "Επίσκεψη στα μοναστήρια των Μετεώρων με ξενάγηση και ελεύθερο χρόνο για φωτογραφίες στο μοναδικό αυτό τοπίο.",
  },
  {
    img: island,
    name: "Νησιά Αιγαίου",
    tag: "Πολυήμερο",
    duration: "5 ημέρες",
    location: "Κυκλάδες",
    description:
      "Πολυήμερη απόδραση στα ομορφότερα νησιά του Αιγαίου με διαμονή, μεταφορές και επιλεγμένες ξεναγήσεις.",
  },
  {
    img: athens,
    name: "Αθήνα",
    tag: "City Break",
    duration: "2 ημέρες",
    location: "Αττική",
    description:
      "City break στην πρωτεύουσα: Ακρόπολη, Πλάκα, μουσεία και shopping στο κέντρο της Αθήνας.",
  },
  {
    img: village,
    name: "Ορεινά Χωριά",
    tag: "Φύση",
    duration: "1 ημέρα",
    location: "Πήλιο",
    description:
      "Διαδρομή στα γραφικά ορεινά χωριά με γεύμα σε παραδοσιακή ταβέρνα και περίπατο στη φύση.",
  },
  {
    img: serviceTrips,
    name: "Ευρώπη",
    tag: "Εξωτερικό",
    duration: "7 ημέρες",
    location: "Κεντρική Ευρώπη",
    description:
      "Οργανωμένο ταξίδι σε μεγάλους ευρωπαϊκούς προορισμούς με αεροπορικά εισιτήρια, ξενοδοχεία και ξεναγήσεις.",
  },
  {
    img: serviceExcursions,
    name: "Προσκύνημα στην Τήνο",
    tag: "Θρησκευτικό",
    duration: "2 ημέρες",
    location: "Τήνος",
    description:
      "Προσκυνηματική εκδρομή με έμπειρους συνοδούς και πλήρη οργάνωση από την αναχώρηση έως την επιστροφή.",
  },
];

export const Route = createFileRoute("/excursions")({
  head: () => ({
    meta: [
      { title: "Εκδρομές — Bekeridis Travel" },
      {
        name: "description",
        content:
          "Οργανωμένες εκδρομές της Bekeridis Travel — ημερήσιες, πολυήμερες και προσκυνηματικές, σε προορισμούς της Ελλάδας και του εξωτερικού.",
      },
      { property: "og:title", content: "Εκδρομές — Bekeridis Travel" },
      {
        property: "og:description",
        content: "Δείτε όλες τις εκδρομές μας και κλείστε εύκολα τη θέση σας.",
      },
    ],
  }),
  component: ExcursionsPage,
});

function ExcursionsPage() {
  return (
    <PageShell>
      {/* HERO — ίδιο layout με τις Υπηρεσίες */}
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
            ΕΞΕΡΕΥΝΗΣΤΕ
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white tracking-wide animate-[fade-in-up_0.9s_cubic-bezier(0.22,1,0.36,1)_0.2s_both]">
            ΕΚΔΡΟΜΕΣ<span className="text-brand">.</span>
          </h1>
        </div>
      </section>

      {/* MOBILE — τετράγωνες κάρτες σε grid 2 στηλών */}
      <section className="md:hidden py-12 px-4">
        <div className="mx-auto max-w-xl grid grid-cols-2 gap-3">
          {EXCURSIONS.map((e) => (
            <a
              key={e.name}
              href={`tel:${PHONE_TEL}`}
              className="group relative aspect-square overflow-hidden rounded-xl shadow-md active:scale-[0.98] transition-transform"
            >
              <img
                src={e.img}
                alt={e.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 text-left">
                <div className="font-display font-bold text-white text-sm leading-tight">
                  {e.name}
                </div>
                <div className="mt-1 font-display text-[9px] tracking-[0.2em] text-white/80">
                  {e.tag.toUpperCase()}
                </div>
                <div className="mt-2 flex items-center gap-2 text-[10px] text-white/80">
                  <Clock size={10} strokeWidth={2} />
                  {e.duration}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* DESKTOP — Alternating excursion blocks (αμετάβλητο) */}
      <section className="hidden md:block py-28 px-6">
        <div className="mx-auto max-w-6xl space-y-28">
          {EXCURSIONS.map((e, i) => (
            <article
              key={e.name}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div
                className={
                  i % 2 === 0 ? "reveal-left" : "reveal-right md:[direction:ltr]"
                }
              >
                <img
                  src={e.img}
                  alt={e.name}
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
                  {String(i + 1).padStart(2, "0")} · {e.tag.toUpperCase()}
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
                  {e.name}
                </h2>
                <p className="mt-6 text-ink/75 leading-relaxed text-base md:text-lg">
                  {e.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-ink/15 bg-white/60 font-display text-[11px] tracking-[0.2em] text-ink">
                    <Clock size={13} strokeWidth={1.8} />
                    {e.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-ink/15 bg-white/60 font-display text-[11px] tracking-[0.2em] text-ink">
                    <MapPin size={13} strokeWidth={1.8} />
                    {e.location}
                  </span>
                </div>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="group mt-8 inline-flex items-center gap-3 px-6 py-3 bg-ink text-white font-display text-xs tracking-[0.25em] hover:bg-brand transition-colors"
                >
                  <Phone size={14} strokeWidth={2} />
                  ΚΡΑΤΗΣΗ — {PHONE_LABEL}
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display text-xs tracking-[0.4em] text-brand mb-3">
            ΠΡΟΣΩΠΟΠΟΙΗΜΕΝΗ ΕΚΔΡΟΜΗ
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink tracking-wide">
            ΘΕΛΕΤΕ ΚΑΤΙ ΔΙΑΦΟΡΕΤΙΚΟ;
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-14 bg-brand" />
          <p className="mt-6 text-ink/75 leading-relaxed text-base md:text-lg">
            Σχεδιάζουμε εκδρομές κατά παραγγελία για συλλόγους, σχολεία και
            ιδιώτες. Επικοινωνήστε μαζί μας για να φτιάξουμε το ιδανικό πρόγραμμα.
          </p>
          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-3 px-7 py-3.5 bg-brand text-brand-foreground font-display text-xs tracking-[0.25em] hover:bg-ink transition-colors"
          >
            ΕΠΙΚΟΙΝΩΝΙΑ
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
