import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpCircle, Clock, AlertTriangle } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { Grid, Pill, SectionHeader, Stack, StatCard, TableCard, Td, Th, Toolbar } from "@/components/app/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/accounts-receivable")({
  head: () => ({ meta: [{ title: "Piutang — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: ReceivablePage,
});

const rows = [
  { id: "AR-2026-0214", customer: "Klinik Sehat Sentosa", inv: "INV-2026-04688", due: "2026-05-18", amount: "Rp 4.280.000", aging: 10, status: "open" },
  { id: "AR-2026-0213", customer: "RS Mitra Medika", inv: "INV-2026-04671", due: "2026-05-12", amount: "Rp 9.150.000", aging: 4, status: "open" },
  { id: "AR-2026-0210", customer: "BPJS Kesehatan", inv: "INV-2026-04602", due: "2026-05-02", amount: "Rp 18.420.000", aging: -6, status: "overdue" },
  { id: "AR-2026-0207", customer: "Klinik Bumi Sehat", inv: "INV-2026-04588", due: "2026-04-28", amount: "Rp 0", aging: 0, status: "paid" },
  { id: "AR-2026-0205", customer: "Rumah Bersalin Bunda", inv: "INV-2026-04571", due: "2026-05-15", amount: "Rp 2.180.000", aging: 7, status: "partial" },
];

function ReceivablePage() {
  const { t } = useLang();
  return (
    <OwnerLayout title={t("app.nav.receivable")}>
      <Stack>
        <Grid cols={3}>
          <StatCard label="Total piutang" value="Rp 34,0 jt" icon={ArrowUpCircle} />
          <StatCard label="Jatuh tempo < 7 hari" value="Rp 9,15 jt" tone="warn" icon={Clock} />
          <StatCard label="Lewat jatuh tempo" value="Rp 18,4 jt" tone="bad" icon={AlertTriangle} />
        </Grid>

        <SectionHeader
          title="Piutang pelanggan"
          subtitle="Tagihan yang belum diterima dari klinik, rumah sakit, atau asuransi."
        />
        <Toolbar searchPlaceholder="Cari pelanggan atau invoice…" primaryLabel="Terima pembayaran" />

        <TableCard>
          <thead>
            <tr>
              <Th>No. AR</Th>
              <Th>Pelanggan</Th>
              <Th>Referensi invoice</Th>
              <Th>Jatuh tempo</Th>
              <Th className="text-right">Aging</Th>
              <Th className="text-right">Sisa</Th>
              <Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="hover:bg-cream/30">
                <Td className="font-mono text-xs">{r.id}</Td>
                <Td className="font-medium">{r.customer}</Td>
                <Td className="font-mono text-xs text-muted-foreground">{r.inv}</Td>
                <Td className="tabular-nums">{r.due}</Td>
                <Td className="text-right tabular-nums">
                  {r.aging < 0 ? `${r.aging} hari` : `+${r.aging} hari`}
                </Td>
                <Td className="text-right tabular-nums font-medium">{r.amount}</Td>
                <Td>
                  {r.status === "open" && <Pill tone="info">Terbuka</Pill>}
                  {r.status === "overdue" && <Pill tone="bad">Lewat</Pill>}
                  {r.status === "partial" && <Pill tone="warn">Sebagian</Pill>}
                  {r.status === "paid" && <Pill tone="good">Lunas</Pill>}
                </Td>
              </tr>
            ))}
          </tbody>
        </TableCard>
      </Stack>
    </OwnerLayout>
  );
}
