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

export const FLEET: FleetItem[] = [
  {
    img: fleetBus52,
    type: "BUS",
    seats: "52",
    desc: "Neoplan — πούλμαν μεγάλης χωρητικότητας 52 θέσεων, ιδανικό για σχολικές εκδρομές, συλλόγους και μεγάλα γκρουπ.",
    features: [
      { icon: Users, label: "52 θέσεις" },
      { icon: Snowflake, label: "Κλιματισμός" },
      { icon: Wifi, label: "Wi-Fi" },
      { icon: Briefcase, label: "Μεγάλος χώρος αποσκευών" },
      { icon: ShieldCheck, label: "Ζώνες ασφαλείας" },
    ],
    details:
      "Neoplan πολυτελές πούλμαν 52 θέσεων με ευρύχωρες, ανακλινόμενες θέσεις, διπλό κλιματισμό και πανοραμικά τζάμια. Ιδανικό για μεγάλα γκρουπ που ταξιδεύουν με άνεση σε μακρινούς προορισμούς.",
    ideal: [
      "Σχολικές εκδρομές",
      "Πολυήμερα ταξίδια",
      "Συλλογικές εκδηλώσεις",
      "Αθλητικές αποστολές",
    ],
    specs: [
      { icon: Users, label: "Θέσεις", value: "52" },
      { icon: Briefcase, label: "Αποσκευές", value: "Μεγάλος χώρος" },
      { icon: Gauge, label: "Κατηγορία", value: "Neoplan Premium Coach" },
      { icon: Music2, label: "Ψυχαγωγία", value: "Ηχοσύστημα · Μικρόφωνο" },
    ],
  },
  {
    img: fleetBus51,
    type: "BUS",
    seats: "51",
    desc: "Setra — premium πούλμαν 51 θέσεων με κορυφαία γερμανική σχεδίαση, ιδανικό για μεγάλα γκρουπ και πολυήμερα ταξίδια.",
    features: [
      { icon: Users, label: "51 θέσεις" },
      { icon: Snowflake, label: "Κλιματισμός" },
      { icon: Wifi, label: "Wi-Fi" },
      { icon: Briefcase, label: "Μεγάλος χώρος αποσκευών" },
      { icon: ShieldCheck, label: "Ζώνες ασφαλείας" },
    ],
    details:
      "Setra premium coach 51 θέσεων — σύμβολο γερμανικής αξιοπιστίας και πολυτέλειας στις οδικές μεταφορές. Ανακλινόμενες θέσεις, διπλό κλιματισμό και πανοραμικά τζάμια για μέγιστη άνεση σε μακρινούς προορισμούς.",
    ideal: [
      "Σχολικές εκδρομές",
      "Πολυήμερα ταξίδια",
      "Συλλογικές εκδηλώσεις",
      "Αθλητικές αποστολές",
    ],
    specs: [
      { icon: Users, label: "Θέσεις", value: "51" },
      { icon: Briefcase, label: "Αποσκευές", value: "Μεγάλος χώρος" },
      { icon: Gauge, label: "Κατηγορία", value: "Setra Premium Coach" },
      { icon: Music2, label: "Ψυχαγωγία", value: "Ηχοσύστημα · Μικρόφωνο" },
    ],
  },
  {
    img: fleetBus35,
    type: "BUS",
    seats: "35",
    desc: "Mercedes-Benz Turino — λεωφορείο μεσαίας χωρητικότητας, ευέλικτη επιλογή για εταιρικά event, αθλητικούς συλλόγους και ημερήσιες εκδρομές.",
    features: [
      { icon: Users, label: "35 θέσεις" },
      { icon: Snowflake, label: "Κλιματισμός" },
      { icon: Wifi, label: "Wi-Fi" },
      { icon: Briefcase, label: "Άνετος χώρος αποσκευών" },
      { icon: ShieldCheck, label: "Ζώνες ασφαλείας" },
    ],
    details:
      "Mercedes-Benz Turino 35 θέσεων με αναβαθμισμένη άνεση και ευελιξία. Συνδυάζει χωρητικότητα και ευκολία στην οδήγηση, ιδανικό για μεσαία γκρουπ και ημερήσιες αποδράσεις.",
    ideal: [
      "Εταιρικά event",
      "Ημερήσιες εκδρομές",
      "Αθλητικούς συλλόγους",
      "Ιδιωτικές εκδηλώσεις",
    ],
    specs: [
      { icon: Users, label: "Θέσεις", value: "35" },
      { icon: Briefcase, label: "Αποσκευές", value: "Άνετος χώρος" },
      { icon: Gauge, label: "Κατηγορία", value: "Mercedes-Benz Turino" },
      { icon: Sparkles, label: "Εξοπλισμός", value: "Wi-Fi · Κλιματισμός" },
    ],
  },
  {
    img: fleetBus30,
    type: "BUS",
    seats: "30",
    desc: "Iveco — ευέλικτο midibus 30 θέσεων με κορυφαία άνεση και αξιοπιστία για μεσαία γκρουπ.",
    features: [
      { icon: Users, label: "30 θέσεις" },
      { icon: Snowflake, label: "Κλιματισμός" },
      { icon: Wifi, label: "Wi-Fi" },
      { icon: Briefcase, label: "Άνετος χώρος αποσκευών" },
      { icon: ShieldCheck, label: "Ζώνες ασφαλείας" },
    ],
    details:
      "Iveco 30 θέσεων — σύγχρονο midibus που συνδυάζει ιταλική σχεδίαση με υψηλή άνεση επιβατών. Ιδανική επιλογή για μεσαία γκρουπ, ημερήσιες εκδρομές και ταξίδια σε προορισμούς όπου χρειάζεται ευελιξία χωρίς συμβιβασμό στην ποιότητα.",
    ideal: [
      "Μεσαία γκρουπ",
      "Ημερήσιες εκδρομές",
      "Εταιρικές μετακινήσεις",
      "Ιδιωτικές εκδηλώσεις",
    ],
    specs: [
      { icon: Users, label: "Θέσεις", value: "30" },
      { icon: Briefcase, label: "Αποσκευές", value: "Άνετος χώρος" },
      { icon: Gauge, label: "Κατηγορία", value: "Iveco Midibus" },
      { icon: Sparkles, label: "Εξοπλισμός", value: "Wi-Fi · Κλιματισμός" },
    ],
  },
  {
    img: fleetBus26,
    type: "MINI BUS",
    seats: "26",
    desc: "Mercedes-Benz O 818 — ευέλικτο μίνι λεωφορείο για μικρότερα γκρουπ, ιδανικό σε στενούς δρόμους και ορεινούς προορισμούς.",
    features: [
      { icon: Users, label: "26 θέσεις" },
      { icon: Snowflake, label: "Κλιματισμός" },
      { icon: Briefcase, label: "Πρακτικός χώρος αποσκευών" },
      { icon: ShieldCheck, label: "Ζώνες ασφαλείας" },
    ],
    details:
      "Mercedes-Benz O 818 Teamstar — ένα κομψό και ευέλικτο μίνι λεωφορείο 26 θέσεων με γερμανική μηχανική αξιοπιστία. Φτάνει εκεί που τα μεγάλα πούλμαν δεν μπορούν, ιδανικό για ορεινές διαδρομές, στενά δρομάκια χωριών και μικρότερες παρέες που θέλουν προσωπική εξυπηρέτηση.",
    ideal: [
      "Ορεινούς προορισμούς",
      "Παραδοσιακά χωριά",
      "Μικρές παρέες",
      "VIP μετακινήσεις",
    ],
    specs: [
      { icon: Users, label: "Θέσεις", value: "26" },
      { icon: Briefcase, label: "Αποσκευές", value: "Πρακτικός χώρος" },
      { icon: Gauge, label: "Κατηγορία", value: "Mercedes-Benz O 818 Teamstar" },
      { icon: Sparkles, label: "Εξοπλισμός", value: "Κλιματισμός" },
    ],
  },
];
