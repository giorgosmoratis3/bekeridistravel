import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Συμπληρώστε το ονοματεπώνυμο." })
    .max(100, { message: "Το όνομα είναι πολύ μεγάλο." }),
  phone: z
    .string()
    .trim()
    .max(30, { message: "Το τηλέφωνο είναι πολύ μεγάλο." })
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .trim()
    .email({ message: "Μη έγκυρο email." })
    .max(255, { message: "Το email είναι πολύ μεγάλο." }),
  message: z
    .string()
    .trim()
    .min(1, { message: "Γράψτε το μήνυμά σας." })
    .max(1000, { message: "Το μήνυμα είναι πολύ μεγάλο (μέγ. 1000 χαρακτήρες)." }),
});

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

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
      toast.error(parsed.error.issues[0]?.message ?? "Ελέγξτε τη φόρμα.");
      return;
    }

    setSubmitting(true);
    const { name, email, phone, message } = parsed.data;
    const subject = encodeURIComponent(`Νέο μήνυμα από ${name}`);
    const body = encodeURIComponent(
      `Όνομα: ${name}\nEmail: ${email}\nΤηλέφωνο: ${phone ?? ""}\n\n${message}`,
    );
    window.location.href = `mailto:bekeridistravel@yahoo.gr?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Άνοιξε ο email client σας. Ευχαριστούμε!");
      form.reset();
      setSubmitting(false);
    }, 600);
  }

  return (
    <section className="bg-white py-16 md:py-20 px-5 sm:px-6">
      <div className="mx-auto max-w-xl">
        <div className="text-center mb-8 md:mb-10 reveal">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-ink tracking-wide">
            ΣΤΕΙΛΤΕ ΜΑΣ ΜΗΝΥΜΑ
          </h2>
          <div className="mx-auto mt-3 h-[2px] w-14 bg-brand" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 reveal">
          <input
            name="name"
            type="text"
            required
            maxLength={100}
            placeholder="Ονοματεπώνυμο"
            aria-label="Ονοματεπώνυμο"
            className="form-field"
          />
          <input
            name="phone"
            type="tel"
            maxLength={30}
            placeholder="Τηλέφωνο"
            aria-label="Τηλέφωνο"
            className="form-field"
          />
          <input
            name="email"
            type="email"
            required
            maxLength={255}
            placeholder="Email"
            aria-label="Email"
            className="form-field"
          />
          <textarea
            name="message"
            required
            rows={4}
            maxLength={1000}
            placeholder="Μήνυμα"
            aria-label="Μήνυμα"
            className="form-field resize-none"
          />

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-brand text-brand-foreground font-display text-xs md:text-sm tracking-[0.3em] py-3.5 hover:bg-brand/90 hover:shadow-brand transition-all disabled:opacity-60"
          >
            {submitting ? "ΑΠΟΣΤΟΛΗ…" : "ΑΠΟΣΤΟΛΗ"}
          </button>
        </form>
      </div>
    </section>
  );
}