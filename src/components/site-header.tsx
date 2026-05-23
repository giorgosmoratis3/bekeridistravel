import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLang, useT } from "@/lib/i18n";

const PHONE = "+306977651811";
const PHONE_DISPLAY = "6977 651 811";

function FlagButton({
  code,
  active,
  onClick,
  light,
}: {
  code: "el" | "en";
  active: boolean;
  onClick: () => void;
  light: boolean;
}) {
  const label = code === "el" ? "Ελληνικά" : "English";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      className={`relative inline-flex items-center justify-center w-7 h-5 rounded-[3px] overflow-hidden transition-all ${
        active
          ? "ring-2 ring-brand scale-105"
          : light
            ? "ring-1 ring-white/40 opacity-70 hover:opacity-100"
            : "ring-1 ring-ink/20 opacity-70 hover:opacity-100"
      }`}
    >
      {code === "el" ? (
        // Greek flag (simplified)
        <svg viewBox="0 0 27 18" className="w-full h-full" aria-hidden="true">
          <rect width="27" height="18" fill="#fff" />
          <rect y="0" width="27" height="2" fill="#0d5eaf" />
          <rect y="4" width="27" height="2" fill="#0d5eaf" />
          <rect y="8" width="27" height="2" fill="#0d5eaf" />
          <rect y="12" width="27" height="2" fill="#0d5eaf" />
          <rect y="16" width="27" height="2" fill="#0d5eaf" />
          <rect width="10" height="10" fill="#0d5eaf" />
          <rect x="4" y="0" width="2" height="10" fill="#fff" />
          <rect x="0" y="4" width="10" height="2" fill="#fff" />
        </svg>
      ) : (
        // UK flag (simplified Union Jack)
        <svg viewBox="0 0 60 30" className="w-full h-full" aria-hidden="true">
          <rect width="60" height="30" fill="#012169" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="3" />
          <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
          <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="5" />
        </svg>
      )}
    </button>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const t = useT();
  const { lang, setLang } = useLang();

  const NAV = [
    { to: "/", label: t("ΑΡΧΙΚΗ", "HOME"), hash: undefined as string | undefined },
    { to: "/about", label: t("Η ΕΤΑΙΡΕΙΑ ΜΑΣ", "ABOUT US"), hash: undefined },
    { to: "/services", label: t("ΥΠΗΡΕΣΙΕΣ", "SERVICES"), hash: undefined },
    { to: "/excursions", label: t("ΕΚΔΡΟΜΕΣ", "EXCURSIONS"), hash: undefined },
    { to: "/", label: t("ΑΞΙΟΛΟΓΗΣΕΙΣ", "REVIEWS"), hash: "reviews" },
    { to: "/contact", label: t("ΕΠΙΚΟΙΝΩΝΙΑ", "CONTACT"), hash: undefined },
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const solid = scrolled || open;
  const lightFlags = !scrolled && !open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        open
          ? "bg-ink/40 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/10"
          : scrolled
            ? "bg-white/95 backdrop-blur-md"
            : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 lg:gap-8 h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <img
              src={logo}
              alt="Bekeridis Travel"
              className="h-9 md:h-10 lg:h-11 w-auto transition-transform group-hover:scale-110"
            />
            <div className="leading-none">
              <div
                className={`font-display font-bold text-sm md:text-base lg:text-lg tracking-widest transition-colors duration-500 ${
                  scrolled && !open ? "text-ink" : "text-white"
                }`}
              >
                BEKERIDIS
              </div>
              <div
                className={`font-display text-[8px] md:text-[9px] lg:text-[10px] tracking-[0.3em] transition-colors duration-500 ${
                  scrolled && !open ? "text-muted-foreground" : "text-white/80"
                }`}
              >
                TRAVEL
              </div>
            </div>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-3 lg:gap-6 xl:gap-8 min-w-0">
            {NAV.map((item) => {
              const currentHash = location.hash.replace("#", "") || undefined;
              const active =
                location.pathname === item.to && currentHash === item.hash;
              return (
                <Link
                  key={`${item.to}#${item.hash ?? ""}`}
                  to={item.to}
                  hash={item.hash}
                  className={`hover-bar font-display text-[11px] lg:text-[13px] tracking-[0.12em] lg:tracking-[0.18em] transition-colors duration-500 pb-1 whitespace-nowrap ${
                    active
                      ? "text-brand"
                      : scrolled
                        ? "text-ink hover:text-brand"
                        : "text-white hover:text-brand"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="hidden sm:flex flex-col items-end gap-1.5">
              <a
                href={`tel:${PHONE}`}
                className={`inline-flex items-center gap-2 px-3 lg:px-5 py-2 font-display text-[11px] lg:text-sm tracking-[0.18em] whitespace-nowrap transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 ${
                  scrolled
                    ? "bg-brand text-brand-foreground hover:bg-brand/90"
                    : "bg-white text-ink hover:bg-brand hover:text-brand-foreground"
                }`}
              >
                <Phone size={14} />
                <span className="hidden lg:inline">{t("ΚΑΛΕΣΤΕ ΜΑΣ", "CALL US")}</span>
                <span className="lg:hidden">{PHONE_DISPLAY}</span>
              </a>
              <div className="flex items-center gap-1.5">
                <FlagButton code="el" active={lang === "el"} onClick={() => setLang("el")} light={lightFlags} />
                <FlagButton code="en" active={lang === "en"} onClick={() => setLang("en")} light={lightFlags} />
              </div>
            </div>

            <button
              onClick={() => setOpen((v) => !v)}
              className={`md:hidden p-2 -mr-1 transition-colors duration-500 ${
                scrolled && !open ? "text-ink" : "text-white"
              }`}
              aria-label="Menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-5 animate-in fade-in slide-in-from-top-2 duration-300">
            <nav className="flex flex-col gap-1 pt-3 border-t border-white/15">
              {NAV.map((item) => {
                const currentHash = location.hash.replace("#", "") || undefined;
                const active =
                  location.pathname === item.to && currentHash === item.hash;
                return (
                  <Link
                    key={`${item.to}#${item.hash ?? ""}`}
                    to={item.to}
                    hash={item.hash}
                    className={`font-display text-sm tracking-[0.18em] py-3 px-1 border-b border-white/10 ${
                      active ? "text-brand" : "text-white/90 hover:text-brand"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href={`tel:${PHONE}`}
                className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand text-brand-foreground font-display text-xs tracking-[0.2em]"
              >
                <Phone size={14} /> {PHONE_DISPLAY}
              </a>
              <div className="mt-3 flex items-center justify-center gap-3">
                <FlagButton code="el" active={lang === "el"} onClick={() => setLang("el")} light={true} />
                <FlagButton code="en" active={lang === "en"} onClick={() => setLang("en")} light={true} />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
