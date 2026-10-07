import { createFileRoute } from "@tanstack/react-router";
import { UserRound, Users, HeartPulse } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { Grid, Pill, SectionHeader, Stack, StatCard, TableCard, Td, Th, Toolbar } from "@/components/app/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/contact-customers")({
  head: () => ({ meta: [{ name: "description", content: "Manage customer contacts with Apotek Pro by Zanscode." }, { property: "og:title", content: "Customer Contacts — Apotek Pro" }, { property: "og:description", content: "Manage customer contacts with Apotek Pro by Zanscode." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { title: "Customer Contacts — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: CustomersPage,
});

const rows = [
  { name: "Ahmad Hidayat", phone: "+62 812 9000 0001", type: "Pribadi", visits: 18, last: "2026-05-07", chronic: ["Hipertensi"] },
  { name: "Siti Nurhaliza", phone: "+62 812 9000 0002", type: "Pribadi", visits: 32, last: "2026-05-08", chronic: ["Diabetes", "Kolesterol"] },
  { name: "Klinik Sehat Sentosa", phone: "+62 21 7800 4500", type: "Korporat", visits: 64, last: "2026-05-08", chronic: [] },
  { name: "RS Mitra Medika", phone: "+62 21 7800 8800", type: "Korporat", visits: 142, last: "2026-05-08", chronic: [] },
  { name: "Maria Christine", phone: "+62 813 4400 1100", type: "Pribadi", visits: 8, last: "2026-05-04", chronic: ["Asma"] },
  { name: "Joko Susilo", phone: "+62 815 7700 2200", type: "Pribadi", visits: 4, last: "2026-04-29", chronic: [] },
];

function CustomersPage() {
  const { t } = useLang();
  return (
    <OwnerLayout title={t("app.nav.customers")}>
      <Stack>
        <Grid cols={3}>
          <StatCard label="Total pelanggan" value="1.482" icon={UserRound} />
          <StatCard label="Aktif 30 hari" value="412" tone="good" icon={Users} />
          <StatCard label="Dengan riwayat kronis" value="186" tone="info" icon={HeartPulse} />
        </Grid>

        <SectionHeader
          title="Pelanggan"
          subtitle="Profil pelanggan dan riwayat untuk pelayanan yang lebih personal."
        />
        <Toolbar searchPlaceholder="Cari nama atau nomor telepon…" primaryLabel="Tambah pelanggan" />

        <TableCard>
          <thead>
            <tr>
              <Th>Nama</Th>
              <Th>Tipe</Th>
              <Th>Telepon</Th>
              <Th className="text-right">Kunjungan</Th>
              <Th>Kunjungan terakhir</Th>
              <Th>Catatan medis</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.name} className="hover:bg-cream/30">
                <Td className="font-medium">{r.name}</Td>
                <Td>
                  <Pill tone={r.type === "Korporat" ? "info" : "default"}>{r.type}</Pill>
                </Td>
                <Td className="text-muted-foreground">{r.phone}</Td>
                <Td className="text-right tabular-nums">{r.visits}</Td>
                <Td className="tabular-nums text-muted-foreground">{r.last}</Td>
                <Td>
                  {r.chronic.length === 0 ? (
                    <span className="text-xs text-muted-foreground">—</span>
                  ) : (
                    <div className="flex flex-wrap gap-1">
                      {r.chronic.map((c) => (
                        <Pill key={c} tone="warn">
                          {c}
                        </Pill>
                      ))}
                    </div>
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
