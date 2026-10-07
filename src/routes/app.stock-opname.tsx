import { createFileRoute } from "@tanstack/react-router";
import { ClipboardCheck } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { Grid, Pill, SectionHeader, Stack, StatCard, TableCard, Td, Th, Toolbar } from "@/components/app/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/stock-opname")({
  head: () => ({ meta: [{ name: "description", content: "Manage stocktaking with Apotek Pro by Zanscode." }, { property: "og:title", content: "Stocktaking — Apotek Pro" }, { property: "og:description", content: "Manage stocktaking with Apotek Pro by Zanscode." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { title: "Stocktaking — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: OpnamePage,
});

const sessions = [
  { id: "SO-2026-0042", date: "2026-05-05", scope: "Rak B-01 (Antibiotik)", items: 89, variance: "-3 unit", status: "draft" },
  { id: "SO-2026-0041", date: "2026-04-30", scope: "Lemari Terkunci", items: 42, variance: "0 unit", status: "approved" },
  { id: "SO-2026-0040", date: "2026-04-28", scope: "Etalase Depan", items: 358, variance: "+5 unit", status: "approved" },
  { id: "SO-2026-0039", date: "2026-04-25", scope: "Cold Storage", items: 52, variance: "-1 unit", status: "approved" },
  { id: "SO-2026-0038", date: "2026-04-21", scope: "Seluruh apotek", items: 1284, variance: "-18 unit", status: "approved" },
];

function OpnamePage() {
  const { t } = useLang();
  return (
    <OwnerLayout title={t("app.nav.opname")}>
      <Stack>
        <Grid cols={3}>
          <StatCard label="Sesi bulan ini" value="6" icon={ClipboardCheck} />
          <StatCard label="Selisih bersih" value="-17 unit" tone="warn" />
          <StatCard label="Akurasi stok" value="98,7%" tone="good" hint="rata-rata 90 hari" />
        </Grid>

        <SectionHeader
          title="Sesi stok opname"
          subtitle="Hitung fisik berkala dan rekonsiliasi dengan stok sistem."
        />
        <Toolbar searchPlaceholder="Cari nomor atau lingkup…" primaryLabel="Mulai opname baru" />

        <TableCard>
          <thead>
            <tr>
              <Th>No. opname</Th>
              <Th>Tanggal</Th>
              <Th>Lingkup</Th>
              <Th className="text-right">Item</Th>
              <Th className="text-right">Selisih</Th>
              <Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((s) => (
              <tr key={s.id} className="hover:bg-cream/30">
                <Td className="font-mono text-xs">{s.id}</Td>
                <Td className="tabular-nums">{s.date}</Td>
                <Td className="font-medium">{s.scope}</Td>
                <Td className="text-right tabular-nums">{s.items}</Td>
                <Td className="text-right tabular-nums">{s.variance}</Td>
                <Td>
                  {s.status === "approved" ? (
                    <Pill tone="good">Disetujui</Pill>
                  ) : (
                    <Pill tone="warn">Draft</Pill>
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
