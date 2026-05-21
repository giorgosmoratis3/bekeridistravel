import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { CountUp } from "@/components/count-up";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import aboutMountains from "@/assets/about-mountains.jpg";
import aboutMission from "@/assets/about-mission.jpg";
import aboutHistory2003 from "@/assets/about-history-2003.jpg";
import heroBus from "@/assets/hero-bus.jpg";
import fleet26 from "@/assets/fleet-bus-26.jpg";
import fleet30 from "@/assets/fleet-bus-30.jpg";
import fleet35 from "@/assets/fleet-bus-35.jpg";
import fleet51 from "@/assets/fleet-bus-51.jpg";
import fleet52 from "@/assets/fleet-bus-52.jpg";
import destAthens from "@/assets/destination-athens.jpg";
import destMeteora from "@/assets/destination-meteora.jpg";

const assetUrl = (path: string) => new URL(path, import.meta.url).href;

const IVECO_GALLERY = Array.from({ length: 12 }, (_, index) =>
  assetUrl(`../assets/gallery/iveco-${index + 1}.jpg`),
);
const TOURINO_GALLERY = Array.from({ length: 12 }, (_, index) =>
  assetUrl(`../assets/gallery/tourino-${index + 1}.jpg`),
);
const NEOPLAN_GALLERY = Array.from({ length: 12 }, (_, index) =>
  assetUrl(`../assets/gallery/neoplan-${index + 1}.jpg`),
);

const TIMELINE = [
  {
    year: "2003",
    title: "Η αρχή του ταξιδιού",
    desc: "Ιδρύεται η Bekeridis Travel στον Δομοκό με όραμα και αγάπη για το ταξίδι.",
    img: aboutHistory2003,
  },
  {
    year: "2008",
    title: "Ανανέωση στόλου",
    desc: "Επένδυση σε σύγχρονα και ασφαλή λεωφορεία για άνετες μετακινήσεις.",
    img: heroBus,
  },
  {
    year: "2013",
    title: "Σχολικές & ομαδικές εκδρομές",
    desc: "Καθιερωνόμαστε ως πρώτη επιλογή για σχολεία και συλλόγους της περιοχής.",
    img: aboutMission,
  },
  {
    year: "2018",
    title: "Πολυήμερα ταξίδια",
    desc: "Επεκτεινόμαστε σε οργανωμένα πολυήμερα ταξίδια στην Ελλάδα και το εξωτερικό.",
    img: aboutMountains,
  },
  {
    year: "2021",
    title: "Ενίσχυση στόλου",
    desc: "Νέα οχήματα 26 και 35 θέσεων για ευελιξία σε κάθε τύπο εκδρομής.",
    img: fleet35,
  },
  {
    year: "Σήμερα",
    title: "Συνεχίζουμε δυνατά",
    desc: "Με χιλιάδες ευχαριστημένους ταξιδιώτες, σχεδιάζουμε το επόμενο ταξίδι σας.",
    img: fleet26,
  },
];

