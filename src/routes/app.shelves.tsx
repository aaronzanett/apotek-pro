import { createFileRoute } from "@tanstack/react-router";
import { Archive } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { Pill, SectionHeader, Stack, TableCard, Td, Th, Toolbar } from "@/components/app/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/shelves")({
  head: () => ({ meta: [{ title: "Rak — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: ShelvesPage,
});

const shelves = [
  { code: "A-01", area: "Etalase Depan", category: "OTC", capacity: 200, used: 158 },
  { code: "A-02", area: "Etalase Depan", category: "Suplemen", capacity: 200, used: 187 },
  { code: "B-01", area: "Belakang", category: "Antibiotik", capacity: 150, used: 96 },
  { code: "B-02", area: "Belakang", category: "Analgesik", capacity: 150, used: 142 },
  { code: "C-01", area: "Lemari Terkunci", category: "Narkotika", capacity: 60, used: 24 },
  { code: "C-02", area: "Lemari Terkunci", category: "Psikotropika", capacity: 60, used: 18 },
  { code: "F-01", area: "Cold Storage", category: "Insulin & vaksin", capacity: 80, used: 52 },
];

function ShelvesPage() {
  const { t } = useLang();
  return (
    <OwnerLayout title={t("app.nav.shelves")}>
      <Stack>
        <SectionHeader
          title="Rak penyimpanan"
          subtitle="Petakan lokasi fisik rak untuk pengambilan barang yang lebih cepat."
        />
        <Toolbar searchPlaceholder="Cari kode atau area rak…" primaryLabel="Tambah rak" />
        <TableCard>
          <thead>
            <tr>
              <Th>Kode</Th>
              <Th>Area</Th>
              <Th>Kategori utama</Th>
              <Th className="text-right">Kapasitas</Th>
              <Th>Pemanfaatan</Th>
              <Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {shelves.map((s) => {
              const pct = Math.round((s.used / s.capacity) * 100);
              const tone = pct > 90 ? "bad" : pct > 75 ? "warn" : "good";
              return (
                <tr key={s.code} className="hover:bg-cream/30">
                  <Td className="font-mono text-xs">{s.code}</Td>
                  <Td className="font-medium">{s.area}</Td>
                  <Td>{s.category}</Td>
                  <Td className="text-right tabular-nums">
                    {s.used} / {s.capacity}
                  </Td>
                  <Td>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-32 overflow-hidden rounded-full bg-secondary">
                        <div
                          className={`h-full rounded-full ${
                            tone === "bad" ? "bg-destructive" : tone === "warn" ? "bg-amber-500" : "bg-emerald-500"
                          }`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="text-xs tabular-nums text-muted-foreground">{pct}%</span>
                    </div>
                  </Td>
                  <Td>
                    <Pill tone={tone as never}>{tone === "bad" ? "Penuh" : tone === "warn" ? "Hampir penuh" : "Aman"}</Pill>
                  </Td>
                </tr>
              );
            })}
          </tbody>
        </TableCard>
      </Stack>
    </OwnerLayout>
  );
}
