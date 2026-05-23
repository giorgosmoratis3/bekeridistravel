import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [{ title: "Συχνές Ερωτήσεις — Bekeridis Travel" }, { name: "description", content: "Απαντήσεις στις πιο συχνές ερωτήσεις." }] }),
  component: FaqPage,
});

function FaqPage() {
  const t = useT();
  return (
    <LegalPage
      eyebrow={t("ΒΟΗΘΕΙΑ", "HELP")}
      title={t("ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ", "FAQ")}
      intro={<p>{t("Συγκεντρώσαμε τις πιο συχνές ερωτήσεις των ταξιδιωτών μας για να σας βοηθήσουμε να βρείτε γρήγορα τις πληροφορίες που χρειάζεστε.", "We've gathered the most common questions from our travelers to help you find the information you need quickly.")}</p>}
      sections={[
        { heading: t("Πώς μπορώ να κλείσω εκδρομή;", "How do I book an excursion?"), body: <p>{t("Μπορείτε να κλείσετε τηλεφωνικά στο 6977 651 811, μέσω της φόρμας επικοινωνίας ή με επίσκεψη στα γραφεία μας σε Δομοκό και Λαμία.", "You can book by phone at 6977 651 811, via the contact form or by visiting our offices in Domokos and Lamia.")}</p> },
        { heading: t("Τι περιλαμβάνεται στην τιμή;", "What's included in the price?"), body: <p>{t("Στην τιμή περιλαμβάνονται οι μεταφορές με σύγχρονο πούλμαν, ο συνοδός και — όπου αναφέρεται — η διαμονή και οι ξεναγήσεις. Δεν περιλαμβάνονται προσωπικά έξοδα και είσοδοι σε χώρους εκτός προγράμματος.", "The price includes transport by modern coach, the chaperone and — where stated — accommodation and tours. Personal expenses and admission fees outside the program are not included.")}</p> },
        { heading: t("Μπορώ να ακυρώσω την κράτησή μου;", "Can I cancel my booking?"), body: <p>{t("Ναι. Δείτε αναλυτικά τους όρους στη σελίδα", "Yes. See the full terms on the")} <a href="/refund-policy" className="text-brand hover:underline">{t("Πολιτική Επιστροφών", "Refund Policy")}</a>{t(" σελίδα.", " page.")}</p> },
        { heading: t("Διοργανώνετε εκδρομές κατά παραγγελία;", "Do you organize custom excursions?"), body: <p>{t("Ναι. Σχεδιάζουμε ιδιωτικές εκδρομές για συλλόγους, σχολεία, εταιρείες και ομάδες φίλων με πλήρη οργάνωση και προσωπική εξυπηρέτηση.", "Yes. We design private excursions for clubs, schools, companies and groups of friends with full organization and personal service.")}</p> },
        { heading: t("Ποιες ώρες λειτουργούν τα γραφεία;", "What are your office hours?"), body: <p>{t("Τα γραφεία μας λειτουργούν Δευτέρα έως Σάββατο, 08:00 – 14:00 & 17:00 – 20:00. Την Κυριακή είμαστε κλειστά αλλά διαθέσιμοι τηλεφωνικά για έκτακτες περιπτώσεις.", "Our offices operate Monday to Saturday, 08:00 – 14:00 & 17:00 – 20:00. On Sundays we are closed but available by phone for emergencies.")}</p> },
        { heading: t("Διαθέτετε πούλμαν για ενοικίαση;", "Do you have coaches for rent?"), body: <p>{t("Ναι, διαθέτουμε σύγχρονο στόλο πούλμαν 26, 35 και 52 θέσεων για κάθε τύπο μετακίνησης. Δείτε τον στόλο μας στη σελίδα", "Yes, we have a modern fleet of 26-, 35- and 52-seat coaches for every type of transfer. See our fleet on the")} <a href="/services" className="text-brand hover:underline">{t("Υπηρεσίες", "Services")}</a>{t(" σελίδα.", " page.")}</p> },
      ]}
    />
  );
}
