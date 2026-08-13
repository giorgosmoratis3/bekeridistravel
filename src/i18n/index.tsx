import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { EN } from "./en";

export type Lang = "el" | "en";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (greek: string) => string;
};

const LanguageContext = createContext<Ctx>({
  lang: "el",
  setLang: () => {},
  t: (g) => g,
});

const STORAGE_KEY = "bekeridis-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("el");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "el") setLangState(stored);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "en" ? "en" : "el";
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };

  const t = (greek: string) => (lang === "en" ? (EN[greek] ?? greek) : greek);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

/** Shorthand: const t = useT(); t("Ελληνικό κείμενο") */
export function useT() {
  return useContext(LanguageContext).t;
}
