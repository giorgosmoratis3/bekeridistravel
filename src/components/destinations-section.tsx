import meteora from "@/assets/destination-meteora.jpg";
import island from "@/assets/destination-island.jpg";
import athens from "@/assets/destination-athens.jpg";
import village from "@/assets/destination-village.jpg";
import { useT } from "@/lib/i18n";

export function DestinationsSection() {
  const t = useT();
  const DESTINATIONS = [
    { img: meteora, name: t("Μετέωρα", "Meteora"), tag: t("Ημερήσια Εκδρομή", "Day Trip") },
    { img: island, name: t("Νησιά Αιγαίου", "Aegean Islands"), tag: t("Πολυήμερο", "Multi-day") },
    { img: athens, name: t("Αθήνα", "Athens"), tag: t("City Break", "City Break") },
    { img: village, name: t("Ορεινά Χωριά", "Mountain Villages"), tag: t("Φύση", "Nature") },
  ];

  return (
    <section className="py-20 md:py-28 px-5 sm:px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16 reveal">
          <p className="font-display text-xs tracking-[0.4em] text-brand mb-3">
            {t("ΠΡΟΟΡΙΣΜΟΙ", "DESTINATIONS")}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink tracking-wide">
            {t("ΕΠΙΛΕΓΜΕΝΕΣ ΕΜΠΕΙΡΙΕΣ", "SELECTED EXPERIENCES")}
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-16 bg-brand" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {DESTINATIONS.map((d, i) => (
            <article key={d.name} className="reveal img-zoom group relative aspect-[3/4] cursor-pointer" style={{ transitionDelay: `${i * 100}ms` }}>
              <img src={d.img} alt={d.name} width={1024} height={768} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                <div className="font-display text-[10px] md:text-xs tracking-[0.3em] text-white/80">{d.tag}</div>
                <div className="font-display font-bold text-lg md:text-2xl text-white mt-1">{d.name}</div>
                <div className="js-grow-bar mt-3 h-[2px] w-0 bg-brand transition-all duration-500 group-hover:w-full" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
