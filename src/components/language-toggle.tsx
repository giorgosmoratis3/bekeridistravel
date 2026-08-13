import { useLanguage } from "@/i18n";

export function LanguageToggle({ dark }: { dark?: boolean }) {
  const { lang, setLang } = useLanguage();

  const base =
    "font-display text-[11px] lg:text-xs tracking-[0.15em] px-2 py-1 transition-colors duration-300";
  const inactive = dark
    ? "text-muted-foreground hover:text-brand"
    : "text-white/70 hover:text-brand";

  return (
    <div
      className={`inline-flex items-center ${dark ? "border-ink/15" : "border-white/30"} border`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang("el")}
        aria-pressed={lang === "el"}
        className={`${base} ${lang === "el" ? "bg-brand text-brand-foreground" : inactive}`}
      >
        GR
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`${base} ${lang === "en" ? "bg-brand text-brand-foreground" : inactive}`}
      >
        EN
      </button>
    </div>
  );
}
