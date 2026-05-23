import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useT } from "@/lib/i18n";

function GoogleBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-white">
      <svg width="14" height="14" viewBox="0 0 48 48" aria-hidden="true">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
      </svg>
      <span className="font-display text-[11px] tracking-[0.2em] font-semibold text-ink">GOOGLE REVIEW</span>
    </div>
  );
}

export function ReviewsSection() {
  const t = useT();
  const REVIEWS = [
    { name: t("Μαρία Π.", "Maria P."), role: t("Σχολική εκδρομή", "School excursion"), text: t("Άψογη οργάνωση, ευγενικό προσωπικό και απόλυτη ασφάλεια καθ' όλη τη διαδρομή. Τα παιδιά πέρασαν υπέροχα και οι γονείς ήμασταν ήσυχοι.", "Flawless organization, friendly staff and complete safety throughout the trip. The kids had a great time and we parents felt at ease.") },
    { name: t("Γιάννης Κ.", "Yannis K."), role: t("Πολυήμερο ταξίδι", "Multi-day trip"), text: t("Οργανωμένο ταξίδι σε Μετέωρα και Πήλιο σε άριστο επίπεδο. Καλά ξενοδοχεία, σωστά χρονοδιαγράμματα και πολύ φιλικός οδηγός.", "Organized trip to Meteora and Pelion at an excellent level. Good hotels, accurate schedules and a very friendly driver.") },
    { name: t("Ελένη Σ.", "Eleni S."), role: t("Ενοικίαση λεωφορείου", "Bus rental"), text: t("Νοίκιασα λεωφορείο για βάφτιση. Σύγχρονο όχημα, καθαρό, ευγενικός οδηγός και πολύ καλή εξυπηρέτηση από το γραφείο. Συνιστώ ανεπιφύλακτα.", "I rented a bus for a baptism. Modern, clean vehicle, polite driver and excellent service from the office. Highly recommended.") },
    { name: t("Νίκος Δ.", "Nikos D."), role: t("Εταιρική μετακίνηση", "Corporate transfer"), text: t("Άρτια επαγγελματική εξυπηρέτηση από την πρώτη επικοινωνία μέχρι το τέλος του ταξιδιού. Ακρίβεια στους χρόνους και άνετο όχημα.", "Excellent professional service from the first contact to the end of the trip. Precise timing and a comfortable vehicle.") },
    { name: t("Σοφία Λ.", "Sofia L."), role: t("Σύλλογος γυναικών", "Women's club"), text: t("Οργανώσαμε διήμερη εκδρομή για τον σύλλογό μας και ήμασταν όλες ενθουσιασμένες. Σωστή τιμή, άριστη οργάνωση, ζεστή εξυπηρέτηση.", "We organized a two-day trip for our club and we were all thrilled. Fair price, excellent organization, warm service.") },
  ];

  const [index, setIndex] = useState(0);
  const total = REVIEWS.length;

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 5500);
    return () => clearInterval(id);
  }, [total]);

  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  return (
    <section id="reviews" className="scroll-mt-24 relative py-20 md:py-28 px-5 sm:px-6 bg-white overflow-hidden">
      <div className="relative mx-auto max-w-5xl">
        <div className="text-center mb-12 md:mb-16 reveal">
          <p className="font-display text-xs tracking-[0.4em] text-brand mb-3">
            {t("ΑΞΙΟΛΟΓΗΣΕΙΣ", "REVIEWS")}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink tracking-wide">
            {t("ΤΙ ΛΕΝΕ ΟΙ ΤΑΞΙΔΙΩΤΕΣ ΜΑΣ", "WHAT OUR TRAVELERS SAY")}
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-16 bg-brand" />
        </div>

        <div className="reveal-scale reviews-stage relative h-[440px] sm:h-[420px] md:h-[400px]">
          <div className="reviews-track relative w-full h-full">
            {REVIEWS.map((r, i) => {
              const offset = (i - index + total) % total;
              const pos = offset > total / 2 ? offset - total : offset;
              const abs = Math.abs(pos);
              const isActive = pos === 0;

              const transform = `translateX(${pos * 55}%) translateZ(${isActive ? 0 : -260}px) rotateY(${pos * -22}deg)`;

              return (
                <article
                  key={r.name}
                  onClick={() => {
                    if (isActive) go(1);
                    else if (abs <= 1) setIndex(i);
                  }}
                  className="reviews-card rounded-none mx-auto bg-white border border-border shadow-soft cursor-pointer"
                  style={{
                    transform,
                    opacity: abs > 1 ? 0 : isActive ? 1 : 0.5,
                    zIndex: 10 - abs,
                    pointerEvents: abs > 1 ? "none" : "auto",
                    width: "min(400px, 100%)",
                    aspectRatio: "1 / 1",
                    left: 0,
                    right: 0,
                  }}
                >
                  <div className="relative z-10 flex flex-col h-full p-7 md:p-8">
                    <div className="flex items-center justify-between mb-5">
                      <GoogleBadge />
                    </div>
                    <p className="text-ink/85 leading-relaxed text-[15px] md:text-base flex-1">"{r.text}"</p>
                    <div className="mt-6 pt-5 border-t border-border">
                      <div className="font-display font-semibold text-ink">{r.name}</div>
                      <div className="text-xs tracking-widest text-muted-foreground mt-1 uppercase">{r.role}</div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-8 md:mt-10 flex items-center justify-center gap-5">
          <button onClick={() => go(-1)} aria-label={t("Προηγούμενη αξιολόγηση", "Previous review")} className="p-3 rounded-full border border-border bg-white hover:border-brand hover:scale-110 transition-all">
            <ChevronLeft size={18} className="text-ink" />
          </button>
          <div className="flex items-center gap-2">
            {REVIEWS.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} aria-label={`${t("Αξιολόγηση", "Review")} ${i + 1}`} className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-brand" : "w-2 bg-ink/25"}`} />
            ))}
          </div>
          <button onClick={() => go(1)} aria-label={t("Επόμενη αξιολόγηση", "Next review")} className="p-3 rounded-full border border-border bg-white hover:border-brand hover:scale-110 transition-all">
            <ChevronRight size={18} className="text-ink" />
          </button>
        </div>
      </div>
    </section>
  );
}
