import { useEffect } from "react";

/**
 * Adds `is-visible` class to elements with `.reveal`, `.reveal-left`,
 * `.reveal-right`, or `.reveal-scale` when they enter the viewport.
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
    return () => observer.disconnect();
  }, []);
}
