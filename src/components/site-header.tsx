import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const NAV = [
  { to: "/", label: "ΑΡΧΙΚΗ", hash: undefined },
  { to: "/about", label: "Η ΕΤΑΙΡΕΙΑ ΜΑΣ", hash: undefined },
  { to: "/services", label: "ΥΠΗΡΕΣΙΕΣ", hash: undefined },
  { to: "/excursions", label: "ΕΚΔΡΟΜΕΣ", hash: undefined },
  { to: "/", label: "ΑΞΙΟΛΟΓΗΣΕΙΣ", hash: "reviews" },
  { to: "/contact", label: "ΕΠΙΚΟΙΝΩΝΙΑ", hash: undefined },
] as const;

const PHONE = "+306977651811";
const PHONE_DISPLAY = "6977 651 811";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2.5 group ml-2 sm:ml-4 md:ml-6 lg:ml-8">
            <img
              src={logo}
              alt="Bekeridis Travel"
              className="h-9 md:h-11 w-auto transition-transform group-hover:scale-110"
            />
            <div className="leading-none">
              <div
                className={`font-display font-bold text-sm sm:text-base md:text-lg tracking-widest transition-colors duration-500 ${
                  scrolled ? "text-ink" : "text-white"
                }`}
              >
                BEKERIDIS
              </div>
              <div
                className={`font-display text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.3em] transition-colors duration-500 ${
                  scrolled ? "text-muted-foreground" : "text-white/80"
                }`}
              >
                TRAVEL
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 md:ml-8 lg:ml-12 xl:ml-16">
            {NAV.map((item) => {
              const currentHash = location.hash.replace("#", "") || undefined;
              const active =
                location.pathname === item.to && currentHash === item.hash;
              return (
                <Link
                  key={`${item.to}#${item.hash ?? ""}`}
                  to={item.to}
                  hash={item.hash}
                  className={`hover-bar font-display text-[12px] lg:text-sm tracking-[0.14em] lg:tracking-[0.18em] transition-colors duration-500 pb-1 whitespace-nowrap ${
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

          <div className="flex items-center gap-2 md:ml-6 lg:ml-10 xl:ml-14">
            <a
              href={`tel:${PHONE}`}
              className={`hidden sm:inline-flex items-center gap-2 px-4 lg:px-5 py-2 font-display text-xs lg:text-sm tracking-[0.18em] whitespace-nowrap transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 ${
                scrolled
                  ? "bg-brand text-brand-foreground hover:bg-brand/90"
                  : "bg-white text-ink hover:bg-brand hover:text-brand-foreground"
              }`}
            >
              <Phone size={14} />
              <span className="hidden lg:inline">ΚΑΛΕΣΤΕ ΜΑΣ</span>
              <span className="lg:hidden">{PHONE_DISPLAY}</span>
            </a>
            <a
              href={`tel:${PHONE}`}
              className="sm:hidden p-2 text-brand"
              aria-label="Καλέστε μας"
            >
              <Phone size={20} />
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              className={`md:hidden p-2 -mr-2 transition-colors duration-500 ${
                scrolled ? "text-ink" : "text-white"
              }`}
              aria-label="Menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-5 animate-in fade-in slide-in-from-top-2 duration-300">
            <nav className="flex flex-col gap-1 pt-3 border-t border-border">
              {NAV.map((item) => {
                const currentHash = location.hash.replace("#", "") || undefined;
                const active =
                  location.pathname === item.to && currentHash === item.hash;
                return (
                  <Link
                    key={`${item.to}#${item.hash ?? ""}`}
                    to={item.to}
                    hash={item.hash}
                    className={`font-display text-sm tracking-[0.18em] py-3 px-1 border-b border-border/40 ${
                      active ? "text-brand" : "text-ink"
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
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
