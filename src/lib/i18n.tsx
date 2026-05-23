import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "el" | "en";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const LangContext = createContext<Ctx>({ lang: "el", setLang: () => {} });

const STORAGE_KEY = "bek.lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("el");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "el") setLangState(saved);
    } catch {
      // ignore
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = l;
    }
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

/** Returns a translator function: t(greek, english) -> string in current language */
export function useT() {
  const { lang } = useContext(LangContext);
  return (el: string, en: string) => (lang === "en" ? en : el);
}
