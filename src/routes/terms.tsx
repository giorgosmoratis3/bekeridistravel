import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Όροι & Προϋποθέσεις — Bekeridis Travel" }, { name: "description", content: "Όροι και προϋποθέσεις χρήσης." }] }),
  component: TermsPage,
});

function TermsPage() {
  const t = useT();
  return (
    <LegalPage
      eyebrow={t("ΝΟΜΙΚΑ", "LEGAL")}
      title={t("ΟΡΟΙ & ΠΡΟΫΠΟΘΕΣΕΙΣ", "TERMS & CONDITIONS")}
      intro={<p>{t("Οι παρόντες όροι διέπουν τη χρήση του ιστότοπου της Bekeridis Travel και τις υπηρεσίες που παρέχονται. Με τη χρήση του ιστότοπου ή την κράτηση εκδρομής αποδέχεστε ανεπιφύλακτα τους όρους αυτούς.", "These terms govern the use of the Bekeridis Travel website and the services provided. By using the site or booking an excursion you fully accept these terms.")}</p>}
      sections={[
        { heading: t("Γενικοί όροι", "General terms"), body: <p>{t("Η Bekeridis Travel είναι αδειοδοτημένο γραφείο γενικού τουρισμού με έδρα τον Δομοκό Φθιώτιδας. Όλες οι υπηρεσίες παρέχονται σύμφωνα με την ισχύουσα ελληνική και ευρωπαϊκή νομοθεσία περί τουριστικών γραφείων.", "Bekeridis Travel is a licensed general tourism office based in Domokos, Phthiotis. All services are provided in accordance with current Greek and European law on tourism offices.")}</p> },
        { heading: t("Κρατήσεις & συμμετοχή", "Bookings & participation"), body: <p>{t("Η κράτηση θέσης σε εκδρομή ή υπηρεσία θεωρείται έγκυρη μόνο μετά την επιβεβαίωση από το γραφείο μας και την προκαταβολή του συμφωνηθέντος ποσού. Η συμμετοχή σε εκδρομή προϋποθέτει την αποδοχή των επιμέρους όρων του προγράμματος.", "A booking is valid only after confirmation by our office and the deposit of the agreed amount. Participation in an excursion requires acceptance of the specific program terms.")}</p> },
        { heading: t("Τροποποιήσεις προγράμματος", "Program changes"), body: <p>{t("Διατηρούμε το δικαίωμα να τροποποιήσουμε το πρόγραμμα ή να ακυρώσουμε εκδρομή για λόγους ανωτέρας βίας (καιρικές συνθήκες, έκτακτα γεγονότα κ.λπ.) ενημερώνοντας έγκαιρα τους ταξιδιώτες.", "We reserve the right to modify the program or cancel an excursion for reasons of force majeure (weather, emergencies, etc.), notifying travelers in time.")}</p> },
        { heading: t("Ευθύνη", "Liability"), body: <p>{t("Η Bekeridis Travel ενεργεί ως μεσολαβητής μεταξύ ταξιδιωτών και τρίτων προμηθευτών (ξενοδοχεία, μεταφορικές εταιρείες κ.λπ.) και δεν φέρει ευθύνη για παραλείψεις ή αμέλειες των τελευταίων, πέραν όσων ορίζει ρητά ο νόμος.", "Bekeridis Travel acts as an intermediary between travelers and third-party suppliers (hotels, transport companies, etc.) and is not liable for the latter's omissions or negligence, beyond what is expressly provided by law.")}</p> },
        { heading: t("Πνευματικά δικαιώματα", "Intellectual property"), body: <p>{t("Όλο το περιεχόμενο του ιστότοπου (κείμενα, εικόνες, λογότυπα) αποτελεί ιδιοκτησία της Bekeridis Travel και προστατεύεται από τη νομοθεσία περί πνευματικής ιδιοκτησίας.", "All website content (texts, images, logos) is the property of Bekeridis Travel and is protected by intellectual property law.")}</p> },
      ]}
    />
  );
}
