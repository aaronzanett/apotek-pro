import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Receipt, TrendingUp, ShoppingBag, Users } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { Grid, Pill, SectionHeader, Stack, StatCard, TableCard, Td, Th, Toolbar } from "@/components/app/ui";
import { useLang } from "@/lib/i18n";
import { ActionDialog } from "@/components/app/ActionDialog";

export const Route = createFileRoute("/app/sales")({
  head: () => ({ meta: [{ title: "Penjualan — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: SalesPage,
});

const tx = [
  { id: "INV-2026-04812", time: "11:42", cashier: "Sari", items: 3, total: "Rp 86.500", method: "QRIS", type: "OTC" },
  { id: "INV-2026-04811", time: "11:38", cashier: "Sari", items: 5, total: "Rp 248.000", method: "Kartu debit", type: "Resep" },
  { id: "INV-2026-04810", time: "11:21", cashier: "Budi", items: 2, total: "Rp 52.000", method: "Tunai", type: "OTC" },
  { id: "INV-2026-04809", time: "11:08", cashier: "Sari", items: 7, total: "Rp 412.000", method: "Asuransi", type: "Resep" },
  { id: "INV-2026-04808", time: "10:54", cashier: "Budi", items: 1, total: "Rp 18.000", method: "Tunai", type: "OTC" },
  { id: "INV-2026-04807", time: "10:33", cashier: "Sari", items: 4, total: "Rp 128.000", method: "QRIS", type: "OTC" },
];

function SalesPage() {
  const { t } = useLang();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<(typeof tx)[number] | null>(null);
  const filtered = tx.filter((item) => `${item.id} ${item.cashier} ${item.method}`.toLowerCase().includes(query.toLowerCase()));
  return (
    <OwnerLayout title={t("app.nav.sales")}>
      <Stack>
        <Grid cols={4}>
          <StatCard label="Penjualan hari ini" value="Rp 8,42 jt" tone="good" icon={TrendingUp} />
          <StatCard label="Transaksi" value="148" icon={Receipt} />
          <StatCard label="Item terjual" value="412" icon={ShoppingBag} />
          <StatCard label="Pelanggan" value="124" hint="36 baru" icon={Users} />
        </Grid>

        <SectionHeader title="Riwayat penjualan" subtitle="Semua transaksi POS dan resep yang dilayani hari ini." />
        <Toolbar searchPlaceholder="Cari nomor invoice atau kasir…" primaryLabel="Buka POS" onSearch={setQuery} onPrimary={() => navigate({ to: "/app/pos" })} exportRows={tx} />

        <TableCard>
          <thead>
            <tr>
              <Th>No. Invoice</Th>
              <Th>Waktu</Th>
              <Th>Kasir</Th>
              <Th>Tipe</Th>
              <Th className="text-right">Item</Th>
              <Th>Pembayaran</Th>
              <Th className="text-right">Total</Th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((t) => (
              <tr key={t.id} className="cursor-pointer hover:bg-cream/30" onClick={() => setSelected(t)}>
                <Td className="font-mono text-xs">{t.id}</Td>
                <Td className="tabular-nums">{t.time}</Td>
                <Td>{t.cashier}</Td>
                <Td>
                  <Pill tone={t.type === "Resep" ? "info" : "default"}>{t.type}</Pill>
                </Td>
                <Td className="text-right tabular-nums">{t.items}</Td>
                <Td className="text-muted-foreground">{t.method}</Td>
                <Td className="text-right tabular-nums font-medium">{t.total}</Td>
              </tr>
            ))}
          </tbody>
        </TableCard>
        <ActionDialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)} title={selected ? `Detail ${selected.id}` : "Detail transaksi"} description={selected ? `${selected.time} · ${selected.cashier} · ${selected.method} · ${selected.total}` : undefined} onConfirm={() => undefined}>
          <div className="rounded-xl bg-cream/60 p-4 text-sm"><p className="font-medium">{selected?.items} item · {selected?.type}</p><p className="mt-1 text-muted-foreground">Transaksi demo tercatat dan pembayaran telah terverifikasi.</p></div>
        </ActionDialog>
      </Stack>
    </OwnerLayout>
  );
}
