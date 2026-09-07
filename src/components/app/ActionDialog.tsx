import { useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function ActionDialog({ open, onOpenChange, title, description, onConfirm, children }: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  onConfirm?: (value: string) => void;
  children?: ReactNode;
}) {
  const [value, setValue] = useState("");
  const submit = (event: FormEvent) => {
    event.preventDefault();
    onConfirm?.(value);
    toast.success(`${title} berhasil disimpan`, { description: "Perubahan tersimpan di data demo perangkat ini." });
    setValue("");
    onOpenChange(false);
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-2xl border-border">
        <form onSubmit={submit}>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description ?? "Lengkapi informasi untuk melanjutkan."}</DialogDescription>
          </DialogHeader>
          <div className="py-5">
            {children ?? (
              <label className="block text-sm font-medium text-foreground">
                Nama / keterangan
                <input autoFocus required value={value} onChange={(e) => setValue(e.target.value)} className="mt-2 block w-full rounded-xl border border-border bg-cream/50 px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" placeholder="Masukkan keterangan…" />
              </label>
            )}
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Batal</Button>
            <Button type="submit" variant="emerald">Simpan</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}