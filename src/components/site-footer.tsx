import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const NAV_LINKS: { label: string; to: string; hash?: string }[] = [
  { label: "Σχετικά με εμάς", to: "/about" },
  { label: "Πρόγραμμα εκδρομών", to: "/excursions" },
  { label: "Υπηρεσίες", to: "/services" },
  { label: "Επικοινωνία", to: "/contact" },
];

const INFO_LINKS: { label: string; to: string; hash?: string }[] = [
  { label: "Όροι Συμμετοχής", to: "/participation-terms" },
  { label: "Πολιτική Απορρήτου", to: "/privacy" },
  { label: "Συχνές Ερωτήσεις (FAQ)", to: "/faq" },
  { label: "Τρόποι πληρωμών & Ασφάλεια συναλλαγών", to: "/payments" },
  { label: "Όροι και προϋποθέσεις", to: "/terms" },
  { label: "Πολιτική επιστροφών", to: "/refund-policy" },
];

export function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-20">
        {/* TOP — 3 columns */}
        <div className="grid gap-12 md:gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <img src={logo} alt="Bekeridis Travel" className="h-10 w-auto" />
              <div className="leading-none">
                <div className="font-display font-bold text-2xl tracking-widest text-white">
                  BEKERIDIS
                </div>
                <div className="font-display text-[10px] tracking-[0.3em] text-white/70 mt-1">
                  TRAVEL
                </div>
              </div>
            </Link>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black hover:bg-brand hover:text-brand-foreground transition-colors"
              >
                <Facebook size={18} strokeWidth={2} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black hover:bg-brand hover:text-brand-foreground transition-colors"
              >
                <Instagram size={18} strokeWidth={2} />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black hover:bg-brand hover:text-brand-foreground transition-colors"
              >
                <Youtube size={18} strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-bold text-2xl tracking-wide text-white">
              ΠΛΟΗΓΗΣΗ<span className="text-brand">.</span>
            </h3>
            <ul className="mt-6 space-y-4">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    hash={l.hash}
                    className="text-white/85 hover:text-brand transition-colors text-sm md:text-base"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-2xl tracking-wide text-white">
              ΕΠΙΚΟΙΝΩΝΙΑ<span className="text-brand">.</span>
            </h3>
            <ul className="mt-6 space-y-4 text-sm md:text-base text-white/85">
              <li>
                <a
                  href="tel:+302232022255"
                  className="hover:text-brand transition-colors"
                >
                  22320 22255 · Δομοκός
                </a>
              </li>
              <li>
                <a
                  href="tel:+302231069197"
                  className="hover:text-brand transition-colors"
                >
                  22310 69197 · Λαμία
                </a>
              </li>
              <li>
                <a
                  href="tel:+306977651811"
                  className="hover:text-brand transition-colors"
                >
                  6977 651 811
                </a>
              </li>
              <li>
                <a
                  href="mailto:bekeridistravel@yahoo.gr"
                  className="hover:text-brand transition-colors break-all"
                >
                  bekeridistravel@yahoo.gr
                </a>
              </li>
              <li>Δομοκός · Λαμία, Φθιώτιδα</li>
              <li>Δευτέρα – Σάββατο: 08:00 – 14:00 & 17:00 – 20:00</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 md:mt-16 h-px w-full bg-white/15" />

        {/* BOTTOM — 2 columns */}
        <div className="mt-12 md:mt-14 grid gap-12 md:gap-10 md:grid-cols-2">
          {/* Info / Πληροφορίες */}
          <div>
            <h3 className="font-display font-bold text-2xl tracking-wide text-white">
              ΠΛΗΡΟΦΟΡΙΕΣ<span className="text-brand">.</span>
            </h3>
            <ul className="mt-6 space-y-4">
              {INFO_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    hash={l.hash}
                    className="text-white/85 hover:text-brand transition-colors text-sm md:text-base"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tourism office */}
          <div>
            <h3 className="font-display font-semibold text-base md:text-lg tracking-[0.2em] text-white/90">
              ΓΡΑΦΕΙΟ ΓΕΝΙΚΟΥ ΤΟΥΡΙΣΜΟΥ
            </h3>
            <div className="mt-6 space-y-4 text-sm md:text-base text-white/85">
              <p>Bekeridis Travel — Δομοκός Φθιώτιδας</p>
              <p>Σύγχρονος στόλος πούλμαν & οργανωμένες εκδρομές</p>
            </div>

            <div className="mt-8 inline-flex items-center gap-3 border border-white/15 px-4 py-3">
              <div className="h-10 w-12 bg-[#1a4cd1] flex items-center justify-center">
                <span className="font-display text-[10px] font-bold text-white tracking-wider">
                  GR
                </span>
              </div>
              <div className="leading-tight">
                <div className="text-[10px] tracking-[0.2em] text-white/70 font-display">
                  ΕΛΛΗΝΙΚΟΣ ΟΡΓΑΝΙΣΜΟΣ ΤΟΥΡΙΣΜΟΥ
                </div>
                <div className="text-[10px] tracking-[0.2em] text-white/60 font-display mt-0.5">
                  GREEK NATIONAL TOURISM ORGANISATION
                </div>
                <div className="text-[10px] text-brand mt-1">
                  www.visitgreece.gr
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 md:mt-16 pt-8 border-t border-white/10">
          <p className="text-xs md:text-sm text-white/55">
            © {new Date().getFullYear()} Bekeridis Travel · Γραφείο Γενικού
            Τουρισμού στον Δομοκό & Λαμία. Με την επιφύλαξη παντός δικαιώματος.
          </p>
        </div>
      </div>
    </footer>
  );
}
