import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Calendar, Clock, MapPin, Phone } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { useT } from "@/lib/i18n";
import servicesBanner from "@/assets/services-banner.jpg";
import meteora from "@/assets/destination-meteora.jpg";
import island from "@/assets/destination-island.jpg";
import athens from "@/assets/destination-athens.jpg";
import village from "@/assets/destination-village.jpg";
import trikeriImg from "@/assets/excursion-trikeri.jpg";
import prousiotissaImg from "@/assets/excursion-prousiotissa.jpg";
import tinosImg from "@/assets/excursion-tinos.jpg";
import tinosPilgrimageImg from "@/assets/excursion-tinos-pilgrimage.jpg";
import serviceTrips from "@/assets/service-trips.jpg";
import thessalonikiImg from "@/assets/excursion-thessaloniki.jpg";
import ionianImg from "@/assets/excursion-ionian.jpg";
import schoolImg from "@/assets/excursion-school.jpg";
import pelionImg from "@/assets/excursion-pelion.jpg";

const PHONE_TEL = "+306977651811";
const PHONE_LABEL = "6977 651 811";

export const Route = createFileRoute("/excursions")({
  head: () => ({
    meta: [
      { title: "Εκδρομές — Bekeridis Travel" },
      { name: "description", content: "Έτοιμες προγραμματισμένες εκδρομές και custom διοργανώσεις από την Bekeridis Travel." },
      { property: "og:title", content: "Εκδρομές — Bekeridis Travel" },
      { property: "og:description", content: "Δείτε τις προγραμματισμένες εκδρομές μας και τις επιλογές κατά παραγγελία." },
    ],
  }),
  component: ExcursionsPage,
});

