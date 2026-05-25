import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Πολιτική Επιστροφών — Bekeridis Travel" },
      {
        name: "description",
        content:
          "Πολιτική ακυρώσεων και επιστροφών χρημάτων για τις εκδρομές της Bekeridis Travel.",
      },
      { property: "og:title", content: "Πολιτική Επιστροφών — Bekeridis Travel" },
      {
        property: "og:description",
        content: "Κλίμακα ακυρώσεων και διαδικασία επιστροφών χρημάτων.",
      },
      { property: "og:url", content: "https://bekeridistravel.lovable.app/refund-policy" },
    ],
    links: [
      { rel: "canonical", href: "https://bekeridistravel.lovable.app/refund-policy" },
    ],
  }),
  component: () => (
    <LegalPage
      eyebrow="ΑΚΥΡΩΣΕΙΣ"
      title="ΠΟΛΙΤΙΚΗ ΕΠΙΣΤΡΟΦΩΝ"
      intro={
        <p>
          Η παρούσα πολιτική περιγράφει τη διαδικασία ακυρώσεων κρατήσεων και
          επιστροφών χρημάτων για τις υπηρεσίες της Bekeridis Travel.
        </p>
      }
      sections={[
        {
          heading: "Ακύρωση από τον ταξιδιώτη",
          body: (
            <>
              <p>
                Σε περίπτωση ακύρωσης από τον ταξιδιώτη ισχύει η παρακάτω
                κλίμακα κρατήσεων:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Έως 21 ημέρες πριν: επιστροφή 100% της προκαταβολής.</li>
                <li>20–11 ημέρες πριν: παρακράτηση 30%.</li>
                <li>10–4 ημέρες πριν: παρακράτηση 50%.</li>
                <li>Λιγότερο από 3 ημέρες πριν: μη επιστρεπτέα.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "Ακύρωση από το γραφείο",
          body: (
            <p>
              Εάν η Bekeridis Travel αναγκαστεί να ακυρώσει εκδρομή, ο
              ταξιδιώτης λαμβάνει ολόκληρο το καταβληθέν ποσό ή του προτείνεται
              εναλλακτική εκδρομή ίσης αξίας.
            </p>
          ),
        },
        {
          heading: "Διαδικασία επιστροφής",
          body: (
            <p>
              Οι επιστροφές πραγματοποιούνται με τον ίδιο τρόπο που έγινε η
              πληρωμή, εντός 14 εργάσιμων ημερών από την επιβεβαίωση της
              ακύρωσης.
            </p>
          ),
        },
        {
          heading: "Ανωτέρα βία",
          body: (
            <p>
              Σε περιπτώσεις ανωτέρας βίας (φυσικές καταστροφές, απαγορεύσεις
              κυκλοφορίας κ.λπ.) προσφέρεται κατά προτεραιότητα μετάθεση της
              κράτησης σε επόμενη ημερομηνία χωρίς επιπλέον επιβάρυνση.
            </p>
          ),
        },
      ]}
    />
  ),
});
