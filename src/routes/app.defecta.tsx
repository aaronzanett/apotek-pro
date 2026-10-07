import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { Grid, Pill, SectionHeader, Stack, StatCard, TableCard, Td, Th, Toolbar } from "@/components/app/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/defecta")({
  head: () => ({ meta: [{ name: "description", content: "Manage reorder list with Apotek Pro by Zanscode." }, { property: "og:title", content: "Reorder List — Apotek Pro" }, { property: "og:description", content: "Manage reorder list with Apotek Pro by Zanscode." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { title: "Reorder List — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: DefectaPage,
});

const rows = [
  { sku: "PRD-0014", name: "Amoxicillin 500mg", stock: 12, min: 50, suggest: 100, supplier: "PT Kimia Farma", priority: "high" },
  { sku: "PRD-0058", name: "Salbutamol Inhaler", stock: 0, min: 10, suggest: 30, supplier: "PT Kalbe", priority: "high" },
  { sku: "PRD-0072", name: "Insulin Pen", stock: 6, min: 20, suggest: 40, supplier: "PT Novo", priority: "high" },
  { sku: "PRD-0118", name: "Loratadine 10mg", stock: 24, min: 60, suggest: 100, supplier: "PT Dexa", priority: "med" },
  { sku: "PRD-0142", name: "Omeprazole 20mg", stock: 18, min: 40, suggest: 80, supplier: "PT Kalbe", priority: "med" },
  { sku: "PRD-0203", name: "Cetirizine 10mg", stock: 32, min: 50, suggest: 80, supplier: "PT Sanbe", priority: "low" },
];

function DefectaPage() {
  const { t } = useLang();
  return (
    <OwnerLayout title={t("app.nav.defecta")}>
      <Stack>
        <Grid cols={3}>
          <StatCard label="Item perlu order" value="37" tone="warn" icon={AlertTriangle} />
          <StatCard label="Prioritas tinggi" value="9" tone="bad" hint="stok kritis / habis" />
          <StatCard label="Estimasi PO" value="Rp 18,4 jt" hint="berdasarkan harga terakhir" />
        </Grid>

        <SectionHeader
          title="Daftar defecta"
          subtitle="Daftar barang yang perlu dipesan ulang berdasarkan stok minimum & laju penjualan."
        />
        <Toolbar searchPlaceholder="Cari produk…" primaryLabel="Buat PO dari pilihan" />

        <TableCard>
          <thead>
            <tr>
              <Th className="w-10">
                <input type="checkbox" className="rounded border-border" />
              </Th>
              <Th>Produk</Th>
              <Th className="text-right">Stok</Th>
              <Th className="text-right">Min.</Th>
              <Th className="text-right">Saran order</Th>
              <Th>Pemasok utama</Th>
              <Th>Prioritas</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.sku} className="hover:bg-cream/30">
                <Td>
                  <input type="checkbox" className="rounded border-border" />
                </Td>
                <Td>
                  <div className="font-medium">{r.name}</div>
                  <div className="font-mono text-[11px] text-muted-foreground">{r.sku}</div>
                </Td>
                <Td className="text-right tabular-nums">{r.stock}</Td>
                <Td className="text-right tabular-nums text-muted-foreground">{r.min}</Td>
                <Td className="text-right tabular-nums font-medium">{r.suggest}</Td>
                <Td>{r.supplier}</Td>
                <Td>
                  <Pill tone={r.priority === "high" ? "bad" : r.priority === "med" ? "warn" : "default"}>
                    {r.priority === "high" ? "Tinggi" : r.priority === "med" ? "Sedang" : "Rendah"}
                  </Pill>
                </Td>
              </tr>
            ))}
          </tbody>
        </TableCard>
      </Stack>
    </OwnerLayout>
  );
}
