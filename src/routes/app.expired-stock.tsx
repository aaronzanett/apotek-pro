import { createFileRoute } from "@tanstack/react-router";
import { CalendarX } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { Grid, Pill, SectionHeader, Stack, StatCard, TableCard, Td, Th, Toolbar } from "@/components/app/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/expired-stock")({
  head: () => ({ meta: [{ name: "description", content: "Manage expired stock with Apotek Pro by Zanscode." }, { property: "og:title", content: "Expired Stock — Apotek Pro" }, { property: "og:description", content: "Manage expired stock with Apotek Pro by Zanscode." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { title: "Expired Stock — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: ExpiredPage,
});

const rows = [
  { sku: "PRD-0014", name: "Amoxicillin 500mg", batch: "AMX-2401-B", qty: 12, exp: "2026-03-30", days: 28, value: "Rp 336.000" },
  { sku: "PRD-0091", name: "Amlodipine 10mg", batch: "AML-2402-C", qty: 8, exp: "2026-06-08", days: 98, value: "Rp 168.000" },
  { sku: "PRD-0205", name: "Captopril 25mg", batch: "CPT-2312-A", qty: 24, exp: "2026-02-14", days: -16, value: "Rp 240.000" },
  { sku: "PRD-0312", name: "Sirup OBH", batch: "OBH-2403-A", qty: 6, exp: "2026-04-22", days: 51, value: "Rp 144.000" },
  { sku: "PRD-0411", name: "Salep Hidrokortison", batch: "HDC-2311-B", qty: 4, exp: "2026-01-05", days: -56, value: "Rp 88.000" },
];

function ExpiredPage() {
  const { t } = useLang();
  return (
    <OwnerLayout title={t("app.nav.expired")}>
      <Stack>
        <Grid cols={4}>
          <StatCard label="Sudah ED" value="2" tone="bad" hint="harus dimusnahkan" icon={CalendarX} />
          <StatCard label="ED < 30 hari" value="5" tone="bad" />
          <StatCard label="ED < 90 hari" value="12" tone="warn" />
          <StatCard label="Potensi kerugian" value="Rp 976 rb" tone="warn" />
        </Grid>

        <SectionHeader
          title="Pemantauan kedaluwarsa"
          subtitle="Pantau jendela kedaluwarsa untuk diskon, retur, atau pemusnahan."
        />
        <Toolbar searchPlaceholder="Cari produk atau batch…" primaryLabel="Buat berita acara" />

        <TableCard>
          <thead>
            <tr>
              <Th>Produk</Th>
              <Th>Batch</Th>
              <Th className="text-right">Qty</Th>
              <Th>Kedaluwarsa</Th>
              <Th className="text-right">Selisih hari</Th>
              <Th className="text-right">Nilai</Th>
              <Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.batch} className="hover:bg-cream/30">
                <Td>
                  <div className="font-medium">{r.name}</div>
                  <div className="font-mono text-[11px] text-muted-foreground">{r.sku}</div>
                </Td>
                <Td className="font-mono text-xs">{r.batch}</Td>
                <Td className="text-right tabular-nums">{r.qty}</Td>
                <Td className="tabular-nums">{r.exp}</Td>
                <Td className="text-right tabular-nums">
                  {r.days < 0 ? `${r.days}` : `+${r.days}`}
                </Td>
                <Td className="text-right tabular-nums">{r.value}</Td>
                <Td>
                  {r.days < 0 ? (
                    <Pill tone="bad">Kedaluwarsa</Pill>
                  ) : r.days < 30 ? (
                    <Pill tone="bad">Kritis</Pill>
                  ) : (
                    <Pill tone="warn">Mendekati</Pill>
                  )}
                </Td>
              </tr>
            ))}
          </tbody>
        </TableCard>
      </Stack>
    </OwnerLayout>
  );
}
