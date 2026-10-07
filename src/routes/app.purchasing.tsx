import { createFileRoute } from "@tanstack/react-router";
import { ShoppingCart, FileText, PackageCheck, Wallet } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { Grid, Pill, SectionHeader, Stack, StatCard, TableCard, Td, Th, Toolbar } from "@/components/app/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/purchasing")({
  head: () => ({ meta: [{ name: "description", content: "Manage purchasing with Apotek Pro by Zanscode." }, { property: "og:title", content: "Purchasing — Apotek Pro" }, { property: "og:description", content: "Manage purchasing with Apotek Pro by Zanscode." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { title: "Purchasing — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: PurchasingPage,
});

const pos = [
  { id: "PO-2026-0118", date: "2026-05-06", supplier: "PT Kimia Farma", items: 14, total: "Rp 12.480.000", status: "draft" },
  { id: "PO-2026-0117", date: "2026-05-05", supplier: "PT Kalbe", items: 8, total: "Rp 8.240.000", status: "sent" },
  { id: "PO-2026-0116", date: "2026-05-04", supplier: "PT Dexa", items: 22, total: "Rp 18.620.000", status: "received" },
  { id: "PO-2026-0115", date: "2026-05-02", supplier: "PT Sanbe", items: 6, total: "Rp 4.150.000", status: "received" },
  { id: "PO-2026-0114", date: "2026-04-29", supplier: "PT Novo", items: 4, total: "Rp 9.800.000", status: "partial" },
];

function PurchasingPage() {
  const { t } = useLang();
  return (
    <OwnerLayout title={t("app.nav.purchasing")}>
      <Stack>
        <Grid cols={4}>
          <StatCard label="PO bulan ini" value="24" icon={FileText} />
          <StatCard label="Menunggu kirim" value="6" tone="warn" icon={ShoppingCart} />
          <StatCard label="Diterima" value="14" tone="good" icon={PackageCheck} />
          <StatCard label="Total pembelian" value="Rp 142,8 jt" icon={Wallet} />
        </Grid>

        <SectionHeader
          title="Purchase Order"
          subtitle="Buat PO ke distributor, pantau pengiriman, dan rekonsiliasi penerimaan."
        />
        <Toolbar searchPlaceholder="Cari nomor PO atau pemasok…" primaryLabel="Buat PO baru" />

        <TableCard>
          <thead>
            <tr>
              <Th>No. PO</Th>
              <Th>Tanggal</Th>
              <Th>Pemasok</Th>
              <Th className="text-right">Item</Th>
              <Th className="text-right">Total</Th>
              <Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {pos.map((p) => (
              <tr key={p.id} className="hover:bg-cream/30">
                <Td className="font-mono text-xs">{p.id}</Td>
                <Td className="tabular-nums">{p.date}</Td>
                <Td className="font-medium">{p.supplier}</Td>
                <Td className="text-right tabular-nums">{p.items}</Td>
                <Td className="text-right tabular-nums">{p.total}</Td>
                <Td>
                  {p.status === "draft" && <Pill>Draft</Pill>}
                  {p.status === "sent" && <Pill tone="info">Dikirim</Pill>}
                  {p.status === "partial" && <Pill tone="warn">Sebagian</Pill>}
                  {p.status === "received" && <Pill tone="good">Diterima</Pill>}
                </Td>
              </tr>
            ))}
          </tbody>
        </TableCard>
      </Stack>
    </OwnerLayout>
  );
}