const FLEET_PREVIEW = [
  {
    img: fleet52,
    type: "BUS",
    seats: "52",
    desc: "Neoplan πούλμαν 52 θέσεων — ιδανικό για σχολεία, συλλόγους και πολυήμερα ταξίδια.",
    gallery: NEOPLAN_GALLERY,
  },
  {
    img: fleet51,
    type: "BUS",
    seats: "51",
    desc: "Setra premium coach 51 θέσεων — γερμανική πολυτέλεια για μεγάλα γκρουπ.",
    gallery: NEOPLAN_GALLERY,
  },
  {
    img: fleet35,
    type: "BUS",
    seats: "35",
    desc: "Mercedes-Benz Turino — ευέλικτη επιλογή για εταιρικά event και ημερήσιες εκδρομές.",
    gallery: TOURINO_GALLERY,
  },
  {
    img: fleet30,
    type: "BUS",
    seats: "30",
    desc: "Iveco midibus 30 θέσεων — άνετο και αξιόπιστο για μεσαία γκρουπ.",
    gallery: IVECO_GALLERY,
  },
  {
    img: fleet26,
    type: "MINI BUS",
    seats: "26",
    desc: "Mercedes-Benz O 818 — ευέλικτο μίνι λεωφορείο για μικρά γκρουπ και ορεινούς προορισμούς.",
    gallery: IVECO_GALLERY,
  },
] as const;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Σχετικά με εμάς — Bekeridis Travel" },
      {
        name: "description",
        content:
          "Γνωρίστε την ιστορία και την αποστολή του τουριστικού γραφείου Bekeridis Travel στον Δομοκό. Χρόνια εμπειρίας σε εκδρομές και ταξίδια.",
      },
      { property: "og:title", content: "Σχετικά με εμάς — Bekeridis Travel" },
      {
        property: "og:description",
        content: "Η ιστορία, η αποστολή και οι αξίες μας.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const [openFleet, setOpenFleet] = useState<null | (typeof FLEET_PREVIEW)[number]>(null);
  return (
    <PageShell>
      <section
        className="relative min-h-[48vh] md:min-h-[60vh] flex items-center justify-center pt-24 pb-10 md:pt-28 md:pb-14 overflow-hidden"
        style={{
          backgroundImage: `url(${aboutMountains})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/15" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-background/60 to-background" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/40 to-transparent" />
        <div className="relative z-10 w-full text-center">
          <p className="font-display text-xs tracking-[0.4em] text-white/85 mb-4 animate-[fade-in-up_0.8s_ease-out_both]">
            ΓΝΩΡΙΣΤΕ ΜΑΣ
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white tracking-wide animate-[fade-in-up_0.9s_cubic-bezier(0.22,1,0.36,1)_0.2s_both]">
            ΠΟΙΟΙ ΕΙΜΑΣΤΕ<span className="text-brand">.</span>
          </h1>
        </div>
      </section>

      <section className="pt-10 pb-16 md:pt-14 md:pb-20 px-6">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
          <div className="mission-image-wrap reveal-left">
            <div className="mission-image-frame">
              <img
                src={aboutMission}
                alt="Ταξιδιώτες επιβιβάζονται σε λεωφορείο της Bekeridis Travel"
                width={1024}
                height={768}
                loading="lazy"
                className="mission-image w-full h-auto rounded-sm shadow-soft"
              />
              
            </div>
          </div>
          <div className="mission-text reveal-right">
            <p className="mission-eyebrow font-display text-xs tracking-[0.4em] text-brand mb-3">
              ΠΟΙΟΙ ΕΙΜΑΣΤΕ
            </p>
            <h2 className="mission-title font-display text-3xl md:text-4xl font-bold text-ink">
              Η ΑΠΟΣΤΟΛΗ ΜΑΣ
            </h2>
            <div className="mission-divider mt-3 h-[2px] w-12 bg-brand" />
            <p className="mission-paragraph mt-6 text-ink/75 leading-relaxed">
              Η Bekeridis Travel γεννήθηκε από την αγάπη για το ταξίδι και την
              επιθυμία να μοιραζόμαστε αυτή την εμπειρία με τους ανθρώπους του
              τόπου μας. Με έδρα τον Δομοκό, στην καρδιά της Φθιώτιδας,
              σχεδιάζουμε ταξίδια που μένουν αξέχαστα.
            </p>
            <p className="mission-paragraph mission-paragraph-2 mt-4 text-ink/75 leading-relaxed">
              Σύγχρονος και ασφαλής στόλος, έμπειροι οδηγοί, προσωπική επαφή σε
              κάθε λεπτομέρεια της οργάνωσης. Αυτό είναι που μας ξεχωρίζει.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-28 px-5 sm:px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16 reveal">
            <p className="font-display text-xs tracking-[0.4em] text-brand mb-3">
              Η ΔΙΑΔΡΟΜΗ ΜΑΣ
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-ink tracking-wide">
              ΧΡΟΝΟΛΟΓΙΟ
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-16 bg-brand" />
          </div>

          <div className="relative">
            <div className="timeline-line" aria-hidden="true" />

            <ol className="space-y-14 md:space-y-20">
              {TIMELINE.map((item, i) => {
                const isLeft = i % 2 === 0;
                const num = String(i + 1).padStart(2, "0");
                return (
                  <li
                    key={item.year}
                    className={`timeline-item relative md:grid md:grid-cols-2 md:gap-12 md:items-center ${
                      isLeft ? "from-left" : "from-right"
                    }`}
                  >
                    <div className="timeline-dot" aria-hidden="true" />

                    {/* Image-card side */}
                    <div
                      className={`${
                        isLeft ? "" : "md:order-2"
                      } pl-12 md:pl-0`}
                    >
                      <a
                        href="#"
                        className={`timeline-card w-full max-w-lg ${
                          isLeft ? "md:ml-auto md:mr-6" : "md:mr-auto md:ml-6"
                        }`}
                        aria-label={`${item.year} — ${item.title}`}
                      >
                        <img
                          src={item.img}
                          alt={item.title}
                          loading="lazy"
                          className="tc-img"
                        />
                        <div className="tc-overlay" />
                        <div className="tc-badge">{num}</div>
                        <div className="tc-content">
                          <div className="font-display text-[10px] tracking-[0.35em] text-brand mb-1.5">
                            {item.year}
                          </div>
                          <h3 className="font-display text-lg md:text-2xl font-bold text-white leading-tight">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-white/80 leading-relaxed text-sm">
                            {item.desc}
                          </p>
                          <span className="tc-bar" aria-hidden="true" />
                          <span className="tc-cta">
                            ΔΕΣ ΠΕΡΙΣΣΟΤΕΡΑ <ArrowRight size={14} />
                          </span>
                        </div>
                      </a>
                    </div>

                    {/* Empty side (desktop spacing) */}
                    <div
                      aria-hidden="true"
                      className={`hidden md:block ${
                        isLeft ? "" : "md:order-1"
                      }`}
                    >
                      <div
                        className={`font-display font-bold text-[7rem] leading-none tracking-tighter text-ink/5 select-none ${
                          isLeft ? "text-left pl-10" : "text-right pr-10"
                        }`}
                      >
                        {num}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-10">
          {[
            { n: 20, suffix: "+", t: "Χρόνια Εμπειρίας", d: "στον τουριστικό κλάδο" },
            { n: 1000, suffix: "+", t: "Ευχαριστημένοι Ταξιδιώτες", d: "κάθε χρόνο" },
            { n: 100, suffix: "+", t: "Προορισμοί", d: "σε Ελλάδα και εξωτερικό" },
          ].map((s, i) => (
            <div
              key={s.t}
              className="text-center reveal-scale"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <CountUp
                end={s.n}
                suffix={s.suffix}
                className="font-display text-5xl md:text-6xl font-bold text-ink inline-block"
              />
              <div className="mx-auto mt-3 h-[2px] w-10 bg-brand" />
              <div className="mt-3 font-display text-lg text-ink">{s.t}</div>
              <div className="text-sm text-muted-foreground">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FLEET PREVIEW */}
      <section className="py-20 md:py-28 px-5 sm:px-6 bg-white">
        <div className="mx-auto max-w-7xl">
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
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {FLEET_PREVIEW.map((f, i) => (
              <button
                type="button"
                key={f.seats}
                onClick={() => setOpenFleet(f)}
                className="reveal group fleet-card text-left flex flex-col overflow-hidden"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={f.img}
                    alt={`${f.type} ${f.seats} θέσεων`}
                    width={1024}
                    height={640}
                    loading="lazy"
                    className="w-full h-64 md:h-80 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7 md:p-9 flex flex-col flex-1">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1.5 border border-ink/15 bg-white/60 backdrop-blur font-display text-[11px] tracking-[0.25em] text-ink">
                      {f.type}
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-5xl md:text-6xl font-bold text-ink leading-none">
                        {f.seats}
                      </span>
                      <span className="font-display text-[11px] tracking-[0.25em] text-muted-foreground">
                        ΘΕΣΕΙΣ
                      </span>
                    </div>
                  </div>
                  <div className="h-px w-full bg-ink/10 mb-5" />
                  <p className="text-base text-ink/75 leading-relaxed mb-6">
                    {f.desc}
                  </p>
                  <div className="mt-auto pt-4 border-t border-ink/10 flex items-center justify-between">
                    <span className="font-display text-[11px] tracking-[0.3em] text-muted-foreground">
                      ΛΕΠΤΟΜΕΡΕΙΕΣ
                    </span>
                    <ArrowUpRight size={16} className="text-brand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!openFleet} onOpenChange={(o) => !o && setOpenFleet(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden">
          {openFleet && (
            <div>
              <div>
                <img
                  src={openFleet.img}
                  alt={`${openFleet.type} ${openFleet.seats} θέσεων`}
                  className="w-full h-64 md:h-80 object-cover object-center"
                />
              </div>
              <div className="p-6 md:p-8">
                <DialogHeader>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="inline-flex items-center px-3 py-1.5 border border-ink/15 font-display text-[11px] tracking-[0.25em] text-ink">
                      {openFleet.type}
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-4xl font-bold text-ink leading-none">
                        {openFleet.seats}
                      </span>
                      <span className="font-display text-[11px] tracking-[0.25em] text-muted-foreground">
                        ΘΕΣΕΙΣ
                      </span>
                    </div>
                  </div>
                  <DialogTitle className="font-display text-2xl md:text-3xl font-bold text-ink text-left">
                    {openFleet.type} {openFleet.seats} θέσεων
                  </DialogTitle>
                  <DialogDescription className="text-base text-ink/75 leading-relaxed text-left pt-2">
                    {openFleet.desc}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-6 flex items-center gap-3 text-sm text-ink/70">
                  <ArrowRight size={16} className="text-brand" />
                  <span>Ζητήστε προσφορά για το όχημα αυτό από τη φόρμα επικοινωνίας.</span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </PageShell>
  );
}
