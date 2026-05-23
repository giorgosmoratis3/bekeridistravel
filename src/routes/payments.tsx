import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/payments")({
  head: () => ({ meta: [{ title: "Τρόποι Πληρωμών — Bekeridis Travel" }, { name: "description", content: "Τρόποι πληρωμής και ασφάλεια συναλλαγών." }] }),
  component: PaymentsPage,
});

function PaymentsPage() {
  const t = useT();
  return (
    <LegalPage
      eyebrow={t("ΣΥΝΑΛΛΑΓΕΣ", "TRANSACTIONS")}
      title={t("ΤΡΟΠΟΙ ΠΛΗΡΩΜΩΝ & ΑΣΦΑΛΕΙΑ", "PAYMENT METHODS & SECURITY")}
      intro={<p>{t("Η Bekeridis Travel προσφέρει πολλούς ασφαλείς τρόπους πληρωμής για τη μέγιστη ευκολία και ασφάλεια των πελατών της.", "Bekeridis Travel offers several secure payment methods for maximum customer convenience and safety.")}</p>}
      sections={[
        { heading: t("Μετρητά στο γραφείο", "Cash at the office"), body: <p>{t("Μπορείτε να εξοφλήσετε με μετρητά στα γραφεία μας σε Δομοκό και Λαμία, λαμβάνοντας απόδειξη ή τιμολόγιο.", "You can pay in cash at our offices in Domokos and Lamia, receiving a receipt or invoice.")}</p> },
        { heading: t("Τραπεζική κατάθεση", "Bank deposit"), body: <p>{t("Δέχομαστε τραπεζικές καταθέσεις σε λογαριασμούς συνεργαζόμενων τραπεζών. Τα στοιχεία των λογαριασμών αποστέλλονται κατά την επιβεβαίωση της κράτησης.", "We accept bank transfers to accounts at partner banks. Account details are sent upon booking confirmation.")}</p> },
        { heading: t("Χρεωστικές & πιστωτικές κάρτες", "Debit & credit cards"), body: <p>{t("Δεχόμαστε όλες τις βασικές κάρτες (Visa, Mastercard, Maestro) μέσω ασφαλούς POS τερματικού στο γραφείο.", "We accept all major cards (Visa, Mastercard, Maestro) via a secure POS terminal at the office.")}</p> },
        { heading: t("Ασφάλεια συναλλαγών", "Transaction security"), body: <p>{t("Όλες οι ηλεκτρονικές συναλλαγές διεξάγονται μέσω πιστοποιημένων τραπεζικών συστημάτων με κρυπτογράφηση SSL/TLS. Δεν αποθηκεύουμε στοιχεία καρτών στα συστήματά μας.", "All electronic transactions go through certified banking systems with SSL/TLS encryption. We do not store card details on our systems.")}</p> },
        { heading: t("Αποδείξεις & τιμολόγια", "Receipts & invoices"), body: <p>{t("Για κάθε συναλλαγή εκδίδεται νόμιμο παραστατικό (απόδειξη ή τιμολόγιο). Για έκδοση τιμολογίου επιχείρησης, ενημερώστε μας κατά την κράτηση.", "A legal document (receipt or invoice) is issued for every transaction. For a business invoice, let us know at the time of booking.")}</p> },
      ]}
    />
  );
}
