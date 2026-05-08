import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownCircle, Clock, AlertTriangle } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { Grid, Pill, SectionHeader, Stack, StatCard, TableCard, Td, Th, Toolbar } from "@/components/app/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/accounts-payable")({
  head: () => ({ meta: [{ title: "Hutang — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: PayablePage,
});

const rows = [
  { id: "AP-2026-0412", supplier: "PT Kimia Farma", po: "PO-2026-0118", due: "2026-05-20", amount: "Rp 12.480.000", aging: 12, status: "open" },
  { id: "AP-2026-0411", supplier: "PT Kalbe", po: "PO-2026-0117", due: "2026-05-15", amount: "Rp 8.240.000", aging: 7, status: "open" },
  { id: "AP-2026-0408", supplier: "PT Dexa", po: "PO-2026-0116", due: "2026-05-04", amount: "Rp 6.200.000", aging: -4, status: "overdue" },
  { id: "AP-2026-0405", supplier: "PT Sanbe", po: "PO-2026-0115", due: "2026-04-30", amount: "Rp 0", aging: 0, status: "paid" },
  { id: "AP-2026-0402", supplier: "PT Novo", po: "PO-2026-0114", due: "2026-05-12", amount: "Rp 4.900.000", aging: 4, status: "partial" },
];

function PayablePage() {
  const { t } = useLang();
  return (
    <OwnerLayout title={t("app.nav.payable")}>
      <Stack>
        <Grid cols={3}>
          <StatCard label="Total hutang" value="Rp 31,8 jt" icon={ArrowDownCircle} />
          <StatCard label="Jatuh tempo < 7 hari" value="Rp 8,24 jt" tone="warn" icon={Clock} />
          <StatCard label="Lewat jatuh tempo" value="Rp 6,20 jt" tone="bad" icon={AlertTriangle} />
        </Grid>

        <SectionHeader
          title="Hutang ke pemasok"
          subtitle="Pantau tagihan pemasok yang belum dibayar dan jadwalkan pembayaran."
        />
        <Toolbar searchPlaceholder="Cari pemasok atau PO…" primaryLabel="Catat pembayaran" />

        <TableCard>
          <thead>
            <tr>
              <Th>No. AP</Th>
              <Th>Pemasok</Th>
              <Th>Referensi PO</Th>
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
                <Td className="font-medium">{r.supplier}</Td>
                <Td className="font-mono text-xs text-muted-foreground">{r.po}</Td>
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
