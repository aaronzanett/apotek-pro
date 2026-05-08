import { createFileRoute } from "@tanstack/react-router";
import { Truck, Mail, Phone } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { Grid, Pill, SectionHeader, Stack, StatCard, TableCard, Td, Th, Toolbar } from "@/components/app/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/contact-suppliers")({
  head: () => ({ meta: [{ title: "Pemasok — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: SuppliersPage,
});

const rows = [
  { name: "PT Kimia Farma", pic: "Hendra", phone: "+62 21 7000 1100", email: "order@kimiafarma.co.id", terms: "Net 30", lead: "2 hari", rating: 4.7 },
  { name: "PT Kalbe Farma", pic: "Anita", phone: "+62 21 7000 2200", email: "order@kalbe.co.id", terms: "Net 30", lead: "1 hari", rating: 4.8 },
  { name: "PT Dexa Medica", pic: "Surya", phone: "+62 21 7000 3300", email: "po@dexamedica.com", terms: "Net 14", lead: "2 hari", rating: 4.6 },
  { name: "PT Sanbe Farma", pic: "Lina", phone: "+62 21 7000 4400", email: "po@sanbe.co.id", terms: "Net 30", lead: "3 hari", rating: 4.5 },
  { name: "PT Novo Nordisk", pic: "Karen", phone: "+62 21 7000 5500", email: "id-orders@novo.com", terms: "Net 45", lead: "5 hari", rating: 4.9 },
];

function SuppliersPage() {
  const { t } = useLang();
  return (
    <OwnerLayout title={t("app.nav.contactSuppliers")}>
      <Stack>
        <Grid cols={3}>
          <StatCard label="Total pemasok" value="28" icon={Truck} />
          <StatCard label="PO aktif" value="14" tone="info" />
          <StatCard label="Hutang terbuka" value="Rp 31,8 jt" tone="warn" />
        </Grid>

        <SectionHeader title="Pemasok" subtitle="Direktori distributor dan principal yang Anda gunakan." />
        <Toolbar searchPlaceholder="Cari nama pemasok…" primaryLabel="Tambah pemasok" />

        <TableCard>
          <thead>
            <tr>
              <Th>Pemasok</Th>
              <Th>PIC</Th>
              <Th>Kontak</Th>
              <Th>Termin</Th>
              <Th>Lead time</Th>
              <Th className="text-right">Rating</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.name} className="hover:bg-cream/30">
                <Td className="font-medium">{r.name}</Td>
                <Td>{r.pic}</Td>
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
                <Td>
                  <Pill tone="info">{r.terms}</Pill>
                </Td>
                <Td className="text-muted-foreground">{r.lead}</Td>
                <Td className="text-right tabular-nums font-medium">{r.rating} ★</Td>
              </tr>
            ))}
          </tbody>
        </TableCard>
      </Stack>
    </OwnerLayout>
  );
}
