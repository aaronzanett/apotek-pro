import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ScanBarcode, Search, Plus, Minus, Trash2, CreditCard } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { useLang } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/app/pos")({
  head: () => ({ meta: [{ title: "Kasir — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: PosPage,
});

const initialCart = [
  { name: "Paracetamol 500mg", qty: 2, unit: "Strip", price: 12000, subtotal: 24000 },
  { name: "Vitamin C 1000mg", qty: 1, unit: "Botol", price: 65000, subtotal: 65000 },
  { name: "Amoxicillin 500mg", qty: 1, unit: "Strip", price: 28000, subtotal: 28000 },
];
const quick = [
  { name: "Paracetamol", price: 12000, unit: "Strip" },
  { name: "Amoxicillin", price: 28000, unit: "Strip" },
  { name: "Vitamin C", price: 65000, unit: "Botol" },
  { name: "Cetirizine", price: 18000, unit: "Strip" },
  { name: "Omeprazole", price: 22000, unit: "Strip" },
  { name: "OBH Combi", price: 24000, unit: "Botol" },
  { name: "Hansaplast", price: 8500, unit: "Pcs" },
  { name: "Masker 5pc", price: 15000, unit: "Pak" },
];

function PosPage() {
  const { t } = useLang();
  const [cart, setCart] = useState(initialCart);
  const [query, setQuery] = useState("");
  const [discount, setDiscount] = useState(0);
  const [prescription, setPrescription] = useState(false);
  const filteredQuick = quick.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.qty, 0), [cart]);
  const tax = Math.round((subtotal - discount) * 0.11);
  const total = Math.max(0, subtotal - discount + tax);
  const addItem = (item: typeof quick[number]) => setCart((current) => {
    const found = current.find((cartItem) => cartItem.name.startsWith(item.name));
    if (found) return current.map((cartItem) => cartItem === found ? { ...cartItem, qty: cartItem.qty + 1, subtotal: (cartItem.qty + 1) * cartItem.price } : cartItem);
    return [...current, { ...item, qty: 1, subtotal: item.price }];
  });
  const changeQty = (name: string, amount: number) => setCart((current) => current.map((item) => item.name === name ? { ...item, qty: Math.max(1, item.qty + amount), subtotal: Math.max(1, item.qty + amount) * item.price } : item));
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
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => { if (event.key === "Enter" && filteredQuick[0]) { addItem(filteredQuick[0]); setQuery(""); toast.success(`${filteredQuick[0].name} ditambahkan`); } }}
                placeholder="Pindai barcode atau cari produk…"
                className="flex-1 bg-transparent text-sm focus:outline-none"
              />
              <Button type="button" variant="secondary" size="sm" onClick={() => query && toast.info(`${filteredQuick.length} produk ditemukan`)}>
                <Search className="h-3.5 w-3.5" />
                Cari manual
              </Button>
            </div>
          </div>

          <div>
            <p className="mb-2 px-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Akses cepat
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
              {filteredQuick.map((q) => (
                <Button
                  type="button"
                  key={q.name}
                  variant="outline"
                  onClick={() => { addItem(q); toast.success(`${q.name} ditambahkan`); }}
                  className="rounded-xl border border-border bg-background p-3 text-left transition-colors hover:border-brand hover:bg-brand/5"
                >
                  <p className="text-sm font-medium text-foreground">{q.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Rp {q.price.toLocaleString("id-ID")}</p>
                </Button>
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
                  <Button type="button" variant="outline" size="icon" className="h-7 w-7" onClick={() => changeQty(i.name, -1)} aria-label={`Kurangi ${i.name}`}>
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center text-sm tabular-nums">{i.qty}</span>
                  <Button type="button" variant="outline" size="icon" className="h-7 w-7" onClick={() => changeQty(i.name, 1)} aria-label={`Tambah ${i.name}`}>
                    <Plus className="h-3 w-3" />
                  </Button>
                  <Button type="button" variant="ghost" size="icon" className="ml-auto h-7 w-7 text-muted-foreground hover:text-destructive" onClick={() => setCart((current) => current.filter((item) => item.name !== i.name))} aria-label={`Hapus ${i.name}`}>
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </li>
            ))}
          </ul>

          <div className="border-t border-border px-4 py-3 text-sm">
            <div className="flex items-center justify-between text-muted-foreground">
              <span>Subtotal</span>
              <span className="tabular-nums">Rp {subtotal.toLocaleString("id-ID")}</span>
            </div>
            {discount > 0 && <div className="mt-1 flex items-center justify-between text-brand"><span>Diskon</span><span>-Rp {discount.toLocaleString("id-ID")}</span></div>}
            <div className="mt-1 flex items-center justify-between text-muted-foreground">
              <span>PPN 11%</span>
              <span className="tabular-nums">Rp {tax.toLocaleString("id-ID")}</span>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-base font-semibold">
              <span>Total</span>
              <span className="tabular-nums">Rp {total.toLocaleString("id-ID")}</span>
            </div>
          </div>

          <div className="space-y-2 border-t border-border p-3">
            <Button type="button" variant="brand" className="h-11 w-full" disabled={cart.length === 0} onClick={() => { toast.success("Pembayaran berhasil", { description: `INV-2026-04813 · Rp ${total.toLocaleString("id-ID")}` }); setCart([]); setDiscount(0); setPrescription(false); }}>
              <CreditCard className="h-4 w-4" />
              Bayar sekarang
            </Button>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <Button type="button" variant="outline" size="sm" onClick={() => toast.success("Transaksi ditunda")}>Tunda</Button>
              <Button type="button" variant="outline" size="sm" onClick={() => { setDiscount(discount ? 0 : 10000); toast.info(discount ? "Diskon dihapus" : "Diskon Rp 10.000 diterapkan"); }}>Diskon</Button>
              <Button type="button" variant={prescription ? "secondary" : "outline"} size="sm" onClick={() => { setPrescription((value) => !value); toast.info(!prescription ? "Transaksi ditandai sebagai resep" : "Tanda resep dihapus"); }}>Resep</Button>
            </div>
          </div>
        </div>
      </div>
    </OwnerLayout>
  );
}
