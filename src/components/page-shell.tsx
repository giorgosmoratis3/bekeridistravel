import { useEffect, type ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { useReveal } from "@/hooks/use-reveal";

export function PageShell({ children }: { children: ReactNode }) {
  useReveal();
  const location = useLocation();

  // On route change: scroll to hash target if present, otherwise to top.
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      // Small delay to allow the page to render before scrolling.
      const id = window.setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        else window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }, 50);
      return () => window.clearTimeout(id);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
