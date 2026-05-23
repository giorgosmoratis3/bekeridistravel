import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/participation-terms")({
  head: () => ({ meta: [{ title: "Όροι Συμμετοχής — Bekeridis Travel" }, { name: "description", content: "Όροι συμμετοχής." }] }),
  component: PartPage,
});

function PartPage() {
  const t = useT();
  return (
    <LegalPage
      eyebrow={t("ΕΚΔΡΟΜΕΣ", "EXCURSIONS")}
      title={t("ΟΡΟΙ ΣΥΜΜΕΤΟΧΗΣ", "PARTICIPATION TERMS")}
      intro={<p>{t("Παρακάτω αναφέρονται οι όροι που διέπουν τη συμμετοχή στις οργανωμένες εκδρομές της Bekeridis Travel.", "Below are the terms governing participation in Bekeridis Travel's organized excursions.")}</p>}
      sections={[
        { heading: t("Δήλωση συμμετοχής", "Registration"), body: <p>{t("Η δήλωση συμμετοχής γίνεται είτε στα γραφεία μας είτε τηλεφωνικά, με ταυτόχρονη καταβολή προκαταβολής. Η εξόφληση πραγματοποιείται έως 7 ημέρες πριν την αναχώρηση.", "Registration is made at our offices or by phone, with simultaneous payment of a deposit. Final payment is made up to 7 days before departure.")}</p> },
        { heading: t("Έγγραφα ταξιδιού", "Travel documents"), body: <p>{t("Ο ταξιδιώτης οφείλει να διαθέτει εν ισχύ ταυτότητα ή διαβατήριο ανάλογα με τον προορισμό. Η Bekeridis Travel δεν φέρει ευθύνη για ελλιπή ταξιδιωτικά έγγραφα.", "Travelers must have a valid ID or passport depending on the destination. Bekeridis Travel is not liable for incomplete travel documents.")}</p> },
        { heading: t("Συμπεριφορά ταξιδιωτών", "Traveler conduct"), body: <p>{t("Οι ταξιδιώτες οφείλουν να σέβονται το πρόγραμμα, τους συνοδούς και τους συνταξιδιώτες τους. Σε περίπτωση ανάρμοστης συμπεριφοράς, διατηρούμε το δικαίωμα αποκλεισμού χωρίς επιστροφή χρημάτων.", "Travelers must respect the program, chaperones and fellow travelers. In case of inappropriate behavior, we reserve the right to exclude them without a refund.")}</p> },
        { heading: t("Αλλαγές προγράμματος", "Program changes"), body: <p>{t("Το πρόγραμμα μπορεί να τροποποιηθεί ελαφρώς στη σειρά των επισκέψεων, χωρίς να αλλάζει το συνολικό περιεχόμενο της εκδρομής, για λόγους πρακτικής διευκόλυνσης.", "The program may be slightly modified in the order of visits, without changing the overall content of the excursion, for practical reasons.")}</p> },
        { heading: t("Ασφάλιση", "Insurance"), body: <p>{t("Όλες οι εκδρομές καλύπτονται από την υποχρεωτική ασφάλιση αστικής ευθύνης. Συνιστάται η προαιρετική ταξιδιωτική ασφάλιση για επιπλέον κάλυψη.", "All excursions are covered by mandatory civil liability insurance. Optional travel insurance is recommended for additional coverage.")}</p> },
      ]}
    />
  );
}
