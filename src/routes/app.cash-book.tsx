import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Wallet } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { Grid, Pill, SectionHeader, Stack, StatCard, TableCard, Td, Th, Toolbar } from "@/components/app/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/cash-book")({
  head: () => ({ meta: [{ title: "Buku Kas — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: CashBookPage,
});

const rows = [
  { date: "2026-05-08", ref: "POS-04812", desc: "Penerimaan kas POS shift pagi", in: "Rp 4.180.000", out: "", balance: "Rp 24.580.000" },
  { date: "2026-05-08", ref: "OPX-0142", desc: "Beli galon air & ATK", in: "", out: "Rp 85.000", balance: "Rp 20.400.000" },
  { date: "2026-05-07", ref: "PAY-0094", desc: "Bayar listrik PLN", in: "", out: "Rp 1.240.000", balance: "Rp 20.485.000" },
  { date: "2026-05-07", ref: "POS-04795", desc: "Setoran shift malam", in: "Rp 3.640.000", out: "", balance: "Rp 21.725.000" },
  { date: "2026-05-06", ref: "PUR-0118", desc: "DP pembelian PT Kimia Farma", in: "", out: "Rp 2.500.000", balance: "Rp 18.085.000" },
  { date: "2026-05-06", ref: "POS-04778", desc: "Setoran shift pagi", in: "Rp 5.120.000", out: "", balance: "Rp 20.585.000" },
];

function CashBookPage() {
  const { t } = useLang();
  return (
    <OwnerLayout title={t("app.nav.cashBook")}>
      <Stack>
        <Grid cols={4}>
          <StatCard label="Saldo kas" value="Rp 24,58 jt" icon={Wallet} />
          <StatCard label="Pemasukan hari ini" value="Rp 4,18 jt" tone="good" icon={ArrowDownRight} />
          <StatCard label="Pengeluaran hari ini" value="Rp 85.000" tone="warn" icon={ArrowUpRight} />
          <StatCard label="Net minggu ini" value="+Rp 18,2 jt" tone="good" />
        </Grid>

        <SectionHeader title="Buku kas" subtitle="Catatan arus kas masuk dan keluar dari semua aktivitas apotek." />
        <Toolbar searchPlaceholder="Cari deskripsi atau referensi…" primaryLabel="Catat transaksi" />

        <TableCard>
          <thead>
            <tr>
              <Th>Tanggal</Th>
              <Th>Referensi</Th>
              <Th>Deskripsi</Th>
              <Th className="text-right">Masuk</Th>
              <Th className="text-right">Keluar</Th>
              <Th className="text-right">Saldo</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="hover:bg-cream/30">
                <Td className="tabular-nums">{r.date}</Td>
                <Td className="font-mono text-xs text-muted-foreground">{r.ref}</Td>
                <Td>{r.desc}</Td>
                <Td className="text-right tabular-nums text-emerald-700">{r.in}</Td>
                <Td className="text-right tabular-nums text-destructive">{r.out}</Td>
                <Td className="text-right tabular-nums font-medium">{r.balance}</Td>
              </tr>
            ))}
          </tbody>
        </TableCard>
      </Stack>
    </OwnerLayout>
  );
}
