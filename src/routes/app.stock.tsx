import { createFileRoute } from "@tanstack/react-router";
import { Boxes, Package, AlertTriangle, CalendarX } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { Grid, Pill, SectionHeader, Stack, StatCard, TableCard, Td, Th, Toolbar } from "@/components/app/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/stock")({
  head: () => ({ meta: [{ name: "description", content: "Manage product stock with Apotek Pro by Zanscode." }, { property: "og:title", content: "Product Stock — Apotek Pro" }, { property: "og:description", content: "Manage product stock with Apotek Pro by Zanscode." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { title: "Product Stock — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: StockPage,
});

const rows = [
  { sku: "PRD-0001", name: "Paracetamol 500mg", batch: "PCM-2410-A", shelf: "B-02", qty: 248, exp: "2026-08-12", status: "ok" },
  { sku: "PRD-0014", name: "Amoxicillin 500mg", batch: "AMX-2503-B", shelf: "B-01", qty: 12, exp: "2026-03-30", status: "low" },
  { sku: "PRD-0033", name: "Vitamin C 1000mg", batch: "VTC-2501-C", shelf: "A-02", qty: 84, exp: "2027-01-15", status: "ok" },
  { sku: "PRD-0058", name: "Salbutamol Inhaler", batch: "SLB-2412-A", shelf: "B-01", qty: 0, exp: "2026-12-01", status: "out" },
  { sku: "PRD-0072", name: "Insulin Pen", batch: "INS-2502-A", shelf: "F-01", qty: 6, exp: "2026-09-20", status: "low" },
  { sku: "PRD-0091", name: "Amlodipine 10mg", batch: "AML-2411-B", shelf: "B-02", qty: 156, exp: "2026-06-08", status: "ok" },
];

function StockPage() {
  const { t } = useLang();
  return (
    <OwnerLayout title={t("app.nav.stock")}>
      <Stack>
        <Grid cols={4}>
          <StatCard label="Total SKU" value="1.284" icon={Package} />
          <StatCard label="Total stok" value="48.512" hint="unit di semua cabang" icon={Boxes} />
          <StatCard label="Stok menipis" value="37" tone="warn" icon={AlertTriangle} />
          <StatCard label="Mendekati ED" value="14" tone="bad" hint="< 90 hari" icon={CalendarX} />
        </Grid>

        <SectionHeader title="Stok per batch" subtitle="Pelacakan FEFO per batch dan rak." />
        <Toolbar searchPlaceholder="Cari produk atau batch…" primaryLabel="Penyesuaian stok" />

        <TableCard>
          <thead>
            <tr>
              <Th>Produk</Th>
              <Th>Batch</Th>
              <Th>Rak</Th>
              <Th className="text-right">Qty</Th>
              <Th>Kedaluwarsa</Th>
              <Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.sku + r.batch} className="hover:bg-cream/30">
                <Td>
                  <div className="font-medium">{r.name}</div>
                  <div className="font-mono text-[11px] text-muted-foreground">{r.sku}</div>
                </Td>
                <Td className="font-mono text-xs">{r.batch}</Td>
                <Td>{r.shelf}</Td>
                <Td className="text-right tabular-nums">{r.qty}</Td>
                <Td className="tabular-nums">{r.exp}</Td>
                <Td>
                  {r.status === "ok" && <Pill tone="good">Aman</Pill>}
                  {r.status === "low" && <Pill tone="warn">Menipis</Pill>}
                  {r.status === "out" && <Pill tone="bad">Habis</Pill>}
                </Td>
              </tr>
            ))}
          </tbody>
        </TableCard>
      </Stack>
    </OwnerLayout>
  );
}
