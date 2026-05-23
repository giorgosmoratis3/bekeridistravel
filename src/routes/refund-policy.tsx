import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({ meta: [{ title: "Πολιτική Επιστροφών — Bekeridis Travel" }, { name: "description", content: "Πολιτική ακυρώσεων και επιστροφών." }] }),
  component: RefundPage,
});

function RefundPage() {
  const t = useT();
  return (
    <LegalPage
      eyebrow={t("ΑΚΥΡΩΣΕΙΣ", "CANCELLATIONS")}
      title={t("ΠΟΛΙΤΙΚΗ ΕΠΙΣΤΡΟΦΩΝ", "REFUND POLICY")}
      intro={<p>{t("Η παρούσα πολιτική περιγράφει τη διαδικασία ακυρώσεων κρατήσεων και επιστροφών χρημάτων για τις υπηρεσίες της Bekeridis Travel.", "This policy describes the booking cancellation and refund procedure for Bekeridis Travel services.")}</p>}
      sections={[
        { heading: t("Ακύρωση από τον ταξιδιώτη", "Cancellation by the traveler"), body: (
          <>
            <p>{t("Σε περίπτωση ακύρωσης από τον ταξιδιώτη ισχύει η παρακάτω κλίμακα κρατήσεων:", "If the traveler cancels, the following retention scale applies:")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("Έως 21 ημέρες πριν: επιστροφή 100% της προκαταβολής.", "Up to 21 days before: 100% deposit refund.")}</li>
              <li>{t("20–11 ημέρες πριν: παρακράτηση 30%.", "20–11 days before: 30% retained.")}</li>
              <li>{t("10–4 ημέρες πριν: παρακράτηση 50%.", "10–4 days before: 50% retained.")}</li>
              <li>{t("Λιγότερο από 3 ημέρες πριν: μη επιστρεπτέα.", "Less than 3 days before: non-refundable.")}</li>
            </ul>
          </>
        ) },
        { heading: t("Ακύρωση από το γραφείο", "Cancellation by the office"), body: <p>{t("Εάν η Bekeridis Travel αναγκαστεί να ακυρώσει εκδρομή, ο ταξιδιώτης λαμβάνει ολόκληρο το καταβληθέν ποσό ή του προτείνεται εναλλακτική εκδρομή ίσης αξίας.", "If Bekeridis Travel has to cancel an excursion, the traveler receives the full amount paid or is offered an alternative excursion of equal value.")}</p> },
        { heading: t("Διαδικασία επιστροφής", "Refund process"), body: <p>{t("Οι επιστροφές πραγματοποιούνται με τον ίδιο τρόπο που έγινε η πληρωμή, εντός 14 εργάσιμων ημερών από την επιβεβαίωση της ακύρωσης.", "Refunds are made via the same payment method, within 14 business days of cancellation confirmation.")}</p> },
        { heading: t("Ανωτέρα βία", "Force majeure"), body: <p>{t("Σε περιπτώσεις ανωτέρας βίας (φυσικές καταστροφές, απαγορεύσεις κυκλοφορίας κ.λπ.) προσφέρεται κατά προτεραιότητα μετάθεση της κράτησης σε επόμενη ημερομηνία χωρίς επιπλέον επιβάρυνση.", "In cases of force majeure (natural disasters, traffic restrictions, etc.), priority is given to rescheduling the booking to a later date at no additional charge.")}</p> },
      ]}
    />
  );
}
