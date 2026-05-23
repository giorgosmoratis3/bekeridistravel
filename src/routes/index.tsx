import { useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Phone, MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { PageShell } from "@/components/page-shell";
import { ReviewsSection } from "@/components/reviews-section";
import { OfficesSection } from "@/components/offices-section";
import { DestinationsSection } from "@/components/destinations-section";
import { ContactForm } from "@/components/contact-form";
import { useT } from "@/lib/i18n";
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

const PHONE_TEL = "+306977651811";
const PHONE_LABEL = "6977 651 811";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bekeridis Travel — Εκδρομές, Ταξίδια, Ενοικιάσεις Λεωφορείων στον Δομοκό" },
      { name: "description", content: "Τουριστικό γραφείο Bekeridis Travel με έδρα τον Δομοκό. Οργανωμένες εκδρομές, πολυήμερα ταξίδια στην Ελλάδα και το εξωτερικό, ενοικιάσεις λεωφορείων." },
      { property: "og:title", content: "Bekeridis Travel — Εκδρομές & Ταξίδια από τον Δομοκό" },
      { property: "og:description", content: "Ανακαλύψτε νέους προορισμούς με το τουριστικό γραφείο Bekeridis Travel." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const t = useT();
  const [activeTrip, setActiveTrip] = useState<HeroTrip | null>(null);
  const tripsScrollerRef = useRef<HTMLDivElement>(null);

  const HERO_TRIPS: HeroTrip[] = [
    { img: meteora, number: "01", name: t("Μετέωρα", "Meteora"), tag: t("Ημερήσια Εκδρομή", "Day Trip"), duration: t("1 ημέρα", "1 day"), location: t("Καλαμπάκα", "Kalambaka"), description: t("Επίσκεψη στα μοναστήρια των Μετεώρων με ξενάγηση και ελεύθερο χρόνο για φωτογραφίες στο μοναδικό αυτό τοπίο.", "Visit the Meteora monasteries with a guided tour and free time for photos in this unique landscape.") },
    { img: island, number: "02", name: t("Νησιά Αιγαίου", "Aegean Islands"), tag: t("Πολυήμερο", "Multi-day"), duration: t("5 ημέρες", "5 days"), location: t("Κυκλάδες", "Cyclades"), description: t("Πολυήμερη απόδραση στα ομορφότερα νησιά του Αιγαίου με διαμονή, μεταφορές και επιλεγμένες ξεναγήσεις.", "A multi-day escape to the most beautiful Aegean islands with accommodation, transfers and selected tours.") },
    { img: athens, number: "03", name: t("Αθήνα", "Athens"), tag: "City Break", duration: t("2 ημέρες", "2 days"), location: t("Αττική", "Attica"), description: t("City break στην πρωτεύουσα: Ακρόπολη, Πλάκα, μουσεία και shopping στο κέντρο της Αθήνας.", "City break in the capital: Acropolis, Plaka, museums and shopping in the heart of Athens.") },
    { img: village, number: "04", name: t("Ορεινά Χωριά", "Mountain Villages"), tag: t("Φύση", "Nature"), duration: t("1 ημέρα", "1 day"), location: t("Πήλιο", "Pelion"), description: t("Διαδρομή στα γραφικά ορεινά χωριά με γεύμα σε παραδοσιακή ταβέρνα και περίπατο στη φύση.", "A route through picturesque mountain villages with a meal at a traditional tavern and a walk in nature.") },
    { img: serviceTrips, number: "05", name: t("Ευρώπη", "Europe"), tag: t("Εξωτερικό", "Abroad"), duration: t("7 ημέρες", "7 days"), location: t("Κεντρική Ευρώπη", "Central Europe"), description: t("Οργανωμένο ταξίδι σε μεγάλους ευρωπαϊκούς προορισμούς με αεροπορικά εισιτήρια, ξενοδοχεία και ξεναγήσεις.", "Organized trip to major European destinations with flights, hotels and guided tours.") },
    { img: serviceExcursions, number: "06", name: t("Προσκύνημα", "Pilgrimage"), tag: t("Θρησκευτικό", "Religious"), duration: t("2 ημέρες", "2 days"), location: t("Τήνος", "Tinos"), description: t("Προσκυνηματική εκδρομή με έμπειρους συνοδούς και πλήρη οργάνωση από την αναχώρηση έως την επιστροφή.", "Pilgrimage trip with experienced guides and full organization from departure to return.") },
  ];

  const SERVICES = [
    { img: serviceBus, title: t("Ενοικιάσεις Λεωφορείων", "Bus Rentals"), desc: t("Σύγχρονος στόλος λεωφορείων κάθε χωρητικότητας για σχολικές, εταιρικές και ιδιωτικές μετακινήσεις σε όλη την Ελλάδα.", "A modern fleet of buses of every capacity for school, corporate and private transfers throughout Greece."), badge: t("Ο ΣΤΟΛΟΣ ΜΑΣ", "OUR FLEET"), to: "/services", hash: "fleet" as string | undefined },
    { img: serviceExcursions, title: t("Οργανωμένες Εκδρομές", "Organized Excursions"), desc: t("Ημερήσιες και πολυήμερες εκδρομές σε προορισμούς της φύσης, της ιστορίας και του πολιτισμού.", "Day and multi-day excursions to destinations of nature, history and culture."), badge: t("ΕΚΔΡΟΜΕΣ", "EXCURSIONS"), to: "/services", hash: undefined },
    { img: serviceTrips, title: t("Ταξίδια Αναψυχής", "Leisure Travel"), desc: t("Σχεδιάζουμε το ταξίδι των ονείρων σας — από τα ελληνικά νησιά μέχρι μεγάλους ευρωπαϊκούς προορισμούς.", "We design your dream trip — from the Greek islands to major European destinations."), badge: t("ΤΑΞΙΔΙΑ", "TRIPS"), to: "/services", hash: undefined },
  ];

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
        <img src={heroBus} alt={t("Σύγχρονο τουριστικό λεωφορείο σε ορεινό δρόμο", "Modern tourist coach on a mountain road")} width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover hero-kenburns" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/55 to-ink/30" />
        <div className="absolute inset-0 bg-ink/20" />

        <div className="relative z-10 w-full pt-28 pb-16 md:pt-32 md:pb-20">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center lg:items-end">
            <div className="lg:col-span-7 text-white">
              <p className="font-display text-[10px] sm:text-xs tracking-[0.45em] text-white/70 mb-5 animate-[fade-in-up_0.9s_cubic-bezier(0.22,1,0.36,1)_0.1s_both]">
                {t("ΔΟΜΟΚΟΣ · ΦΘΙΩΤΙΔΑ", "DOMOKOS · PHTHIOTIS")}
              </p>
              <h1 className="font-display font-bold tracking-tight leading-[0.9] text-white text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] animate-[fade-in-up_1.1s_cubic-bezier(0.22,1,0.36,1)_0.25s_both]">
                Bekeridis<span className="text-brand">.</span>
              </h1>
              <p className="mt-6 md:mt-8 text-sm sm:text-base text-white/85 leading-relaxed max-w-md animate-[fade-in-up_1s_cubic-bezier(0.22,1,0.36,1)_0.5s_both]">
                {t(
                  "Με έδρα τον Δομοκό, η Bekeridis Travel σας ταξιδεύει σε μοναδικούς προορισμούς. Οργανωμένες εκδρομές, πολυήμερα ταξίδια και ενοικιάσεις λεωφορείων με εμπειρία και συνέπεια.",
                  "Based in Domokos, Bekeridis Travel takes you to unique destinations. Organized excursions, multi-day trips and bus rentals with experience and consistency.",
                )}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5 animate-[fade-in-up_1s_cubic-bezier(0.22,1,0.36,1)_0.7s_both]">
                <Link to="/services" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-ink font-display text-xs tracking-[0.25em] hover:bg-brand hover:text-brand-foreground transition-all duration-300 hover:scale-105 rounded-full">
                  {t("ΕΞΕΡΕΥΝΗΣΤΕ", "EXPLORE")}
                  <ArrowUpRight size={16} strokeWidth={2.2} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link to="/contact" className="story-link font-display text-xs tracking-[0.25em] text-white/90 hover:text-brand transition-colors">
                  {t("ΕΠΙΚΟΙΝΩΝΙΑ", "CONTACT")}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 lg:mt-32 xl:mt-48 animate-[scale-in_0.7s_ease-out_0.2s_both]">
              <div className="relative rounded-2xl md:rounded-3xl border border-white/40 bg-white/20 backdrop-blur-2xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.4)] p-4 sm:p-5">
                <div className="flex items-center justify-between mb-4 px-1">
                  <p className="font-display text-[10px] tracking-[0.35em] text-white">{t("ΕΚΔΡΟΜΕΣ", "EXCURSIONS")}</p>
                  <div className="flex items-center gap-2">
                    <button type="button" onClick={() => scrollTrips(-1)} aria-label={t("Προηγούμενες εκδρομές", "Previous excursions")} className="flex items-center justify-center w-8 h-8 rounded-full border border-white/40 bg-white/15 text-white hover:bg-brand hover:border-brand hover:text-brand-foreground transition-all">
                      <ChevronLeft size={16} strokeWidth={2.2} />
                    </button>
                    <button type="button" onClick={() => scrollTrips(1)} aria-label={t("Επόμενες εκδρομές", "Next excursions")} className="flex items-center justify-center w-8 h-8 rounded-full border border-white/40 bg-white/15 text-white hover:bg-brand hover:border-brand hover:text-brand-foreground transition-all">
                      <ChevronRight size={16} strokeWidth={2.2} />
                    </button>
                  </div>
                </div>

                <div ref={tripsScrollerRef} className="-mx-1 overflow-x-auto scrollbar-none scroll-smooth">
                  <div className="flex gap-3 px-1 pb-1 snap-x snap-mandatory">
                    {HERO_TRIPS.map((tr, i) => (
                      <button key={tr.name} type="button" onClick={() => setActiveTrip(tr)} className="group relative shrink-0 w-[42%] sm:w-[32%] aspect-[3/4] overflow-hidden rounded-xl shadow-xl snap-start transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-[fade-in_0.6s_ease-out_both]" style={{ animationDelay: `${0.3 + i * 0.08}s` }}>
                        <img src={tr.img} alt={tr.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                        <div className="absolute top-2 left-2 font-display text-[10px] tracking-[0.2em] text-white/90">{tr.number}.</div>
                        <div className="absolute inset-x-0 bottom-0 p-3 text-left">
                          <div className="font-display font-bold text-white text-sm leading-tight">{tr.name}</div>
                          <div className="mt-1 font-display text-[9px] tracking-[0.2em] text-white/70">{tr.tag}</div>
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

      <Dialog open={!!activeTrip} onOpenChange={(o) => !o && setActiveTrip(null)}>
        <DialogContent className="max-w-md p-0 overflow-hidden border-0 bg-transparent shadow-none [&>button]:hidden">
          {activeTrip && (
            <div className="trip-glass relative overflow-hidden rounded-3xl">
              <img src={activeTrip.img} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/10 to-white/5" />
              <div className="absolute inset-0 bg-ink/40" />

              <button type="button" onClick={() => setActiveTrip(null)} aria-label={t("Κλείσιμο", "Close")} className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full border border-white/25 bg-white/10 backdrop-blur-xl text-white/90 hover:bg-white/20 transition-all flex items-center justify-center">
                <span className="text-lg leading-none">×</span>
              </button>

              <div className="relative z-10 p-7 sm:p-8">
                <DialogHeader className="sr-only">
                  <DialogTitle>{activeTrip.name}</DialogTitle>
                  <DialogDescription>{activeTrip.description}</DialogDescription>
                </DialogHeader>

                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/20 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] bg-ink/40">
                  <img src={activeTrip.img} alt={activeTrip.name} className="absolute inset-0 w-full h-full object-contain" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/60 to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full border border-white/30 bg-white/15 backdrop-blur-md font-display text-[9px] tracking-[0.25em] text-white">{activeTrip.tag}</div>
                </div>

                <div className="mt-6">
                  <div className="font-display text-[10px] tracking-[0.35em] text-white/60">{activeTrip.number}</div>
                  <h3 className="mt-1.5 font-display font-bold text-white text-2xl sm:text-3xl tracking-tight">{activeTrip.name}</h3>
                </div>

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

                <p className="mt-5 text-white/80 leading-relaxed text-sm">{activeTrip.description}</p>

                <div className="mt-6 h-px w-full bg-white/15" />

                <a href={`tel:${PHONE_TEL}`} className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/25 bg-white/15 backdrop-blur-xl text-white font-display text-[11px] tracking-[0.3em] hover:bg-white hover:text-ink transition-all">
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
            <p className="font-display text-xs tracking-[0.4em] text-brand mb-3">{t("ΥΠΗΡΕΣΙΕΣ", "SERVICES")}</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-ink tracking-wide">
              {t("ΤΙ ΠΡΟΣΦΕΡΟΥΜΕ", "WHAT WE OFFER")}
            </h2>
            <div className="mx-auto mt-4 h-[2px] w-14 bg-brand" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {SERVICES.map((s, i) => (
              <Link key={s.title} to={s.to} hash={s.hash} className="service-reveal group block" style={{ transitionDelay: `${i * 160}ms` }}>
                <div className="relative service-img-wrap">
                  <img src={s.img} alt={s.title} width={1024} height={768} loading="lazy" className="w-full h-56 md:h-64 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[1]" />
                  <div className="absolute top-3 left-3 z-[2] px-3 py-1.5 bg-background/90 backdrop-blur-sm text-[10px] font-display tracking-[0.2em] text-brand shadow-soft transition-all duration-500 group-hover:bg-brand group-hover:text-brand-foreground group-hover:-translate-y-1 group-hover:shadow-brand">
                    {s.badge}
                  </div>
                  <div className="mobile-show absolute inset-x-0 bottom-0 z-[2] p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center justify-between gap-3 text-white">
                      <span className="font-display text-xs tracking-[0.25em]">
                        {s.hash === "fleet" ? t("ΔΕΙΤΕ ΤΟΝ ΣΤΟΛΟ", "VIEW THE FLEET") : t("ΔΕΙΤΕ ΠΕΡΙΣΣΟΤΕΡΑ", "SEE MORE")}
                      </span>
                      <span className="service-cta-arrow flex items-center justify-center w-9 h-9 bg-brand text-brand-foreground">
                        <ArrowUpRight size={16} strokeWidth={2.2} />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="service-text">
                  <h3 className="font-display font-bold text-lg md:text-xl text-ink mt-5 md:mt-6 group-hover:text-brand transition-colors">{s.title}</h3>
                  <p className="mt-2 md:mt-3 text-ink/70 leading-relaxed text-sm md:text-base">{s.desc}</p>
                  <div className="js-grow-bar mt-4 h-[2px] w-12 bg-brand transition-all duration-500 group-hover:w-full" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DestinationsSection />

      {/* ABOUT US */}
      <section className="relative py-20 md:py-28 px-5 sm:px-6 bg-background overflow-hidden">
        <img src={aboutMission} alt="" aria-hidden="true" className="pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 w-[55%] max-w-[700px] opacity-[0.07] object-cover hidden md:block" />

        <div className="relative mx-auto max-w-7xl grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="reveal-right order-1 md:order-2 animate-[fade-in_0.8s_ease-out]">
            <div className="relative h-[420px] sm:h-[480px] md:h-[520px] max-w-[520px] mx-auto md:mx-0">
              <div className="absolute left-0 top-0 w-[44%] h-[62%] overflow-hidden shadow-xl img-zoom animate-[scale-in_0.7s_ease-out_0.1s_both]">
                <img src={heroLandscape} alt={t("Ταξιδιώτης σε ορεινό τοπίο", "Traveler in a mountain landscape")} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="absolute right-0 top-[6%] w-[52%] h-[40%] overflow-hidden shadow-xl img-zoom animate-[scale-in_0.7s_ease-out_0.25s_both]">
                <img src={aboutMountains} alt={t("Ορεινός προορισμός", "Mountain destination")} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="absolute right-[4%] bottom-0 w-[46%] h-[50%] overflow-hidden shadow-2xl img-zoom animate-[scale-in_0.7s_ease-out_0.4s_both]">
                <img src={contactBanner} alt={t("Ταξιδιώτης σε λίμνη", "Traveler by a lake")} loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="reveal-left order-2 md:order-1 animate-[fade-in_0.9s_ease-out_0.2s_both]">
            <p className="font-display text-xs tracking-[0.4em] text-brand mb-3">{t("ΣΧΕΤΙΚΑ", "ABOUT")}</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-ink tracking-wide">
              {t("ΓΙΑ ΕΜΑΣ", "ABOUT US")}
            </h2>
            <div className="mt-4 h-[2px] w-14 bg-brand" />
            <div className="mt-6 space-y-5 text-ink/75 leading-relaxed text-base">
              <p>{t(
                "Με έδρα τον Δομοκό Φθιώτιδας, η Bekeridis Travel ταξιδεύει εδώ και χρόνια τους επισκέπτες της σε μοναδικούς προορισμούς στην Ελλάδα και το εξωτερικό. Η εμπειρία, η συνέπεια και η αγάπη μας για το ταξίδι μας έχουν κάνει την πρώτη επιλογή για συλλόγους, σχολεία και ιδιώτες.",
                "Based in Domokos, Phthiotis, Bekeridis Travel has been taking its visitors to unique destinations in Greece and abroad for years. Our experience, consistency and love of travel have made us the first choice for clubs, schools and individuals.",
              )}</p>
              <p>{t(
                "Σχεδιάζουμε κάθε εκδρομή με προσοχή στη λεπτομέρεια, ώστε εσείς να απολαμβάνετε ξέγνοιαστα κάθε στιγμή του ταξιδιού σας.",
                "We plan every excursion with attention to detail, so you can enjoy every moment of your trip with peace of mind.",
              )}</p>
            </div>

            <Link to="/about" className="group mt-8 inline-flex items-center gap-4 font-display text-xs tracking-[0.25em] text-ink">
              <span className="px-6 py-3 border border-ink/30 group-hover:border-brand group-hover:text-brand transition-colors">
                {t("ΠΕΡΙΣΣΟΤΕΡΑ", "MORE")}
              </span>
              <span className="h-px w-10 bg-brand transition-all duration-300 group-hover:w-16" />
            </Link>
          </div>
        </div>
      </section>

      <ReviewsSection />
      <OfficesSection />
      <ContactForm />
    </PageShell>
  );
}
