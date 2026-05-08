import { createFileRoute } from "@tanstack/react-router";
import { Ruler } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { Pill, SectionHeader, Stack, TableCard, Td, Th, Toolbar } from "@/components/app/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/units")({
  head: () => ({ meta: [{ title: "Satuan — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: UnitsPage,
});

const units = [
  { code: "TAB", name: "Tablet", base: "Tablet", ratio: "1", type: "Dasar" },
  { code: "STR", name: "Strip", base: "Tablet", ratio: "10 tablet", type: "Turunan" },
  { code: "BOX", name: "Box", base: "Strip", ratio: "10 strip", type: "Turunan" },
  { code: "BTL", name: "Botol", base: "Botol", ratio: "1", type: "Dasar" },
  { code: "ML", name: "Mililiter", base: "Mililiter", ratio: "1", type: "Dasar" },
  { code: "AMP", name: "Ampul", base: "Ampul", ratio: "1", type: "Dasar" },
  { code: "TUB", name: "Tube", base: "Tube", ratio: "1", type: "Dasar" },
  { code: "PCS", name: "Pieces", base: "Pieces", ratio: "1", type: "Dasar" },
];

function UnitsPage() {
  const { t } = useLang();
  return (
    <OwnerLayout title={t("app.nav.units")}>
      <Stack>
        <SectionHeader
          title="Satuan produk"
          subtitle="Atur satuan dasar dan konversi (mis. 1 Box = 10 Strip = 100 Tablet)."
        />
        <Toolbar searchPlaceholder="Cari satuan…" primaryLabel="Tambah satuan" />
        <TableCard>
          <thead>
            <tr>
              <Th>Kode</Th>
              <Th>Nama</Th>
              <Th>Tipe</Th>
              <Th>Satuan dasar</Th>
              <Th>Konversi</Th>
              <Th>Contoh penggunaan</Th>
            </tr>
          </thead>
          <tbody>
            {units.map((u) => (
              <tr key={u.code} className="hover:bg-cream/30">
                <Td className="font-mono text-xs text-muted-foreground">{u.code}</Td>
                <Td className="font-medium">{u.name}</Td>
                <Td>
                  <Pill tone={u.type === "Dasar" ? "info" : "default"}>{u.type}</Pill>
                </Td>
                <Td>{u.base}</Td>
                <Td className="tabular-nums">{u.ratio}</Td>
                <Td className="text-muted-foreground">Pembelian, penjualan, stok</Td>
              </tr>
            ))}
          </tbody>
        </TableCard>
      </Stack>
    </OwnerLayout>
  );
}
