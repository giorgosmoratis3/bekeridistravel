import { commonEn } from "./en/common";
import { homeEn } from "./en/home";
import { aboutEn } from "./en/about";
import { servicesEn } from "./en/services";
import { excursionsEn } from "./en/excursions";
import { legalEn } from "./en/legal";

/** Greek source string -> English translation */
export const EN: Record<string, string> = {
  ...commonEn,
  ...homeEn,
  ...aboutEn,
  ...servicesEn,
  ...excursionsEn,
  ...legalEn,
};
