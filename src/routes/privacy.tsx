import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Πολιτική Απορρήτου — Bekeridis Travel" }, { name: "description", content: "Πολιτική απορρήτου (GDPR)." }] }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const t = useT();
  return (
    <LegalPage
      eyebrow="GDPR"
      title={t("ΠΟΛΙΤΙΚΗ ΑΠΟΡΡΗΤΟΥ", "PRIVACY POLICY")}
      intro={<p>{t("Η Bekeridis Travel σέβεται την ιδιωτικότητά σας και δεσμεύεται να προστατεύει τα προσωπικά σας δεδομένα σύμφωνα με τον Γενικό Κανονισμό Προστασίας Δεδομένων (GDPR — EU 2016/679).", "Bekeridis Travel respects your privacy and is committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR — EU 2016/679).")}</p>}
      sections={[
        { heading: t("Δεδομένα που συλλέγουμε", "Data we collect"), body: <p>{t("Συλλέγουμε μόνο τα απολύτως απαραίτητα δεδομένα για τη διεκπεραίωση της κράτησης: ονοματεπώνυμο, στοιχεία επικοινωνίας (τηλέφωνο, email) και — όπου χρειάζεται — αριθμό ταυτότητας ή διαβατηρίου.", "We collect only the data strictly necessary to process your booking: full name, contact details (phone, email) and — where needed — ID or passport number.")}</p> },
        { heading: t("Χρήση των δεδομένων", "Use of data"), body: <p>{t("Τα δεδομένα χρησιμοποιούνται αποκλειστικά για την παροχή των υπηρεσιών μας, την επικοινωνία με τον πελάτη και τη συμμόρφωση με τις νόμιμες υποχρεώσεις μας. Δεν διαβιβάζονται σε τρίτους χωρίς τη συγκατάθεσή σας.", "Data is used exclusively to provide our services, communicate with the client and meet our legal obligations. It is not shared with third parties without your consent.")}</p> },
        { heading: t("Δικαιώματά σας", "Your rights"), body: <p>{t("Έχετε δικαίωμα πρόσβασης, διόρθωσης, διαγραφής, περιορισμού της επεξεργασίας και φορητότητας των δεδομένων σας. Για την άσκηση των δικαιωμάτων σας επικοινωνήστε στο bekeridistravel@yahoo.gr.", "You have the right to access, correct, delete, restrict processing of and port your data. To exercise your rights contact bekeridistravel@yahoo.gr.")}</p> },
        { heading: "Cookies", body: <p>{t("Ο ιστότοπος χρησιμοποιεί απαραίτητα cookies για τη σωστή λειτουργία του και — εφόσον δοθεί συγκατάθεση — αναλυτικά cookies για τη βελτίωση της εμπειρίας χρήσης.", "The site uses essential cookies for proper operation and — with consent — analytics cookies to improve the user experience.")}</p> },
        { heading: t("Διατήρηση δεδομένων", "Data retention"), body: <p>{t("Τα δεδομένα διατηρούνται για όσο διάστημα είναι απαραίτητο για τους σκοπούς για τους οποίους συλλέχθηκαν και στη συνέχεια διαγράφονται με ασφαλή τρόπο.", "Data is retained for as long as necessary for the purposes for which it was collected and then securely deleted.")}</p> },
      ]}
    />
  );
}
