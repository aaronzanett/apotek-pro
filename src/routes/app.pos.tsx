import { createFileRoute } from "@tanstack/react-router";
import { ScanBarcode, Search, Plus, Minus, Trash2, CreditCard } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/pos")({
  head: () => ({ meta: [{ title: "Kasir — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: PosPage,
});

const cart = [
  { name: "Paracetamol 500mg", qty: 2, unit: "Strip", price: 12000, subtotal: 24000 },
  { name: "Vitamin C 1000mg", qty: 1, unit: "Botol", price: 65000, subtotal: 65000 },
  { name: "Amoxicillin 500mg", qty: 1, unit: "Strip", price: 28000, subtotal: 28000 },
];
const total = cart.reduce((s, i) => s + i.subtotal, 0);

const quick = [
  { name: "Paracetamol", price: "Rp 12.000" },
  { name: "Amoxicillin", price: "Rp 28.000" },
  { name: "Vitamin C", price: "Rp 65.000" },
  { name: "Cetirizine", price: "Rp 18.000" },
  { name: "Omeprazole", price: "Rp 22.000" },
  { name: "OBH Combi", price: "Rp 24.000" },
  { name: "Hansaplast", price: "Rp 8.500" },
  { name: "Masker 5pc", price: "Rp 15.000" },
];

function PosPage() {
  const { t } = useLang();
  return (
    <OwnerLayout title={t("app.nav.pos")}>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr,420px]">
        {/* Catalog */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-background p-3">
            <div className="flex items-center gap-2">
              <ScanBarcode className="h-5 w-5 text-brand" />
              <input
                autoFocus
                placeholder="Pindai barcode atau cari produk…"
                className="flex-1 bg-transparent text-sm focus:outline-none"
              />
              <button className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1.5 text-xs font-medium text-brand">
                <Search className="h-3.5 w-3.5" />
                Cari manual
              </button>
            </div>
          </div>

          <div>
            <p className="mb-2 px-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Akses cepat
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
              {quick.map((q) => (
                <button
                  key={q.name}
                  className="rounded-xl border border-border bg-background p-3 text-left transition-colors hover:border-brand hover:bg-brand/5"
                >
                  <p className="text-sm font-medium text-foreground">{q.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{q.price}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cart */}
        <div className="rounded-2xl border border-border bg-background">
          <div className="border-b border-border px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Transaksi #INV-2026-04813
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Pelanggan umum</p>
          </div>

          <ul className="divide-y divide-border">
            {cart.map((i) => (
              <li key={i.name} className="px-4 py-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{i.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Rp {i.price.toLocaleString("id-ID")} / {i.unit}
                    </p>
                  </div>
                  <p className="text-sm font-medium tabular-nums">
                    Rp {i.subtotal.toLocaleString("id-ID")}
                  </p>
                </div>
                <div className="mt-2 flex items-center gap-1">
                  <button className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-secondary">
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="w-8 text-center text-sm tabular-nums">{i.qty}</span>
                  <button className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-secondary">
                    <Plus className="h-3 w-3" />
                  </button>
                  <button className="ml-auto inline-flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground hover:bg-destructive/10 hover:text-destructive">
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="border-t border-border px-4 py-3 text-sm">
            <div className="flex items-center justify-between text-muted-foreground">
              <span>Subtotal</span>
              <span className="tabular-nums">Rp {total.toLocaleString("id-ID")}</span>
            </div>
            <div className="mt-1 flex items-center justify-between text-muted-foreground">
              <span>PPN 11%</span>
              <span className="tabular-nums">Rp {Math.round(total * 0.11).toLocaleString("id-ID")}</span>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-base font-semibold">
              <span>Total</span>
              <span className="tabular-nums">Rp {Math.round(total * 1.11).toLocaleString("id-ID")}</span>
            </div>
          </div>

          <div className="space-y-2 border-t border-border p-3">
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-ink py-3 text-sm font-medium text-background hover:bg-ink/90">
              <CreditCard className="h-4 w-4" />
              Bayar sekarang
            </button>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <button className="rounded-lg border border-border py-2 hover:bg-secondary">Tunda</button>
              <button className="rounded-lg border border-border py-2 hover:bg-secondary">Diskon</button>
              <button className="rounded-lg border border-border py-2 hover:bg-secondary">Resep</button>
            </div>
          </div>
        </div>
      </div>
    </OwnerLayout>
  );
}
