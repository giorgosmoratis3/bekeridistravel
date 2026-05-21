import { useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Phone, MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { PageShell } from "@/components/page-shell";
import { ReviewsSection } from "@/components/reviews-section";
import { OfficesSection } from "@/components/offices-section";
import { DestinationsSection } from "@/components/destinations-section";
import { ContactForm } from "@/components/contact-form";
import heroBus from "@/assets/hero-bus.jpg";
import aboutMission from "@/assets/about-mission.jpg";
import aboutMountains from "@/assets/about-mountains.jpg";
import heroLandscape from "@/assets/hero-landscape.jpg";
import contactBanner from "@/assets/contact-banner.jpg";
import serviceBus from "@/assets/service-bus.jpg";
import serviceExcursions from "@/assets/service-excursions.jpg";
import serviceTrips from "@/assets/service-trips.jpg";
import meteora from "@/assets/destination-meteora.jpg";
import island from "@/assets/destination-island.jpg";
import athens from "@/assets/destination-athens.jpg";
import village from "@/assets/destination-village.jpg";

type HeroTrip = {
  img: string;
  number: string;
  name: string;
  tag: string;
  duration: string;
  location: string;
  description: string;
};

const HERO_TRIPS: HeroTrip[] = [
  {
    img: meteora,
    number: "01",
    name: "Μετέωρα",
    tag: "Ημερήσια Εκδρομή",
    duration: "1 ημέρα",
    location: "Καλαμπάκα",
    description:
      "Επίσκεψη στα μοναστήρια των Μετεώρων με ξενάγηση και ελεύθερο χρόνο για φωτογραφίες στο μοναδικό αυτό τοπίο.",
  },
  {
    img: island,
    number: "02",
    name: "Νησιά Αιγαίου",
    tag: "Πολυήμερο",
    duration: "5 ημέρες",
    location: "Κυκλάδες",
    description:
      "Πολυήμερη απόδραση στα ομορφότερα νησιά του Αιγαίου με διαμονή, μεταφορές και επιλεγμένες ξεναγήσεις.",
  },
  {
    img: athens,
    number: "03",
    name: "Αθήνα",
    tag: "City Break",
    duration: "2 ημέρες",
    location: "Αττική",
    description:
      "City break στην πρωτεύουσα: Ακρόπολη, Πλάκα, μουσεία και shopping στο κέντρο της Αθήνας.",
  },
  {
    img: village,
    number: "04",
    name: "Ορεινά Χωριά",
    tag: "Φύση",
    duration: "1 ημέρα",
    location: "Πήλιο",
    description:
      "Διαδρομή στα γραφικά ορεινά χωριά με γεύμα σε παραδοσιακή ταβέρνα και περίπατο στη φύση.",
  },
  {
    img: serviceTrips,
    number: "05",
    name: "Ευρώπη",
    tag: "Εξωτερικό",
    duration: "7 ημέρες",
    location: "Κεντρική Ευρώπη",
    description:
      "Οργανωμένο ταξίδι σε μεγάλους ευρωπαϊκούς προορισμούς με αεροπορικά εισιτήρια, ξενοδοχεία και ξεναγήσεις.",
  },
  {
    img: serviceExcursions,
    number: "06",
    name: "Προσκύνημα",
    tag: "Θρησκευτικό",
    duration: "2 ημέρες",
    location: "Τήνος",
    description:
      "Προσκυνηματική εκδρομή με έμπειρους συνοδούς και πλήρη οργάνωση από την αναχώρηση έως την επιστροφή.",
  },
];

const PHONE_TEL = "+306977651811";
const PHONE_LABEL = "6977 651 811";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bekeridis Travel — Εκδρομές, Ταξίδια, Ενοικιάσεις Λεωφορείων στον Δομοκό" },
      {
        name: "description",
        content:
          "Τουριστικό γραφείο Bekeridis Travel με έδρα τον Δομοκό. Οργανωμένες εκδρομές, πολυήμερα ταξίδια στην Ελλάδα και το εξωτερικό, ενοικιάσεις λεωφορείων.",
      },
      { property: "og:title", content: "Bekeridis Travel — Εκδρομές & Ταξίδια από τον Δομοκό" },
      {
        property: "og:description",
        content: "Ανακαλύψτε νέους προορισμούς με το τουριστικό γραφείο Bekeridis Travel.",
      },
    ],
  }),
  component: HomePage,
});

