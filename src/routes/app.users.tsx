import { createFileRoute } from "@tanstack/react-router";
import { UserCog } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { Grid, Pill, SectionHeader, Stack, StatCard, TableCard, Td, Th, Toolbar } from "@/components/app/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/users")({
  head: () => ({ meta: [{ title: "Pengguna — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: UsersPage,
});

const users = [
  { name: "Sari Pratama", email: "sari@apotek.com", role: "Owner", branch: "Semua", lastActive: "Sekarang", status: "active" },
  { name: "Budi Santoso", email: "budi@apotek.com", role: "Apoteker", branch: "Cabang Pusat", lastActive: "5 mnt lalu", status: "active" },
  { name: "Dian Wulandari", email: "dian@apotek.com", role: "Apoteker", branch: "Cabang BSD", lastActive: "12 mnt lalu", status: "active" },
  { name: "Rizky Pratomo", email: "rizky@apotek.com", role: "Kasir", branch: "Cabang Pusat", lastActive: "1 jam lalu", status: "active" },
  { name: "Maya Sari", email: "maya@apotek.com", role: "Kasir", branch: "Cabang BSD", lastActive: "3 jam lalu", status: "active" },
  { name: "Andi Wijaya", email: "andi@apotek.com", role: "Asisten Apoteker", branch: "Cabang Pusat", lastActive: "2 hari lalu", status: "inactive" },
];

function UsersPage() {
  const { t } = useLang();
  return (
    <OwnerLayout title={t("app.nav.users")}>
      <Stack>
        <Grid cols={3}>
          <StatCard label="Total pengguna" value="12" icon={UserCog} />
          <StatCard label="Aktif hari ini" value="8" tone="good" />
          <StatCard label="Tertunda undangan" value="2" tone="warn" />
        </Grid>

        <SectionHeader title="Daftar pengguna" subtitle="Kelola siapa yang dapat masuk ke sistem dan apa perannya." />
        <Toolbar searchPlaceholder="Cari nama atau email…" primaryLabel="Undang pengguna" />

        <TableCard>
          <thead>
            <tr>
              <Th>Pengguna</Th>
              <Th>Peran</Th>
              <Th>Cabang</Th>
              <Th>Aktivitas terakhir</Th>
              <Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.email} className="hover:bg-cream/30">
                <Td>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/15 text-[11px] font-semibold text-brand">
                      {u.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                    </span>
                    <div>
                      <div className="font-medium">{u.name}</div>
                      <div className="text-xs text-muted-foreground">{u.email}</div>
                    </div>
                  </div>
                </Td>
                <Td>{u.role}</Td>
                <Td className="text-muted-foreground">{u.branch}</Td>
                <Td className="text-muted-foreground">{u.lastActive}</Td>
                <Td>
                  <Pill tone={u.status === "active" ? "good" : "default"}>
                    {u.status === "active" ? "Aktif" : "Nonaktif"}
                  </Pill>
                </Td>
              </tr>
            ))}
          </tbody>
        </TableCard>
      </Stack>
    </OwnerLayout>
  );
}
