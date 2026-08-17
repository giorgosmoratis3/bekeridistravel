import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import type { Session } from "@supabase/supabase-js";
import { toast } from "sonner";
import { Loader2, LogOut, Plus, Save, Trash2, Upload } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { fetchExcursions, type Excursion, type ExcursionKind } from "@/lib/excursions";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Διαχείριση Εκδρομών — Bekeridis Travel" },
      { name: "robots", content: "noindex, nofollow" },
      { name: "description", content: "Εσωτερική σελίδα διαχείρισης εκδρομών." },
      { property: "og:title", content: "Διαχείριση Εκδρομών" },
      { property: "og:description", content: "Εσωτερική σελίδα διαχείρισης εκδρομών." },
    ],
  }),
  component: AdminPage,
});

const EMPTY: Omit<Excursion, "id"> = {
  kind: "ready",
  name: "",
  date_label: "",
  tag: "",
  duration: "",
  location: "",
  description: "",
  image_url: "",
  sort_order: 0,
  published: true,
};

function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setChecking(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) {
      setIsAdmin(false);
      return;
    }
    supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin")
      .maybeSingle()
      .then(({ data }) => setIsAdmin(!!data));
  }, [session]);

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="animate-spin text-brand" />
      </div>
    );
  }

  if (!session) return <AuthCard />;

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-5 py-5 flex items-center justify-between gap-4">
          <div>
            <div className="font-display font-bold text-lg tracking-widest">ΔΙΑΧΕΙΡΙΣΗ</div>
            <div className="text-xs text-white/60 mt-1">{session.user.email}</div>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-xs font-display tracking-[0.2em] text-white/70 hover:text-brand">
              ΣΤΗ ΣΕΛΙΔΑ
            </Link>
            <button
              onClick={async () => {
                await supabase.auth.signOut();
                toast.success("Αποσυνδεθήκατε");
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand text-brand-foreground font-display text-[11px] tracking-[0.2em]"
            >
              <LogOut size={13} /> ΕΞΟΔΟΣ
            </button>
          </div>
        </div>
      </header>

      {isAdmin ? (
        <ExcursionsManager />
      ) : (
        <div className="mx-auto max-w-2xl px-5 py-24 text-center">
          <p className="text-ink/80">
            Ο λογαριασμός σας δεν έχει δικαιώματα διαχειριστή.
          </p>
        </div>
      )}
    </div>
  );
}

