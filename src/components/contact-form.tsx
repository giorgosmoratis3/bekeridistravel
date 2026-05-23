import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { useT, useLang } from "@/lib/i18n";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const t = useT();
  const { lang } = useLang();

  const contactSchema = z.object({
    name: z.string().trim().min(1, { message: t("Συμπληρώστε το ονοματεπώνυμο.", "Please enter your full name.") }).max(100, { message: t("Το όνομα είναι πολύ μεγάλο.", "Name is too long.") }),
    phone: z.string().trim().max(30, { message: t("Το τηλέφωνο είναι πολύ μεγάλο.", "Phone is too long.") }).optional().or(z.literal("")),
    email: z.string().trim().email({ message: t("Μη έγκυρο email.", "Invalid email.") }).max(255, { message: t("Το email είναι πολύ μεγάλο.", "Email is too long.") }),
    message: z.string().trim().min(1, { message: t("Γράψτε το μήνυμά σας.", "Please write your message.") }).max(1000, { message: t("Το μήνυμα είναι πολύ μεγάλο (μέγ. 1000 χαρακτήρες).", "Message is too long (max 1000 characters).") }),
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const parsed = contactSchema.safeParse({
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      message: data.get("message"),
    });

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? t("Ελέγξτε τη φόρμα.", "Please check the form."));
      return;
    }

    setSubmitting(true);
    const { name, email, phone, message } = parsed.data;
    const subject = encodeURIComponent(lang === "en" ? `New message from ${name}` : `Νέο μήνυμα από ${name}`);
    const body = encodeURIComponent(
      lang === "en"
        ? `Name: ${name}\nEmail: ${email}\nPhone: ${phone ?? ""}\n\n${message}`
        : `Όνομα: ${name}\nEmail: ${email}\nΤηλέφωνο: ${phone ?? ""}\n\n${message}`,
    );
    window.location.href = `mailto:bekeridistravel@yahoo.gr?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success(t("Άνοιξε ο email client σας. Ευχαριστούμε!", "Your email client has opened. Thank you!"));
      form.reset();
      setSubmitting(false);
    }, 600);
  }

  return (
    <section className="bg-white py-16 md:py-20 px-5 sm:px-6">
      <div className="mx-auto max-w-xl">
        <div className="text-center mb-8 md:mb-10 reveal">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-ink tracking-wide">
            {t("ΣΤΕΙΛΤΕ ΜΑΣ ΜΗΝΥΜΑ", "SEND US A MESSAGE")}
          </h2>
          <div className="mx-auto mt-3 h-[2px] w-14 bg-brand" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 reveal">
          <input name="name" type="text" required maxLength={100} placeholder={t("Ονοματεπώνυμο", "Full name")} className="form-field" />
          <input name="phone" type="tel" maxLength={30} placeholder={t("Τηλέφωνο", "Phone")} className="form-field" />
          <input name="email" type="email" required maxLength={255} placeholder="Email" className="form-field" />
          <textarea name="message" required rows={4} maxLength={1000} placeholder={t("Μήνυμα", "Message")} className="form-field resize-none" />
          <button type="submit" disabled={submitting} className="w-full bg-brand text-brand-foreground font-display text-xs md:text-sm tracking-[0.3em] py-3.5 hover:bg-brand/90 hover:shadow-brand transition-all disabled:opacity-60">
            {submitting ? t("ΑΠΟΣΤΟΛΗ…", "SENDING…") : t("ΑΠΟΣΤΟΛΗ", "SEND")}
          </button>
        </form>
      </div>
    </section>
  );
}
