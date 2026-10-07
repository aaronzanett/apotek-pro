import { createFileRoute } from "@tanstack/react-router";
import { Contact, Mail, Phone } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { Grid, Pill, SectionHeader, Stack, StatCard, TableCard, Td, Th, Toolbar } from "@/components/app/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/contact-employees")({
  head: () => ({ meta: [{ name: "description", content: "Manage employee contacts with Apotek Pro by Zanscode." }, { property: "og:title", content: "Employee Contacts — Apotek Pro" }, { property: "og:description", content: "Manage employee contacts with Apotek Pro by Zanscode." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { title: "Employee Contacts — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: EmployeesPage,
});

const rows = [
  { name: "Budi Santoso", role: "Apoteker Penanggung Jawab", phone: "+62 812 1111 0001", email: "budi@apotek.com", branch: "Cabang Pusat", join: "2022-04-12" },
  { name: "Dian Wulandari", role: "Apoteker", phone: "+62 812 1111 0002", email: "dian@apotek.com", branch: "Cabang BSD", join: "2023-01-09" },
  { name: "Rizky Pratomo", role: "Kasir", phone: "+62 813 2222 0001", email: "rizky@apotek.com", branch: "Cabang Pusat", join: "2024-06-20" },
  { name: "Maya Sari", role: "Kasir", phone: "+62 813 2222 0002", email: "maya@apotek.com", branch: "Cabang BSD", join: "2024-08-15" },
  { name: "Andi Wijaya", role: "Asisten Apoteker", phone: "+62 815 3333 0001", email: "andi@apotek.com", branch: "Cabang Pusat", join: "2023-11-03" },
];

function EmployeesPage() {
  const { t } = useLang();
  return (
    <OwnerLayout title={t("app.nav.employees")}>
      <Stack>
        <Grid cols={3}>
          <StatCard label="Total karyawan" value="11" icon={Contact} />
          <StatCard label="Aktif" value="10" tone="good" />
          <StatCard label="Apoteker SIPA" value="3" hint="izin praktik aktif" tone="info" />
        </Grid>

        <SectionHeader title="Karyawan apotek" subtitle="Direktori kontak dan penempatan tim Anda." />
        <Toolbar searchPlaceholder="Cari nama atau peran…" primaryLabel="Tambah karyawan" />

        <TableCard>
          <thead>
            <tr>
              <Th>Nama</Th>
              <Th>Posisi</Th>
              <Th>Cabang</Th>
              <Th>Kontak</Th>
              <Th>Bergabung</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.email} className="hover:bg-cream/30">
                <Td className="font-medium">{r.name}</Td>
                <Td>
                  <Pill tone="info">{r.role}</Pill>
                </Td>
                <Td className="text-muted-foreground">{r.branch}</Td>
                <Td>
                  <div className="flex flex-col gap-0.5 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Phone className="h-3 w-3" />
                      {r.phone}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Mail className="h-3 w-3" />
                      {r.email}
                    </span>
                  </div>
                </Td>
                <Td className="tabular-nums text-muted-foreground">{r.join}</Td>
              </tr>
            ))}
          </tbody>
        </TableCard>
      </Stack>
    </OwnerLayout>
  );
}
