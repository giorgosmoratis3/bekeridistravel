import {
  Users,
  Snowflake,
  Wifi,
  ShieldCheck,
  Briefcase,
  Gauge,
  Sparkles,
  Music2,
} from "lucide-react";
import fleetBus52 from "@/assets/fleet-bus-52.jpg";
import fleetBus51 from "@/assets/fleet-bus-51.jpg";
import fleetBus35 from "@/assets/fleet-bus-35.jpg";
import fleetBus30 from "@/assets/fleet-bus-30.jpg";
import fleetBus26 from "@/assets/fleet-bus-26.jpg";
import { useT } from "@/lib/i18n";

export const PHONE_TEL = "+306977651811";
export const PHONE_LABEL = "6977 651 811";

export type FleetItem = {
  img: string;
  type: string;
  seats: string;
  desc: string;
  features: { icon: typeof Users; label: string }[];
  details: string;
  ideal: string[];
  specs: { icon: typeof Users; label: string; value: string }[];
};

/** Hook returning the fleet array localized in current language. */
export function useFleet(): FleetItem[] {
  const t = useT();
  return [
    {
      img: fleetBus52,
      type: "BUS",
      seats: "52",
      desc: t(
        "Neoplan — πούλμαν μεγάλης χωρητικότητας 52 θέσεων, ιδανικό για σχολικές εκδρομές, συλλόγους και μεγάλα γκρουπ.",
        "Neoplan — large 52-seat coach, ideal for school excursions, clubs and big groups.",
      ),
      features: [
        { icon: Users, label: t("52 θέσεις", "52 seats") },
        { icon: Snowflake, label: t("Κλιματισμός", "Air conditioning") },
        { icon: Wifi, label: "Wi-Fi" },
        { icon: Briefcase, label: t("Μεγάλος χώρος αποσκευών", "Large luggage space") },
        { icon: ShieldCheck, label: t("Ζώνες ασφαλείας", "Seat belts") },
      ],
      details: t(
        "Neoplan πολυτελές πούλμαν 52 θέσεων με ευρύχωρες, ανακλινόμενες θέσεις, διπλό κλιματισμό και πανοραμικά τζάμια. Ιδανικό για μεγάλα γκρουπ που ταξιδεύουν με άνεση σε μακρινούς προορισμούς.",
        "Neoplan luxury 52-seat coach with spacious reclining seats, dual air conditioning and panoramic windows. Ideal for large groups traveling comfortably to distant destinations.",
      ),
      ideal: [
        t("Σχολικές εκδρομές", "School excursions"),
        t("Πολυήμερα ταξίδια", "Multi-day trips"),
        t("Συλλογικές εκδηλώσεις", "Group events"),
        t("Αθλητικές αποστολές", "Sports teams"),
      ],
      specs: [
        { icon: Users, label: t("Θέσεις", "Seats"), value: "52" },
        { icon: Briefcase, label: t("Αποσκευές", "Luggage"), value: t("Μεγάλος χώρος", "Large space") },
        { icon: Gauge, label: t("Κατηγορία", "Category"), value: "Neoplan Premium Coach" },
        { icon: Music2, label: t("Ψυχαγωγία", "Entertainment"), value: t("Ηχοσύστημα · Μικρόφωνο", "Sound system · Microphone") },
      ],
    },
    {
      img: fleetBus51,
      type: "BUS",
      seats: "51",
      desc: t(
        "Setra — premium πούλμαν 51 θέσεων με κορυφαία γερμανική σχεδίαση, ιδανικό για μεγάλα γκρουπ και πολυήμερα ταξίδια.",
        "Setra — premium 51-seat coach with top German engineering, ideal for large groups and multi-day trips.",
      ),
      features: [
        { icon: Users, label: t("51 θέσεις", "51 seats") },
        { icon: Snowflake, label: t("Κλιματισμός", "Air conditioning") },
        { icon: Wifi, label: "Wi-Fi" },
        { icon: Briefcase, label: t("Μεγάλος χώρος αποσκευών", "Large luggage space") },
        { icon: ShieldCheck, label: t("Ζώνες ασφαλείας", "Seat belts") },
      ],
      details: t(
        "Setra premium coach 51 θέσεων — σύμβολο γερμανικής αξιοπιστίας και πολυτέλειας στις οδικές μεταφορές. Ανακλινόμενες θέσεις, διπλό κλιματισμό και πανοραμικά τζάμια για μέγιστη άνεση σε μακρινούς προορισμούς.",
        "Setra premium 51-seat coach — a symbol of German reliability and luxury in road transport. Reclining seats, dual air conditioning and panoramic windows for maximum comfort on long routes.",
      ),
      ideal: [
        t("Σχολικές εκδρομές", "School excursions"),
        t("Πολυήμερα ταξίδια", "Multi-day trips"),
        t("Συλλογικές εκδηλώσεις", "Group events"),
        t("Αθλητικές αποστολές", "Sports teams"),
      ],
      specs: [
        { icon: Users, label: t("Θέσεις", "Seats"), value: "51" },
        { icon: Briefcase, label: t("Αποσκευές", "Luggage"), value: t("Μεγάλος χώρος", "Large space") },
        { icon: Gauge, label: t("Κατηγορία", "Category"), value: "Setra Premium Coach" },
        { icon: Music2, label: t("Ψυχαγωγία", "Entertainment"), value: t("Ηχοσύστημα · Μικρόφωνο", "Sound system · Microphone") },
      ],
    },
    {
      img: fleetBus35,
      type: "BUS",
      seats: "35",
      desc: t(
        "Mercedes-Benz Turino — λεωφορείο μεσαίας χωρητικότητας, ευέλικτη επιλογή για εταιρικά event, αθλητικούς συλλόγους και ημερήσιες εκδρομές.",
        "Mercedes-Benz Turino — mid-size coach, a flexible choice for corporate events, sports clubs and day trips.",
      ),
      features: [
        { icon: Users, label: t("35 θέσεις", "35 seats") },
        { icon: Snowflake, label: t("Κλιματισμός", "Air conditioning") },
        { icon: Wifi, label: "Wi-Fi" },
        { icon: Briefcase, label: t("Άνετος χώρος αποσκευών", "Comfortable luggage space") },
        { icon: ShieldCheck, label: t("Ζώνες ασφαλείας", "Seat belts") },
      ],
      details: t(
        "Mercedes-Benz Turino 35 θέσεων με αναβαθμισμένη άνεση και ευελιξία. Συνδυάζει χωρητικότητα και ευκολία στην οδήγηση, ιδανικό για μεσαία γκρουπ και ημερήσιες αποδράσεις.",
        "Mercedes-Benz Turino 35-seater with upgraded comfort and flexibility. Combines capacity and easy driving, ideal for mid-size groups and day getaways.",
      ),
      ideal: [
        t("Εταιρικά event", "Corporate events"),
        t("Ημερήσιες εκδρομές", "Day trips"),
        t("Αθλητικούς συλλόγους", "Sports clubs"),
        t("Ιδιωτικές εκδηλώσεις", "Private events"),
      ],
      specs: [
        { icon: Users, label: t("Θέσεις", "Seats"), value: "35" },
        { icon: Briefcase, label: t("Αποσκευές", "Luggage"), value: t("Άνετος χώρος", "Comfortable space") },
        { icon: Gauge, label: t("Κατηγορία", "Category"), value: "Mercedes-Benz Turino" },
        { icon: Sparkles, label: t("Εξοπλισμός", "Equipment"), value: t("Wi-Fi · Κλιματισμός", "Wi-Fi · Air conditioning") },
      ],
    },
    {
      img: fleetBus30,
      type: "BUS",
      seats: "30",
      desc: t(
        "Iveco — ευέλικτο midibus 30 θέσεων με κορυφαία άνεση και αξιοπιστία για μεσαία γκρουπ.",
        "Iveco — flexible 30-seat midibus with top comfort and reliability for mid-size groups.",
      ),
      features: [
        { icon: Users, label: t("30 θέσεις", "30 seats") },
        { icon: Snowflake, label: t("Κλιματισμός", "Air conditioning") },
        { icon: Wifi, label: "Wi-Fi" },
        { icon: Briefcase, label: t("Άνετος χώρος αποσκευών", "Comfortable luggage space") },
        { icon: ShieldCheck, label: t("Ζώνες ασφαλείας", "Seat belts") },
      ],
      details: t(
        "Iveco 30 θέσεων — σύγχρονο midibus που συνδυάζει ιταλική σχεδίαση με υψηλή άνεση επιβατών. Ιδανική επιλογή για μεσαία γκρουπ, ημερήσιες εκδρομές και ταξίδια σε προορισμούς όπου χρειάζεται ευελιξία χωρίς συμβιβασμό στην ποιότητα.",
        "Iveco 30-seater — a modern midibus combining Italian design with high passenger comfort. Ideal for mid-size groups, day trips and destinations that need flexibility without compromising on quality.",
      ),
      ideal: [
        t("Μεσαία γκρουπ", "Mid-size groups"),
        t("Ημερήσιες εκδρομές", "Day trips"),
        t("Εταιρικές μετακινήσεις", "Corporate transfers"),
        t("Ιδιωτικές εκδηλώσεις", "Private events"),
      ],
      specs: [
        { icon: Users, label: t("Θέσεις", "Seats"), value: "30" },
        { icon: Briefcase, label: t("Αποσκευές", "Luggage"), value: t("Άνετος χώρος", "Comfortable space") },
        { icon: Gauge, label: t("Κατηγορία", "Category"), value: "Iveco Midibus" },
        { icon: Sparkles, label: t("Εξοπλισμός", "Equipment"), value: t("Wi-Fi · Κλιματισμός", "Wi-Fi · Air conditioning") },
      ],
    },
    {
      img: fleetBus26,
      type: "MINI BUS",
      seats: "26",
      desc: t(
        "Mercedes-Benz O 818 — ευέλικτο μίνι λεωφορείο για μικρότερα γκρουπ, ιδανικό σε στενούς δρόμους και ορεινούς προορισμούς.",
        "Mercedes-Benz O 818 — flexible mini bus for smaller groups, ideal on narrow roads and mountain destinations.",
      ),
      features: [
        { icon: Users, label: t("26 θέσεις", "26 seats") },
        { icon: Snowflake, label: t("Κλιματισμός", "Air conditioning") },
        { icon: Briefcase, label: t("Πρακτικός χώρος αποσκευών", "Practical luggage space") },
        { icon: ShieldCheck, label: t("Ζώνες ασφαλείας", "Seat belts") },
      ],
      details: t(
        "Mercedes-Benz O 818 Teamstar — ένα κομψό και ευέλικτο μίνι λεωφορείο 26 θέσεων με γερμανική μηχανική αξιοπιστία. Φτάνει εκεί που τα μεγάλα πούλμαν δεν μπορούν, ιδανικό για ορεινές διαδρομές, στενά δρομάκια χωριών και μικρότερες παρέες που θέλουν προσωπική εξυπηρέτηση.",
        "Mercedes-Benz O 818 Teamstar — an elegant and flexible 26-seat mini bus with German engineering reliability. Reaches places larger coaches cannot, ideal for mountain routes, narrow village streets and smaller groups wanting personal service.",
      ),
      ideal: [
        t("Ορεινούς προορισμούς", "Mountain destinations"),
        t("Παραδοσιακά χωριά", "Traditional villages"),
        t("Μικρές παρέες", "Small groups"),
        t("VIP μετακινήσεις", "VIP transfers"),
      ],
      specs: [
        { icon: Users, label: t("Θέσεις", "Seats"), value: "26" },
        { icon: Briefcase, label: t("Αποσκευές", "Luggage"), value: t("Πρακτικός χώρος", "Practical space") },
        { icon: Gauge, label: t("Κατηγορία", "Category"), value: "Mercedes-Benz O 818 Teamstar" },
        { icon: Sparkles, label: t("Εξοπλισμός", "Equipment"), value: t("Κλιματισμός", "Air conditioning") },
      ],
    },
  ];
}

// Backwards-compatible default Greek export (some pages still import FLEET as a const).
// Kept for type safety — components should prefer useFleet().
export const FLEET: FleetItem[] = [];
