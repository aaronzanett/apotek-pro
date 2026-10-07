import { createFileRoute } from "@tanstack/react-router";
import { Check, KeyRound, X } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { SectionHeader, Stack, TableCard, Td, Th, Toolbar } from "@/components/app/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/roles")({
  head: () => ({ meta: [{ name: "description", content: "Manage roles & permissions with Apotek Pro by Zanscode." }, { property: "og:title", content: "Roles & Permissions — Apotek Pro" }, { property: "og:description", content: "Manage roles & permissions with Apotek Pro by Zanscode." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { title: "Roles & Permissions — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: RolesPage,
});

const roles = ["Owner", "Apoteker", "Kasir", "Asisten"] as const;
const matrix = [
  { module: "Kasir (POS)", perms: [true, true, true, false] },
  { module: "Resep", perms: [true, true, false, true] },
  { module: "Inventaris", perms: [true, true, false, true] },
  { module: "Pembelian", perms: [true, true, false, false] },
  { module: "Keuangan", perms: [true, false, false, false] },
  { module: "Pengguna & peran", perms: [true, false, false, false] },
  { module: "Outlet & pengaturan", perms: [true, false, false, false] },
  { module: "Laporan", perms: [true, true, false, false] },
];

function RolesPage() {
  const { t } = useLang();
  return (
    <OwnerLayout title={t("app.nav.roles")}>
      <Stack>
        <SectionHeader
          title="Peran & hak akses"
          subtitle="Tentukan modul apa saja yang bisa diakses oleh setiap peran."
          action={
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1.5 text-xs font-medium text-brand">
              <KeyRound className="h-3.5 w-3.5" />
              4 peran aktif
            </span>
          }
        />
        <Toolbar searchPlaceholder="Cari modul…" primaryLabel="Tambah peran" />

        <TableCard>
          <thead>
            <tr>
              <Th>Modul</Th>
              {roles.map((r) => (
                <Th key={r} className="text-center">
                  {r}
                </Th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matrix.map((row) => (
              <tr key={row.module} className="hover:bg-cream/30">
                <Td className="font-medium">{row.module}</Td>
                {row.perms.map((ok, i) => (
                  <Td key={i} className="text-center">
                    {ok ? (
                      <Check className="mx-auto h-4 w-4 text-emerald-600" />
                    ) : (
                      <X className="mx-auto h-4 w-4 text-muted-foreground/40" />
                    )}
                  </Td>
                ))}
              </tr>
            ))}
          </tbody>
        </TableCard>
      </Stack>
    </OwnerLayout>
  );
}
