import { Link } from "@tanstack/react-router";
import { Phone, Smartphone, Mail, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 px-5 sm:px-6 overflow-hidden bg-white"
    >

      <div className="relative mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {/* Δομοκός */}
          <div className="reveal-left glass-card rounded-2xl p-7 md:p-8">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <MapPin className="text-brand" size={20} strokeWidth={1.5} />
                <h3 className="font-display text-xl font-bold text-ink tracking-wide">
                  ΔΟΜΟΚΟΣ
                </h3>
              </div>
              <a
                href="tel:+302232022255"
                className="hover-bar flex items-center gap-3 text-ink hover:text-brand transition-colors pb-1 w-fit"
              >
                <Phone size={16} className="text-brand" strokeWidth={1.5} />
                <span className="font-medium">22320 22255</span>
              </a>
            </div>
          </div>

          {/* Λαμία */}
          <div
            className="reveal-right glass-card rounded-2xl p-7 md:p-8"
            style={{ transitionDelay: "120ms" }}
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <MapPin className="text-brand" size={20} strokeWidth={1.5} />
                <h3 className="font-display text-xl font-bold text-ink tracking-wide">
                  ΛΑΜΙΑ
                </h3>
              </div>
              <a
                href="tel:+302231069197"
                className="hover-bar flex items-center gap-3 text-ink hover:text-brand transition-colors pb-1 w-fit"
              >
                <Phone size={16} className="text-brand" strokeWidth={1.5} />
                <span className="font-medium">22310 69197</span>
              </a>
            </div>
          </div>

          {/* Κινητό */}
          <div
            className="reveal-left glass-card rounded-2xl p-7 md:p-8"
            style={{ transitionDelay: "60ms" }}
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <Smartphone className="text-brand" size={20} strokeWidth={1.5} />
                <h3 className="font-display text-xl font-bold text-ink tracking-wide">
                  ΚΙΝΗΤΟ
                </h3>
              </div>
              <a
                href="tel:+306977651811"
                className="hover-bar flex items-center gap-3 text-ink hover:text-brand transition-colors pb-1 w-fit"
              >
                <Phone size={16} className="text-brand" strokeWidth={1.5} />
                <span className="font-medium">6977 651 811</span>
              </a>
            </div>
          </div>

          {/* Email & Ωράριο */}
          <div
            className="reveal-right glass-card rounded-2xl p-7 md:p-8"
            style={{ transitionDelay: "180ms" }}
          >
            <div className="relative z-10 space-y-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="text-brand" size={18} strokeWidth={1.5} />
                  <span className="font-display text-[11px] tracking-[0.3em] text-muted-foreground">
                    EMAIL
                  </span>
                </div>
                <a
                  href="mailto:bekeridistravel@yahoo.gr"
                  className="hover-bar inline-block text-ink hover:text-brand font-medium pb-0.5 break-all"
                >
                  bekeridistravel@yahoo.gr
                </a>
              </div>
              <div className="pt-3 border-t border-white/30">
                <div className="flex items-center gap-3 mb-1">
                  <Clock className="text-brand" size={18} strokeWidth={1.5} />
                  <span className="font-display text-[11px] tracking-[0.3em] text-muted-foreground">
                    ΩΡΑΡΙΟ
                  </span>
                </div>
                <p className="text-ink/85 text-sm mt-1">
                  Δευ – Σάβ: 08:00 – 14:00 & 17:00 – 20:00 · Κυριακή: Κλειστά
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+306977651811"
            className="inline-flex items-center gap-3 px-8 py-3 bg-brand text-brand-foreground font-display text-xs md:text-sm tracking-[0.25em] hover:bg-brand/90 transition-all hover:scale-105"
          >
            <Phone size={16} /> ΚΑΛΕΣΤΕ ΤΩΡΑ
          </a>
          <Link
            to="/contact"
            className="hover-bar font-display text-sm tracking-[0.2em] text-brand pb-1"
          >
            ΟΛΑ ΤΑ ΣΤΟΙΧΕΙΑ →
          </Link>
        </div>
      </div>
    </section>
  );
}