function AuthCard() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Καλώς ήρθατε");
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/admin` },
        });
        if (error) throw error;
        toast.success("Ο λογαριασμός δημιουργήθηκε");
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Σφάλμα σύνδεσης");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-5">
      <form
        onSubmit={submit}
        className="w-full max-w-sm bg-white border border-ink/10 shadow-soft p-8"
      >
        <h1 className="font-display text-2xl font-bold text-ink tracking-wide">
          ΕΙΣΟΔΟΣ ADMIN<span className="text-brand">.</span>
        </h1>
        <div className="mt-2 h-[3px] w-12 bg-brand" />

        <label className="block mt-6 text-xs font-display tracking-[0.2em] text-ink/70">EMAIL</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full border border-ink/20 px-3 py-2 text-sm focus:outline-none focus:border-brand"
        />

        <label className="block mt-4 text-xs font-display tracking-[0.2em] text-ink/70">ΚΩΔΙΚΟΣ</label>
        <input
          type="password"
          required
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2 w-full border border-ink/20 px-3 py-2 text-sm focus:outline-none focus:border-brand"
        />

        <button
          type="submit"
          disabled={busy}
          className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-ink text-white font-display text-[11px] tracking-[0.25em] hover:bg-brand transition-colors disabled:opacity-60"
        >
          {busy && <Loader2 size={14} className="animate-spin" />}
          {mode === "login" ? "ΣΥΝΔΕΣΗ" : "ΕΓΓΡΑΦΗ"}
        </button>

        <button
          type="button"
          onClick={() => setMode(mode === "login" ? "signup" : "login")}
          className="mt-4 w-full text-xs text-ink/60 hover:text-brand"
        >
          {mode === "login"
            ? "Πρώτη φορά; Δημιουργία λογαριασμού διαχειριστή"
            : "Έχετε ήδη λογαριασμό; Σύνδεση"}
        </button>
      </form>
    </div>
  );
}

function ExcursionsManager() {
  const [items, setItems] = useState<Excursion[]>([]);
  const [loading, setLoading] = useState(true);

  async function reload() {
    setLoading(true);
    setItems(await fetchExcursions(true));
    setLoading(false);
  }

  useEffect(() => {
    void reload();
  }, []);

  async function addNew(kind: ExcursionKind) {
    const maxOrder = items
      .filter((i) => i.kind === kind)
      .reduce((m, i) => Math.max(m, i.sort_order), 0);
    const { error } = await supabase
      .from("excursions")
      .insert({ ...EMPTY, kind, name: "Νέα εκδρομή", sort_order: maxOrder + 10 });
    if (error) toast.error(error.message);
    else {
      toast.success("Προστέθηκε");
      void reload();
    }
  }

  if (loading) {
    return (
      <div className="py-24 flex justify-center">
        <Loader2 className="animate-spin text-brand" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 space-y-14">
      {(["ready", "custom"] as ExcursionKind[]).map((kind) => (
        <section key={kind}>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h2 className="font-display text-xl md:text-2xl font-bold text-ink tracking-wide">
              {kind === "ready" ? "ΕΤΟΙΜΕΣ ΕΚΔΡΟΜΕΣ" : "ΕΚΔΡΟΜΕΣ ΚΑΤΑ ΠΑΡΑΓΓΕΛΙΑ"}
            </h2>
            <button
              onClick={() => addNew(kind)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand text-brand-foreground font-display text-[11px] tracking-[0.2em]"
            >
              <Plus size={14} /> ΝΕΑ
            </button>
          </div>
          <div className="mt-6 space-y-6">
            {items
              .filter((i) => i.kind === kind)
              .map((item) => (
                <ExcursionRow key={item.id} item={item} onChanged={reload} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function ExcursionRow({ item, onChanged }: { item: Excursion; onChanged: () => void }) {
  const [form, setForm] = useState<Excursion>(item);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => setForm(item), [item]);

  function set<K extends keyof Excursion>(key: K, value: Excursion[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function save() {
    setSaving(true);
    const { id, ...rest } = form;
    const { error } = await supabase.from("excursions").update(rest).eq("id", id);
    setSaving(false);
    if (error) toast.error(error.message);
    else {
      toast.success("Αποθηκεύτηκε");
      onChanged();
    }
  }

  async function remove() {
    if (!window.confirm(`Διαγραφή «${form.name}»;`)) return;
    const { error } = await supabase.from("excursions").delete().eq("id", form.id);
    if (error) toast.error(error.message);
    else {
      toast.success("Διαγράφηκε");
      onChanged();
    }
  }

  async function uploadImage(file: File) {
    setUploading(true);
    const ext = file.name.split(".").pop() || "jpg";
    const path = `${form.id}-${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from("excursions").upload(path, file, {
      upsert: true,
      contentType: file.type,
    });
    setUploading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    set("image_url", `/api/public/excursion-image/${path}`);
    toast.success("Η εικόνα ανέβηκε — πατήστε Αποθήκευση");
  }

  const field =
    "mt-1 w-full border border-ink/20 px-3 py-2 text-sm focus:outline-none focus:border-brand bg-white";
  const label = "text-[10px] font-display tracking-[0.2em] text-ink/60";

  return (
    <article className="bg-white border border-ink/10 shadow-soft p-5 grid gap-5 md:grid-cols-[220px_1fr]">
      <div>
        <div className="relative aspect-[4/3] bg-ink/5 overflow-hidden">
          {form.image_url ? (
            <img src={form.image_url} alt={form.name} className="absolute inset-0 w-full h-full object-cover" />
          ) : null}
        </div>
        <label className="mt-3 inline-flex items-center gap-2 px-3 py-2 border border-ink/20 text-[11px] font-display tracking-[0.2em] cursor-pointer hover:border-brand">
          {uploading ? <Loader2 size={13} className="animate-spin" /> : <Upload size={13} />}
          ΑΛΛΑΓΗ ΕΙΚΟΝΑΣ
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) void uploadImage(f);
            }}
          />
        </label>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <span className={label}>ΤΙΤΛΟΣ</span>
          <input className={field} value={form.name} onChange={(e) => set("name", e.target.value)} />
        </div>
        <div>
          <span className={label}>ΗΜΕΡΟΜΗΝΙΑ</span>
          <input
            className={field}
            value={form.date_label ?? ""}
            placeholder="π.χ. 23 Μαΐου"
            onChange={(e) => set("date_label", e.target.value)}
          />
        </div>
        <div>
          <span className={label}>ΕΤΙΚΕΤΑ</span>
          <input className={field} value={form.tag} onChange={(e) => set("tag", e.target.value)} />
        </div>
        <div>
          <span className={label}>ΔΙΑΡΚΕΙΑ</span>
          <input className={field} value={form.duration} onChange={(e) => set("duration", e.target.value)} />
        </div>
        <div>
          <span className={label}>ΤΟΠΟΘΕΣΙΑ</span>
          <input className={field} value={form.location} onChange={(e) => set("location", e.target.value)} />
        </div>
        <div className="sm:col-span-2">
          <span className={label}>ΠΕΡΙΓΡΑΦΗ</span>
          <textarea
            className={`${field} min-h-24`}
            value={form.description}
            onChange={(e) => set("description", e.target.value)}
          />
        </div>
        <div>
          <span className={label}>ΣΕΙΡΑ ΕΜΦΑΝΙΣΗΣ</span>
          <input
            type="number"
            className={field}
            value={form.sort_order}
            onChange={(e) => set("sort_order", Number(e.target.value))}
          />
        </div>
        <div>
          <span className={label}>ΚΑΤΗΓΟΡΙΑ</span>
          <select
            className={field}
            value={form.kind}
            onChange={(e) => set("kind", e.target.value as ExcursionKind)}
          >
            <option value="ready">Έτοιμη εκδρομή</option>
            <option value="custom">Κατά παραγγελία</option>
          </select>
        </div>

        <div className="sm:col-span-2 flex flex-wrap items-center gap-4 pt-1">
          <label className="inline-flex items-center gap-2 text-sm text-ink/80">
            <input
              type="checkbox"
              checked={form.published}
              onChange={(e) => set("published", e.target.checked)}
            />
            Ορατή στη σελίδα
          </label>
          <button
            onClick={save}
            disabled={saving}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-white font-display text-[11px] tracking-[0.2em] hover:bg-brand transition-colors disabled:opacity-60"
          >
            {saving ? <Loader2 size={13} className="animate-spin" /> : <Save size={13} />}
            ΑΠΟΘΗΚΕΥΣΗ
          </button>
          <button
            onClick={remove}
            className="inline-flex items-center gap-2 px-4 py-2.5 border border-ink/20 text-ink/70 font-display text-[11px] tracking-[0.2em] hover:border-brand hover:text-brand"
          >
            <Trash2 size={13} /> ΔΙΑΓΡΑΦΗ
          </button>
        </div>
      </div>
    </article>
  );
}
