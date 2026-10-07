import { createFileRoute } from "@tanstack/react-router";
import { PackageCheck, Truck } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { Grid, Pill, SectionHeader, Stack, StatCard, TableCard, Td, Th, Toolbar } from "@/components/app/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/supply")({
  head: () => ({ meta: [{ name: "description", content: "Manage goods receipts & transfers with Apotek Pro by Zanscode." }, { property: "og:title", content: "Goods Receipts & Transfers — Apotek Pro" }, { property: "og:description", content: "Manage goods receipts & transfers with Apotek Pro by Zanscode." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { title: "Goods Receipts & Transfers — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: SupplyPage,
});

const rows = [
  { id: "GR-2026-0231", date: "2026-05-06", po: "PO-2026-0116", from: "PT Dexa", items: 22, variance: "0", status: "ok" },
  { id: "GR-2026-0230", date: "2026-05-05", po: "PO-2026-0114", from: "PT Novo", items: 4, variance: "-1", status: "variance" },
  { id: "GR-2026-0229", date: "2026-05-04", po: "PO-2026-0115", from: "PT Sanbe", items: 6, variance: "0", status: "ok" },
  { id: "TR-2026-0042", date: "2026-05-03", po: "Transfer cabang", from: "Cabang Pusat → Cabang BSD", items: 18, variance: "0", status: "in_transit" },
  { id: "GR-2026-0228", date: "2026-05-02", po: "PO-2026-0113", from: "PT Kimia Farma", items: 12, variance: "0", status: "ok" },
];

function SupplyPage() {
  const { t } = useLang();
  return (
    <OwnerLayout title={t("app.nav.supply")}>
      <Stack>
        <Grid cols={3}>
          <StatCard label="Penerimaan minggu ini" value="14" icon={PackageCheck} />
          <StatCard label="Dalam perjalanan" value="3" tone="warn" icon={Truck} />
          <StatCard label="Selisih terbuka" value="2" tone="bad" hint="butuh klarifikasi" />
        </Grid>

        <SectionHeader
          title="Penerimaan & transfer"
          subtitle="Catat goods receipt dari pemasok dan transfer stok antar cabang."
        />
        <Toolbar searchPlaceholder="Cari nomor atau pemasok…" primaryLabel="Terima barang" />

        <TableCard>
          <thead>
            <tr>
              <Th>No.</Th>
              <Th>Tanggal</Th>
              <Th>Referensi</Th>
              <Th>Asal</Th>
              <Th className="text-right">Item</Th>
              <Th className="text-right">Selisih</Th>
              <Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="hover:bg-cream/30">
                <Td className="font-mono text-xs">{r.id}</Td>
                <Td className="tabular-nums">{r.date}</Td>
                <Td className="font-mono text-xs text-muted-foreground">{r.po}</Td>
                <Td className="font-medium">{r.from}</Td>
                <Td className="text-right tabular-nums">{r.items}</Td>
                <Td className="text-right tabular-nums">{r.variance}</Td>
                <Td>
                  {r.status === "ok" && <Pill tone="good">Selesai</Pill>}
                  {r.status === "variance" && <Pill tone="bad">Selisih</Pill>}
                  {r.status === "in_transit" && <Pill tone="info">Dalam perjalanan</Pill>}
                </Td>
              </tr>
            ))}
          </tbody>
        </TableCard>
      </Stack>
    </OwnerLayout>
  );
}
