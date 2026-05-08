import { createFileRoute } from "@tanstack/react-router";
import { Pill, Package, AlertTriangle, TrendingUp } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { Grid, Pill as Tag, SectionHeader, Stack, StatCard, TableCard, Td, Th, Toolbar } from "@/components/app/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/products")({
  head: () => ({ meta: [{ title: "Produk — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: ProductsPage,
});

const rows = [
  { sku: "PRD-0001", name: "Paracetamol 500mg", cat: "Analgesik", unit: "Strip", price: "Rp 12.000", stock: 248, status: "ok" },
  { sku: "PRD-0014", name: "Amoxicillin 500mg", cat: "Antibiotik", unit: "Strip", price: "Rp 28.000", stock: 12, status: "low" },
  { sku: "PRD-0033", name: "Vitamin C 1000mg", cat: "Suplemen", unit: "Botol", price: "Rp 65.000", stock: 84, status: "ok" },
  { sku: "PRD-0058", name: "Salbutamol Inhaler", cat: "Respirasi", unit: "Pcs", price: "Rp 95.000", stock: 0, status: "out" },
  { sku: "PRD-0072", name: "Insulin Pen", cat: "Diabetes", unit: "Pcs", price: "Rp 320.000", stock: 6, status: "low" },
];

function ProductsPage() {
  const { t } = useLang();
  return (
    <OwnerLayout title={t("app.nav.products")}>
      <Stack>
        <Grid cols={4}>
          <StatCard label="Total produk" value="1.284" hint="aktif di katalog" icon={Package} />
          <StatCard label="Stok menipis" value="37" tone="warn" icon={AlertTriangle} />
          <StatCard label="Habis" value="6" tone="bad" icon={Pill} />
          <StatCard label="Terlaris bulan ini" value="Paracetamol" hint="248 strip terjual" icon={TrendingUp} />
        </Grid>

        <SectionHeader title="Daftar produk" subtitle="Kelola katalog obat & alkes apotek Anda." />

        <Toolbar searchPlaceholder="Cari nama, SKU, atau barcode…" primaryLabel="Tambah produk" />

        <TableCard>
          <thead>
            <tr>
              <Th>SKU</Th>
              <Th>Nama produk</Th>
              <Th>Kategori</Th>
              <Th>Satuan</Th>
              <Th className="text-right">Harga jual</Th>
              <Th className="text-right">Stok</Th>
              <Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.sku} className="hover:bg-cream/30">
                <Td className="font-mono text-xs text-muted-foreground">{r.sku}</Td>
                <Td className="font-medium">{r.name}</Td>
                <Td>{r.cat}</Td>
                <Td>{r.unit}</Td>
                <Td className="text-right tabular-nums">{r.price}</Td>
                <Td className="text-right tabular-nums">{r.stock}</Td>
                <Td>
                  {r.status === "ok" && <Tag tone="good">Aman</Tag>}
                  {r.status === "low" && <Tag tone="warn">Menipis</Tag>}
                  {r.status === "out" && <Tag tone="bad">Habis</Tag>}
                </Td>
              </tr>
            ))}
          </tbody>
        </TableCard>
      </Stack>
    </OwnerLayout>
  );
}
