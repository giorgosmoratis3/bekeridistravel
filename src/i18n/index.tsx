import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { translateText } from "./dictionary";

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
const GREEK = /[\u0386-\u03ce\u1f00-\u1fff]/;
const ATTRS = ["placeholder", "aria-label", "alt", "title"] as const;

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("el");
  const undo = useRef<Array<() => void>>([]);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "el") setLangState(stored);
    } catch {
      /* ignore */
    }
  }, []);

  // Translate the rendered page (text nodes + a11y attributes) when EN is active.
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang === "en" ? "en" : "el";

    if (lang !== "en") {
      // restore original Greek content
      undo.current.forEach((fn) => fn());
      undo.current = [];
      return;
    }

    let applying = false;

    const translateTextNode = (node: Text) => {
      const raw = node.nodeValue ?? "";
      if (!GREEK.test(raw)) return;
      const key = raw.trim();
      const out = translateText(key);
      if (!out || out === key) return;
      const next = raw.replace(key, out);
      node.nodeValue = next;
      undo.current.push(() => {
        if (node.nodeValue === next) node.nodeValue = raw;
      });
    };

    const translateAttrs = (el: Element) => {
      for (const attr of ATTRS) {
        const raw = el.getAttribute(attr);
        if (!raw || !GREEK.test(raw)) continue;
        const out = translateText(raw.trim());
        if (!out) continue;
        el.setAttribute(attr, out);
        undo.current.push(() => el.setAttribute(attr, raw));
      }
    };

    const walk = (root: Node) => {
      if (root.nodeType === Node.TEXT_NODE) {
        translateTextNode(root as Text);
        return;
      }
      if (root.nodeType !== Node.ELEMENT_NODE) return;
      const el = root as Element;
      if (el.tagName === "SCRIPT" || el.tagName === "STYLE") return;
      translateAttrs(el);
      const walker = document.createTreeWalker(
        el,
        NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
      );
      let n: Node | null = walker.nextNode();
      while (n) {
        if (n.nodeType === Node.TEXT_NODE) translateTextNode(n as Text);
        else translateAttrs(n as Element);
        n = walker.nextNode();
      }
    };

    const run = (nodes: Node[]) => {
      if (applying) return;
      applying = true;
      nodes.forEach(walk);
      applying = false;
    };

    run([document.body]);

    const observer = new MutationObserver((records) => {
      if (applying) return;
      const nodes: Node[] = [];
      for (const r of records) {
        if (r.type === "characterData") nodes.push(r.target);
        else r.addedNodes.forEach((n) => nodes.push(n));
      }
      if (nodes.length) run(nodes);
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };

  const t = (greek: string) =>
    lang === "en" ? (translateText(greek) ?? greek) : greek;

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