const SERVICES = [
  {
    img: serviceBus,
    title: "Ενοικιάσεις Λεωφορείων",
    desc: "Σύγχρονος στόλος λεωφορείων κάθε χωρητικότητας για σχολικές, εταιρικές και ιδιωτικές μετακινήσεις σε όλη την Ελλάδα.",
    badge: "Ο ΣΤΟΛΟΣ ΜΑΣ",
    to: "/services",
    hash: "fleet",
  },
  {
    img: serviceExcursions,
    title: "Οργανωμένες Εκδρομές",
    desc: "Ημερήσιες και πολυήμερες εκδρομές σε προορισμούς της φύσης, της ιστορίας και του πολιτισμού.",
    badge: "ΕΚΔΡΟΜΕΣ",
    to: "/services",
  },
  {
    img: serviceTrips,
    title: "Ταξίδια Αναψυχής",
    desc: "Σχεδιάζουμε το ταξίδι των ονείρων σας — από τα ελληνικά νησιά μέχρι μεγάλους ευρωπαϊκούς προορισμούς.",
    badge: "ΤΑΞΙΔΙΑ",
    to: "/services",
  },
];

function HomePage() {
  const [activeTrip, setActiveTrip] = useState<HeroTrip | null>(null);
  const tripsScrollerRef = useRef<HTMLDivElement>(null);

  const scrollTrips = (dir: 1 | -1) => {
    const el = tripsScrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7 * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Full-bleed background image */}
        <img
          src={heroBus}
          alt="Σύγχρονο τουριστικό λεωφορείο σε ορεινό δρόμο"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover hero-kenburns"
        />
        {/* Stronger darkening so the Bekeridis title pops */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/55 to-ink/30" />
        <div className="absolute inset-0 bg-ink/20" />

        <div className="relative z-10 w-full pt-28 pb-16 md:pt-32 md:pb-20">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center lg:items-end">
            {/* LEFT — Big title copy */}
            <div className="lg:col-span-7 text-white">
              <p className="font-display text-[10px] sm:text-xs tracking-[0.45em] text-white/70 mb-5 animate-[fade-in-up_0.9s_cubic-bezier(0.22,1,0.36,1)_0.1s_both]">
                ΔΟΜΟΚΟΣ · ΦΘΙΩΤΙΔΑ
              </p>
              <h1 className="font-display font-bold tracking-tight leading-[0.9] text-white text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] animate-[fade-in-up_1.1s_cubic-bezier(0.22,1,0.36,1)_0.25s_both]">
                Bekeridis<span className="text-brand">.</span>
              </h1>
              <p className="mt-6 md:mt-8 text-sm sm:text-base text-white/85 leading-relaxed max-w-md animate-[fade-in-up_1s_cubic-bezier(0.22,1,0.36,1)_0.5s_both]">
                Με έδρα τον Δομοκό, η Bekeridis Travel σας ταξιδεύει σε
                μοναδικούς προορισμούς. Οργανωμένες εκδρομές, πολυήμερα ταξίδια
                και ενοικιάσεις λεωφορείων με εμπειρία και συνέπεια.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5 animate-[fade-in-up_1s_cubic-bezier(0.22,1,0.36,1)_0.7s_both]">
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-ink font-display text-xs tracking-[0.25em] hover:bg-brand hover:text-brand-foreground transition-all duration-300 hover:scale-105 rounded-full"
                >
                  ΕΞΕΡΕΥΝΗΣΤΕ
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2.2}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
                <Link
                  to="/contact"
                  className="story-link font-display text-xs tracking-[0.25em] text-white/90 hover:text-brand transition-colors"
                >
                  ΕΠΙΚΟΙΝΩΝΙΑ
                </Link>
              </div>
            </div>

            {/* RIGHT — Light glass panel with trip cards (lower on desktop) */}
            <div className="lg:col-span-5 lg:mt-32 xl:mt-48 animate-[scale-in_0.7s_ease-out_0.2s_both]">
              <div className="relative rounded-2xl md:rounded-3xl border border-white/40 bg-white/20 backdrop-blur-2xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.4)] p-4 sm:p-5">
                <div className="flex items-center justify-between mb-4 px-1">
                  <p className="font-display text-[10px] tracking-[0.35em] text-white">
                    ΕΚΔΡΟΜΕΣ
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => scrollTrips(-1)}
                      aria-label="Προηγούμενες εκδρομές"
                      className="flex items-center justify-center w-8 h-8 rounded-full border border-white/40 bg-white/15 text-white hover:bg-brand hover:border-brand hover:text-brand-foreground transition-all"
                    >
                      <ChevronLeft size={16} strokeWidth={2.2} />
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollTrips(1)}
                      aria-label="Επόμενες εκδρομές"
                      className="flex items-center justify-center w-8 h-8 rounded-full border border-white/40 bg-white/15 text-white hover:bg-brand hover:border-brand hover:text-brand-foreground transition-all"
                    >
                      <ChevronRight size={16} strokeWidth={2.2} />
                    </button>
                  </div>
                </div>

                {/* Horizontal scrollable list */}
                <div
                  ref={tripsScrollerRef}
                  className="-mx-1 overflow-x-auto scrollbar-none scroll-smooth"
                >
                  <div className="flex gap-3 px-1 pb-1 snap-x snap-mandatory">
                    {HERO_TRIPS.map((t, i) => (
                      <button
                        key={t.name}
                        type="button"
                        onClick={() => setActiveTrip(t)}
                        className="group relative shrink-0 w-[42%] sm:w-[32%] aspect-[3/4] overflow-hidden rounded-xl shadow-xl snap-start transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-[fade-in_0.6s_ease-out_both]"
                        style={{ animationDelay: `${0.3 + i * 0.08}s` }}
                      >
                        <img
                          src={t.img}
                          alt={t.name}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                        <div className="absolute top-2 left-2 font-display text-[10px] tracking-[0.2em] text-white/90">
                          {t.number}.
                        </div>
                        <div className="absolute inset-x-0 bottom-0 p-3 text-left">
                          <div className="font-display font-bold text-white text-sm leading-tight">
                            {t.name}
                          </div>
                          <div className="mt-1 font-display text-[9px] tracking-[0.2em] text-white/70">
                            {t.tag}
                          </div>
                          <div className="js-grow-bar mt-1.5 h-[2px] w-6 bg-brand transition-all duration-500 group-hover:w-full" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRIP DETAILS — Liquid Glass */}
      <Dialog open={!!activeTrip} onOpenChange={(o) => !o && setActiveTrip(null)}>
        <DialogContent
          className="max-w-md p-0 overflow-hidden border-0 bg-transparent shadow-none [&>button]:hidden"
        >
          {activeTrip && (
            <div className="trip-glass relative overflow-hidden rounded-3xl">
              {/* Blurred background image */}
              <img
                src={activeTrip.img}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/10 to-white/5" />
              <div className="absolute inset-0 bg-ink/40" />

              {/* Close button */}
              <button
                type="button"
                onClick={() => setActiveTrip(null)}
                aria-label="Κλείσιμο"
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full border border-white/25 bg-white/10 backdrop-blur-xl text-white/90 hover:bg-white/20 transition-all flex items-center justify-center"
              >
                <span className="text-lg leading-none">×</span>
              </button>

              <div className="relative z-10 p-7 sm:p-8">
                <DialogHeader className="sr-only">
                  <DialogTitle>{activeTrip.name}</DialogTitle>
                  <DialogDescription>{activeTrip.description}</DialogDescription>
                </DialogHeader>

                {/* Hero image — small rounded frame */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/20 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] bg-ink/40">
                  <img
                    src={activeTrip.img}
                    alt={activeTrip.name}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/60 to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full border border-white/30 bg-white/15 backdrop-blur-md font-display text-[9px] tracking-[0.25em] text-white">
                    {activeTrip.tag}
                  </div>
                </div>

                {/* Title */}
                <div className="mt-6">
                  <div className="font-display text-[10px] tracking-[0.35em] text-white/60">
                    {activeTrip.number}
                  </div>
                  <h3 className="mt-1.5 font-display font-bold text-white text-2xl sm:text-3xl tracking-tight">
                    {activeTrip.name}
                  </h3>
                </div>

                {/* Meta pills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[11px] text-white/90">
                    <Clock size={12} strokeWidth={1.8} />
                    {activeTrip.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[11px] text-white/90">
                    <MapPin size={12} strokeWidth={1.8} />
                    {activeTrip.location}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-5 text-white/80 leading-relaxed text-sm">
                  {activeTrip.description}
                </p>

                {/* Divider */}
                <div className="mt-6 h-px w-full bg-white/15" />

                {/* CTA */}
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/25 bg-white/15 backdrop-blur-xl text-white font-display text-[11px] tracking-[0.3em] hover:bg-white hover:text-ink transition-all"
                >
                  <Phone size={14} strokeWidth={2} />
                  {PHONE_LABEL}
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>


      {/* SERVICES PREVIEW */}
      <section className="py-20 md:py-28 px-5 sm:px-6 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-16 reveal">
            <p className="font-display text-xs tracking-[0.4em] text-brand mb-3">
              ΥΠΗΡΕΣΙΕΣ
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-ink tracking-wide">
              ΤΙ ΠΡΟΣΦΕΡΟΥΜΕ
            </h2>
            <div className="mx-auto mt-4 h-[2px] w-14 bg-brand" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {SERVICES.map((s, i) => {
              return (
                <Link
                  key={s.title}
                  to={s.to}
                  hash={s.hash}
                  className="service-reveal group block"
                  style={{ transitionDelay: `${i * 160}ms` }}
                >
                  <div className="relative service-img-wrap">
                    <img
                      src={s.img}
                      alt={s.title}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="w-full h-56 md:h-64 object-cover"
                    />
                    {/* Dark gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[1]" />
                    {/* Top-left badge */}
                    <div className="absolute top-3 left-3 z-[2] px-3 py-1.5 bg-background/90 backdrop-blur-sm text-[10px] font-display tracking-[0.2em] text-brand shadow-soft transition-all duration-500 group-hover:bg-brand group-hover:text-brand-foreground group-hover:-translate-y-1 group-hover:shadow-brand">
                      {s.badge}
                    </div>
                    {/* Hover CTA */}
                    <div className="mobile-show absolute inset-x-0 bottom-0 z-[2] p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex items-center justify-between gap-3 text-white">
                        <span className="font-display text-xs tracking-[0.25em]">
                          {s.hash === "fleet"
                            ? "ΔΕΙΤΕ ΤΟΝ ΣΤΟΛΟ"
                            : "ΔΕΙΤΕ ΠΕΡΙΣΣΟΤΕΡΑ"}
                        </span>
                        <span className="rotate-arrow flex items-center justify-center w-9 h-9 bg-brand text-brand-foreground transition-transform group-hover:rotate-0 -rotate-12">
                          <ArrowUpRight size={16} strokeWidth={2.2} />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="service-text">
                    <h3 className="font-display font-bold text-lg md:text-xl text-ink mt-5 md:mt-6 group-hover:text-brand transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-2 md:mt-3 text-ink/70 leading-relaxed text-sm md:text-base">
                      {s.desc}
                    </p>
                    <div className="js-grow-bar mt-4 h-[2px] w-12 bg-brand transition-all duration-500 group-hover:w-full" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <DestinationsSection />

      {/* ABOUT US */}
      <section className="relative py-20 md:py-28 px-5 sm:px-6 bg-background overflow-hidden">
        {/* Faint background mountain behind the text */}
        <img
          src={aboutMission}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 w-[55%] max-w-[700px] opacity-[0.07] object-cover hidden md:block"
        />

        <div className="relative mx-auto max-w-7xl grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* RIGHT — image collage */}
          <div className="reveal-right order-1 md:order-2 animate-[fade-in_0.8s_ease-out]">
            <div className="relative h-[420px] sm:h-[480px] md:h-[520px] max-w-[520px] mx-auto md:mx-0">
              {/* Tall portrait — top left */}
              <div className="absolute left-0 top-0 w-[44%] h-[62%] overflow-hidden shadow-xl img-zoom animate-[scale-in_0.7s_ease-out_0.1s_both]">
                <img
                  src={heroLandscape}
                  alt="Ταξιδιώτης σε ορεινό τοπίο"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Wide landscape — top right */}
              <div className="absolute right-0 top-[6%] w-[52%] h-[40%] overflow-hidden shadow-xl img-zoom animate-[scale-in_0.7s_ease-out_0.25s_both]">
                <img
                  src={aboutMountains}
                  alt="Ορεινός προορισμός"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Bottom right portrait */}
              <div className="absolute right-[4%] bottom-0 w-[46%] h-[50%] overflow-hidden shadow-2xl img-zoom animate-[scale-in_0.7s_ease-out_0.4s_both]">
                <img
                  src={contactBanner}
                  alt="Ταξιδιώτης σε λίμνη"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* LEFT — copy */}
          <div className="reveal-left order-2 md:order-1 animate-[fade-in_0.9s_ease-out_0.2s_both]">
            <p className="font-display text-xs tracking-[0.4em] text-brand mb-3">
              ΣΧΕΤΙΚΑ
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-ink tracking-wide">
              ΓΙΑ ΕΜΑΣ
            </h2>
            <div className="mt-4 h-[2px] w-14 bg-brand" />
            <div className="mt-6 space-y-5 text-ink/75 leading-relaxed text-base">
              <p>
                Με έδρα τον Δομοκό Φθιώτιδας, η Bekeridis Travel ταξιδεύει εδώ
                και χρόνια τους επισκέπτες της σε μοναδικούς προορισμούς στην
                Ελλάδα και το εξωτερικό. Η εμπειρία, η συνέπεια και η αγάπη μας
                για το ταξίδι μας έχουν κάνει την πρώτη επιλογή για συλλόγους,
                σχολεία και ιδιώτες.
              </p>
              <p>
                Σχεδιάζουμε κάθε εκδρομή με προσοχή στη λεπτομέρεια, ώστε εσείς
                να απολαμβάνετε ξέγνοιαστα κάθε στιγμή του ταξιδιού σας.
              </p>
            </div>

            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-4 font-display text-xs tracking-[0.25em] text-ink"
            >
              <span className="px-6 py-3 border border-ink/30 group-hover:border-brand group-hover:text-brand transition-colors">
                ΠΕΡΙΣΣΟΤΕΡΑ
              </span>
              <span className="h-px w-10 bg-brand transition-all duration-300 group-hover:w-16" />
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <ReviewsSection />

      {/* OFFICES — Επικοινωνία */}
      <OfficesSection eyebrow="ΤΑ ΓΡΑΦΕΙΑ ΜΑΣ" title="ΕΠΙΚΟΙΝΩΝΙΑ" />
      <ContactForm />
    </PageShell>
  );
}