function ExcursionsPage() {
  const t = useT();

  const READY = [
    { img: trikeriImg, name: t("Τρίκερι", "Trikeri"), date: t("23 Μαΐου", "23 May"), tag: t("Μονοήμερη Οδική", "One-Day Road Trip"), duration: t("1 ημέρα", "1 day"), location: t("Τρίκερι, Πήλιο", "Trikeri, Pelion"), description: t("Μονοήμερη οδική εκδρομή στο γραφικό Τρίκερι του Πηλίου, με χρόνο για περίπατο και γεύμα δίπλα στη θάλασσα.", "One-day road trip to picturesque Trikeri in Pelion, with time for a walk and a meal by the sea.") },
    { img: prousiotissaImg, name: t("Παναγία Προυσιώτισσα", "Panagia Prousiotissa"), date: t("7 Ιουνίου", "7 June"), tag: t("Προσκύνημα", "Pilgrimage"), duration: t("1 ημέρα", "1 day"), location: t("Ευρυτανία", "Evrytania"), description: t("Μονοήμερη οδική εκδρομή — επίσκεψη στο ιστορικό μοναστήρι της Παναγίας Προυσιώτισσας στα βουνά της Ευρυτανίας.", "One-day road trip — visit to the historic monastery of Panagia Prousiotissa in the Evrytania mountains.") },
    { img: tinosImg, name: t("Τήνος", "Tinos"), date: t("30 – 31 Αυγούστου", "30 – 31 August"), tag: t("Διήμερη", "Two-Day"), duration: t("2 ημέρες", "2 days"), location: t("Τήνος", "Tinos"), description: t("Διήμερη εκδρομή στο νησί της Τήνου, με προσκύνημα στην Παναγία και ελεύθερο χρόνο στη Χώρα.", "Two-day trip to the island of Tinos, with a pilgrimage to Panagia and free time in Chora.") },
    { img: tinosPilgrimageImg, name: t("Τήνος — Προσκύνημα & Περιήγηση", "Tinos — Pilgrimage & Tour"), date: t("16 – 17 Σεπτεμβρίου", "16 – 17 September"), tag: t("Διήμερη Προσκυνηματική", "Two-Day Pilgrimage"), duration: t("2 ημέρες", "2 days"), location: t("Τήνος", "Tinos"), description: t("Ταξίδι με καράβι · Προσκύνημα Αγίας Πελαγίας · Περιήγηση στο νησί με έμπειρους συνοδούς.", "Boat trip · Pilgrimage to Agia Pelagia · Island tour with experienced guides.") },
  ];

  const CUSTOM = [
    { img: athens, name: t("Αθήνα", "Athens"), tag: "City Break", duration: t("Κατ' επιλογή", "On request"), location: t("Αττική", "Attica"), description: t("City break στην πρωτεύουσα: Ακρόπολη, Πλάκα, μουσεία και shopping. Διοργανώνουμε το πρόγραμμα σύμφωνα με τις ανάγκες σας.", "City break in the capital: Acropolis, Plaka, museums and shopping. We arrange the program around your needs.") },
    { img: serviceTrips, name: t("Ευρώπη", "Europe"), tag: t("Εξωτερικό", "Abroad"), duration: t("Κατ' επιλογή", "On request"), location: t("Κεντρική Ευρώπη", "Central Europe"), description: t("Οργανωμένα ταξίδια σε μεγάλους ευρωπαϊκούς προορισμούς με αεροπορικά εισιτήρια, ξενοδοχεία και ξεναγήσεις της επιλογής σας.", "Organized trips to major European destinations with flights, hotels and guided tours of your choice.") },
    { img: island, name: t("Νησιά Αιγαίου", "Aegean Islands"), tag: t("Πολυήμερο", "Multi-day"), duration: t("Κατ' επιλογή", "On request"), location: t("Κυκλάδες", "Cyclades"), description: t("Πολυήμερη απόδραση στα ομορφότερα νησιά του Αιγαίου με διαμονή, μεταφορές και επιλεγμένες ξεναγήσεις στα μέτρα σας.", "A multi-day escape to the most beautiful Aegean islands, with accommodation, transfers and selected tours tailored to you.") },
    { img: meteora, name: t("Μετέωρα", "Meteora"), tag: t("Ημερήσια Εκδρομή", "Day Trip"), duration: t("Κατ' επιλογή", "On request"), location: t("Καλαμπάκα", "Kalambaka"), description: t("Επίσκεψη στα μοναστήρια των Μετεώρων με ξενάγηση. Διοργανώνουμε την εκδρομή την ημερομηνία που σας εξυπηρετεί.", "Visit the Meteora monasteries with a guided tour. We arrange the excursion on the date that suits you.") },
    { img: village, name: t("Ορεινά Χωριά", "Mountain Villages"), tag: t("Φύση", "Nature"), duration: t("Κατ' επιλογή", "On request"), location: t("Πήλιο", "Pelion"), description: t("Διαδρομή στα γραφικά ορεινά χωριά με γεύμα σε παραδοσιακή ταβέρνα και περίπατο στη φύση.", "A route through picturesque mountain villages with a meal at a traditional tavern and a walk in nature.") },
    { img: pelionImg, name: t("Πήλιο & Παραλίες", "Pelion & Beaches"), tag: t("Σαββατοκύριακο", "Weekend"), duration: t("Κατ' επιλογή", "On request"), location: t("Μαγνησία", "Magnesia"), description: t("Απόδραση στο Πήλιο με στάσεις σε γραφικά χωριά, μοναδικές παραλίες και γεύσεις της παραδοσιακής κουζίνας.", "Getaway to Pelion with stops at scenic villages, unique beaches and traditional cuisine.") },
    { img: prousiotissaImg, name: t("Προσκυνηματικά", "Pilgrimages"), tag: t("Θρησκευτικός Τουρισμός", "Religious Tourism"), duration: t("Κατ' επιλογή", "On request"), location: t("Ελλάδα", "Greece"), description: t("Οργανωμένα προσκυνήματα σε σημαντικά μοναστήρια και ιερούς τόπους της Ελλάδας με έμπειρους συνοδούς.", "Organized pilgrimages to important monasteries and holy sites in Greece with experienced guides.") },
    { img: thessalonikiImg, name: t("Θεσσαλονίκη", "Thessaloniki"), tag: "City Break", duration: t("Κατ' επιλογή", "On request"), location: t("Μακεδονία", "Macedonia"), description: t("Διήμερη ή τριήμερη απόδραση στη συμπρωτεύουσα: παραλιακή, Άνω Πόλη, μουσεία και αυθεντική γαστρονομία.", "Two- or three-day escape to the co-capital: waterfront, Upper Town, museums and authentic gastronomy.") },
    { img: ionianImg, name: t("Επτάνησα", "Ionian Islands"), tag: t("Πολυήμερο", "Multi-day"), duration: t("Κατ' επιλογή", "On request"), location: t("Ιόνιο", "Ionian Sea"), description: t("Πολυήμερη εκδρομή σε Κέρκυρα, Λευκάδα ή Κεφαλονιά με μεταφορά, διαμονή και ξεναγήσεις στα ομορφότερα σημεία.", "Multi-day trip to Corfu, Lefkada or Kefalonia with transfer, accommodation and guided tours to the most beautiful spots.") },
    { img: schoolImg, name: t("Σχολικές Εκδρομές", "School Excursions"), tag: t("Ομαδικό", "Group"), duration: t("Κατ' επιλογή", "On request"), location: t("Πανελλαδικά", "Nationwide"), description: t("Ασφαλείς και οργανωμένες σχολικές εκδρομές με έμπειρους οδηγούς και συνοδούς, σχεδιασμένες για κάθε ηλικία.", "Safe, organized school excursions with experienced drivers and chaperones, designed for every age.") },
  ];

  const SectionHeader = ({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) => (
    <div className="text-center mb-10 md:mb-14 reveal">
      <p className="font-display text-xs tracking-[0.4em] text-brand mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl md:text-5xl font-bold text-ink tracking-wide">{title}</h2>
      <div className="mx-auto mt-4 h-[3px] w-16 bg-brand" />
      {subtitle && <p className="mt-5 text-ink/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">{subtitle}</p>}
    </div>
  );

  return (
    <PageShell>
      <section className="relative min-h-[45vh] md:min-h-[55vh] flex items-center justify-center overflow-hidden">
        <img src={servicesBanner} alt="" aria-hidden="true" loading="eager" fetchPriority="high" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/15" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-background/60 to-background" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/40 to-transparent" />
        <div className="relative z-10 w-full text-center">
          <p className="font-display text-xs tracking-[0.4em] text-white/85 mb-4 animate-[fade-in-up_0.8s_ease-out_both]">{t("ΕΞΕΡΕΥΝΗΣΤΕ", "EXPLORE")}</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white tracking-wide animate-[fade-in-up_0.9s_cubic-bezier(0.22,1,0.36,1)_0.2s_both]">
            {t("ΕΚΔΡΟΜΕΣ", "EXCURSIONS")}<span className="text-brand">.</span>
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow={t("ΠΡΟΓΡΑΜΜΑΤΙΣΜΕΝΕΣ", "SCHEDULED")} title={t("ΕΤΟΙΜΕΣ ΕΚΔΡΟΜΕΣ", "READY EXCURSIONS")} subtitle={t("Επιλέξτε από τις προγραμματισμένες εκδρομές μας και κλείστε εύκολα τη θέση σας.", "Choose from our scheduled excursions and easily book your spot.")} />

          <div className="md:hidden grid grid-cols-2 gap-3">
            {READY.map((e) => (
              <a key={e.name + e.date} href={`tel:${PHONE_TEL}`} className="group relative aspect-square overflow-hidden rounded-xl shadow-md active:scale-[0.98] transition-transform">
                <img src={e.img} alt={e.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                <div className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-0.5 bg-brand text-brand-foreground font-display text-[9px] tracking-[0.15em] rounded">
                  <Calendar size={9} strokeWidth={2.2} />{e.date}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-3 text-left">
                  <div className="font-display font-bold text-white text-sm leading-tight">{e.name}</div>
                  <div className="mt-1 font-display text-[9px] tracking-[0.2em] text-white/80">{e.tag.toUpperCase()}</div>
                  <div className="mt-2 flex items-center gap-2 text-[10px] text-white/80">
                    <Clock size={10} strokeWidth={2} />{e.duration}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="hidden md:grid grid-cols-2 gap-8">
            {READY.map((e, i) => (
              <article key={e.name + e.date} className="reveal group relative overflow-hidden bg-white border border-ink/10 shadow-soft hover:shadow-xl transition-all" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={e.img} alt={e.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand text-brand-foreground font-display text-[11px] tracking-[0.2em]">
                    <Calendar size={13} strokeWidth={2} />{e.date}
                  </div>
                </div>
                <div className="p-6">
                  <div className="font-display text-[11px] tracking-[0.3em] text-brand mb-2">{e.tag.toUpperCase()}</div>
                  <h3 className="font-display text-2xl font-bold text-ink">{e.name}</h3>
                  <p className="mt-3 text-ink/75 leading-relaxed text-sm">{e.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-ink/15 bg-white font-display text-[10px] tracking-[0.2em] text-ink">
                      <Clock size={12} strokeWidth={1.8} />{e.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-ink/15 bg-white font-display text-[10px] tracking-[0.2em] text-ink">
                      <MapPin size={12} strokeWidth={1.8} />{e.location}
                    </span>
                  </div>
                  <a href={`tel:${PHONE_TEL}`} className="group/cta mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-white font-display text-[11px] tracking-[0.25em] hover:bg-brand transition-colors">
                    <Phone size={13} strokeWidth={2} />
                    {t("ΚΡΑΤΗΣΗ —", "BOOK —")} {PHONE_LABEL}
                    <ArrowUpRight size={13} className="transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-6 bg-background">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow={t("ΚΑΤΑ ΠΑΡΑΓΓΕΛΙΑ", "ON REQUEST")} title={t("ΕΚΔΡΟΜΕΣ", "EXCURSIONS")} subtitle={t("Επιλέξτε προορισμό και επικοινωνήστε μαζί μας — διοργανώνουμε την εκδρομή στα μέτρα σας.", "Pick a destination and contact us — we'll arrange the excursion tailored to you.")} />

          <div className="md:hidden grid grid-cols-2 gap-3">
            {CUSTOM.map((e) => (
              <a key={e.name} href={`tel:${PHONE_TEL}`} className="group relative aspect-square overflow-hidden rounded-xl shadow-md active:scale-[0.98] transition-transform">
                <img src={e.img} alt={e.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-left">
                  <div className="font-display font-bold text-white text-sm leading-tight">{e.name}</div>
                  <div className="mt-1 font-display text-[9px] tracking-[0.2em] text-white/80">{e.tag.toUpperCase()}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="hidden md:block space-y-24">
            {CUSTOM.map((e, i) => (
              <article key={e.name} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                <div className={i % 2 === 0 ? "reveal-left" : "reveal-right md:[direction:ltr]"}>
                  <img src={e.img} alt={e.name} width={1024} height={768} loading="lazy" className="w-full h-auto shadow-soft hover:scale-[1.02] transition-transform duration-700" />
                </div>
                <div className={i % 2 === 0 ? "reveal-right" : "reveal-left md:[direction:ltr]"}>
                  <div className="font-display text-xs tracking-[0.3em] text-brand mb-3">{String(i + 1).padStart(2, "0")} · {e.tag.toUpperCase()}</div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-ink">{e.name}</h3>
                  <p className="mt-6 text-ink/75 leading-relaxed text-base md:text-lg">{e.description}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-ink/15 bg-white/60 font-display text-[11px] tracking-[0.2em] text-ink">
                      <Clock size={13} strokeWidth={1.8} />{e.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-ink/15 bg-white/60 font-display text-[11px] tracking-[0.2em] text-ink">
                      <MapPin size={13} strokeWidth={1.8} />{e.location}
                    </span>
                  </div>
                  <a href={`tel:${PHONE_TEL}`} className="group mt-8 inline-flex items-center gap-3 px-6 py-3 bg-ink text-white font-display text-xs tracking-[0.25em] hover:bg-brand transition-colors">
                    <Phone size={14} strokeWidth={2} />
                    {t("ΕΠΙΚΟΙΝΩΝΙΑ —", "CONTACT —")} {PHONE_LABEL}
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display text-xs tracking-[0.4em] text-brand mb-3">{t("ΠΡΟΣΩΠΟΠΟΙΗΜΕΝΗ ΕΚΔΡΟΜΗ", "CUSTOM EXCURSION")}</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink tracking-wide">{t("ΘΕΛΕΤΕ ΚΑΤΙ ΔΙΑΦΟΡΕΤΙΚΟ;", "LOOKING FOR SOMETHING DIFFERENT?")}</h2>
          <div className="mx-auto mt-4 h-[2px] w-14 bg-brand" />
          <p className="mt-6 text-ink/75 leading-relaxed text-base md:text-lg">
            {t("Σχεδιάζουμε εκδρομές κατά παραγγελία για συλλόγους, σχολεία και ιδιώτες. Επικοινωνήστε μαζί μας για να φτιάξουμε το ιδανικό πρόγραμμα.", "We design custom excursions for clubs, schools and individuals. Contact us to build the perfect program.")}
          </p>
          <Link to="/contact" className="group mt-8 inline-flex items-center gap-3 px-7 py-3.5 bg-brand text-brand-foreground font-display text-xs tracking-[0.25em] hover:bg-ink transition-colors">
            {t("ΕΠΙΚΟΙΝΩΝΙΑ", "CONTACT")}
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
