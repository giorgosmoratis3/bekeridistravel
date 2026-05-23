import { Phone, Smartphone, Mail, MapPin, Clock } from "lucide-react";
import { useT } from "@/lib/i18n";

export function OfficesSection(_props: { eyebrow?: string; title?: string } = {}) {
  const t = useT();
  const OFFICES = [
    {
      title: t("ΓΡΑΦΕΙΟ ΔΟΜΟΚΟΥ", "DOMOKOS OFFICE"),
      address: t("Κεντρική Πλατεία, Δομοκός, Φθιώτιδα", "Central Square, Domokos, Phthiotis"),
      phones: [{ label: "22320 22255", tel: "+302232022255" }],
      mobile: { label: "6977 651 811", tel: "+306977651811" },
      email: "bekeridistravel@yahoo.gr",
      hours: t("Δευ – Σάβ: 08:00 – 14:00 & 17:00 – 20:00 · Κυριακή: Κλειστά", "Mon – Sat: 08:00 – 14:00 & 17:00 – 20:00 · Sunday: Closed"),
      mapQuery: "Κεντρική+Πλατεία+Δομοκού",
      mapsLink: "https://www.google.com/maps/search/?api=1&query=Κεντρική+Πλατεία+Δομοκού",
    },
    {
      title: t("ΥΠΟΚΑΤΑΣΤΗΜΑ ΛΑΜΙΑΣ", "LAMIA BRANCH"),
      address: t("Αγριλιά, Λαμία, Φθιώτιδα", "Agrilia, Lamia, Phthiotis"),
      phones: [{ label: "22310 69197", tel: "+302231069197" }],
      mobile: { label: "6977 651 811", tel: "+306977651811" },
      email: "bekeridistravel@yahoo.gr",
      hours: t("Δευ – Σάβ: 08:00 – 14:00 & 17:00 – 20:00 · Κυριακή: Κλειστά", "Mon – Sat: 08:00 – 14:00 & 17:00 – 20:00 · Sunday: Closed"),
      mapQuery: "Αγριλιά+Φθιώτιδας",
      mapsLink: "https://www.google.com/maps/search/?api=1&query=Αγριλιά+Φθιώτιδας",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28 px-5 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14 md:mb-20 reveal">
          <p className="font-display text-xs md:text-sm tracking-[0.3em] text-brand mb-4">
            {t("Τα Γραφεία μας", "Our Offices")}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink tracking-wide">
            {t("ΕΠΙΚΟΙΝΩΝΙΑ", "CONTACT")}
          </h2>
          <div className="mx-auto mt-5 h-[2px] w-16 bg-brand" />
        </div>

        <div className="space-y-12 md:space-y-16">
          {OFFICES.map((o, idx) => (
            <article key={o.title} className="reveal" style={{ transitionDelay: `${idx * 120}ms` }}>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-ink tracking-wide text-center mb-3">
                <span className="letter-reveal inline-block" aria-label={o.title}>
                  {Array.from(o.title).map((ch, i) => (
                    <span key={`${o.title}-${i}`} className="letter" aria-hidden="true" style={{ animationDelay: `${i * 60}ms` }}>
                      {ch === " " ? "\u00A0" : ch}
                    </span>
                  ))}
                </span>
              </h3>
              <div className="mx-auto h-[2px] w-12 bg-brand mb-10 md:mb-12" />

              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
                <div className={`${idx % 2 === 0 ? "reveal-left" : "reveal-right"} glass-card rounded-lg p-7 md:p-9`}>
                  <div className="relative z-10 divide-y divide-white/40">
                    {o.phones.map((p) => (
                      <a key={p.tel} href={`tel:${p.tel}`} className="hover-bar group flex items-center justify-between py-5">
                        <span className="font-medium text-ink group-hover:text-brand transition-colors">
                          {t("Τ.:", "T.:")} {p.label}
                        </span>
                        <Phone size={20} className="text-brand" strokeWidth={1.5} />
                      </a>
                    ))}
                    <a href={`tel:${o.mobile.tel}`} className="hover-bar group flex items-center justify-between py-5">
                      <span className="font-medium text-ink group-hover:text-brand transition-colors">
                        {t("Κιν.:", "Mob.:")} {o.mobile.label}
                      </span>
                      <Smartphone size={20} className="text-brand" strokeWidth={1.5} />
                    </a>
                    <a href={`mailto:${o.email}`} className="hover-bar group flex items-center justify-between gap-3 py-5">
                      <span className="font-medium text-brand break-all">{o.email}</span>
                      <Mail size={20} className="text-brand flex-shrink-0" strokeWidth={1.5} />
                    </a>
                    <div className="flex items-center justify-between py-5">
                      <span className="text-ink/85">{o.address}</span>
                      <MapPin size={20} className="text-brand flex-shrink-0" strokeWidth={1.5} />
                    </div>
                    <div className="flex items-start justify-between gap-4 py-5">
                      <span className="text-ink/85 text-sm">{o.hours}</span>
                      <Clock size={20} className="text-brand flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                <div className={`${idx % 2 === 0 ? "reveal-right" : "reveal-left"} glass-card rounded-lg overflow-hidden flex flex-col`}>
                  <iframe
                    title={`${o.title} — ${t("Χάρτης", "Map")}`}
                    src={`https://maps.google.com/maps?q=${o.mapQuery}&t=m&z=15&ie=UTF8&iwloc=B&output=embed`}
                    width="100%"
                    height="100%"
                    className="w-full flex-1 min-h-[340px]"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <a href={o.mapsLink} target="_blank" rel="noopener noreferrer" className="hover-bar inline-block font-display text-xs tracking-[0.18em] text-brand pb-1 m-6 w-fit">
                    {t("ΑΝΟΙΓΜΑ ΣΤΟ GOOGLE MAPS →", "OPEN IN GOOGLE MAPS →")}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
