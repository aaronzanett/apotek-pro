import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Pill as PillIcon, FileText, Clock, CheckCircle2 } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { Grid, Pill, SectionHeader, Stack, StatCard, TableCard, Td, Th, Toolbar } from "@/components/app/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/prescriptions")({
  head: () => ({ meta: [{ name: "description", content: "Manage prescriptions with Apotek Pro by Zanscode." }, { property: "og:title", content: "Prescriptions — Apotek Pro" }, { property: "og:description", content: "Manage prescriptions with Apotek Pro by Zanscode." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { title: "Prescriptions — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: RxPage,
});

const initialRx = [
  { id: "RX-2026-0918", time: "11:42", patient: "Ahmad Hidayat", doctor: "dr. Tania, Sp.PD", items: 3, status: "queue" },
  { id: "RX-2026-0917", time: "11:30", patient: "Siti Nurhaliza", doctor: "dr. Bayu", items: 5, status: "preparing" },
  { id: "RX-2026-0916", time: "11:18", patient: "Maria Christine", doctor: "dr. Tania, Sp.PD", items: 2, status: "counsel" },
  { id: "RX-2026-0915", time: "11:02", patient: "Joko Susilo", doctor: "dr. Andi, Sp.JP", items: 4, status: "done" },
  { id: "RX-2026-0914", time: "10:48", patient: "Nina Permata", doctor: "dr. Bayu", items: 1, status: "done" },
];

function RxPage() {
  const { t } = useLang();
  const [rx, setRx] = useState(initialRx);
  const [query, setQuery] = useState("");
  const filtered = rx.filter((item) => `${item.id} ${item.patient} ${item.doctor}`.toLowerCase().includes(query.toLowerCase()));
  const advance = (id: string) => setRx((items) => items.map((item) => item.id === id ? { ...item, status: item.status === "queue" ? "preparing" : item.status === "preparing" ? "counsel" : "done" } : item));
  return (
    <OwnerLayout title={t("app.nav.prescriptions")}>
      <Stack>
        <Grid cols={4}>
          <StatCard label="Antrean" value="3" tone="warn" icon={Clock} />
          <StatCard label="Sedang disiapkan" value="2" tone="info" icon={PillIcon} />
          <StatCard label="Selesai hari ini" value="42" tone="good" icon={CheckCircle2} />
          <StatCard label="Resep racikan" value="6" icon={FileText} />
        </Grid>

        <SectionHeader
          title="Antrean resep"
          subtitle="Pantau alur dari penerimaan, peracikan, sampai konseling pasien."
        />
        <Toolbar searchPlaceholder="Cari nomor resep atau pasien…" primaryLabel="Terima resep" onSearch={setQuery} />

        <TableCard>
          <thead>
            <tr>
              <Th>No. resep</Th>
              <Th>Waktu</Th>
              <Th>Pasien</Th>
              <Th>Dokter</Th>
              <Th className="text-right">Item</Th>
              <Th>Status</Th>
              <Th>Aksi</Th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.id} className="hover:bg-cream/30">
                <Td className="font-mono text-xs">{r.id}</Td>
                <Td className="tabular-nums">{r.time}</Td>
                <Td className="font-medium">{r.patient}</Td>
                <Td className="text-muted-foreground">{r.doctor}</Td>
                <Td className="text-right tabular-nums">{r.items}</Td>
                <Td>
                  {r.status === "queue" && <Pill tone="warn">Antri</Pill>}
                  {r.status === "preparing" && <Pill tone="info">Disiapkan</Pill>}
                  {r.status === "counsel" && <Pill tone="info">Konseling</Pill>}
                  {r.status === "done" && <Pill tone="good">Selesai</Pill>}
                </Td>
                <Td>{r.status !== "done" ? <button type="button" onClick={() => advance(r.id)} className="text-xs font-medium text-brand hover:underline">Tahap berikutnya</button> : <span className="text-xs text-muted-foreground">Selesai</span>}</Td>
              </tr>
            ))}
          </tbody>
        </TableCard>
      </Stack>
    </OwnerLayout>
  );
}
