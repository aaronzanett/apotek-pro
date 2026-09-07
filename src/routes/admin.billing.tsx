import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { AGrid, AStat, ATable, ATh, ATd, APill, ACard, ASectionHeader } from "@/components/admin/ui";
import { useLang, formatPrice } from "@/lib/i18n";

export const Route = createFileRoute("/admin/billing")({
  head: () => ({ meta: [{ title: "Tagihan — Konsol Admin" }, { name: "robots", content: "noindex" }] }),
  component: BillingPage,
});

const INVOICES = [
  { id: "INV-3892", tenant: "MediFarma Group", amount: 1290, issued: "2026-05-01", paid: "2026-05-02", status: "paid" },
  { id: "INV-3891", tenant: "Bumi Healthcare", amount: 693, issued: "2026-05-01", paid: "—", status: "past_due" },
  { id: "INV-3890", tenant: "Apotek Sehat Sentosa", amount: 396, issued: "2026-05-01", paid: "2026-05-01", status: "paid" },
  { id: "INV-3889", tenant: "Apotek Cendana", amount: 98, issued: "2026-05-01", paid: "2026-05-03", status: "paid" },
  { id: "INV-3888", tenant: "Farma Nusantara", amount: 49, issued: "2026-04-30", paid: "—", status: "open" },
];

function BillingPage() {
  const { t, lang } = useLang();
  return (
    <AdminLayout title={t("admin.page.billing.title")} subtitle={t("admin.page.billing.subtitle")}>
      <div className="space-y-6">
        <AGrid cols={4}>
          <AStat label="Collected this month" value={formatPrice(22480, lang)} tone="good" />
          <AStat label="Outstanding" value={formatPrice(742, lang)} tone="warn" />
          <AStat label="Failed payments" value="3" tone="bad" hint="Auto-retrying" />
          <AStat label="Avg days to pay" value="1.4" tone="info" />
        </AGrid>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <ACard className="lg:col-span-2">
            <ASectionHeader title="Recent invoices" subtitle="Latest billing cycle" />
            <div className="mt-4">
              <ATable>
                <thead>
                  <tr>
                    <ATh>Invoice</ATh>
                    <ATh>Tenant</ATh>
                    <ATh className="text-right">Amount</ATh>
                    <ATh>Issued</ATh>
                    <ATh>Paid</ATh>
                    <ATh>Status</ATh>
                  </tr>
                </thead>
                <tbody>
                  {INVOICES.map((i) => (
                    <tr key={i.id}>
                      <ATd className="font-mono text-xs text-foreground">{i.id}</ATd>
                      <ATd className="font-medium text-foreground">{i.tenant}</ATd>
                      <ATd className="text-right font-medium text-foreground">{formatPrice(i.amount, lang)}</ATd>
                      <ATd className="text-muted-foreground">{i.issued}</ATd>
                      <ATd className="text-muted-foreground">{i.paid}</ATd>
                      <ATd>
                        {i.status === "paid" && <APill tone="good">paid</APill>}
                        {i.status === "open" && <APill tone="info">open</APill>}
                        {i.status === "past_due" && <APill tone="bad">past due</APill>}
                      </ATd>
                    </tr>
                  ))}
                </tbody>
              </ATable>
            </div>
          </ACard>

          <ACard>
            <ASectionHeader title="Payment providers" />
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { name: "Stripe", state: "connected", tone: "good" as const },
                { name: "Xendit (ID)", state: "connected", tone: "good" as const },
                { name: "Midtrans", state: "needs review", tone: "warn" as const },
                { name: "Bank transfer", state: "manual", tone: "default" as const },
              ].map((p) => (
                <li key={p.name} className="flex items-center justify-between rounded-xl border border-border bg-cream/40 p-3">
                  <span className="font-medium text-foreground">{p.name}</span>
                  <APill tone={p.tone}>{p.state}</APill>
                </li>
              ))}
            </ul>
          </ACard>
        </div>
      </div>
    </AdminLayout>
  );
}
