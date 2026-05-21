import { Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { FleetItem } from "@/data/fleet";
import { PHONE_TEL, PHONE_LABEL } from "@/data/fleet";

type Props = {
  fleet: FleetItem | null;
  onClose: () => void;
};

export function FleetDialog({ fleet, onClose }: Props) {
  return (
    <Dialog open={!!fleet} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-sm sm:max-w-md p-0 overflow-hidden border border-ink/10 bg-white shadow-2xl rounded-2xl [&>button]:hidden">
        {fleet && (
          <div className="relative max-h-[85vh] flex flex-col">
            <button
              type="button"
              onClick={onClose}
              aria-label="Κλείσιμο"
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full border border-ink/15 bg-white text-ink/70 hover:bg-ink hover:text-white transition-all flex items-center justify-center"
            >
              <span className="text-base leading-none">×</span>
            </button>

            <div className="p-5 sm:p-6 overflow-y-auto">
              <DialogHeader className="sr-only">
                <DialogTitle>
                  {fleet.type} {fleet.seats} θέσεων
                </DialogTitle>
                <DialogDescription>{fleet.details}</DialogDescription>
              </DialogHeader>

              <div className="relative h-36 sm:h-44 overflow-hidden rounded-xl border border-ink/10 bg-ink/5">
                <img
                  src={fleet.img}
                  alt={`${fleet.type} ${fleet.seats} θέσεων`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-brand font-display text-[9px] tracking-[0.25em] text-brand-foreground">
                  {fleet.type}
                </div>
              </div>

              <div className="mt-4 flex items-end justify-between gap-3">
                <div>
                  <div className="font-display text-[9px] tracking-[0.3em] text-brand">
                    ΧΩΡΗΤΙΚΟΤΗΤΑ
                  </div>
                  <h3 className="mt-1 font-display font-bold text-ink text-xl sm:text-2xl tracking-tight">
                    {fleet.seats} θέσεων
                  </h3>
                </div>
                <span className="font-display text-4xl sm:text-5xl font-bold text-ink/10 leading-none">
                  {fleet.seats}
                </span>
              </div>

              <p className="mt-3 text-ink/75 leading-relaxed text-[13px]">
                {fleet.details}
              </p>

              <div className="mt-4 grid grid-cols-2 gap-1.5">
                {fleet.specs.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="rounded-lg border border-ink/10 bg-ink/[0.03] p-2.5"
                  >
                    <div className="flex items-center gap-1.5 text-ink/55 text-[8px] tracking-[0.2em] font-display uppercase">
                      <Icon size={10} strokeWidth={1.8} />
                      {label}
                    </div>
                    <div className="mt-0.5 text-ink text-[12px] font-medium">
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <div className="font-display text-[9px] tracking-[0.3em] text-brand mb-2">
                  ΕΞΟΠΛΙΣΜΟΣ
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {fleet.features.map(({ icon: Icon, label }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-ink/15 bg-white text-[10px] text-ink/80"
                    >
                      <Icon size={11} strokeWidth={1.8} />
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <div className="font-display text-[9px] tracking-[0.3em] text-brand mb-2">
                  ΙΔΑΝΙΚΟ ΓΙΑ
                </div>
                <ul className="grid grid-cols-2 gap-y-1 gap-x-3 text-ink/80 text-[12px]">
                  {fleet.ideal.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-brand" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 h-px w-full bg-ink/10" />

              <a
                href={`tel:${PHONE_TEL}`}
                className="mt-4 w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-brand text-brand-foreground font-display text-[10px] tracking-[0.3em] hover:bg-ink transition-all"
              >
                <Phone size={12} strokeWidth={2} />
                {PHONE_LABEL}
              </a>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
