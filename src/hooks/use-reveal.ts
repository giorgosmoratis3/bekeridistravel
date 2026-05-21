import { useEffect } from "react";

/**
 * Adds `is-visible` class to elements with `.reveal`, `.reveal-left`,
 * `.reveal-right`, or `.reveal-scale` when they enter the viewport.
 *
 * On touch devices, also toggles `.scroll-active` on `.group` elements
 * so images that use `group-hover:scale-*` animate while in view.
 */
export function useReveal() {
  useEffect(() => {
    const selectors =
      ".reveal, .reveal-left, .reveal-right, .reveal-scale, .letter-reveal, .timeline-item, .service-reveal, .mission-image-wrap, .mission-text";
    const els = document.querySelectorAll<HTMLElement>(selectors);

    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    els.forEach((el) => observer.observe(el));

    // Mobile / touch: simulate hover-scale while card is centered in viewport
    const isTouch =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(hover: none)").matches;

    let groupObserver: IntersectionObserver | null = null;
    if (isTouch) {
      const targets = document.querySelectorAll<HTMLElement>(".group, .hover-bar, .service-reveal");
      groupObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("scroll-active");
            } else {
              entry.target.classList.remove("scroll-active");
            }
          });
        },
        { threshold: 0.5 },
      );
      targets.forEach((el) => groupObserver!.observe(el));
    }

    return () => {
      observer.disconnect();
      groupObserver?.disconnect();
    };
  }, []);
}
