import { createFileRoute } from "@tanstack/react-router";
import { Banknote, CreditCard, QrCode, Wallet } from "lucide-react";
import { OwnerLayout } from "@/components/app/OwnerLayout";
import { Pill, SectionHeader, Stack, TableCard, Td, Th, Toolbar } from "@/components/app/ui";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/app/payment-methods")({
  head: () => ({ meta: [{ title: "Metode Pembayaran — Apotek Pro" }, { name: "robots", content: "noindex" }] }),
  component: PaymentsPage,
});

const methods = [
  { name: "Tunai", type: "Kas", fee: "0%", icon: Banknote, active: true },
  { name: "QRIS", type: "Digital", fee: "0,7%", icon: QrCode, active: true },
  { name: "Kartu debit", type: "EDC", fee: "0,15%", icon: CreditCard, active: true },
  { name: "Kartu kredit", type: "EDC", fee: "1,5%", icon: CreditCard, active: true },
  { name: "GoPay", type: "E-wallet", fee: "0,7%", icon: Wallet, active: true },
  { name: "OVO", type: "E-wallet", fee: "0,7%", icon: Wallet, active: true },
  { name: "BPJS", type: "Asuransi", fee: "—", icon: CreditCard, active: true },
  { name: "Asuransi swasta", type: "Asuransi", fee: "—", icon: CreditCard, active: false },
];

function PaymentsPage() {
  const { t } = useLang();
  return (
    <OwnerLayout title={t("app.nav.paymentMethods")}>
      <Stack>
        <SectionHeader
          title="Metode pembayaran"
          subtitle="Aktifkan opsi yang ingin diterima di POS dan atur biaya per metode."
        />
        <Toolbar searchPlaceholder="Cari metode…" primaryLabel="Tambah metode" />
        <TableCard>
          <thead>
            <tr>
              <Th>Metode</Th>
              <Th>Tipe</Th>
              <Th className="text-right">Biaya transaksi</Th>
              <Th>Status</Th>
              <Th>Tampil di POS</Th>
            </tr>
          </thead>
          <tbody>
            {methods.map((m) => {
              const Icon = m.icon;
              return (
                <tr key={m.name} className="hover:bg-cream/30">
                  <Td className="font-medium">
                    <span className="inline-flex items-center gap-2">
                      <Icon className="h-4 w-4 text-muted-foreground" />
                      {m.name}
                    </span>
                  </Td>
                  <Td>{m.type}</Td>
                  <Td className="text-right tabular-nums">{m.fee}</Td>
                  <Td>
                    <Pill tone={m.active ? "good" : "default"}>{m.active ? "Aktif" : "Nonaktif"}</Pill>
                  </Td>
                  <Td>
                    <span
                      className={`inline-flex h-5 w-9 items-center rounded-full p-0.5 ${
                        m.active ? "bg-brand" : "bg-secondary"
                      }`}
                    >
                      <span
                        className={`h-4 w-4 rounded-full bg-background transition-transform ${
                          m.active ? "translate-x-4" : ""
                        }`}
                      />
                    </span>
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
