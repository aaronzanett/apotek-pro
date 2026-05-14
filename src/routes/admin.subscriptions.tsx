import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { AGrid, AStat, ATable, ATh, ATd, APill } from "@/components/admin/ui";
import { useLang, formatPrice } from "@/lib/i18n";

export const Route = createFileRoute("/admin/subscriptions")({
  head: () => ({ meta: [{ title: "Langganan — Konsol Admin" }, { name: "robots", content: "noindex" }] }),
  component: SubsPage,
});

const SUBS = [
  { tenant: "MediFarma Group", plan: "Enterprise", seats: 64, branches: 12, mrr: 1290, renews: "2026-06-12", status: "active" },
  { tenant: "Apotek Sehat Sentosa", plan: "Growth (annual)", seats: 18, branches: 4, mrr: 396, renews: "2027-02-08", status: "active" },
  { tenant: "Farma Nusantara", plan: "Starter (trial)", seats: 3, branches: 1, mrr: 0, renews: "2026-05-15", status: "trial" },
  { tenant: "Bumi Healthcare", plan: "Growth (monthly)", seats: 33, branches: 7, mrr: 693, renews: "2026-05-19", status: "past_due" },
  { tenant: "Apotek Cendana", plan: "Starter (monthly)", seats: 7, branches: 2, mrr: 98, renews: "2026-05-22", status: "active" },
];

function SubsPage() {
  const { t, lang } = useLang();
  return (
    <AdminLayout title={t("admin.page.subs.title")} subtitle={t("admin.page.subs.subtitle")}>
      <div className="space-y-6">
        <AGrid cols={4}>
          <AStat label="MRR" value={formatPrice(24590, lang)} hint="+8.4% MoM" tone="good" />
          <AStat label="ARR" value={formatPrice(295080, lang)} tone="info" />
          <AStat label="Net new this month" value="+12" tone="good" />
          <AStat label="Churn 30d" value="1.2%" tone="warn" />
        </AGrid>

        <ATable>
          <thead>
            <tr>
              <ATh>Tenant</ATh>
              <ATh>Plan</ATh>
              <ATh className="text-right">Seats</ATh>
              <ATh className="text-right">Branches</ATh>
              <ATh className="text-right">MRR</ATh>
              <ATh>Renews</ATh>
              <ATh>Status</ATh>
            </tr>
          </thead>
          <tbody>
            {SUBS.map((s) => (
              <tr key={s.tenant}>
                <ATd className="font-medium text-white">{s.tenant}</ATd>
                <ATd>{s.plan}</ATd>
                <ATd className="text-right">{s.seats}</ATd>
                <ATd className="text-right">{s.branches}</ATd>
                <ATd className="text-right font-medium text-white">{formatPrice(s.mrr, lang)}</ATd>
                <ATd className="text-white/60">{s.renews}</ATd>
                <ATd>
                  {s.status === "active" && <APill tone="good">active</APill>}
                  {s.status === "trial" && <APill tone="info">trial</APill>}
                  {s.status === "past_due" && <APill tone="bad">past due</APill>}
                </ATd>
              </tr>
            ))}
          </tbody>
        </ATable>
      </div>
    </AdminLayout>
  );
}
