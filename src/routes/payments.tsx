import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/payments")({
  head: () => ({
    meta: [
      { title: "Τρόποι Πληρωμών & Ασφάλεια — Bekeridis Travel" },
      {
        name: "description",
        content:
          "Τρόποι πληρωμής και ασφάλεια συναλλαγών στη Bekeridis Travel.",
      },
      { property: "og:title", content: "Τρόποι Πληρωμών & Ασφάλεια — Bekeridis Travel" },
      {
        property: "og:description",
        content: "Μετρητά, τραπεζική κατάθεση και κάρτες — ασφαλείς συναλλαγές.",
      },
      { property: "og:url", content: "https://www.bekeridistravel.gr/payments" },
    ],
    links: [
      { rel: "canonical", href: "https://www.bekeridistravel.gr/payments" },
    ],
  }),
  component: () => (
    <LegalPage
      eyebrow="ΣΥΝΑΛΛΑΓΕΣ"
      title="ΤΡΟΠΟΙ ΠΛΗΡΩΜΩΝ & ΑΣΦΑΛΕΙΑ"
      intro={
        <p>
          Η Bekeridis Travel προσφέρει πολλούς ασφαλείς τρόπους πληρωμής για
          τη μέγιστη ευκολία και ασφάλεια των πελατών της.
        </p>
      }
      sections={[
        {
          heading: "Μετρητά στο γραφείο",
          body: (
            <p>
              Μπορείτε να εξοφλήσετε με μετρητά στα γραφεία μας σε Δομοκό και
              Λαμία, λαμβάνοντας απόδειξη ή τιμολόγιο.
            </p>
          ),
        },
        {
          heading: "Τραπεζική κατάθεση",
          body: (
            <p>
              Δέχομαστε τραπεζικές καταθέσεις σε λογαριασμούς συνεργαζόμενων
              τραπεζών. Τα στοιχεία των λογαριασμών αποστέλλονται κατά την
              επιβεβαίωση της κράτησης.
            </p>
          ),
        },
        {
          heading: "Χρεωστικές & πιστωτικές κάρτες",
          body: (
            <p>
              Δεχόμαστε όλες τις βασικές κάρτες (Visa, Mastercard, Maestro)
              μέσω ασφαλούς POS τερματικού στο γραφείο.
            </p>
          ),
        },
        {
          heading: "Ασφάλεια συναλλαγών",
          body: (
            <p>
              Όλες οι ηλεκτρονικές συναλλαγές διεξάγονται μέσω πιστοποιημένων
              τραπεζικών συστημάτων με κρυπτογράφηση SSL/TLS. Δεν αποθηκεύουμε
              στοιχεία καρτών στα συστήματά μας.
            </p>
          ),
        },
        {
          heading: "Αποδείξεις & τιμολόγια",
          body: (
            <p>
              Για κάθε συναλλαγή εκδίδεται νόμιμο παραστατικό (απόδειξη ή
              τιμολόγιο). Για έκδοση τιμολογίου επιχείρησης, ενημερώστε μας
              κατά την κράτηση.
            </p>
          ),
        },
      ]}
    />
  ),
});
